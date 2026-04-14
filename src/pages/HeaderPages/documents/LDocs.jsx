import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const docs = [
  { key: "positionPlit99",       to: "/info/position",            icon: "📋", descKey: "ldocsPage.desc1" },
  { key: "educationalPrograms",  to: "/info/op",                  icon: "🎓", descKey: "ldocsPage.desc2" },
  { key: "normativeActsKR",      to: "/info/npakr",               icon: "⚖️", descKey: "ldocsPage.desc3" },
  { key: "selfAssessmentReports",to: "/info/selfreport",          icon: "📊", descKey: "ldocsPage.desc4" },
  { key: "generalSecondaryEducation", to: "/info/generalseceducation", icon: "🏫", descKey: "ldocsPage.desc5" },
  { key: "generalEducationRP",   to: "/info/rpobraz",             icon: "📚", descKey: "ldocsPage.desc6" },
  { key: "professionalRP",       to: "/info/rpprof",              icon: "🔧", descKey: "ldocsPage.desc7" },
  { key: "regulationsPlit99",    to: "/info/npa99",               icon: "📜", descKey: "ldocsPage.desc8" },
];

const DocCard = ({ item, index, t }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
  >
    <Link to={item.to} className="block group h-full">
      <div
        className="h-full rounded-2xl p-4 sm:p-6 flex flex-col gap-4 transition-all duration-300"
        style={{
          background: "#fff",
          border: "2px solid #1A3FA011",
          boxShadow: "0 2px 12px rgba(26,63,160,0.06)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "#C4973A";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(26,63,160,0.15)";
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "#1A3FA011";
          e.currentTarget.style.boxShadow = "0 2px 12px rgba(26,63,160,0.06)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-colors duration-300"
          style={{ background: "#1A3FA00D" }}
        >
          {item.icon}
        </div>

        {/* Text */}
        <div className="flex-1">
          <p
            className="font-bold text-sm sm:text-base leading-snug mb-1 transition-colors duration-300 group-hover:text-[#1A3FA0]"
            style={{ color: "#1A3FA0" }}
          >
            {t(`ldocs.${item.key}`)}
          </p>
          <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "#1A3FA077" }}>
            {t(item.descKey)}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex justify-end">
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 transition-all duration-300 opacity-100 sm:opacity-0 group-hover:opacity-100 sm:translate-x-2 group-hover:translate-x-0"
            style={{ background: "#1A3FA0", color: "#fff" }}
          >
            {t("ldocsPage.openBtn")}
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const LDocs = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen" style={{ background: "#F0F4FF" }}>
      {/* ── HERO ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1A3FA0 0%, #1535A0 60%, #0F2E8F 100%)",
        }}
      >
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10" style={{ background: "#C4973A" }} />
        <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full opacity-10" style={{ background: "#C4973A" }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4"
              style={{ background: "#C4973A22", color: "#C4973A", border: "1px solid #C4973A55" }}
            >
              {t("ldocsPage.badge")}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              {t("ldocsPage.title")}
            </h1>
            <p className="text-white/70 text-sm sm:text-base max-w-xl leading-relaxed">
              {t("ldocsPage.subtitle")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── СЕТКА ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {docs.map((item, i) => (
            <DocCard key={item.key} item={item} index={i} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LDocs;
