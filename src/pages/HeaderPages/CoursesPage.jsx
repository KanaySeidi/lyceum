import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaRunning, FaGlobe, FaBook, FaClock, FaChevronRight } from "react-icons/fa";

const COURSE_META = {
  sports: [
    { id: "s1", price: 500,  image: "/courses/s1.jpg" },
    { id: "s2", price: 400,  image: "/courses/s2.jpg" },
    { id: "s3", price: 350,  image: "/courses/s3.jpg" },
  ],
  language: [
    { id: "l1", price: 1200, image: "/courses/l1.jpg" },
    { id: "l2", price: 800,  image: "/courses/l2.jpg" },
    { id: "l3", price: 900,  image: "/courses/l3.jpg" },
  ],
  professional: [
    { id: "p1", price: 1500, image: "/courses/p1.jpg" },
    { id: "p2", price: 1800, image: "/courses/p2.jpg" },
    { id: "p3", price: 600,  image: "/courses/p3.jpg" },
  ],
};

export const getMockCourses = (t) =>
  Object.fromEntries(
    Object.entries(COURSE_META).map(([category, courses]) => [
      category,
      courses.map((course) => ({
        ...course,
        category,
        imagePreview: course.image,
        title: t(`coursesPage.mock.${course.id}.title`),
        description: t(`coursesPage.mock.${course.id}.description`),
        fullDescription: t(`coursesPage.mock.${course.id}.fullDescription`),
        duration: t(`coursesPage.mock.${course.id}.duration`),
        schedule: t(`coursesPage.mock.${course.id}.schedule`),
        level: t(`coursesPage.mock.${course.id}.level`),
      })),
    ])
  );

export const MOCK_COURSES = getMockCourses((key) => key);

const CATEGORY_META = {
  all:          { labelKey: "coursesPage.categories.all",          icon: null,          gradient: "" },
  sports:       { labelKey: "coursesPage.categories.sports",       icon: <FaRunning />, gradient: "from-[#1A3FA0] to-[#3a0012]" },
  language:     { labelKey: "coursesPage.categories.language",     icon: <FaGlobe />,   gradient: "from-[#8B0030] to-[#1A3FA0]" },
  professional: { labelKey: "coursesPage.categories.professional", icon: <FaBook />,    gradient: "from-[#1A3FA0] to-[#1a0009]" },
};

const parseCourses = (raw, mockCourses) => {
  try {
    const parsed = raw ? JSON.parse(raw) : null;
    if (parsed && typeof parsed === "object") {
      return {
        sports:       parsed.sports?.length       ? parsed.sports       : mockCourses.sports,
        language:     parsed.language?.length     ? parsed.language     : mockCourses.language,
        professional: parsed.professional?.length ? parsed.professional : mockCourses.professional,
      };
    }
  } catch {}
  return mockCourses;
};

const getAllCourses = (courses) => [
  ...courses.sports,
  ...courses.language,
  ...courses.professional,
];

const CourseCard = ({ course, onClick }) => {
  const { t } = useTranslation();
  const { icon } = CATEGORY_META[course.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(course)}
      className="group bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300"
      style={{ border: "2px solid transparent" }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "#C4973A"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "transparent"}
    >
      {/* Фото */}
      <div className="relative h-44 overflow-hidden bg-[#1A3FA0]">
        {course.imagePreview ? (
          <img
            src={course.imagePreview}
            alt={course.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #1A3FA0 0%, #0F2E8F 100%)" }}>
            <span className="text-white/20 text-8xl font-black select-none">{course.title[0]}</span>
          </div>
        )}
        {/* Градиент снизу */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        {/* Категория badge */}
        <div className="absolute top-3 left-3">
          <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ background: "#1A3FA0CC", color: "#fff", backdropFilter: "blur(4px)" }}>
            {icon && <span>{icon}</span>}
            {t(CATEGORY_META[course.category].labelKey)}
          </span>
        </div>
        {/* Цена поверх фото */}
        <div className="absolute bottom-3 right-3">
          <span className="text-sm font-bold px-2.5 py-1 rounded-full"
            style={{ background: "#C4973A", color: "#fff" }}>
            {course.price} {t("coursesPage.currency")}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-base font-bold text-gray-900 group-hover:text-[#1A3FA0] transition-colors duration-200 line-clamp-2 min-h-[2.5rem]">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">{course.description}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <FaClock className="shrink-0" />
            <span>{course.duration}</span>
          </div>
          <span className="text-xs font-bold flex items-center gap-1 transition-all duration-200 whitespace-nowrap"
            style={{ color: "#1A3FA0" }}>
            {t("common.more")}
            <FaChevronRight className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [courses, setCourses] = useState(() => parseCourses(localStorage.getItem("courses"), getMockCourses(t)));
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const handleStorageChange = () => setCourses(parseCourses(localStorage.getItem("courses"), getMockCourses(t)));
    handleStorageChange();
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [i18n.language, t]);

  const visibleCourses =
    activeCategory === "all" ? getAllCourses(courses) : courses[activeCategory];

  const handleCardClick = (course) => {
    navigate(`/courses/${course.id}`, { state: { course } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero */}
      <div className="bg-[#1A3FA0] text-white py-10 sm:py-14 px-4 sm:px-6 text-center">
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t("coursesPage.title")}
        </motion.h1>
        <motion.p
          className="mt-3 text-white/80 text-sm sm:text-lg max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {t("coursesPage.subtitle")}
        </motion.p>
      </div>

      {/* Фильтры */}
      <div className="sticky top-14 z-30 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {Object.entries(CATEGORY_META).map(([key, { labelKey, icon }]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === key
                  ? "bg-[#1A3FA0] text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {icon && <span>{icon}</span>}
              {t(labelKey)}
            </button>
          ))}
        </div>
      </div>

      {/* Сетка карточек */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
        <p className="text-sm text-gray-400 mb-4 sm:mb-6">
          {t("coursesPage.foundLabel", { count: visibleCourses.length })}
        </p>
        <motion.div
          layout
          className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleCourses.map((course) => (
              <CourseCard key={course.id} course={course} onClick={handleCardClick} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursesPage;
