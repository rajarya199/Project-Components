import React from 'react'
import axios from "axios"
import { useState } from "react"
import { MoreHorizontal, Trash, Shield, ShieldOff } from "lucide-react"
import { AdminUser } from "@/types"
interface Props {
  user: AdminUser
  onUpdated: (user: AdminUser) => void
  onDeleted: (id: string) => void
}
const AdminUserAction = ({user,onUpdated,onDeleted}:Props) => {
    const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const changeRole=async(role:"admin"|"user")=>{
    try{
        setLoading(true)
           const res = await axios.patch(
        `/api/admin/users/${user._id}/role`,
        { role }
      )
       if (res.data.success) {
        onUpdated(res.data.data)
      }
    }
    catch(error){
              alert("Failed to update role")
              console.error("Failed to update role:", error)

    }finally{
        setLoading(false)
        setOpen(false)
    }
  }

    const deleteUser = async () => {
    const ok = confirm(`Delete ${user.email}?`)
    if (!ok) return

    try {
      setLoading(true)
      await axios.delete(`/api/admin/users/${user._id}`)
      onDeleted(user._id)
    } catch (error) {
        console.error("Failed to delete user:", error)
      alert("Failed to delete user")
    } finally {
      setLoading(false)
      setOpen(false)
    }
  }
    return (
    <div className='relative'>
           <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md hover:bg-gray-100"
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>

          {open && (
        <div className="absolute right-0 z-10 mt-2 w-44 rounded-md border bg-white shadow-lg">
          <button
            disabled={loading}
            onClick={() =>
              changeRole(user.role === "admin" ? "user" : "admin")
            }
            className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50"
          >
            {user.role === "admin" ? (
              <>
                <ShieldOff className="w-4 h-4" />
                Make User
              </>
            ) : (
              <>
                <Shield className="w-4 h-4" />
                Make Admin
              </>
            )}
          </button>

          <button
            disabled={loading}
            onClick={deleteUser}
            className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <Trash className="w-4 h-4" />
            Delete User
          </button>
        </div>
      )}
    </div>
  )
}

export default AdminUserAction
