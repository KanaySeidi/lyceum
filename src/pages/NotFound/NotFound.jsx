import React from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] flex flex-col items-center justify-center text-white font-sans text-center px-4" style={{ background: "linear-gradient(135deg, #1A3FA0 0%, #0F2E8F 100%)" }}>
      <img
        src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
        alt="404"
        className="h-40 sm:h-[240px] md:h-[300px] mb-5"
      />
      <span className="text-4xl sm:text-6xl font-extrabold mb-4 sm:mb-6">404</span>
      <p className="text-base sm:text-xl mb-4">{t("notFound.message")}</p>
      <a
        href="/"
        className="bg-white text-[#1A3FA0] text-base sm:text-xl font-extrabold py-3 px-5 sm:px-8 rounded-full shadow-[0_20px_70px_4px_rgba(255,255,255,0.1)] hover:translate-y-[-4px] sm:hover:translate-y-[-10px] hover:shadow-[0_35px_90px_4px_rgba(255,255,255,0.3),inset_0_0_0_3px_white] transition-transform duration-300 ease-in-out"
      >
        {t("notFound.returnHome")}
      </a>
    </div>
  );
};

export default NotFound;
