import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import imgSection from "../../../assets/img/About/img_section.png";
import imgHistory from "../../../assets/img/About/img_image.png";
import imgMission from "../../../assets/img/About/img_alexisbrownxv7k95vofaunsplashjpg.png";
import imgCampus from "../../../assets/img/About/img_.png";
import imgGallery1 from "../../../assets/img/About/img_aliyahyaifpeapwegt4unsplashjpg.png";
import imgGallery2 from "../../../assets/img/About/img_mikakorhonenmki1rfsqwvyunsplashjpg.png";
import imgGallery3 from "../../../assets/img/About/img_ryanjacobsoncxuoqwdrv4iunsplashjpg.png";

const stats = [
  { value: "1999", labelKey: "numCard1" },
  { value: "4000+", labelKey: "numCard2" },
  { value: "20k+", labelKey: "numCard3" },
  { value: "40+", labelKey: "numCard4" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function AboutPage() {
  const { t } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
      style={{ background: "#F8F2F4" }}
    >
      {/* ── HERO ── */}
      <div className="relative h-[420px] md:h-[500px] overflow-hidden">
        <img
          src={imgSection}
          alt="ПЛИТ"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(99,0,31,0.92) 0%, rgba(99,0,31,0.6) 60%, transparent 100%)" }}
        />
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10"
          style={{ background: "#C4973A" }}
        />

        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4"
              style={{ background: "#C4973A22", color: "#C4973A", border: "1px solid #C4973A55" }}
            >
              {t("plit.about")}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4 max-w-2xl">
              {t("PLIT")}
            </h1>
            <p className="text-white/70 text-lg max-w-xl">
              {t("PLITDeviz")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ── СТАТИСТИКА ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        style={{ background: "linear-gradient(135deg, #63001F 0%, #8B0032 100%)" }}
        className="py-16"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <p
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: "#C4973A" }}
                >
                  {stat.value}
                </p>
                <p className="text-white/70 text-sm uppercase tracking-wider font-medium">
                  {t(stat.labelKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── ГАЛЕРЕЯ ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {[imgGallery1, imgGallery2, imgGallery3].map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 4px 20px rgba(99,0,31,0.12)",
                border: "2px solid #63001F11",
              }}
            >
              <img
                src={src}
                alt=""
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.src = "https://placehold.co/400x256?text=ПЛИТ"; }}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ── ИСТОРИЯ ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="py-16"
        style={{ background: "#fff" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 8px 40px rgba(99,0,31,0.15)",
                border: "3px solid #C4973A33",
              }}
            >
              <img
                src={imgHistory}
                alt="История ПЛИТ"
                className="w-full h-96 object-cover"
                onError={(e) => { e.target.src = "https://placehold.co/600x384?text=История"; }}
              />
            </motion.div>

            <div className="space-y-5">
              <div>
                <span
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                  style={{ background: "#63001F11", color: "#63001F" }}
                >
                  История
                </span>
                <h2 className="text-4xl font-bold leading-tight" style={{ color: "#63001F" }}>
                  С 1999 года — в авангарде IT-образования
                </h2>
              </div>
              <div className="w-12 h-1 rounded-full" style={{ background: "#C4973A" }} />
              <p className="text-base leading-relaxed" style={{ color: "#63001F88" }}>
                Профессиональный Лицей Информационных Технологий был основан в 1999 году
                и стал первым специализированным учебным заведением Кыргызстана в сфере IT.
                За более чем 25 лет лицей подготовил тысячи квалифицированных специалистов,
                которые работают по всему миру.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ── МИССИЯ ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="py-16"
        style={{ background: "#F8F2F4" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className="rounded-2xl p-10 text-white relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #63001F 0%, #8B0032 100%)" }}
            >
              <div
                className="absolute -top-10 -right-10 w-48 h-48 rounded-full opacity-10"
                style={{ background: "#C4973A" }}
              />
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ background: "#C4973A22", color: "#C4973A", border: "1px solid #C4973A44" }}
              >
                {t("ourMission")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-5 leading-tight relative">
                {t("keyOfSuccess")}
              </h2>
              <div className="w-12 h-0.5 mb-5" style={{ background: "#C4973A" }} />
              <p className="text-white/75 text-base leading-relaxed relative">
                {t("keyOfSuccessText")}
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 8px 40px rgba(99,0,31,0.15)",
                border: "3px solid #C4973A33",
              }}
            >
              <img
                src={imgMission}
                alt="Миссия"
                className="w-full h-96 object-cover"
                onError={(e) => { e.target.src = "https://placehold.co/600x384?text=Миссия"; }}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── ВИДЕО КАМПУСА ── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        className="py-16 text-center"
        style={{ background: "#fff" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-3" style={{ color: "#63001F" }}>
            Наш кампус
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full mb-10" style={{ background: "#C4973A" }} />

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="relative mx-auto max-w-4xl cursor-pointer rounded-2xl overflow-hidden"
            style={{
              height: "24rem",
              boxShadow: "0 12px 50px rgba(99,0,31,0.25)",
              border: "3px solid #C4973A44",
            }}
            onClick={() => setShowVideo(true)}
          >
            <img
              src={imgCampus}
              alt="Кампус"
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = "https://placehold.co/896x384?text=Кампус"; }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(99,0,31,0.35)" }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: "#fff", boxShadow: "0 4px 20px rgba(99,0,31,0.4)" }}
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8 ml-1" fill="#63001F">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          <AnimatePresence>
            {showVideo && (
              <>
                <motion.div
                  className="fixed inset-0 z-40"
                  style={{ background: "rgba(99,0,31,0.8)", backdropFilter: "blur(4px)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowVideo(false)}
                />
                <motion.div
                  className="fixed inset-0 flex items-center justify-center z-50 px-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                >
                  <div
                    className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden"
                    style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.5)" }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/ebkc-lhQJZ0?autoplay=1"
                      title="Кампус ПЛИТ"
                      frameBorder={0}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="rounded-2xl"
                    />
                    <button
                      onClick={() => setShowVideo(false)}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg transition-colors"
                      style={{ background: "#63001F" }}
                    >
                      ✕
                    </button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default AboutPage;
