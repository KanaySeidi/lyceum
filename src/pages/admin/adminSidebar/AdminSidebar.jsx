import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAdminStore } from "./useAdminStore";
import logoSq from "../../../assets/img/logoSq.png";

const menuItems = [
  { icon: "📊", text: "Дашборд",   path: "/admin/main" },
  { icon: "📰", text: "Новости",   path: "/admin/news" },
  { icon: "📚", text: "Курсы",     path: "/admin/courses" },
  { icon: "⚖️", text: "НПА",       path: "/admin/npa" },
  { icon: "👥", text: "Коллектив", path: "/admin/teachersad" },
  { icon: "ℹ️", text: "О лицее",  path: "/admin/about" },
];

export default function AdminSidebar() {
  const { isOpen, openPanel, closePanel } = useAdminStore();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Overlay на мобиле */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={closePanel}
        />
      )}

      <div
        className="fixed top-0 left-0 h-screen flex flex-col justify-between z-50 transition-all duration-300"
        style={{
          width: isOpen ? 220 : 64,
          background: "linear-gradient(180deg, #1A3FA0 0%, #0F2E8F 100%)",
          boxShadow: "4px 0 24px rgba(26,63,160,0.25)",
          // На мобиле скрываем если не открыто
          transform: isOpen ? "translateX(0)" : undefined,
        }}
        onMouseEnter={() => window.innerWidth >= 768 && openPanel()}
        onMouseLeave={() => window.innerWidth >= 768 && closePanel()}
      >
        {/* Лого */}
        <div>
          <div
            className="flex items-center px-3 py-4 mb-2"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
          >
            <img src={logoSq} alt="ПЛИТ" className="w-9 h-9 object-contain flex-shrink-0" />
            <span
              className="ml-3 font-bold text-white text-sm whitespace-nowrap overflow-hidden transition-all duration-300"
              style={{ opacity: isOpen ? 1 : 0, maxWidth: isOpen ? 140 : 0 }}
            >
              Админ-панель
            </span>
          </div>

          {/* Меню */}
          <nav className="mt-2 space-y-1 px-2">
            {menuItems.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => window.innerWidth < 768 && closePanel()}
                  className="flex items-center gap-3 px-2 py-2.5 rounded-xl transition-all duration-200 group relative"
                  style={{
                    background: active ? "rgba(196,151,58,0.2)" : "transparent",
                    color: active ? "#C4973A" : "rgba(255,255,255,0.7)",
                  }}
                >
                  {active && (
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full"
                      style={{ background: "#C4973A" }}
                    />
                  )}
                  <span className="text-xl flex-shrink-0 ml-1">{item.icon}</span>
                  <span
                    className="text-sm font-semibold whitespace-nowrap overflow-hidden transition-all duration-300"
                    style={{ opacity: isOpen ? 1 : 0, maxWidth: isOpen ? 140 : 0 }}
                  >
                    {item.text}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Выход */}
        <div className="px-2 pb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <button
            onClick={() => navigate("/admin/sign")}
            className="flex items-center gap-3 px-2 py-2.5 rounded-xl w-full transition-all duration-200 mt-3"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            <span className="text-xl flex-shrink-0 ml-1">🚪</span>
            <span
              className="text-sm font-semibold whitespace-nowrap overflow-hidden transition-all duration-300"
              style={{ opacity: isOpen ? 1 : 0, maxWidth: isOpen ? 140 : 0 }}
            >
              Выйти
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
