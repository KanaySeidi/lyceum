import { useParams, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { useNews } from "../../../hooks/useNews";

export const News = () => {
  const { id } = useParams();
  const { news, loading, getById } = useNews();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const article = getById(id);
  const related = news.filter((n) => n.id !== parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (
      swiperInstance?.params?.navigation &&
      prevRef.current &&
      nextRef.current
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#F8F2F4" }}
      >
        <div className="space-y-4 w-full max-w-3xl px-6 animate-pulse">
          <div className="h-6 rounded-full w-32" style={{ background: "#63001F22" }} />
          <div className="h-10 rounded-xl w-3/4" style={{ background: "#63001F22" }} />
          <div className="h-72 rounded-2xl" style={{ background: "#63001F11" }} />
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center gap-4"
        style={{ background: "#F8F2F4" }}
      >
        <p className="text-5xl">📰</p>
        <p className="text-xl font-bold" style={{ color: "#63001F" }}>
          Статья не найдена
        </p>
        <Link
          to="/news"
          className="px-5 py-2.5 rounded-xl text-sm font-bold text-white"
          style={{ background: "#63001F" }}
        >
          ← Вернуться к новостям
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "#F8F2F4" }}>
      {/* ── HERO ARTICLE ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #63001F 0%, #8B0032 60%, #A0003A 100%)",
        }}
      >
        <div
          className="absolute -top-16 -right-16 w-72 h-72 rounded-full opacity-10"
          style={{ background: "#C4973A" }}
        />
        <div className="relative max-w-5xl mx-auto px-6 pt-10 pb-14">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к новостям
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ background: "#C4973A", color: "#fff" }}
              >
                {article.category}
              </span>
              <span className="text-white/50 text-sm">{article.date}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight max-w-3xl">
              {article.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ── КОНТЕНТ ── */}
      <div className="max-w-5xl mx-auto px-6 mt-10 pb-12">
        {/* Изображение */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden mb-10"
          style={{
            boxShadow: "0 8px 40px rgba(99,0,31,0.2)",
            border: "3px solid #C4973A44",
          }}
        >
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="w-full object-cover"
            style={{ maxHeight: 420 }}
          />
        </motion.div>

        {/* Текст статьи */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl p-8"
          style={{
            background: "#fff",
            border: "2px solid #63001F11",
            boxShadow: "0 4px 20px rgba(99,0,31,0.06)",
          }}
        >
          <div
            className="w-12 h-1 rounded-full mb-6"
            style={{ background: "#C4973A" }}
          />
          <div className="space-y-4">
            {article.content?.split("\n").map((p, idx) => (
              <p
                key={idx}
                className="text-base leading-relaxed"
                style={{ color: "#63001F99" }}
              >
                {p.trim()}
              </p>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── ДРУГИЕ НОВОСТИ ── */}
      {related.length > 0 && (
        <div
          className="py-14"
          style={{
            background:
              "linear-gradient(180deg, #F8F2F4 0%, #fff 100%)",
          }}
        >
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold" style={{ color: "#63001F" }}>
                Читайте также
              </h2>
              <div
                className="flex-1 h-px"
                style={{ background: "linear-gradient(90deg, #C4973A44, transparent)" }}
              />
            </div>

            <div className="relative">
              <button
                ref={prevRef}
                aria-label="Предыдущий"
                className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                style={{ background: "#63001F", boxShadow: "0 4px 12px rgba(99,0,31,0.3)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                ref={nextRef}
                aria-label="Следующий"
                className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
                style={{ background: "#63001F", boxShadow: "0 4px 12px rgba(99,0,31,0.3)" }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              <Swiper
                onSwiper={setSwiperInstance}
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
              >
                {related.map((item) => (
                  <SwiperSlide key={item.id}>
                    <Link to={`/news/${item.id}`} className="block group">
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="rounded-2xl overflow-hidden"
                        style={{
                          boxShadow: "0 4px 20px rgba(99,0,31,0.1)",
                          border: "2px solid transparent",
                        }}
                      >
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full object-cover transition-transform duration-400 group-hover:scale-105"
                            style={{ height: 180 }}
                          />
                          <div
                            className="absolute inset-0"
                            style={{
                              background:
                                "linear-gradient(to top, rgba(99,0,31,0.85) 0%, transparent 60%)",
                            }}
                          />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <span
                              className="text-xs font-bold px-2 py-0.5 rounded-full"
                              style={{ background: "#C4973A", color: "#fff" }}
                            >
                              {item.category}
                            </span>
                            <p className="text-white font-bold text-sm mt-2 line-clamp-2">
                              {item.title}
                            </p>
                            <p className="text-white/50 text-xs mt-1">{item.date}</p>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
