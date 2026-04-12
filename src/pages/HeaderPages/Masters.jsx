import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Импорты изображений
import teacher1 from "../../assets/img/teacher1.jpg";
import teacher2 from "../../assets/img/teacher2.jpg";
import teacher3 from "../../assets/img/teacher3.jpg";
import teacher4 from "../../assets/img/teacher4.jpg";
import teacher5 from "../../assets/img/teacher5.jpg";
import teacher6 from "../../assets/img/teacher6.jpg";
import teacher7 from "../../assets/img/teacher7.jpg";
import teacher8 from "../../assets/img/teacher8.jpg";
import teacher9 from "../../assets/img/teacher9.jpg";
import teacher10 from "../../assets/img/teacher10.jpg";

const Masters = () => {
  const navigate = useNavigate();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const handleTeacherClick = (teacher) => {
    if (teacher.hasDetails) {
      navigate(`/plit/teachers/${teacher.id - 1}`);
    }
  };

  // Массив преподавателей с импортированными изображениями
  const teachers = [
    {
      id: 1,
      name: "Преподаватель 1",
      role: "Профессор",
      img: teacher1,
      hasDetails: true,
    },
    {
      id: 2,
      name: "Преподаватель 2",
      role: "Доцент",
      img: teacher2,
      hasDetails: true,
    },
    {
      id: 3,
      name: "Преподаватель 3",
      role: "Старший преподаватель",
      img: teacher3,
      hasDetails: false,
    },
    {
      id: 4,
      name: "Преподаватель 4",
      role: "Профессор",
      img: teacher4,
      hasDetails: true,
    },
    {
      id: 5,
      name: "Преподаватель 5",
      role: "Доцент",
      img: teacher5,
      hasDetails: false,
    },
    {
      id: 6,
      name: "Преподаватель 6",
      role: "Преподаватель",
      img: teacher6,
      hasDetails: true,
    },
    {
      id: 7,
      name: "Преподаватель 7",
      role: "Профессор",
      img: teacher7,
      hasDetails: false,
    },
    {
      id: 8,
      name: "Преподаватель 8",
      role: "Доцент",
      img: teacher8,
      hasDetails: true,
    },
    {
      id: 9,
      name: "Преподаватель 9",
      role: "Старший преподаватель",
      img: teacher9,
      hasDetails: false,
    },
    {
      id: 10,
      name: "Преподаватель 10",
      role: "Преподаватель",
      img: teacher10,
      hasDetails: true,
    },
  ];

  return (
    <div className="relative w-full py-4 bg-gray-200">
      <div className="w-full flex justify-center text-xl mb-4">
        <p className="text-[#63001F] font-bold">Наши преподаватели</p>
      </div>

      <div
        ref={prevRef}
        className="swiper-button-prev-custom absolute top-1/2 left-6 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer"
      >
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>

      <div
        ref={nextRef}
        className="swiper-button-next-custom absolute top-1/2 right-6 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100 cursor-pointer"
      >
        <svg
          className="w-5 h-5 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        pagination={{ clickable: true }}
        spaceBetween={1}
        slidesPerView={4}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 1 },
          640: { slidesPerView: 2, spaceBetween: 1 },
          868: { slidesPerView: 4, spaceBetween: 1 },
          1024: { slidesPerView: 4, spaceBetween: 1 },
        }}
      >
        {teachers.map((teacher, idx) => (
          <SwiperSlide key={idx}>
            <div
              onClick={() => handleTeacherClick(teacher)}
              className={`flex flex-col items-center text-center bg-gray-50 p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-[320px] mx-auto mb-8 ${
                teacher.hasDetails ? "cursor-pointer" : ""
              }`}
            >
              <img
                src={teacher.img}
                alt={teacher.name}
                className="mb-3 w-full h-72 md:h-64 lg:h-72 object-cover rounded-lg transition-transform duration-300 hover:scale-105"
              />
              <p className="font-bold text-lg text-[#63001F]">{teacher.name}</p>
              <p className="text-gray-600 mt-2 text-base">{teacher.role}</p>
              {teacher.hasDetails && (
                <span className="text-sm text-blue-600 mt-2">
                  Нажмите для подробной информации
                </span>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Masters;
