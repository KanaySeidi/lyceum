import { useAdminStore } from "./useAdminStore";
import AdminSidebar from "./AdminSidebar";
import { Outlet, useLocation, Link } from "react-router-dom";

const breadcrumbs = {
  "/admin/main":      "Дашборд",
  "/admin/news":      "Новости",
  "/admin/courses":   "Курсы",
  "/admin/npa":       "НПА",
  "/admin/teachersad":"Коллектив",
  "/admin/about":     "О лицее",
};

export default function Layout() {
  const { isOpen } = useAdminStore();
  const location = useLocation();
  const title = breadcrumbs[location.pathname] || "Админ-панель";

  return (
    <div className="flex min-h-screen" style={{ background: "#F8F2F4" }}>
      <AdminSidebar />

      <div
        className="flex-1 flex flex-col transition-all duration-300"
        style={{ marginLeft: isOpen ? 220 : 64 }}
      >
        {/* Топ-бар */}
        <header
          className="sticky top-0 z-40 flex items-center justify-between px-8 py-4"
          style={{
            background: "#fff",
            borderBottom: "1px solid #63001F11",
            boxShadow: "0 2px 12px rgba(99,0,31,0.05)",
          }}
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: "#C4973A" }}>
              Панель управления
            </p>
            <h1 className="text-xl font-bold" style={{ color: "#63001F" }}>{title}</h1>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{
                background: "#63001F11",
                color: "#63001F",
                border: "1px solid #63001F22",
              }}
            >
              🌐 Сайт
            </Link>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm"
              style={{ background: "linear-gradient(135deg, #63001F, #8B0032)" }}
            >
              А
            </div>
          </div>
        </header>

        {/* Контент */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
