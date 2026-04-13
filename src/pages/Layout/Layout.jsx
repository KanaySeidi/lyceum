import { Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/organisms/Header";
import Footer from "../../components/organisms/Footer";
import AdminSidebar from "../admin/adminSidebar/AdminSidebar";

const Layout = () => {
  const { pathname } = useLocation();
  const isLoginPage = pathname === "/admin/sign";
  const isAdminPath = pathname.includes("admin") && !isLoginPage;

  return (
    <div>
      {isLoginPage ? null : isAdminPath ? <AdminSidebar /> : <Header />}
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
{!isAdminPath && !isLoginPage ? <Footer /> : null}
    </div>
  );
};

export default Layout;
