import { NextResponse } from "next/server";
import User from "@/model/user.model";
import { connectToDatabase } from "@/lib/dbConfig";
import { auth } from "@clerk/nextjs/server";

export async function GET() {
  try {
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

    // 3️⃣ Fetch users
    await connectToDatabase();
    const users = await User.find().sort({ createdAt: -1 });

    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching users:", error);

    return NextResponse.json(
      { success: false, error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
