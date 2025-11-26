import React, { useState, useEffect } from 'react';
import { UserContext } from './user.context'; 
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from localStorage on app start
  useEffect(() => {
  const loadUser=()=>{
      const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
        setLoading(false);

  }
    loadUser();
  }, []);

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser, logout,loading }}>
      {children}
    </UserContext.Provider>
  );
};