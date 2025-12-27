import React from 'react'
import UserSection from '@/components/users/UserSection'
const page = () => {
  return (
    <div className='wrapper'>
         <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">User Management</h2>
        <p className="text-sm text-gray-500 mt-1">Manage all users and their permissions</p>
      </div>
      <UserSection/>
    </div>
  )
}

export default page
