import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useNews } from "../../../hooks/useNews";

const StatCard = ({ icon, label, value, to, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
  >
    <Link to={to} className="block group">
      <div
        className="rounded-2xl p-6 transition-all duration-300 group-hover:-translate-y-1"
        style={{
          background: "#fff",
          border: "2px solid #63001F0D",
          boxShadow: "0 2px 16px rgba(99,0,31,0.07)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#C4973A";
          e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,0,31,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "#63001F0D";
          e.currentTarget.style.boxShadow = "0 2px 16px rgba(99,0,31,0.07)";
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl"
            style={{ background: "#63001F0D" }}
          >
            {icon}
          </div>
          <span className="text-xs font-bold" style={{ color: "#C4973A" }}>→</span>
        </div>
        <p className="text-3xl font-bold mb-1" style={{ color: "#63001F" }}>{value}</p>
        <p className="text-sm font-medium" style={{ color: "#63001F77" }}>{label}</p>
      </div>
    </Link>
  </motion.div>
);

const QuickAction = ({ icon, label, desc, to, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -12 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.35, delay }}
  >
    <Link to={to} className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200 hover:bg-[#63001F08]">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
        style={{ background: "#63001F0D" }}
      >
        {icon}
      </div>
      <div className="flex-1">
        <p className="font-bold text-sm" style={{ color: "#63001F" }}>{label}</p>
        <p className="text-xs" style={{ color: "#63001F66" }}>{desc}</p>
      </div>
      <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#C4973A" }}>→</span>
    </Link>
  </motion.div>
);

export default function AdminPage() {
  const { news } = useNews();
  const pinned = news.find((n) => n.pinnedId);

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Приветствие */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl p-8 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #63001F 0%, #8B0032 100%)" }}
      >
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-10" style={{ background: "#C4973A" }} />
        <div className="relative">
          <p className="text-white/60 text-sm mb-1">Добро пожаловать,</p>
          <h2 className="text-3xl font-bold text-white mb-2">Администратор 👋</h2>
          <p className="text-white/60 text-sm max-w-md">
            Управляйте содержимым сайта — добавляйте новости, обновляйте информацию о коллективе и документах.
          </p>
        </div>
      </motion.div>

      {/* Статистика */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "#63001F77" }}>
          Обзор
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon="📰" label="Новостей" value={news.length} to="/admin/news" delay={0.1} />
          <StatCard icon="📌" label="Закреплено" value={news.filter(n => n.id === pinned?.id).length || 0} to="/admin/news" delay={0.15} />
          <StatCard icon="📚" label="Разделов" value="6" to="/admin/courses" delay={0.2} />
          <StatCard icon="👥" label="Сотрудников" value="22" to="/admin/teachersad" delay={0.25} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Быстрые действия */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="rounded-2xl p-6"
          style={{ background: "#fff", border: "2px solid #63001F0D", boxShadow: "0 2px 16px rgba(99,0,31,0.07)" }}
        >
          <h3 className="font-bold text-base mb-4" style={{ color: "#63001F" }}>Быстрые действия</h3>
          <div className="divide-y" style={{ borderColor: "#63001F08" }}>
            <QuickAction icon="📰" label="Управление новостями" desc="Добавить, изменить или удалить новость" to="/admin/news" delay={0.35} />
            <QuickAction icon="📚" label="Курсы" desc="Редактировать список курсов" to="/admin/courses" delay={0.4} />
            <QuickAction icon="⚖️" label="НПА" desc="Нормативно-правовые акты" to="/admin/npa" delay={0.45} />
            <QuickAction icon="👥" label="Коллектив" desc="Педагоги, мастера, руководство" to="/admin/teachersad" delay={0.5} />
            <QuickAction icon="ℹ️" label="О лицее" desc="Информация о колледже" to="/admin/about" delay={0.55} />
          </div>
        </motion.div>

        {/* Последние новости */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="rounded-2xl p-6"
          style={{ background: "#fff", border: "2px solid #63001F0D", boxShadow: "0 2px 16px rgba(99,0,31,0.07)" }}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-base" style={{ color: "#63001F" }}>Последние новости</h3>
            <Link to="/admin/news" className="text-xs font-bold" style={{ color: "#C4973A" }}>Все →</Link>
          </div>
          <div className="space-y-3">
            {news.slice(0, 4).map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#63001F05] transition-colors">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate" style={{ color: "#63001F" }}>{item.title}</p>
                  <p className="text-xs" style={{ color: "#63001F66" }}>{item.date}</p>
                </div>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                  style={{ background: "#63001F0D", color: "#63001F99" }}
                >
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
