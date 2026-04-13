import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import LanguageSwitcher from "../molecules/LanguageSwitcher";
import BurgerMenu from "../atoms/BurgerMenu";
import logoRu from "../../assets/icon/rus_logo.png";
import logoKg from "../../assets/icon/kg_logo.png";

// Popover для фиксированного хедера — панель всегда в DOM, видимость через CSS
const FixedPopover = ({ label, links, offsetClass, onToggle }) => (
  <Popover className="relative">
    {({ open, close }) => (
      <>
        <PopoverButton className="focus:outline-none" onClick={onToggle}>
          {label}
        </PopoverButton>
        <PopoverPanel
          className={`absolute ${offsetClass} mt-2 w-46 bg-[#63001F] text-white shadow-lg rounded-lg transition-opacity duration-300 ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="p-2 flex flex-col text-base">
            {links.map(({ to, label: linkLabel }) => (
              <Link
                key={to + linkLabel}
                onClick={() => close()}
                to={to}
                className="block px-3 py-2 hover:bg-gray-400 rounded"
              >
                {linkLabel}
              </Link>
            ))}
          </div>
        </PopoverPanel>
      </>
    )}
  </Popover>
);

// Popover для статичного/мобильного хедера — панель рендерится условно через isOpen
const StaticPopover = ({
  label,
  links,
  offsetClass,
  popoverClass,
  isOpen,
  onToggle,
}) => (
  <Popover className={popoverClass}>
    {({ open, close }) => (
      <>
        <PopoverButton className="focus:outline-none" onClick={onToggle}>
          {label}
        </PopoverButton>
        {isOpen && (
          <PopoverPanel
            className={`absolute ${offsetClass} mt-2 w-46 bg-white shadow-lg rounded-lg transition-opacity duration-300 ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <div className="p-2 flex flex-col">
              {links.map(({ to, label: linkLabel }) => (
                <Link
                  key={to + linkLabel}
                  onClick={() => close()}
                  to={to}
                  className="block px-3 py-2 hover:bg-[#63001F] hover:text-white rounded"
                >
                  {linkLabel}
                </Link>
              ))}
            </div>
          </PopoverPanel>
        )}
      </>
    )}
  </Popover>
);

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isScroll, setIsScroll] = useState(false);
  const [isKG, setIsKy] = useState(i18n.language === "KG");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const infoLinks = [
    { to: "/info/applicant", label: t("info.applicant") },
    { to: "/info/docs", label: t("info.docs") },
  ];

  const plitLinks = [
    { to: "/plit/about",     label: t("plit.about") },
    { to: "/plit/teachers",  label: "Коллектив" },
  ];

  const togglePopover = () => setIsPopoverOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setIsScroll(window.scrollY >= 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleLangChange = (lng) => setIsKy(lng === "KG");
    i18n.on("languageChanged", handleLangChange);
    return () => i18n.off("languageChanged", handleLangChange);
  }, [i18n]);

  useEffect(() => {
    setIsPopoverOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Плавающий логотип */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        <motion.img
          src={isKG ? logoKg : logoRu}
          alt="ПЛИТ"
          animate={{ height: isScroll ? 90 : 130 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-auto"
        />
      </div>

      {/* Единый фиксированный хедер */}
      <div className={`w-full h-14 fixed top-0 left-0 z-40 shadow-md transition-colors duration-500 ${
        isScroll ? "bg-[#63001F]" : "bg-white"
      }`}>
        <div className="w-11/12 mx-auto h-full">
          <div className={`h-full flex justify-between items-center transition-colors duration-500 ${
            isScroll ? "text-white" : "text-gray-800"
          }`}>

            <div className="flex justify-between gap-3 text-lg w-1/3 font-semibold">
              <Link to="/" className="hover:opacity-70 transition-opacity duration-200">{t("header.home")}</Link>
              <Link to="/courses" className="hover:opacity-70 transition-opacity duration-200">{t("header.course")}</Link>
              <FixedPopover
                label={t("header.info")}
                links={infoLinks}
                offsetClass="ml-[-22px]"
                onToggle={togglePopover}
              />
            </div>

            <div className="md:hidden flex w-1/3">
              <BurgerMenu
                isOpen={isMobileMenuOpen}
                toggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>

            <div className="flex justify-around items-center gap-3 text-lg w-1/3 font-semibold">
              <Link to="/news" className="hover:opacity-70 transition-opacity duration-200">{t("header.news")}</Link>
              <FixedPopover
                label={t("header.plit")}
                links={plitLinks}
                offsetClass="ml-[-60px]"
                onToggle={togglePopover}
              />
              <LanguageSwitcher />
              {location.pathname === "/" && (
                <Link to="/admin/sign" className="hover:opacity-70 transition-opacity duration-200">
                  <LogIn size={22} />
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Спейсер под фиксированный хедер */}
      <div className="h-14" />

      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-[#63001F] text-white z-30 flex flex-col items-start p-4 gap-3 text-lg shadow-lg">
          <Link to="/">{t("header.home")}</Link>
          <Link to="/courses">{t("header.course")}</Link>
          <Link to="/news">{t("header.news")}</Link>
          <StaticPopover
            label={t("header.info")}
            links={infoLinks}
            offsetClass="ml-[-20px]"
            popoverClass="relative z-50"
            isOpen={isPopoverOpen}
            onToggle={togglePopover}
          />
          <StaticPopover
            label={t("header.plit")}
            links={plitLinks}
            offsetClass="ml-[-60px]"
            popoverClass="relative z-50"
            isOpen={isPopoverOpen}
            onToggle={togglePopover}
          />
        </div>
      )}
    </>
  );
};

export default Header;
