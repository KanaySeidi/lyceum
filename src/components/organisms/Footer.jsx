import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import logoRu from "../../assets/icon/plitfootru.svg";
import logoKg from "../../assets/icon/plitfootkg.svg";

const Footer = () => {
  const { t, i18n } = useTranslation();

  // Выбираем логотип в зависимости от языка
  const currentLang = i18n.language;
  const logo = currentLang === "KG" ? logoKg : logoRu;

  const footerLinks = t("footer.pageslink", { returnObjects: true });
  const contact = t("footer.contacts", { returnObjects: true });
  const instagramUrl = t("footer.instagram");

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#63001F] text-white px-4 py-10 border-t"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center sm:text-left">
        {/* Логотип и описание */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-start sm:items-center text-left sm:text-center"
        >
          <img
            src={logo}
            alt={t("footer.logoAlt")}
            className="filter invert brightness-0 mb-4 w-48 sm:w-56 md:w-64 h-auto mx-auto"
          />
          <h3 className="font-semibold text-lg pl-2 sm:pl-0">
            {t("footer.title")}
          </h3>
          <p className="mt-2 text-sm pl-2 sm:pl-0 pr-2 text-justify">
            {t("footer.description")}
          </p>
        </motion.div>

        {/* Быстрые ссылки */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-sm space-y-1 text-start ml-40"
        >
          <h4 className="font-semibold mb-2 text-lg">
            {t("footer.pagesTitle")}
          </h4>
          {footerLinks.map(({ label, link }) => (
            <a
              key={label}
              href={link}
              className="block hover:underline transition-colors"
            >
              {label}
            </a>
          ))}
        </motion.div>

        {/* Контакты и Instagram */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col space-y-6 items-start sm:items-center text-left sm:text-center"
        >
          <h4 className="font-semibold text-lg">{t("footer.contactTitle")}</h4>
          <div className="text-sm space-y-2">
            <p>
              {t("footer.emailLabel")}:{" "}
              <a href={`mailto:${contact.email}`} className="underline">
                {contact.email}
              </a>
            </p>
            <p>
              {t("footer.phoneLabel")}:{" "}
              <a href={`tel:${contact.phone}`} className="underline">
                {contact.phone}
              </a>
            </p>
            <p>{contact.address}</p>
          </div>

          {/* Instagram иконка */}
          <div className="flex justify-start sm:justify-center lg:justify-center w-full">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#d83529dc] hover:bg-[#b52a22] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0,0,256,256"
                width="24"
                height="24"
                fill="white"
              >
                <g transform="scale(8,8)">
                  <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                </g>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Нижняя часть футера */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-10 pt-4 border-t text-center text-sm md:text-base font-semibold"
      >
        <div>
          © {new Date().getFullYear()} «PLIT99». {t("footer.rights")}
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
