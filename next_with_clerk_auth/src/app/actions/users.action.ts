import { revalidatePath } from 'next/cache'
import type { UserJSON } from '@clerk/nextjs/server'

import { connectToDatabase } from '@/lib/dbConfig'
import User from '@/model/user.model'
export async function createUser(user: UserJSON) {
try{
      await connectToDatabase()
   const existingUser = await User.findOne({ clerkId: user.id })
    if (existingUser) return existingUser
  const newUser = new User({
    clerkId: user.id,
    avatar:user.image_url,
    email: user.email_addresses[0].email_address,
    name: `${user.first_name} ${user.last_name}`,
  })
  await newUser.save()
  revalidatePath('/')
  return newUser
}catch(error){
      console.error('❌ Error creating user from Clerk:', error)
    throw new Error('Failed to create user')
}
}