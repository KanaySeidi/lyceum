import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaClock, FaCalendarAlt, FaSignal, FaArrowLeft, FaPhone } from "react-icons/fa";
import { getMockCourses } from "./CoursesPage";

const CATEGORY_META = {
  sports:       { labelKey: "coursesPage.detail.categories.sports" },
  language:     { labelKey: "coursesPage.detail.categories.language" },
  professional: { labelKey: "coursesPage.detail.categories.professional" },
};

const getAllCourses = (t) => [
  ...getMockCourses(t).sports,
  ...getMockCourses(t).language,
  ...getMockCourses(t).professional,
];

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
    <div className="mt-0.5 text-[#1A3FA0] shrink-0">{icon}</div>
    <div>
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
      <p className="text-gray-800 font-semibold mt-0.5">{value}</p>
    </div>
  </div>
);

const CourseDetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Берём из state (быстро) или ищем в моках (при прямом переходе по URL)
  const localizedCourse = getAllCourses(t).find((c) => c.id === id);
  const course = localizedCourse ?? state?.course;

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
        <p className="text-xl text-gray-600">{t("coursesPage.detail.notFound")}</p>
        <button
          onClick={() => navigate("/courses")}
          className="flex items-center gap-2 text-[#1A3FA0] font-semibold hover:underline"
        >
          <FaArrowLeft /> {t("coursesPage.detail.backToCourses")}
        </button>
      </div>
    );
  }

  const { labelKey } = CATEGORY_META[course.category] ?? CATEGORY_META.professional;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero с фото */}
      <div className="relative overflow-hidden" style={{ minHeight: "clamp(300px, 56svh, 420px)" }}>
        {/* Фото фон */}
        {course.imagePreview ? (
          <img
            src={course.imagePreview}
            alt={course.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1A3FA0 0%, #0F2E8F 100%)" }} />
        )}
        {/* Тёмный оверлей */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,46,143,0.92) 0%, rgba(26,63,160,0.7) 50%, rgba(0,0,0,0.3) 100%)" }} />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10 pb-14 sm:pb-20">
          <button
            onClick={() => navigate("/courses")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 mb-6 sm:mb-8 text-sm font-medium"
          >
            <FaArrowLeft />
            {t("coursesPage.detail.allCourses")}
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide"
              style={{ background: "#C4973A", color: "#fff" }}>
              {t(labelKey)}
            </span>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">{course.title}</h1>
            <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">{course.description}</p>
          </motion.div>
        </div>

        {/* Волна снизу */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-100 rounded-t-[2rem]" />
      </div>

      {/* Контент */}
      <div className="max-w-4xl mx-auto px-3 sm:px-6 -mt-2 pb-10 sm:pb-16">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {/* Описание */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-4 sm:p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{t("coursesPage.detail.aboutCourse")}</h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{course.fullDescription}</p>
            </div>
          </div>

          {/* Боковая панель */}
          <div className="flex flex-col gap-4">
            {/* Цена и запись */}
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1A3FA0]">{course.price} <span className="text-base sm:text-lg font-semibold">{t("coursesPage.currency")}</span></p>
              <p className="text-xs text-gray-400 mt-1">{t("coursesPage.detail.fullCourse")}</p>
              <a
                href="tel:+996312123456"
                className="mt-4 flex items-center justify-center gap-2 w-full bg-[#1A3FA0] text-white font-semibold py-3 rounded-xl hover:bg-blue-800 transition-colors duration-200"
              >
                <FaPhone />
                {t("coursesPage.detail.enroll")}
              </a>
            </div>

            {/* Детали */}
            <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">{t("coursesPage.detail.details")}</h3>
              <InfoRow icon={<FaClock />}       label={t("coursesPage.detail.duration")} value={course.duration} />
              <InfoRow icon={<FaCalendarAlt />} label={t("coursesPage.detail.schedule")} value={course.schedule} />
              <InfoRow icon={<FaSignal />}      label={t("coursesPage.detail.level")} value={course.level} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
