import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const StepCard = ({ number, title, desc, delay }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex flex-col items-center text-center cursor-default min-w-0"
    >
      <motion.div
        animate={{
          scale: hovered ? 1.1 : 1,
          backgroundColor: hovered ? "#C4973A" : "#1A3FA0",
        }}
        transition={{ duration: 0.25 }}
        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold shadow-lg mb-3 sm:mb-4"
      >
        {number}
      </motion.div>
      <p className="text-xs sm:text-sm font-bold text-[#1A3FA0] uppercase tracking-wide mb-1 leading-snug">
        {title}
      </p>
      <p className="text-xs sm:text-sm text-[#1A3FA0]/70 leading-snug">{desc}</p>
    </motion.div>
  );
};

const InfoCard = ({ icon, title, text, delay }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden rounded-2xl p-4 sm:p-5 border-2 cursor-default transition-all duration-300"
      style={{
        borderColor: hovered ? "#C4973A" : "#1A3FA022",
        backgroundColor: hovered ? "#1A3FA0" : "#fff",
        boxShadow: hovered
          ? "0 8px 32px rgba(26,63,160,0.25)"
          : "0 2px 12px rgba(26,63,160,0.08)",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="text-xl sm:text-2xl w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-xl flex-shrink-0 transition-colors duration-300"
          style={{ background: hovered ? "#C4973A" : "#1A3FA011" }}
        >
          {icon}
        </div>
        <div>
          <p
            className="font-bold text-sm sm:text-base mb-1 transition-colors duration-300"
            style={{ color: hovered ? "#C4973A" : "#1A3FA0" }}
          >
            {title}
          </p>
          <p
            className="text-xs sm:text-sm leading-relaxed transition-colors duration-300"
            style={{ color: hovered ? "#fff" : "#1A3FA099" }}
          >
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Applicants = () => {
  const { t } = useTranslation();
  const [openQuestion, setOpenQuestion] = useState(null);

  const infoItems = [
    { icon: "📋", topicKey: "applicantstopic1", infoKey: "applicantsinfo1" },
    { icon: "📅", topicKey: "applicantstopic2", infoKey: "applicantsinfo2" },
    { icon: "📝", topicKey: "applicantstopic3", infoKey: "applicantsinfo3" },
    { icon: "📚", topicKey: "applicantstopic4", infoKey: "applicantsinfo4" },
    { icon: "🎓", topicKey: "applicantstopic5", infoKey: "applicantsinfo5" },
  ];

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
        {/* Декоративные круги */}
        <div
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-10"
          style={{ background: "#C4973A" }}
        />
        <div
          className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full opacity-10"
          style={{ background: "#C4973A" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14 md:py-16 flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4"
                style={{
                  background: "#C4973A22",
                  color: "#C4973A",
                  border: "1px solid #C4973A55",
                }}
              >
                {t("applicantsPage.badge")}
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {t("withStudents.applicants")}
              </h1>
              <p className="text-white/75 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                {t("withStudents.applicantstime")}
              </p>
            </motion.div>
          </div>

          {/* Видео */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-md"
          >
            <div
              className="rounded-2xl sm:rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 0 0 4px #C4973A55, 0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              <iframe
                width="100%"
                height="220"
                src="https://www.youtube.com/embed/ebkc-lhQJZ0"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="block"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── ШАГИ ПОСТУПЛЕНИЯ ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xl sm:text-2xl font-bold text-center mb-3"
          style={{ color: "#1A3FA0" }}
        >
          {t("applicantsPage.howToApply")}
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-1 mx-auto mb-10 rounded-full"
          style={{ background: "#C4973A" }}
        />

        <div className="relative grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Соединительная линия на desktop */}
          <div
            className="absolute top-7 left-[12.5%] right-[12.5%] h-0.5 hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, #1A3FA044, #C4973A, #1A3FA044)",
            }}
          />
          <StepCard
            number="1"
            title={t("applicantsPage.step1Title")}
            desc={t("applicantsPage.step1Desc")}
            delay={0.1}
          />
          <StepCard
            number="2"
            title={t("applicantsPage.step2Title")}
            desc={t("applicantsPage.step2Desc")}
            delay={0.2}
          />
          <StepCard
            number="3"
            title={t("applicantsPage.step3Title")}
            desc={t("applicantsPage.step3Desc")}
            delay={0.3}
          />
          <StepCard
            number="4"
            title={t("applicantsPage.step4Title")}
            desc={t("applicantsPage.step4Desc")}
            delay={0.4}
          />
        </div>
      </div>

      {/* ── ДОКУМЕНТЫ ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl sm:rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(120deg, #fff 60%, #FFF8F0 100%)",
            border: "2px solid #C4973A44",
            boxShadow: "0 4px 30px rgba(26,63,160,0.1)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 p-4 sm:p-6 md:p-8">
            <div className="flex-1">
              <div
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ background: "#1A3FA011", color: "#1A3FA0" }}
              >
                {t("applicantsPage.requiredDocsBadge")}
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ color: "#1A3FA0" }}
              >
                {t("withStudents.applicantsdoc")}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#1A3FA088" }}
              >
                {t("applicantsPage.prepareDocsText")}
              </p>
            </div>

            {/* Мини-список */}
            <div
              className="flex-1 rounded-2xl p-4 sm:p-6 w-full"
              style={{
                background: "#1A3FA008",
                border: "1px dashed #C4973A88",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wide mb-4"
                style={{ color: "#C4973A" }}
              >
                {t("applicantsPage.shortList")}
              </p>
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <div
                  key={n}
                  className="flex items-center gap-3 py-2 border-b last:border-b-0"
                  style={{ borderColor: "#1A3FA011" }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "#C4973A" }}
                  />
                  <span className="text-sm" style={{ color: "#1A3FA0" }}>
                    {t(`withStudents.applicantsdoc${n}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── УСЛОВИЯ ПРИЁМА ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-14">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: "#1A3FA0" }}>
            {t("applicantsPage.conditionsTitle")}
          </h2>
          <div
            className="w-16 h-1 mx-auto rounded-full"
            style={{ background: "#C4973A" }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {infoItems.map((item, i) => (
            <InfoCard
              key={i}
              icon={item.icon}
              title={t(`withStudents.${item.topicKey}`)}
              text={t(`withStudents.${item.infoKey}`)}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <div
        style={{
          background: "linear-gradient(180deg, #F0F4FF 0%, #fff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <h2
              className="text-2xl sm:text-3xl font-bold mb-2"
              style={{ color: "#1A3FA0" }}
            >
              {t("faq.title")}
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ background: "#C4973A" }}
            />
          </motion.div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {t("faq.questions", { returnObjects: true }).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="rounded-2xl overflow-hidden"
                style={{
                  border:
                    openQuestion === index
                      ? "2px solid #C4973A"
                      : "2px solid #1A3FA022",
                  background: "#fff",
                  boxShadow:
                    openQuestion === index
                      ? "0 8px 30px rgba(196,151,58,0.2)"
                      : "0 2px 10px rgba(26,63,160,0.06)",
                  transition: "box-shadow 0.3s, border-color 0.3s",
                }}
              >
                <button
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors duration-200"
                  style={{
                    background:
                      openQuestion === index ? "#1A3FA008" : "transparent",
                  }}
                >
                  <span
                    className="text-sm sm:text-base font-semibold pr-4 sm:pr-6 leading-snug"
                    style={{ color: "#1A3FA0" }}
                  >
                    {item.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: openQuestion === index ? 45 : 0,
                      background:
                        openQuestion === index ? "#C4973A" : "#1A3FA0",
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white text-lg sm:text-xl font-bold"
                  >
                    +
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.25,
                        ease: "easeOut",
                        opacity: { duration: 0.15 },
                      }}
                    >
                      <div
                        className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm leading-relaxed whitespace-pre-line"
                        style={{ color: "#1A3FA0aa" }}
                      >
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1A3FA0 0%, #1535A0 100%)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ background: "#C4973A", transform: "translate(30%, -30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
            style={{ background: "#C4973A", transform: "translate(-30%, 30%)" }}
          />
          <div className="relative">
            <p className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {t("applicantsPage.ctaTitle")}
            </p>
            <p className="text-white/70 text-sm sm:text-base mb-6 sm:mb-7">
              {t("applicantsPage.ctaSubtitle")}
            </p>
            <a
              href="mailto:info@plit.ru"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "#C4973A",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(196,151,58,0.4)",
              }}
            >
              {t("applicantsPage.ctaButton")}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Applicants;
