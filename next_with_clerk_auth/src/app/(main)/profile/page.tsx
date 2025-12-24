"use client"
import React from 'react'
import { useUser } from "@clerk/nextjs"
import Image from "next/image"
import { Calendar, Mail, ShieldCheck, User, Crown } from "lucide-react"
const Profile = () => {
      const { user, isLoaded } = useUser()
        const userRole:string = user?.publicMetadata?.userRole as string

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-slate-500">Loading profile...</p>
      </div>
    )
  }
  return (
    <section className='max-w-5xl mx-auto px-5 py-10'>
         <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
        <Image
          src={user?.imageUrl || ""}
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full border shadow-md"
        />

        <div className="flex-1">
           <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
              {user?.firstName} {user?.lastName}
            </h1>
            <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${
              userRole === 'admin' 
                ? 'bg-yellow-100 text-yellow-800' 
                : 'bg-blue-100 text-blue-800'
            }`}>
              {userRole === 'admin' ? <Crown size={14} /> : <User size={14} />}
              {userRole.charAt(0).toUpperCase() + userRole.slice(1)}
            </span>
          </div>
          {/* <p className="text-slate-600">@{user?.username}</p> */}
                    <p className="text-slate-600">@{user?.emailAddresses[0]?.emailAddress}</p>

        </div>

      </div>
       <div className="grid md:grid-cols-2 gap-6">
        {/* Personal Info */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <User size={18} /> Personal Information
          </h2>

          <ul className="space-y-3 text-slate-700">
             <li className="flex items-center gap-2">
              <User size={16} />
              {user?.firstName} {user?.lastName}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              {user?.primaryEmailAddress?.emailAddress}
            </li>

            <li className="flex items-center gap-2">
              <Calendar size={16} />
              Joined on{" "}
              {new Date(user?.createdAt || "").toDateString()}
            </li>

            {/* <li className="flex items-center gap-2">
              <ShieldCheck size={16} />
              User ID: {user?.id}
            </li> */}
          </ul>
        </div>

        {/* Account Status */}
        <div className="bg-white border rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <ShieldCheck size={18} /> Account Status
          </h2>

          <ul className="space-y-3 text-slate-700">
            <li>
              Email Verified:{" "}
              <span className="font-medium text-green-600">
                Yes
              </span>
            </li>

            <li>
              Two-Factor Auth:{" "}
              <span className="font-medium text-slate-500">
                {user?.twoFactorEnabled ? "Enabled" : "Not Enabled"}
              </span>
            </li>

            <li>
              Last Sign In:{" "}
              {new Date(
                user?.lastSignInAt || ""
              ).toLocaleString()}
            </li>
          </ul>
        </div>
      </div>

      {/* Future Section */}
      <div className="mt-10 bg-slate-50 border rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-3">
          🚀 Coming Soon
        </h2>
        <ul className="list-disc ml-5 text-slate-600 space-y-1">
          <li>Edit profile details</li>
          <li>View events</li>
          <li>Manage notification preferences</li>
          <li>Delete account</li>
        </ul>
      </div>


    </section>
  )
}

export default Profile
