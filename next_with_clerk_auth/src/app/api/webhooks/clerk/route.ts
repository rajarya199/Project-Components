import { clerkClient} from '@clerk/nextjs/server'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { createUser } from '@/app/actions/users.action'
import { NextResponse,NextRequest } from 'next/server'
import type { UserJSON } from '@clerk/nextjs/server'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
   

if(eventType==='user.created'){
    const user=evt.data as UserJSON
    const newUser=await createUser(user)
    if(newUser){
        const client= await clerkClient()
         await client.users.updateUser(user.id,{
            publicMetadata:{
                userId:newUser.id,
                userRole:newUser.role,
            }
        })
    }
    return NextResponse.json({ success: true })

}

 console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    // console.log('Webhook payload:', evt.data)
    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}