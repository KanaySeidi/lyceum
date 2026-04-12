import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ChevronDown } from "lucide-react";

/* ─── Обёртка с анимацией при появлении ────────────────────── */
const Reveal = ({ children, className = "", delay = 0, x = 0, y = 40 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── Карточка уровня программы ────────────────────────────── */
const LevelCard = ({ num, text, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className="rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition-colors duration-300"
    >
      <p className="text-5xl font-black leading-none mb-4" style={{ color: "#C4973A" }}>
        {num}
      </p>
      <p className="text-white/85 text-sm leading-relaxed">{text}</p>
    </motion.div>
  );
};

/* ─── Карточка зарплаты ─────────────────────────────────────── */
const SalaryCard = ({ label, text, variant, delay }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  const base = "relative rounded-2xl p-6 shadow-lg overflow-hidden";
  const themes = {
    junior: `${base} bg-white border border-gray-100`,
    middle: `${base} bg-bordo text-white`,
    senior: `${base} text-bordo`,
  };
  const labelColor = { junior: "text-bordo", middle: "text-gold", senior: "text-bordo" };
  const textColor  = { junior: "text-gray-600", middle: "text-white/80", senior: "text-bordo/80" };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={themes[variant]}
      style={variant === "senior" ? {
        background: "linear-gradient(135deg, #C4973A 0%, #e0b558 50%, #C4973A 100%)"
      } : {}}
    >
      {variant === "senior" && (
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #fff, transparent)" }} />
      )}
      <p className={`text-xs font-black uppercase tracking-widest mb-3 ${labelColor[variant]}`}>
        {label}
      </p>
      <p className={`text-sm leading-relaxed ${textColor[variant]}`}>{text}</p>
    </motion.div>
  );
};

/* ─── Главный компонент ─────────────────────────────────────── */
const DirectionPage = ({
  image, image1,
  name, title, text, tagline,
  master, lvl1, lvl2, lvl3,
  salary, junior, middle, senior,
}) => {
  const heroRef    = useRef(null);
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY       = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gray-50">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <div ref={heroRef} className="relative w-full h-screen overflow-hidden">
        <motion.img
          src={image}
          alt={name}
          style={{ y: heroY }}
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bordo via-bordo/55 to-black/40" />

        {/* Назад */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute top-20 left-6 z-20 flex items-center gap-2 px-4 py-2
                       bg-white/10 backdrop-blur-md border border-white/25 rounded-full
                       text-white text-sm font-medium hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft size={15} />
            Назад
          </motion.div>
        </Link>

        {/* Центр героя */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-gold text-xs font-bold uppercase tracking-[0.45em] mb-5"
          >
            ПЛИТ №99
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight max-w-4xl"
          >
            {name}
          </motion.h1>

          {tagline && (
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="mt-5 text-white/70 text-base md:text-xl max-w-2xl leading-relaxed"
            >
              {tagline}
            </motion.p>
          )}
        </motion.div>

        {/* Стрелка вниз — кликабельная */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          aria-label="Прокрутить вниз"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60
                     hover:text-gold transition-colors duration-300 cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.button>
      </div>

      {/* ── О НАПРАВЛЕНИИ ────────────────────────────────────── */}
      <div ref={contentRef} className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <Reveal x={-30} y={0}>
              <div className="relative group">
                <div className="absolute -inset-3 rounded-3xl bg-bordo/8
                                group-hover:bg-gold/8 transition-colors duration-500 -z-10" />
                <img
                  src={image1}
                  alt={title}
                  className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gold/30 rounded-2xl -z-10" />
              </div>
            </Reveal>

            <Reveal x={30} y={0} delay={0.15}>
              <div className="flex items-center gap-2 bg-bordo/5 border border-bordo/15
                              rounded-full px-4 py-1.5 mb-6 w-fit">
                <div className="w-2 h-2 rounded-full bg-bordo" />
                <span className="text-bordo text-xs font-bold uppercase tracking-widest">
                  О направлении
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-5 leading-snug">
                {title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {text}
              </p>
            </Reveal>

          </div>
        </div>
      </div>

      {/* ── ПРОГРАММА ОБУЧЕНИЯ ───────────────────────────────── */}
      <div className="w-full py-20 px-6"
        style={{ background: "linear-gradient(135deg, #63001F 0%, #3d0012 100%)" }}>
        <div className="max-w-3xl mx-auto">

          <Reveal className="text-center mb-12">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.45em]">
              Учебная программа
            </span>
            <h2 className="text-white text-2xl md:text-4xl font-extrabold mt-3">
              {master}
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-gold rounded-full" />
          </Reveal>

          <div className="flex flex-col gap-4">
            <LevelCard num="01" text={lvl1} delay={0.1} />
            <LevelCard num="02" text={lvl2} delay={0.2} />
            <LevelCard num="03" text={lvl3} delay={0.3} />
          </div>

        </div>
      </div>

      {/* ── ЗАРПЛАТЫ ─────────────────────────────────────────── */}
      <div className="w-full bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <Reveal className="text-center mb-12">
            <span className="text-gold text-xs font-bold uppercase tracking-[0.45em] mb-3 block">
              Карьерные перспективы
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900">
              {salary}
            </h2>
            <div className="mx-auto mt-4 h-0.5 w-12 bg-bordo rounded-full" />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <SalaryCard label="Junior" text={junior} variant="junior" delay={0.1} />
            <SalaryCard label="Middle" text={middle} variant="middle" delay={0.2} />
            <SalaryCard label="Senior" text={senior} variant="senior" delay={0.3} />
          </div>

        </div>
      </div>

    </div>
  );
};

export default DirectionPage;
