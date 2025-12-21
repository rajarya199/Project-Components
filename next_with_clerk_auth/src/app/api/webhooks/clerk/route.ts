import { clerkClient} from '@clerk/nextjs/server'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { createUser, updateUser } from '@/app/actions/users.action'
import { NextResponse,NextRequest } from 'next/server'
import type { UserJSON } from '@clerk/nextjs/server'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
   
 console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    // console.log('Webhook payload:', evt.data)
if(eventType==='user.created'){
    const user=evt.data as UserJSON
    const newUser=await createUser(user)
    if(newUser.success){
      try{
          const client= await clerkClient()
         await client.users.updateUser(user.id,{
            publicMetadata:{
                userDbId:newUser.data.id,
                userRole:newUser.data.role,
            }
        })
                  console.log('🔄 Clerk metadata updated:', user.id)

      }
      catch(error){
          console.error('❌ Clerk metadata update failed:', error)

      }
    }
    return NextResponse.json({ success: true })

}

if(eventType==='user.updated'){
  const user=evt.data as UserJSON
  try{
    const updatedUser=await updateUser(evt.data.id,user)
        return NextResponse.json({ success: updatedUser.success })

  }
  catch(error){
      console.error('Error updating user:', error);

  }
}
    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}