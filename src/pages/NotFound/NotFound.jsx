import React from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-br bg-bordo z-[9999] flex flex-col items-center justify-center text-white font-sans text-center px-4">
      <img
        src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg"
        alt="404"
        className="h-[300px] mb-5"
      />
      <span className="text-6xl font-extrabold mb-6">404</span>
      <p className="text-xl mb-4">{t("notFound.message")}</p>
      <a
        href="/"
        className="bg-white text-bordo text-xl font-extrabold py-3 px-8 rounded-full shadow-[0_20px_70px_4px_rgba(255,255,255,0.1)] hover:translate-y-[-10px] hover:shadow-[0_35px_90px_4px_rgba(255,255,255,0.3),inset_0_0_0_3px_white] transition-transform duration-300 ease-in-out"
      >
        {t("notFound.returnHome")}
      </a>
    </div>
  );
};

export default NotFound;
