import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />

      <main className="grow pt-16 md:pt-20">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;