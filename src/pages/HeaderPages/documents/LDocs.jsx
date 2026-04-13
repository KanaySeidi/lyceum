import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const docs = [
  { key: "positionPlit99",       to: "/info/position",            icon: "📋", desc: "Нормативно-правовые акты положения" },
  { key: "educationalPrograms",  to: "/info/op",                  icon: "🎓", desc: "Программы подготовки специалистов" },
  { key: "normativeActsKR",      to: "/info/npakr",               icon: "⚖️", desc: "Законодательная база Кыргызской Республики" },
  { key: "selfAssessmentReports",to: "/info/selfreport",          icon: "📊", desc: "Результаты внутренней оценки качества" },
  { key: "generalSecondaryEducation", to: "/info/generalseceducation", icon: "🏫", desc: "Документы по среднему общему образованию" },
  { key: "generalEducationRP",   to: "/info/rpobraz",             icon: "📚", desc: "Рабочие программы общеобразовательного цикла" },
  { key: "professionalRP",       to: "/info/rpprof",              icon: "🔧", desc: "Рабочие программы профессионального цикла" },
  { key: "regulationsPlit99",    to: "/info/npa99",               icon: "📜", desc: "Нормативные документы ПЛИТ №99" },
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
        className="h-full rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300"
        style={{
          background: "#fff",
          border: "2px solid #63001F11",
          boxShadow: "0 2px 12px rgba(99,0,31,0.06)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = "#C4973A";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,0,31,0.15)";
          e.currentTarget.style.transform = "translateY(-4px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "#63001F11";
          e.currentTarget.style.boxShadow = "0 2px 12px rgba(99,0,31,0.06)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-colors duration-300"
          style={{ background: "#63001F0D" }}
        >
          {item.icon}
        </div>

        {/* Text */}
        <div className="flex-1">
          <p
            className="font-bold text-base leading-snug mb-1 transition-colors duration-300 group-hover:text-[#63001F]"
            style={{ color: "#63001F" }}
          >
            {t(`ldocs.${item.key}`)}
          </p>
          <p className="text-sm leading-relaxed" style={{ color: "#63001F77" }}>
            {item.desc}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex justify-end">
          <span
            className="text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
            style={{ background: "#63001F", color: "#fff" }}
          >
            Открыть →
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const LDocs = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen" style={{ background: "#F8F2F4" }}>
      {/* ── HERO ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #63001F 0%, #8B0032 60%, #A0003A 100%)",
        }}
      >
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10" style={{ background: "#C4973A" }} />
        <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full opacity-10" style={{ background: "#C4973A" }} />

        <div className="relative max-w-6xl mx-auto px-6 py-14">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4"
              style={{ background: "#C4973A22", color: "#C4973A", border: "1px solid #C4973A55" }}
            >
              Документы
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Нормативные документы
            </h1>
            <p className="text-white/60 text-base max-w-xl">
              Официальные документы, программы и нормативно-правовые акты колледжа
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── СЕТКА ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 pb-16">
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
