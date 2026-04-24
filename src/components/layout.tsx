
import { Outlet } from 'react-router-dom';
import { ScrollToTop } from './ScrollToTop';
import Navbar from './navbar';
import { Footer } from './footer';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-white font-body text-nzx-dark flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};
