import { useAdminStore } from "./useAdminStore";
import AdminSidebar from "./AdminSidebar";
import { Outlet, useLocation, Link } from "react-router-dom";
import { Menu } from "lucide-react";

const breadcrumbs = {
  "/admin/main":       "Дашборд",
  "/admin/news":       "Новости",
  "/admin/courses":    "Курсы",
  "/admin/npa":        "НПА",
  "/admin/teachersad": "Коллектив",
  "/admin/about":      "О лицее",
};

export default function Layout() {
  const { isOpen, openPanel, closePanel } = useAdminStore();
  const location = useLocation();
  const title = breadcrumbs[location.pathname] || "Админ-панель";

  return (
    <div className="flex min-h-screen" style={{ background: "#F0F4FF" }}>
      <AdminSidebar />

      {/* Основной контент — отступ слева только на md+ */}
      <div
        className="flex-1 flex flex-col min-w-0 transition-all duration-300"
        style={{ marginLeft: isOpen ? 220 : 64 }}
      >
        {/* Топ-бар */}
        <header
          className="sticky top-0 z-40 flex items-center justify-between px-4 sm:px-6 md:px-8 py-3 sm:py-4"
          style={{
            background: "#fff",
            borderBottom: "1px solid #1A3FA011",
            boxShadow: "0 2px 12px rgba(26,63,160,0.05)",
          }}
        >
          <div className="flex items-center gap-3">
            {/* Мобильный бургер */}
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-colors"
              style={{ background: "#F0F4FF", color: "#1A3FA0" }}
              onClick={() => isOpen ? closePanel() : openPanel()}
            >
              <Menu size={18} />
            </button>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest hidden sm:block" style={{ color: "#C4973A" }}>
                Панель управления
              </p>
              <h1 className="text-base sm:text-xl font-bold" style={{ color: "#1A3FA0" }}>{title}</h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              target="_blank"
              className="hidden sm:flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 hover:scale-105"
              style={{ background: "#1A3FA011", color: "#1A3FA0", border: "1px solid #1A3FA022" }}
            >
              🌐 Сайт
            </Link>
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm"
              style={{ background: "linear-gradient(135deg, #1A3FA0, #1535A0)" }}
            >
              А
            </div>
          </div>
        </header>

        {/* Контент */}
        <main className="flex-1 p-3 sm:p-5 md:p-4 sm:p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
