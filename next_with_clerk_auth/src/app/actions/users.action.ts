import { revalidatePath } from 'next/cache'
import type { UserJSON } from '@clerk/nextjs/server'

import { connectToDatabase } from '@/lib/dbConfig'
import User from '@/model/user.model'
export async function createUser(user: UserJSON) {
try{
      await connectToDatabase()
   const existingUser = await User.findOne({ clerkId: user.id })
    if (existingUser) {
      throw new Error(`User already exists: ${existingUser._id}`)
    }
  const newUser =await User.create({
    clerkId: user.id,
    avatar:user.image_url,
    email: user.email_addresses[0].email_address,
    name: `${user.first_name} ${user.last_name}`,
  })
  revalidatePath('/')
  return newUser
}catch(error){
      console.error('❌ Error creating user from Clerk:', error)
    throw new Error('Failed to create user')
}
}

export async function updateUser(clerkId:string,user: UserJSON) {
  try{
await connectToDatabase()
  const existingUser = await User.findOne({ clerkId: clerkId })
    if (!existingUser) {
      console.error(`User with clerkId ${clerkId} not found`);
      throw new Error('User not found');
    }
    const updatedUser=await User.findOneAndUpdate({clerkId:clerkId},{
       email: user.email_addresses[0]?.email_address,
        name: `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim(),
        avatar: user.image_url,
    }, { new: true })
    return updatedUser
  }
  catch(error){
    console.error('❌ Error updating user from Clerk:', error)
  }
}