import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import HeroSection from "./common/HeroSection";


function AboutPage() {
  const { t, i18n } = useTranslation();
  const [showVideo, setShowVideo] = useState(false);
  const [aboutData, setAboutData] = useState(null);

  // Загрузка данных из localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("aboutData");
    if (savedData) {
      setAboutData(JSON.parse(savedData));
    }
  }, []);

  if (!aboutData) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <p className="text-xl text-gray-600">Загрузка...</p>
      </motion.div>
    );
  }

  const currentLang = i18n.language === "KG" ? "translation" : "text";

  const handleApplicationClick = () => {
    alert(aboutData.form.application[currentLang] + " clicked!");
  };

  const handleRequestInfoClick = () => {
    alert(aboutData.form.requestInfo[currentLang] + " clicked!");
  };

  const handleVisitClick = () => {
    alert(aboutData.form.visit[currentLang] + " clicked!");
  };

  const handleExploreHistoryClick = () => {
    alert(aboutData.history.button[currentLang] + " clicked!");
  };

  const handleLearnMoreClick = () => {
    alert(aboutData.mission.button[currentLang] + " clicked!");
  };

  const handleImageError = (e) => {
    if (!e.target.dataset.errorHandled) {
      e.target.src = "https://placehold.co/300x300?text=No+Image";
      e.target.dataset.errorHandled = "true";
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <HeroSection
        title={aboutData.hero.title[currentLang]}
        subtitle={aboutData.hero.subtitle[currentLang]}
        backgroundImage="/assets/img/About/img_section.png"
        overlayColor="bg-bordo"
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* University Description */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="space-y-6">
            {aboutData.description.map((item, idx) => (
              <p
                key={idx}
                className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed"
              >
                {item[currentLang]}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          className="py-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.imageGallery.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <img
                  src={item.src}
                  alt={item.alt[currentLang]}
                  className="w-full h-80 object-cover"
                  onError={handleImageError}
                />
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Statistics Section */}
      <motion.section
        className="bg-bordo text-white py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {aboutData.statistics.map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-5xl md:text-6xl font-bold mb-4">
                  {stat.key === "students"
                    ? "4k+"
                    : stat.key === "lyceum"
                    ? "#1"
                    : "40+"}
                </h3>
                <p className="text-sm font-semibold uppercase tracking-wider">
                  {stat.value[currentLang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* History Section */}
      <motion.section
        className="bg-gray-50 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="/assets/img/About/img_image.png"
                alt={aboutData.history.title[currentLang]}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                onError={handleImageError}
              />
            </motion.div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {aboutData.history.title[currentLang]}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {aboutData.history.text[currentLang]}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleExploreHistoryClick}
                className="text-lg font-medium text-bordo hover:text-bordo transition-colors border-b-2 border-bordo pb-1 flex items-center"
              >
                {aboutData.history.button[currentLang]}{" "}
                <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-bordo p-8 md:p-12 rounded-lg text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {aboutData.mission.title[currentLang]}
              </h2>
              <p className="text-lg leading-relaxed mb-8">
                {aboutData.mission.text[currentLang]}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleLearnMoreClick}
                className="text-lg font-medium text-white hover:text-gray-200 transition-colors flex items-center"
              >
                {aboutData.mission.button[currentLang]}{" "}
                <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <img
                src="/assets/img/About/img_alexisbrownxv7k95vofaunsplashjpg.png"
                alt={aboutData.mission.title[currentLang]}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
                onError={handleImageError}
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Campus Section */}
      <motion.section
        className="py-20 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl md:text-8xl font-bold text-gray-900 mb-12 uppercase tracking-wider">
            {aboutData.campusMedia[0].caption[currentLang]}
          </h2>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative mx-auto max-w-4xl cursor-pointer rounded-lg shadow-lg overflow-hidden"
            style={{ height: "24rem" }}
            onClick={() => setShowVideo(true)}
          >
            <img
              src="/assets/img/About/img_.png"
              alt="Campus Preview"
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="w-24 h-24 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
              >
                <FaPlay className="w-12 h-12 text-bordo" />
              </motion.button>
            </div>
          </motion.div>

          <AnimatePresence>
            {showVideo && (
              <>
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-75 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowVideo(false)}
                />
                <motion.div
                  className="fixed inset-0 flex items-center justify-center z-50 px-4"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                >
                  <div className="relative w-full max-w-3xl aspect-video rounded-lg shadow-2xl bg-black">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`${aboutData.campusMedia[0].src}?autoplay=1`}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="rounded-lg"
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      onClick={() => setShowVideo(false)}
                      className="absolute -top-4 -right-4 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-xl text-gray-600"
                    >
                      ×
                    </motion.button>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Student Testimonial */}
      <motion.section
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-yellow-400 w-60 h-56 absolute top-8 left-8 rounded-lg z-0"></div>
              <FaQuoteLeft className="absolute top-0 left-0 w-20 h-20 text-gray-300 z-10" />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="/assets/img/About/img_icons8teamfclyt7lw5wgunsplashjpg.png"
                alt={aboutData.testimonial.name[currentLang]}
                className="relative z-20 w-96 h-96 object-cover rounded-lg shadow-lg"
                onError={handleImageError}
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                {aboutData.testimonial.name[currentLang]}
              </h3>
              <p className="text-sm text-gray-600 uppercase tracking-wider">
                {aboutData.testimonial.degree[currentLang]}
              </p>
              <blockquote className="text-xl md:text-2xl font-semibold text-gray-800 leading-relaxed">
                {aboutData.testimonial.quote[currentLang]}
              </blockquote>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default AboutPage;
