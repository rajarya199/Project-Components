import React,{useState,useContext} from 'react'
import { UserContext } from '../context/user.context';
import { useNavigate } from "react-router-dom";
import API from '../api/axios';
const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
      const [form, setForm] = useState({ 
        email: "",
         password: "" 
        });
    const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res=await API.post('/login',form)
        // Save token & user
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      setUser(res.data.user);

      navigate("/");
    }
    catch(error){
      console.error("Login failed:", error);
    }

   
  };
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-10">
    <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
      >
        Login
      </button>
    </form>
    <p className="mt-4 text-center">
      Don't have an account?{' '}
      <a href="/register" className="text-blue-500 hover:underline">
        Register here
      </a>
    </p>
  </div>
</div>

      
    </>
  )
}

export default Login
