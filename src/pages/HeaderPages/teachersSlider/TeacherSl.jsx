import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useStaff } from "../../../hooks/useStaff";

const TABS = [
  { key: "management", labelKey: "teachersPage.tabManagement", icon: "🏛️" },
  { key: "teachers",   labelKey: "teachersPage.tabTeachers",   icon: "📖" },
  { key: "masters",    labelKey: "teachersPage.tabMasters",    icon: "🔧" },
];

const StaffCard = ({ person, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.05 }}
    className="group rounded-2xl overflow-hidden"
    style={{
      background: "#fff",
      border: "2px solid #1A3FA011",
      boxShadow: "0 2px 12px rgba(26,63,160,0.07)",
      transition: "box-shadow 0.3s, border-color 0.3s, transform 0.3s",
    }}
    whileHover={{
      y: -6,
      boxShadow: "0 12px 36px rgba(26,63,160,0.18)",
    }}
  >
    <div className="relative overflow-hidden h-48 sm:h-56 md:h-60">
      <img
        src={person.img}
        alt={person.name}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(26,63,160,0.7) 0%, transparent 60%)",
        }}
      />
    </div>

    <div className="p-3 sm:p-4 text-center">
      <p className="font-bold text-sm sm:text-base leading-snug" style={{ color: "#1A3FA0" }}>
        {person.name}
      </p>
      <p className="text-xs sm:text-sm mt-1 leading-snug" style={{ color: "#1A3FA077" }}>
        {person.role}
      </p>
    </div>
  </motion.div>
);

const SkeletonCard = () => (
  <div className="rounded-2xl overflow-hidden animate-pulse" style={{ background: "#1A3FA008" }}>
    <div className="h-48 sm:h-56 md:h-60" style={{ background: "#1A3FA011" }} />
    <div className="p-3 sm:p-4 space-y-2">
      <div className="h-4 rounded-full mx-auto w-3/4" style={{ background: "#1A3FA011" }} />
      <div className="h-3 rounded-full mx-auto w-1/2" style={{ background: "#1A3FA008" }} />
    </div>
  </div>
);

const TeacherSl = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "management";
  const { data, loading } = useStaff();

  const setTab = (key) => setSearchParams({ tab: key });
  const people = data[activeTab] || [];

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
              {t("teachersPage.badge")}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              {t("teachersPage.title")}
            </h1>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              {t("teachersPage.subtitle")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── ТАБЫ ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 sm:py-8 flex justify-center overflow-x-auto">
        <div
          className="inline-flex rounded-2xl p-1 gap-0.5 sm:p-1.5 sm:gap-1 mx-auto"
          style={{ background: "#fff", boxShadow: "0 2px 16px rgba(26,63,160,0.1)" }}
        >
          {TABS.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setTab(tab.key)}
                className="relative px-2.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] min-[380px]:text-xs sm:text-sm font-bold transition-all duration-250 flex items-center gap-1 sm:gap-2 whitespace-nowrap"
                style={{
                  background: active ? "#1A3FA0" : "transparent",
                  color: active ? "#fff" : "#1A3FA099",
                  boxShadow: active ? "0 4px 14px rgba(26,63,160,0.3)" : "none",
                }}
              >
                <span>{tab.icon}</span>
                {t(tab.labelKey)}
                {active && (
                  <motion.span
                    layoutId="tab-dot"
                    className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
                    style={{ background: "#C4973A" }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── СЕТКА ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 min-[420px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5"
          >
            {loading
              ? Array.from({ length: 8 }).map((_, i) => <SkeletonCard key={i} />)
              : people.map((person, i) => (
                  <StaffCard key={person.id} person={person} index={i} />
                ))}
          </motion.div>
        </AnimatePresence>

        {!loading && people.length === 0 && (
          <div className="text-center py-24">
            <p className="text-xl font-bold" style={{ color: "#1A3FA0" }}>{t("teachersPage.emptyData")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherSl;
