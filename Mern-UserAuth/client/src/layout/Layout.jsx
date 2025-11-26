import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
const Layout = () => {
  return (
    <div className="w-full min-h-screen  bg-white">
      <Navbar/>
        <Outlet />
        <Footer/>
    </div>

  );
};

export default Layout;