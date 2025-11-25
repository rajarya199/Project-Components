import React,{useState} from 'react'

const Register = () => {
     const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: ""
  });
    const handleSubmit = async (e) => {
    e.preventDefault();

   
  };
  return (
<div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-10">
    <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        placeholder="Full Name"
        value={form.fullname}
        onChange={(e) => setForm({ ...form, fullname: e.target.value })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
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
        Register
      </button>
    </form>
    <p className="mt-4 text-center text-sm text-gray-600">
      Already have an account?{' '}
      <a href="/login" className="text-blue-500 hover:underline">
        Login here
      </a>
    </p>
  </div>
</div>



  )
}

export default Register
