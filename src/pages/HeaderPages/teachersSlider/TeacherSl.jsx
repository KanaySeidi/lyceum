import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useStaff } from "../../../hooks/useStaff";

const TABS = [
  { key: "management", label: "Руководство", icon: "🏛️" },
  { key: "teachers",   label: "Педагоги",    icon: "📖" },
  { key: "masters",    label: "Мастера",     icon: "🔧" },
];

const StaffCard = ({ person, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: index * 0.05 }}
    className="group rounded-2xl overflow-hidden"
    style={{
      background: "#fff",
      border: "2px solid #63001F11",
      boxShadow: "0 2px 12px rgba(99,0,31,0.07)",
      transition: "box-shadow 0.3s, border-color 0.3s, transform 0.3s",
    }}
    whileHover={{
      y: -6,
      boxShadow: "0 12px 36px rgba(99,0,31,0.18)",
    }}
  >
    <div className="relative overflow-hidden" style={{ height: 240 }}>
      <img
        src={person.img}
        alt={person.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(99,0,31,0.7) 0%, transparent 60%)",
        }}
      />
    </div>

    <div className="p-4 text-center">
      <p className="font-bold text-base" style={{ color: "#63001F" }}>
        {person.name}
      </p>
      <p className="text-sm mt-1" style={{ color: "#63001F77" }}>
        {person.role}
      </p>
    </div>
  </motion.div>
);

const SkeletonCard = () => (
  <div className="rounded-2xl overflow-hidden animate-pulse" style={{ background: "#63001F08" }}>
    <div style={{ height: 240, background: "#63001F11" }} />
    <div className="p-4 space-y-2">
      <div className="h-4 rounded-full mx-auto w-3/4" style={{ background: "#63001F11" }} />
      <div className="h-3 rounded-full mx-auto w-1/2" style={{ background: "#63001F08" }} />
    </div>
  </div>
);

const TeacherSl = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "management";
  const { data, loading } = useStaff();

  const setTab = (key) => setSearchParams({ tab: key });
  const people = data[activeTab] || [];

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
              ПЛИТ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Наш коллектив
            </h1>
            <p className="text-white/60 text-base">
              Руководство, педагоги и мастера производственного обучения
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── ТАБЫ ── */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div
          className="inline-flex rounded-2xl p-1.5 gap-1"
          style={{ background: "#fff", boxShadow: "0 2px 16px rgba(99,0,31,0.1)" }}
        >
          {TABS.map((tab) => {
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setTab(tab.key)}
                className="relative px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-250 flex items-center gap-2"
                style={{
                  background: active ? "#63001F" : "transparent",
                  color: active ? "#fff" : "#63001F99",
                  boxShadow: active ? "0 4px 14px rgba(99,0,31,0.3)" : "none",
                }}
              >
                <span>{tab.icon}</span>
                {tab.label}
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
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5"
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
            <p className="text-xl font-bold" style={{ color: "#63001F" }}>Данные появятся позже</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeacherSl;
