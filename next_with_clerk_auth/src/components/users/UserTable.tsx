import React from "react";
import { MoreHorizontal } from "lucide-react";
import { AdminUser } from "@/types";
import AdminUserAction from "./AdminUserAction";

interface Props {
  users: AdminUser[]
  setUsers: React.Dispatch<React.SetStateAction<AdminUser[]>>
}

const UserTable = ({ users, setUsers }: Props) => {
  console.log("user data:",users)
  const handleUpdated = (updated: AdminUser) => {
    setUsers((prev) =>
      prev.map((u) => (u._id === updated._id ? updated : u))
    )
  }

 const handleDeleted = (id: string) => {
    setUsers((prev) => prev.filter((u) => u._id !== id))
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50 ">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500  uppercase tracking-wider">
              Created
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500  uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white  divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user._id} className="hover:bg-gray-50  transition-colors">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-medium text-sm">
                    {user.name?.charAt(0)?.toUpperCase() || "U"}
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900 ">
                      {user.name || "N/A"}
                    </div>
                    {/* <div className="text-sm text-gray-500 dark:text-gray-400 truncate max-w-32">
                      {user.clerkId.slice(0, 8)}...
                    </div> */}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900  max-w-64 truncate">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  user.role === "admin"
                    ? "bg-red-200 text-red-800"
                    : "bg-green-200 text-green-800 "
                }`}>
                  {user.role}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 ">
                {new Date(user.createdAt).toLocaleDateString()}
              </td>
                   <td className="px-6 py-4 text-right">
                <AdminUserAction
                  user={user}
                  onUpdated={handleUpdated}
                  onDeleted={handleDeleted}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {users.length === 0 && (
        <div className="text-center py-12 text-gray-500 ">
          No users found
        </div>
      )}
    </div>
  );
};

export default UserTable;
