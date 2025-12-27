import { NextResponse } from "next/server";
import User from "@/model/user.model";
import { connectToDatabase } from "@/lib/dbConfig";
import { auth,clerkClient } from "@clerk/nextjs/server";
interface userProps{
    params: Promise<{ id: string }>;

}
export async function DELETE(req:Request,{ params }: userProps){
    try{
          const { id } = await params;

        //auth check
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
      await connectToDatabase()
    const user = await User.findById(id)
    
    if (!user) {
      return NextResponse.json({ success: false, error: "User not found" }, { status: 404 })
    }
  // 1️⃣ Delete from Clerk
  const client = await clerkClient()
  await client.users.deleteUser(user.clerkId)

  //delete from db
    await User.findByIdAndDelete(id)
return NextResponse.json({success:true},{status:200})

    }
    catch(error){
        console.error("❌ Error deleting user :", error);
  return NextResponse.json(
          { success: false, error: "Failed to delete user" },
          { status: 500 }
        );
    }
}