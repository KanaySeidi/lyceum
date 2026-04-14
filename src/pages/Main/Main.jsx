import { Atom, Calendar1, Contact, Handshake } from "lucide-react";
import { useTranslation } from "react-i18next";
import TagCloud from "../../components/molecules/WordSphere";
import MainCards from "../../components/atoms/MainCards";
import ContactSection from "../../components/molecules/ContactSection";
import hero from "../../assets/img/hero.png";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StatItem = ({ icon, end, label, useGrouping = true, isInView }) => (
  <div className="flex gap-3 items-center min-w-0">
    <div className="shrink-0">{icon}</div>
    <div className="flex flex-col">
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
        {isInView && <CountUp start={0} end={end} duration={2} useGrouping={useGrouping} />}
      </p>
      <p className="text-sm sm:text-base text-white/80 leading-snug">{label}</p>
    </div>
  </div>
);

const Main = () => {
  const { t } = useTranslation();

  const heroTextRef   = useRef(null);
  const statsRef      = useRef(null);
  const missionRef    = useRef(null);
  const directionRef  = useRef(null);

  const isHeroTextInView  = useInView(heroTextRef,  { once: true, margin: "-50px" });
  const isStatsInView     = useInView(statsRef,     { once: true, margin: "-50px" });
  const isMissionInView   = useInView(missionRef,   { once: true, margin: "-50px" });
  const isDirectionInView = useInView(directionRef, { once: true, margin: "-50px" });

  const fadeInUp = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="w-full bg-gray-50">

      {/* ── HERO ── */}
      <div className="w-full h-[260px] sm:h-[320px] md:h-[440px] lg:h-[520px] relative">
        <img src={hero} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
        <motion.div
          ref={heroTextRef}
          className="absolute inset-0 flex flex-col justify-end pb-8 sm:pb-12 md:pb-16 px-4 sm:px-8 md:px-16 max-w-2xl"
          variants={fadeInUp}
          initial="hidden"
          animate={isHeroTextInView ? "visible" : "hidden"}
        >
          <p className="text-white text-sm sm:text-base md:text-lg font-medium mb-1 sm:mb-2">{t("PLIT")}</p>
          <p className="text-white text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            {t("PLITDeviz")}
          </p>
        </motion.div>
      </div>

      {/* ── СТАТИСТИКА ── */}
      <div className="w-full px-4 sm:px-6">
        <motion.div
          ref={statsRef}
          className="max-w-6xl mx-auto -mt-6 sm:-mt-10 relative z-10 rounded-2xl px-5 py-6 sm:py-8"
          style={{ background: "#1A3FA0", boxShadow: "0 8px 40px rgba(26,63,160,0.35)" }}
          variants={fadeInUp}
          initial="hidden"
          animate={isStatsInView ? "visible" : "hidden"}
        >
          <p className="text-white/80 text-center text-sm sm:text-base font-semibold mb-5 sm:mb-6">
            {t("PLITNum")}
          </p>
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <StatItem icon={<Calendar1 color="white" size={36} />} end={1971} label={t("numCard1")} useGrouping={false} isInView={isStatsInView} />
            <StatItem icon={<Atom      color="white" size={36} />} end={630}  label={t("numCard2")} isInView={isStatsInView} />
            <StatItem icon={<Contact   color="white" size={36} />} end={10000} label={t("numCard3")} isInView={isStatsInView} />
            <StatItem icon={<Handshake color="white" size={36} />} end={20}   label={t("numCard4")} isInView={isStatsInView} />
          </div>
        </motion.div>
      </div>

      {/* ── МИССИЯ ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 mb-10">
        <motion.div
          ref={missionRef}
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
          variants={fadeInUp}
          initial="hidden"
          animate={isMissionInView ? "visible" : "hidden"}
        >
          <div className="w-full lg:w-1/2">
            <p className="text-[#1A3FA0] text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5">
              {t("ourMission")}
            </p>
            <p className="text-[#1A3FA0] text-base sm:text-lg font-semibold mb-2 sm:mb-3">
              {t("keyOfSuccess")}
            </p>
            <p className="text-justify text-sm sm:text-base leading-relaxed text-[#1A3FA0]/80">
              {t("keyOfSuccessText")}
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center" aria-hidden="true">
            <TagCloud />
          </div>
        </motion.div>
      </div>

      {/* ── НАПРАВЛЕНИЯ ── */}
      <motion.div
        ref={directionRef}
        className="w-full py-14 sm:py-16 md:py-20 px-4 sm:px-6"
        style={{ background: "#1A3FA0" }}
        variants={fadeInUp}
        initial="hidden"
        animate={isDirectionInView ? "visible" : "hidden"}
      >
        <div className="max-w-7xl mx-auto mb-10 sm:mb-14 text-center">
          <span className="inline-block text-gold font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-xs sm:text-sm mb-3">
            {t("common.plit99")}
          </span>
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">
            {t("ourDirection")}
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-14 bg-gold rounded-full" />
        </div>
        <MainCards />
      </motion.div>

      <ContactSection />
    </div>
  );
};

export default Main;
