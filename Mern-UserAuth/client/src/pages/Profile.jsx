import React, { useContext,useEffect,useState } from "react";
import { UserContext } from "../context/user.context";
import { User as UserIcon } from "lucide-react";
import API from '../api/axios';
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const { user,setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);

  const navigate=useNavigate()
useEffect(()=>{
const fetchProfile=async()=>{
try{
  const res=await API.get('/profile')
  setUser(res.data.user)
}
catch(error){
  console.log("something went wrong:",error)
navigate('/login')
}finally{
        setLoading(false);

}
}
fetchProfile()
},[])
  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">My Profile</h1>

      <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">

        {/* Avatar Section */}
        <div className="flex items-center space-x-6 mb-8">
          {/* Avatar Circle */}
          <div className="w-20 h-20 rounded-full bg-slate-100 border flex items-center justify-center overflow-hidden shadow-sm">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <UserIcon className="w-10 h-10 text-slate-500" />
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {user?.fullname || "Guest User"}
            </h2>
            <p className="text-slate-600">{user?.email}</p>
          </div>
        </div>

        {/* Profile Information */}
        <div className="space-y-4">
          <div>
            <p className="text-sm text-slate-500">Full Name</p>
            <p className="text-lg font-medium text-slate-800">
              {user?.fullname || "N/A"}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Email Address</p>
            <p className="text-lg font-medium text-slate-800">
              {user?.email || "N/A"}
            </p>
          </div>

          <div className="pt-6">
            <button className="px-5 py-2.5 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
