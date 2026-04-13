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
      className="relative flex flex-col items-center text-center cursor-default"
    >
      <motion.div
        animate={{
          scale: hovered ? 1.1 : 1,
          backgroundColor: hovered ? "#C4973A" : "#63001F",
        }}
        transition={{ duration: 0.25 }}
        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4"
      >
        {number}
      </motion.div>
      <p className="text-sm font-bold text-[#63001F] uppercase tracking-wide mb-1">
        {title}
      </p>
      <p className="text-sm text-[#63001F]/70">{desc}</p>
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
      className="relative overflow-hidden rounded-2xl p-5 border-2 cursor-default transition-all duration-300"
      style={{
        borderColor: hovered ? "#C4973A" : "#63001F22",
        backgroundColor: hovered ? "#63001F" : "#fff",
        boxShadow: hovered
          ? "0 8px 32px rgba(99,0,31,0.25)"
          : "0 2px 12px rgba(99,0,31,0.08)",
      }}
    >
      <div className="flex items-start gap-4">
        <div
          className="text-2xl w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0 transition-colors duration-300"
          style={{ background: hovered ? "#C4973A" : "#63001F11" }}
        >
          {icon}
        </div>
        <div>
          <p
            className="font-bold text-base mb-1 transition-colors duration-300"
            style={{ color: hovered ? "#C4973A" : "#63001F" }}
          >
            {title}
          </p>
          <p
            className="text-sm leading-relaxed transition-colors duration-300"
            style={{ color: hovered ? "#fff" : "#63001F99" }}
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
    <div className="min-h-screen" style={{ background: "#F8F2F4" }}>
      {/* ── HERO ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #63001F 0%, #8B0032 60%, #A0003A 100%)",
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

        <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
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
                Поступление
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
                {t("withStudents.applicants")}
              </h1>
              <p className="text-white/75 text-base md:text-lg leading-relaxed max-w-xl">
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
              className="rounded-3xl overflow-hidden"
              style={{
                boxShadow: "0 0 0 4px #C4973A55, 0 20px 60px rgba(0,0,0,0.4)",
              }}
            >
              <iframe
                width="100%"
                height="260"
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
      <div className="max-w-7xl mx-auto px-6 py-14">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-center mb-3"
          style={{ color: "#63001F" }}
        >
          Как поступить?
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-1 mx-auto mb-10 rounded-full"
          style={{ background: "#C4973A" }}
        />

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Соединительная линия на desktop */}
          <div
            className="absolute top-7 left-[12.5%] right-[12.5%] h-0.5 hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, #63001F44, #C4973A, #63001F44)",
            }}
          />
          <StepCard
            number="1"
            title="Выберите специальность"
            desc="Ознакомьтесь с направлениями подготовки"
            delay={0.1}
          />
          <StepCard
            number="2"
            title="Подайте документы"
            desc="Соберите и подайте пакет документов"
            delay={0.2}
          />
          <StepCard
            number="3"
            title="Пройдите отбор"
            desc="Вступительные испытания или конкурс аттестатов"
            delay={0.3}
          />
          <StepCard
            number="4"
            title="Зачисление"
            desc="Получите приказ о зачислении"
            delay={0.4}
          />
        </div>
      </div>

      {/* ── ДОКУМЕНТЫ ── */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(120deg, #fff 60%, #FFF8F0 100%)",
            border: "2px solid #C4973A44",
            boxShadow: "0 4px 30px rgba(99,0,31,0.1)",
          }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8 p-8">
            <div className="flex-1">
              <div
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ background: "#63001F11", color: "#63001F" }}
              >
                📄 Необходимые документы
              </div>
              <h3
                className="text-xl md:text-2xl font-bold mb-3"
                style={{ color: "#63001F" }}
              >
                {t("withStudents.applicantsdoc")}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#63001F88" }}
              >
                Подготовьте все необходимые документы заранее, чтобы поступление
                прошло гладко.
              </p>
            </div>

            {/* Мини-список */}
            <div
              className="flex-1 rounded-2xl p-6"
              style={{
                background: "#63001F08",
                border: "1px dashed #C4973A88",
              }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wide mb-4"
                style={{ color: "#C4973A" }}
              >
                Краткий список
              </p>
              {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                <div
                  key={n}
                  className="flex items-center gap-3 py-2 border-b last:border-b-0"
                  style={{ borderColor: "#63001F11" }}
                >
                  <div
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: "#C4973A" }}
                  />
                  <span className="text-sm" style={{ color: "#63001F" }}>
                    {t(`withStudents.applicantsdoc${n}`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── УСЛОВИЯ ПРИЁМА ── */}
      <div className="max-w-7xl mx-auto px-6 pb-14">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#63001F" }}>
            {t("withStudents.applicantsinfo")}
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
          background: "linear-gradient(180deg, #F8F2F4 0%, #fff 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-10"
          >
            <h2
              className="text-3xl font-bold mb-2"
              style={{ color: "#63001F" }}
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
                      : "2px solid #63001F22",
                  background: "#fff",
                  boxShadow:
                    openQuestion === index
                      ? "0 8px 30px rgba(196,151,58,0.2)"
                      : "0 2px 10px rgba(99,0,31,0.06)",
                  transition: "box-shadow 0.3s, border-color 0.3s",
                }}
              >
                <button
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left transition-colors duration-200"
                  style={{
                    background:
                      openQuestion === index ? "#63001F08" : "transparent",
                  }}
                >
                  <span
                    className="text-base font-semibold pr-6 leading-snug"
                    style={{ color: "#63001F" }}
                  >
                    {item.question}
                  </span>
                  <motion.div
                    animate={{
                      rotate: openQuestion === index ? 45 : 0,
                      background:
                        openQuestion === index ? "#C4973A" : "#63001F",
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xl font-bold"
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
                        className="px-5 pb-5 text-sm leading-relaxed whitespace-pre-line"
                        style={{ color: "#63001Faa" }}
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
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #63001F 0%, #8B0032 100%)",
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
            <p className="text-3xl font-bold text-white mb-3">
              Готовы поступить?
            </p>
            <p className="text-white/70 text-base mb-7">
              Подайте документы и станьте частью нашего колледжа
            </p>
            <a
              href="mailto:info@plit.ru"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{
                background: "#C4973A",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(196,151,58,0.4)",
              }}
            >
              ✉️ Связаться с приёмной комиссией
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Applicants;
