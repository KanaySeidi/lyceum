import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";

const LANGUAGES = [
  { key: "KG", label: "Кыргызча" },
  { key: "RU", label: "Русский" },
];

const LanguageSwitcher = ({ showLabel = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const current = LANGUAGES.find((l) => l.key === i18n.language) ?? LANGUAGES[0];

  // Блокировка скролла при открытом дропдауне
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Закрытие по клику вне компонента
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const changeLanguage = (key) => {
    i18n.changeLanguage(key);
    localStorage.setItem("language", key);
    setIsOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex items-center gap-1.5 focus:outline-none group"
      >
        <Globe
          size={20}
          className="transition-colors duration-200 group-hover:text-gold"
        />
        {showLabel && (
          <span className="text-sm font-semibold">{current.key}</span>
        )}
      </button>

      {isOpen && (
        <div className="fixed z-[999] mt-2 w-36 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
          style={{
            top: ref.current
              ? ref.current.getBoundingClientRect().bottom + 8
              : 0,
            left: ref.current
              ? ref.current.getBoundingClientRect().left - 80
              : 0,
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.key}
              onClick={() => changeLanguage(lang.key)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
                current.key === lang.key
                  ? "bg-bordo text-white font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
