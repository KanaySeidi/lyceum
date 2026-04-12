import { useParams, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaClock, FaCalendarAlt, FaSignal, FaArrowLeft, FaPhone } from "react-icons/fa";
import { MOCK_COURSES } from "./CoursesPage";

const CATEGORY_META = {
  sports:       { label: "Спортивный",       gradient: "from-[#63001F] to-[#3a0012]" },
  language:     { label: "Языковой",         gradient: "from-[#8B0030] to-[#63001F]" },
  professional: { label: "Профессиональный", gradient: "from-[#63001F] to-[#1a0009]" },
};

const getAllCourses = () => [
  ...MOCK_COURSES.sports,
  ...MOCK_COURSES.language,
  ...MOCK_COURSES.professional,
];

const InfoRow = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 py-3 border-b border-gray-100 last:border-0">
    <div className="mt-0.5 text-bordo shrink-0">{icon}</div>
    <div>
      <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
      <p className="text-gray-800 font-semibold mt-0.5">{value}</p>
    </div>
  </div>
);

const CourseDetailPage = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  // Берём из state (быстро) или ищем в моках (при прямом переходе по URL)
  const course = state?.course ?? getAllCourses().find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
        <p className="text-xl text-gray-600">Курс не найден</p>
        <button
          onClick={() => navigate("/courses")}
          className="flex items-center gap-2 text-bordo font-semibold hover:underline"
        >
          <FaArrowLeft /> Назад к курсам
        </button>
      </div>
    );
  }

  const { gradient, label: categoryLabel } = CATEGORY_META[course.category] ?? CATEGORY_META.professional;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero */}
      <div className={`relative bg-gradient-to-br ${gradient} text-white`}>
        <div className="max-w-4xl mx-auto px-6 pt-10 pb-16">
          <button
            onClick={() => navigate("/courses")}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 mb-8 text-sm font-medium"
          >
            <FaArrowLeft />
            Все курсы
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              {categoryLabel}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">{course.title}</h1>
            <p className="mt-4 text-white/80 text-lg max-w-2xl">{course.description}</p>
          </motion.div>
        </div>

        {/* Волна снизу */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gray-100 rounded-t-[2rem]" />
      </div>

      {/* Контент */}
      <div className="max-w-4xl mx-auto px-6 -mt-2 pb-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {/* Описание */}
          <div className="md:col-span-2 bg-white rounded-2xl shadow-sm p-6 space-y-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">О курсе</h2>
              <p className="text-gray-600 leading-relaxed">{course.fullDescription}</p>
            </div>
          </div>

          {/* Боковая панель */}
          <div className="flex flex-col gap-4">
            {/* Цена и запись */}
            <div className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <p className="text-3xl font-extrabold text-bordo">{course.price} <span className="text-lg font-semibold">сом</span></p>
              <p className="text-xs text-gray-400 mt-1">за весь курс</p>
              <a
                href="tel:+996312123456"
                className="mt-4 flex items-center justify-center gap-2 w-full bg-bordo text-white font-semibold py-3 rounded-xl hover:bg-red-900 transition-colors duration-200"
              >
                <FaPhone />
                Записаться
              </a>
            </div>

            {/* Детали */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h3 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Детали</h3>
              <InfoRow icon={<FaClock />}       label="Длительность" value={course.duration} />
              <InfoRow icon={<FaCalendarAlt />} label="Расписание"   value={course.schedule} />
              <InfoRow icon={<FaSignal />}      label="Уровень"      value={course.level} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
