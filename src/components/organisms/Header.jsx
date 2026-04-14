import { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { LogIn, ChevronDown, Menu, X } from "lucide-react";
import LanguageSwitcher from "../molecules/LanguageSwitcher";
import logoSq from "../../assets/img/logoSq.png";

const HEADER_H = 64;

const NavDropdown = ({ label, links, isActive }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 group"
        style={{ color: isActive ? "#C4973A" : "rgba(255,255,255,0.85)" }}
      >
        <span className="group-hover:text-white transition-colors duration-200">{label}</span>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={14} />
        </motion.span>
        {/* Gold underline */}
        <span
          className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full transition-all duration-300"
          style={{ background: "#C4973A", transform: isActive || open ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left" }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className="absolute top-full left-0 mt-2 min-w-[180px] rounded-xl overflow-hidden z-50"
            style={{
              background: "#fff",
              boxShadow: "0 8px 32px rgba(26,63,160,0.18), 0 2px 8px rgba(0,0,0,0.08)",
              border: "1px solid rgba(26,63,160,0.1)",
            }}
          >
            {links.map(({ to, label: linkLabel }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium transition-all duration-150 group/item"
                style={{ color: "#1A3FA0" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1A3FA0";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#1A3FA0";
                }}
              >
                {linkLabel}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavLink = ({ to, children, isActive }) => (
  <Link
    to={to}
    className="relative px-3 py-1.5 text-sm font-semibold rounded-lg transition-colors duration-200"
    style={{ color: isActive ? "#C4973A" : "rgba(255,255,255,0.85)" }}
    onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "#fff"; }}
    onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
  >
    {children}
    <span
      className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
      style={{
        background: "#C4973A",
        transform: isActive ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.3s",
      }}
    />
  </Link>
);

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const infoLinks = [
    { to: "/info/applicant", label: t("info.applicant") },
    { to: "/info/docs",      label: t("info.docs") },
  ];
  const plitLinks = [
    { to: "/plit/about",    label: t("plit.about") },
    { to: "/plit/teachers", label: t("header.staff") },
  ];

  const isInfo  = location.pathname.startsWith("/info");
  const isPlit  = location.pathname.startsWith("/plit");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          boxShadow: scrolled
            ? "0 4px 24px rgba(26,63,160,0.25)"
            : "0 1px 0 rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.3 }}
        style={{ background: "#1A3FA0", height: HEADER_H }}
      >
        <div className="max-w-7xl mx-auto h-full px-4 flex items-center justify-between gap-4">

          {/* ── LOGO ── */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div
              className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
              style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.2)" }}
            >
              <img src={logoSq} alt={t("header.logoAlt")} className="w-full h-full object-cover" />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-white font-bold text-sm tracking-wide">ПЛИТ №99</p>
              <p className="text-xs" style={{ color: "#C4973A" }}>при Президенте Кыргызской Республики</p>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" isActive={location.pathname === "/"}>{t("header.home")}</NavLink>
            <NavLink to="/courses" isActive={location.pathname === "/courses"}>{t("header.course")}</NavLink>
            <NavDropdown label={t("header.info")} links={infoLinks} isActive={isInfo} />
            <NavDropdown label={t("header.plit")} links={plitLinks} isActive={isPlit} />
            <NavLink to="/news" isActive={location.pathname.startsWith("/news")}>{t("header.news")}</NavLink>
          </nav>

          {/* ── RIGHT ACTIONS ── */}
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Link
              to="/admin/sign"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200"
              style={{
                background: "rgba(196,151,58,0.15)",
                color: "#C4973A",
                border: "1px solid rgba(196,151,58,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#C4973A";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(196,151,58,0.15)";
                e.currentTarget.style.color = "#C4973A";
              }}
            >
              <LogIn size={14} />
              <span className="hidden lg:inline">{t("header.admin")}</span>
            </Link>

            {/* Mobile burger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-200"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Spacer */}
      <div style={{ height: HEADER_H }} />

      {/* ── MOBILE MENU ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed z-40 left-0 right-0 overflow-y-auto"
            style={{
              top: HEADER_H,
              maxHeight: `calc(100svh - ${HEADER_H}px)`,
              background: "#1535A0",
              boxShadow: "0 12px 40px rgba(26,63,160,0.3)",
            }}
          >
            <div className="flex flex-col px-4 py-3 gap-1">
              {[
                { to: "/", label: t("header.home") },
                { to: "/courses", label: t("header.course") },
                { to: "/news", label: t("header.news") },
                ...infoLinks,
                ...plitLinks,
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-150"
                  style={{
                    color: location.pathname === to ? "#C4973A" : "rgba(255,255,255,0.85)",
                    background: location.pathname === to ? "rgba(196,151,58,0.1)" : "transparent",
                  }}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/admin/sign"
                className="mt-1 mx-1 mb-2 px-4 py-2.5 rounded-xl text-sm font-bold text-center"
                style={{ background: "rgba(196,151,58,0.15)", color: "#C4973A", border: "1px solid rgba(196,151,58,0.25)" }}
              >
                {t("header.admin")}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
