"use client"
import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Search, Filter } from "lucide-react";
import { AdminUser } from '@/types';
import UserTable from './UserTable';
const UserSection = () => {
        const [searchQuery, setSearchQuery] = useState("");
          const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState<AdminUser[]>([])
useEffect(()=>{
  const fetchUsers=async()=>{
    try{
      setLoading(true)
const res=await axios.get('/api/admin/users')
if(res.data.success && res.data.data){
setUsers(res.data.data)
} else{
  console.error("failed to fetch users")
} 
    }
    catch(error){
      console.error("failed to fetch the user")
    }finally{
      setLoading(false)
    }
  }
  fetchUsers()
},[])

  const filteredUsers = users.filter(
    (user) =>
      user.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );
    if (loading) return <div className="p-8 text-center text-gray-500">Loading users...</div>;
  return (
    <div>
      <div className='p-4 border-b border-gray-100 flex items-center justify-between'>
        <div className='flex items-center space-x-4 flex-1'>
   <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border dark:border-grey-600 border-gray-400 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
             <button className="flex items-center px-4 py-2 text-gray-800  border border-gray-400 rounded-lg hover:bg-gray-50">
                                                     <Filter className="w-4 h-4 mr-2" />
                                                     Filter
                                                   </button>
        </div>

      </div>
<UserTable users={filteredUsers} setUsers={setUsers} />

    </div>
  )
}

export default UserSection
