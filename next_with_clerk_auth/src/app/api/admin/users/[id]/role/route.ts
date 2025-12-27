import { NextResponse } from "next/server";
import User from "@/model/user.model";
import { connectToDatabase } from "@/lib/dbConfig";
import { auth,clerkClient } from "@clerk/nextjs/server";

export async function PATCH( req: Request,
  { params }: { params: { id: string } }){
    try{
          // 1️ Auth check
    const { userId, sessionClaims } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    // 2️⃣ Role check
    const userRole = sessionClaims?.userRole as string | undefined;

    if (userRole !== "admin") {
      return NextResponse.json(
        { success: false, error: "Admin access required" },
        { status: 403 }
      );
    }

    // 3️⃣ update  users
    await connectToDatabase();
    //take user role from fe
      const { role } = await req.json()

  if (!["user", "admin"].includes(role)) {
    return NextResponse.json({ error: "Invalid role" }, { status: 400 })
  }

   const updatedUser = await User.findByIdAndUpdate(
    params.id,
    { role },
    { new: true }
  )
    if (!updatedUser) {
    return NextResponse.json({ error: "User not found" }, { status: 404 })
  }

    const client = await clerkClient()
await client.users.updateUser(updatedUser.clerkId,{
       publicMetadata: {
      userRole: role,
      userDbId: updatedUser._id.toString(),
    },
   
})
 return NextResponse.json({
        success:true,
        data:updatedUser
    },{status:200})
    }
    catch(error){
        console.error("❌ Error updating user role:", error);

        return NextResponse.json(
          { success: false, error: "Failed to update user role" },
          { status: 500 }
        );
    }
}