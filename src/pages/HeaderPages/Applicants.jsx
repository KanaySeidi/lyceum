import React, { useState } from "react"; // Добавляем useState
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Surfacing/Modal";
import { useTranslation } from "react-i18next";

const Applicants = () => {
  const { t } = useTranslation();
  const [openQuestion, setOpenQuestion] = useState(null);

  return (
    <>
      <div className="bg-gray-400 mx-auto p-6">
        <div className="max-w-7xl mx-auto p-6 bg-gray-50 rounded-3xl shadow-inner">
          <h1 className="text-4xl font-bold text-end mb-10 text-bordo">
            {t("withStudents.applicants")}
          </h1>

          <div className="flex flex-wrap justify-between gap-8">
            {/* Левая колонка */}
            <div className="w-full md:w-[55%] space-y-8">
              <div className="bg-white text-gray-800 rounded-3xl shadow-[6px_6px_12px_rgba(128,0,32,0.15)] p-4 sm:p-6 border border-gray-100">
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  {t("withStudents.applicantstime")}
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-[6px_6px_12px_rgba(128,0,32,0.15)] p-6 border border-gray-100 flex justify-center">
                <Modal
                  title={
                    <div className="text-center mb-4">
                      <h2 className="text-xl font-semibold text-black">
                        {t("withStudents.applicantsdoc")}
                      </h2>
                    </div>
                  }
                  titledescription={
                    <ul className="list-decimal list-inside space-y-2 text-black text-base leading-relaxed">
                      <li>{t("withStudents.applicantsdoc1")}</li>
                      <li>{t("withStudents.applicantsdoc2")}</li>
                      <li>{t("withStudents.applicantsdoc3")}</li>
                      <li>{t("withStudents.applicantsdoc4")}</li>
                      <li>{t("withStudents.applicantsdoc5")}</li>
                      <li>{t("withStudents.applicantsdoc6")}</li>
                      <li>{t("withStudents.applicantsdoc7")}</li>
                    </ul>
                  }
                  triggerLabel={
                    <span className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-black shadow-inner shadow-white/10 transition duration-300 hover:bg-gray-600 hover:shadow-[0_0_10px_rgba(128,0,32,0.6)]">
                      {t("withStudents.applicantsdoc")}
                    </span>
                  }
                />
              </div>
            </div>

            {/* Правая колонка */}
            <div className="w-full md:w-[40%] flex flex-col gap-4 sm:gap-6">
              <div className="rounded-3xl shadow-[6px_6px_12px_rgba(128,0,32,0.15)] w-full h-auto overflow-hidden">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/ebkc-lhQJZ0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-3xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя секция */}
        <div className="max-w-7xl mx-auto mt-10 sm:mt-12 px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-gray-100 p-4 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8 shadow-[0_0_20px_rgba(128,0,32,0.3)] ring-1 ring-bordo/30">
            {/* Левая колонка */}
            <div className="md:w-[30%] text-gray-800 text-base leading-relaxed">
              <p>{t("withStudents.applicantsinfo")}</p>
            </div>

            {/* Правая колонка */}
            <div className="md:w-[70%] text-gray-800 text-base leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>{t("withStudents.applicantstopic1")}</strong>{" "}
                  {t("withStudents.applicantsinfo1")}
                </li>
                <li>
                  <strong>{t("withStudents.applicantstopic2")}</strong>{" "}
                  {t("withStudents.applicantsinfo2")}
                </li>
                <li>
                  <strong>{t("withStudents.applicantstopic3")}</strong>{" "}
                  {t("withStudents.applicantsinfo3")}
                </li>
                <li>
                  <strong>{t("withStudents.applicantstopic4")}</strong>{" "}
                  {t("withStudents.applicantsinfo4")}
                </li>
                <li>
                  <strong>{t("withStudents.applicantstopic5")}</strong>{" "}
                  {t("withStudents.applicantsinfo5")}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* вопросы */}
        <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 mb-12">
          <h2 className="text-3xl font-bold text-bordo mb-8 text-center">
            {t("faq.title")}
          </h2>
          <div className="space-y-4">
            {t("faq.questions", { returnObjects: true }).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-[0_0_15px_rgba(128,0,32,0.2)] overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenQuestion(openQuestion === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
                >
                  <span className="text-lg font-medium text-gray-800 pr-8">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openQuestion === index ? 45 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-2xl font-bold text-white bg-bordo rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence>
                  {openQuestion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                        opacity: { duration: 0.15 },
                      }}
                      className="px-4 pb-4"
                    >
                      <p className="text-gray-600 whitespace-pre-line">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Applicants;
