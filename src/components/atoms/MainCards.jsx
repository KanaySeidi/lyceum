import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ArrowUpRight } from "lucide-react";

import imgFront   from "../../assets/img/front.png";
import imgBack    from "../../assets/img/back.jpg";
import imgMobile  from "../../assets/img/mobDevelop.webp";
import imgMech    from "../../assets/img/mechRab.png";
import imgTD      from "../../assets/img/td.png";
import imgSisAdm  from "../../assets/img/sisAdm.png";
import imgInfo    from "../../assets/img/Information.jpg";
import imgAuto    from "../../assets/img/CarMechanic.jpg";
import imgExploit from "../../assets/img/exploitation1.jpg";

const DIRECTIONS = [
  { id: 1, titleKey: "front.name",          img: imgFront,   path: "/fr" },
  { id: 2, titleKey: "backend.name",        img: imgBack,    path: "/br" },
  { id: 3, titleKey: "mobDevelopment.name", img: imgMobile,  path: "/md" },
  { id: 4, titleKey: "MechRob.name",        img: imgMech,    path: "/mr" },
  { id: 5, titleKey: "TD.name",             img: imgTD,      path: "/td" },
  { id: 6, titleKey: "SisAdm.name",         img: imgSisAdm,  path: "/sa" },
  { id: 7, titleKey: "Information.name",    img: imgInfo,    path: "/in" },
  { id: 8, titleKey: "AutoMechanic.name",   img: imgAuto,    path: "/am" },
  { id: 9, titleKey: "exploitation.name",   img: imgExploit, path: "/ex" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" },
  }),
};

const TiltCard = ({ item, index }) => {
  const { t } = useTranslation();
  const cardRef = useRef(null);
  const [rotate, setRotate]   = useState({ x: 0, y: 0 });
  const [glow, setGlow]       = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;
    const ny = (e.clientY - rect.top)  / rect.height;
    setRotate({ x: (ny - 0.5) * 12, y: (nx - 0.5) * -12 });
    setGlow({ x: nx * 100, y: ny * 100 });
  };

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlow({ x: 50, y: 50 });
    setHovered(false);
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onMouseLeave}
        animate={{ rotateX: rotate.x, rotateY: rotate.y }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative h-56 sm:h-64 rounded-2xl overflow-hidden cursor-pointer"
      >
        <Link to={item.path} className="block w-full h-full">

          {/* Картинка */}
          <img
            src={item.img}
            alt={t(item.titleKey)}
            loading="lazy"
            className={`w-full h-full object-cover transition-transform duration-700 ${
              hovered ? "scale-110" : "scale-100"
            }`}
          />

          {/* Постоянный градиент снизу */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Золотое свечение под курсором */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: hovered ? 1 : 0,
              background: `radial-gradient(circle at ${glow.x}% ${glow.y}%,
                rgba(196,151,58,0.25) 0%, transparent 60%)`,
            }}
          />

          {/* Золотая рамка при ховере */}
          <div
            className="absolute inset-0 rounded-2xl transition-all duration-300 pointer-events-none"
            style={{
              boxShadow: hovered
                ? "inset 0 0 0 2px #C4973A, 0 0 25px rgba(196,151,58,0.3)"
                : "inset 0 0 0 1px rgba(255,255,255,0.08)",
            }}
          />

          {/* Номер */}
          <span
            className="absolute top-4 left-5 font-black text-4xl sm:text-5xl select-none transition-all duration-300"
            style={{
              color: hovered ? "rgba(196,151,58,0.6)" : "rgba(255,255,255,0.1)",
              transform: "translateZ(20px)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>

          {/* Контент внизу */}
          <div
            className="absolute bottom-0 left-0 right-0 p-4 sm:p-5"
            style={{ transform: "translateZ(15px)" }}
          >
            <h3 className="text-white font-bold text-sm sm:text-base leading-snug line-clamp-2">
              {t(item.titleKey)}
            </h3>

            <div
              className={`flex items-center gap-1.5 mt-2 transition-all duration-300 ${
                hovered ? "sm:opacity-100 sm:translate-y-0" : "sm:opacity-0 sm:translate-y-1.5"
              } opacity-100 translate-y-0`}
              style={{
                transform: hovered ? "translateZ(15px)" : undefined,
              }}
            >
              <span className="text-white text-sm font-semibold">{t("common.more")}</span>
              <ArrowUpRight size={14} className="text-white" />
            </div>
          </div>

        </Link>
      </motion.div>
    </motion.div>
  );
};

const MainCards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <div ref={ref} className="max-w-7xl mx-auto" style={{ perspective: "1200px" }}>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-2"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: {}, hidden: {} }}
      >
        {DIRECTIONS.map((item, index) => (
          <TiltCard key={item.id} item={item} index={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default MainCards;
