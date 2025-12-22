import { revalidatePath } from 'next/cache'
import type { UserJSON } from '@clerk/nextjs/server'

import { connectToDatabase } from '@/lib/dbConfig'
import User from '@/model/user.model'
export async function createUser(user: UserJSON) {
  try {
    await connectToDatabase()

    const dbUser = await User.findOneAndUpdate(
      { clerkId: user.id },
      {
        clerkId: user.id,
        email: user.email_addresses[0]?.email_address,
        name: `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim(),
        avatar: user.image_url,
      },
      {
        //createif not exits
        upsert: true,              // 🔐 prevents duplicates 
        new: true,
        setDefaultsOnInsert: true,
      }
    )

    return { success: true, data: dbUser }
  } catch (error) {
    console.error('❌ createUser failed:', error)
    return { success: false, error: 'Failed to create user' }
  }
}


export async function updateUser(user: UserJSON) {
  try{
await connectToDatabase()
  const existingUser = await User.findOne({ clerkId: user.id })
    if (!existingUser) {
      console.error(`User with clerkId ${user.id} not found`);
      throw new Error('User not found');
    }
    const updatedUser=await User.findOneAndUpdate({clerkId:user.id},{
       email: user.email_addresses[0]?.email_address,
        name: `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim(),
        avatar: user.image_url,
    }, { new: true })
        return { success: true, data: updatedUser };

  }
  catch(error){
    console.error('❌ Error updating user from Clerk:', error)
        return { success: false, error: error instanceof Error ? error.message : 'Update failed' };
  }
}

export async function deleteUser(clerkId: string) {
  try{
    await connectToDatabase()
      const existingUser = await User.findOne({ clerkId: clerkId })
    if (!existingUser) {
      console.error(`User with clerkId ${clerkId} not found`);
    }
      const deletedUser = await User.findOneAndDelete({ clerkId })
      return { success: true, data: deletedUser };
  }

  catch(error){
       console.error('❌ deleteUser failed:', error)
    return { success: false, error: 'Failed to delete user' }
  }
}