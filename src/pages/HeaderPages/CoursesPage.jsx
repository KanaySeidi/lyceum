import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaRunning, FaGlobe, FaBook, FaClock, FaChevronRight } from "react-icons/fa";

export const MOCK_COURSES = {
  sports: [
    {
      id: "s1",
      title: "Футбол",
      description: "Тренировки на открытом поле. Подходит для начинающих и опытных игроков.",
      fullDescription:
        "Профессиональные тренировки по футболу под руководством опытного тренера. Занятия проходят на открытом поле лицея. Программа охватывает технику владения мячом, тактику игры, физическую подготовку и командную игру. Участники получают спортивную форму и инвентарь.",
      price: 500,
      duration: "3 месяца",
      schedule: "Пн, Ср, Пт — 17:00–19:00",
      level: "Начинающий / Средний",
      category: "sports",
    },
    {
      id: "s2",
      title: "Волейбол",
      description: "Групповые занятия в спортивном зале лицея по вечерам.",
      fullDescription:
        "Волейбольные тренировки в закрытом спортивном зале лицея. Группы формируются по уровню подготовки. В программе: подача, приём, блок, расстановка игроков. Регулярные товарищеские матчи с другими командами города.",
      price: 400,
      duration: "3 месяца",
      schedule: "Вт, Чт — 18:00–20:00",
      level: "Любой уровень",
      category: "sports",
    },
    {
      id: "s3",
      title: "Настольный теннис",
      description: "Индивидуальные и групповые тренировки. Инвентарь предоставляется.",
      fullDescription:
        "Занятия по настольному теннису для всех возрастов. Инвентарь (ракетки, мячи) предоставляется бесплатно. Тренер с международным опытом. Подготовка к городским соревнованиям включена в программу.",
      price: 350,
      duration: "2 месяца",
      schedule: "Пн–Пт — 16:00–17:30",
      level: "Начинающий",
      category: "sports",
    },
  ],
  language: [
    {
      id: "l1",
      title: "Английский язык",
      description: "Курс для уровней A1–B2. Разговорная практика и грамматика.",
      fullDescription:
        "Интенсивный курс английского языка для уровней A1–B2. Занятия включают разговорную практику с носителем языка (онлайн), грамматику, аудирование и письмо. По окончании выдаётся сертификат лицея. Возможна подготовка к международным экзаменам.",
      price: 1200,
      duration: "6 месяцев",
      schedule: "Пн, Ср, Пт — 15:00–16:30",
      level: "A1–B2",
      category: "language",
    },
    {
      id: "l2",
      title: "Кыргызский язык",
      description: "Изучение государственного языка с нуля. Разговорный и письменный курс.",
      fullDescription:
        "Курс государственного языка Кыргызстана для начинающих и продолжающих. Программа охватывает разговорный язык, чтение, письмо и понимание официальных документов. Методика максимально практическая — упор на живую речь.",
      price: 800,
      duration: "4 месяца",
      schedule: "Вт, Чт — 16:00–17:30",
      level: "Начинающий / Средний",
      category: "language",
    },
    {
      id: "l3",
      title: "Русский язык",
      description: "Углублённый курс грамматики и делового письма.",
      fullDescription:
        "Углублённый курс русского языка: орфография, пунктуация, стилистика, деловая переписка. Подходит для тех, кто хочет улучшить грамотность, написать грамотное резюме или деловые письма. Малые группы — максимум 8 человек.",
      price: 900,
      duration: "3 месяца",
      schedule: "Пн, Пт — 17:00–18:30",
      level: "Средний / Продвинутый",
      category: "language",
    },
  ],
  professional: [
    {
      id: "p1",
      title: "Основы программирования",
      description: "Введение в Python. Алгоритмы, структуры данных, первые проекты.",
      fullDescription:
        "Курс даёт прочную базу в программировании на языке Python. Вы изучите синтаксис, типы данных, условия, циклы, функции и ООП. К концу курса напишете 3 мини-проекта: калькулятор, телеграм-бот и парсер данных. Преподаёт действующий разработчик.",
      price: 1500,
      duration: "4 месяца",
      schedule: "Вт, Чт, Сб — 10:00–12:00",
      level: "Начинающий",
      category: "professional",
    },
    {
      id: "p2",
      title: "Веб-разработка",
      description: "HTML, CSS, JavaScript с нуля до первого сайта.",
      fullDescription:
        "Практический курс по созданию сайтов с нуля. Программа: HTML5, CSS3 (Flexbox, Grid), адаптивная вёрстка, основы JavaScript и работа с DOM. Каждый студент публикует свой итоговый сайт в интернет. Возможно трудоустройство через партнёров лицея.",
      price: 1800,
      duration: "5 месяцев",
      schedule: "Пн, Ср, Пт — 10:00–12:30",
      level: "Начинающий",
      category: "professional",
    },
    {
      id: "p3",
      title: "Компьютерная грамотность",
      description: "MS Office, работа с файлами, основы интернета и безопасности.",
      fullDescription:
        "Базовый курс для тех, кто хочет уверенно работать за компьютером. Темы: Windows, файловая система, Word, Excel, PowerPoint, электронная почта, интернет-безопасность. Оптимально для родителей, начинающих специалистов и пенсионеров.",
      price: 600,
      duration: "2 месяца",
      schedule: "Пн–Пт — 09:00–10:30",
      level: "Начинающий",
      category: "professional",
    },
  ],
};

const CATEGORY_META = {
  all:          { label: "Все курсы",             icon: null,                        gradient: "" },
  sports:       { label: "Спортивные",             icon: <FaRunning />,               gradient: "from-[#63001F] to-[#3a0012]" },
  language:     { label: "Языковые",               icon: <FaGlobe />,                 gradient: "from-[#8B0030] to-[#63001F]" },
  professional: { label: "Профессиональные",       icon: <FaBook />,                  gradient: "from-[#63001F] to-[#1a0009]" },
};

const parseCourses = (raw) => {
  try {
    const parsed = raw ? JSON.parse(raw) : null;
    if (parsed && typeof parsed === "object") {
      return {
        sports:       parsed.sports?.length       ? parsed.sports       : MOCK_COURSES.sports,
        language:     parsed.language?.length     ? parsed.language     : MOCK_COURSES.language,
        professional: parsed.professional?.length ? parsed.professional : MOCK_COURSES.professional,
      };
    }
  } catch {}
  return MOCK_COURSES;
};

const getAllCourses = (courses) => [
  ...courses.sports,
  ...courses.language,
  ...courses.professional,
];

const CourseCard = ({ course, onClick }) => {
  const { gradient } = CATEGORY_META[course.category];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(course)}
      className="group bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      {/* Цветная шапка карточки */}
      <div className={`h-32 bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}>
        {course.imagePreview ? (
          <img
            src={course.imagePreview}
            alt={course.title}
            className="w-full h-full object-cover"
            onError={(e) => (e.target.style.display = "none")}
          />
        ) : (
          <span className="text-white/20 text-8xl font-black select-none">
            {course.title[0]}
          </span>
        )}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-bordo transition-colors duration-200">
          {course.title}
        </h3>
        <p className="text-sm text-gray-500 mt-1 line-clamp-2">{course.description}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <FaClock className="shrink-0" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-bordo font-bold text-base">{course.price} сом</span>
            <FaChevronRight className="text-bordo text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesPage = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState(() => parseCourses(localStorage.getItem("courses")));
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const handleStorageChange = () => setCourses(parseCourses(localStorage.getItem("courses")));
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const visibleCourses =
    activeCategory === "all" ? getAllCourses(courses) : courses[activeCategory];

  const handleCardClick = (course) => {
    navigate(`/courses/${course.id}`, { state: { course } });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero */}
      <div className="bg-bordo text-white py-14 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Курсы ПЛИТ
        </motion.h1>
        <motion.p
          className="mt-3 text-white/80 text-lg max-w-xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Развивайте навыки вместе с опытными преподавателями
        </motion.p>
      </div>

      {/* Фильтры */}
      <div className="sticky top-14 z-30 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-6 flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {Object.entries(CATEGORY_META).map(([key, { label, icon }]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeCategory === key
                  ? "bg-bordo text-white shadow"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {icon && <span>{icon}</span>}
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Сетка карточек */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <p className="text-sm text-gray-400 mb-6">{visibleCourses.length} курсов найдено</p>
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
