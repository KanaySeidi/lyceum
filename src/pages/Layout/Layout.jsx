import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import AdminSidebar from "../admin/adminSidebar/AdminSidebar";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const { pathname } = useLocation();

  const isAdminPath = pathname.includes("admin");

  const Navigate = useNavigate();

  const goHome = () => {
    Navigate("/");
  };

  return (
    <div>
      {isAdminPath ? <AdminSidebar /> : <Header />}
      <button
        className="fixed right-6 top-4 text-6xl text-white"
        onClick={goHome}
      >
        ×
      </button>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
{isAdminPath ? null : <Footer />}
    </div>
  );
};

export default Layout;
