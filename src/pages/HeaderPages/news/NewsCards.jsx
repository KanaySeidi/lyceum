import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNews } from "../../../hooks/useNews";

const SkeletonCard = ({ wide }) => (
  <div
    className={`rounded-2xl overflow-hidden animate-pulse ${wide ? "md:col-span-2" : ""}`}
    style={{ background: "#1A3FA011", height: wide ? 360 : 260 }}
  />
);

const NewsCard = ({ item, index, wide, pinned }) => {
  const { t } = useTranslation();
  return (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    className={wide ? "md:col-span-2" : ""}
  >
    <div className="relative group h-full">
      {/* Pinned badge */}
      {pinned && (
        <div
          className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
          style={{ background: "#C4973A", color: "#fff", boxShadow: "0 2px 8px rgba(196,151,58,0.4)" }}
        >
          {t("newsPage2.pinned")}
        </div>
      )}

      <Link to={`/news/${item.id}`} className="block h-full">
        <div
          className="relative rounded-2xl overflow-hidden h-full"
          style={{
            minHeight: wide ? "clamp(280px, 62vw, 360px)" : "260px",
            boxShadow: pinned
              ? "0 0 0 2px #C4973A, 0 8px 32px rgba(26,63,160,0.2)"
              : "0 4px 24px rgba(26,63,160,0.12)",
            transition: "box-shadow 0.3s",
          }}
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            style={{ minHeight: wide ? "clamp(280px, 62vw, 360px)" : "260px" }}
          />

          {/* Gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(26,63,160,0.92) 0%, rgba(26,63,160,0.35) 55%, transparent 100%)",
            }}
          />

          {/* Gold hover border */}
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#C4973A] transition-all duration-300" />

          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
              style={{ background: "rgba(196,151,58,0.25)", color: "#C4973A", border: "1px solid #C4973A66" }}
            >
              {item.category}
            </span>
            <h2
              className={`font-bold text-white leading-snug line-clamp-2 ${
                wide ? "text-xl sm:text-2xl md:text-3xl" : "text-base sm:text-lg"
              }`}
            >
              {item.title}
            </h2>
            <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-2 mt-3">
              <p className="text-white/55 text-xs uppercase tracking-widest">
                {item.date}
              </p>
              <span
                className="w-fit text-xs font-bold px-3 py-1 rounded-full opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-300 sm:translate-x-2 group-hover:translate-x-0"
                style={{ background: "#C4973A22", color: "#C4973A", border: "1px solid #C4973A55" }}
              >
                {t("newsPage2.readMore")}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  </motion.div>
  );
};

export const NewsCards = () => {
  const { t } = useTranslation();
  const { news, loading, pinnedId } = useNews();

  const pinned = news.find((n) => n.id === pinnedId);
  const rest = news.filter((n) => n.id !== pinnedId);
  // Если нет закреплённой — первая идёт широкой
  const featured = pinned || news[0];
  const others = pinned ? rest : news.slice(1);

  return (
    <div className="min-h-screen" style={{ background: "#F0F4FF" }}>
      {/* ── HERO ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #1A3FA0 0%, #1535A0 60%, #0F2E8F 100%)",
        }}
      >
        <div className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10" style={{ background: "#C4973A" }} />
        <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full opacity-10" style={{ background: "#C4973A" }} />
        <div className="relative max-w-6xl mx-auto px-3 sm:px-6 py-10 sm:py-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">{t("newsPage2.title")}</h1>
          </motion.div>
        </div>
      </div>

      {/* ── КАРТОЧКИ ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10 pb-12 sm:pb-16">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <SkeletonCard wide />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured && (
              <NewsCard
                item={featured}
                index={0}
                wide
                pinned={featured.id === pinnedId}
              />
            )}
            {others.map((item, i) => (
              <NewsCard
                key={item.id}
                item={item}
                index={i + 1}
                pinned={item.id === pinnedId}
              />
            ))}
          </div>
        )}

        {!loading && news.length === 0 && (
          <div className="text-center py-24">
            <p className="text-2xl font-bold mb-2" style={{ color: "#1A3FA0" }}>{t("newsPage2.emptyTitle")}</p>
            <p style={{ color: "#1A3FA066" }}>{t("newsPage2.emptySubtitle")}</p>
          </div>
        )}
      </div>
    </div>
  );
};
