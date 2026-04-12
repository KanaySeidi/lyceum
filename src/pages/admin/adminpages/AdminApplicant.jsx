import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../../components/Surfacing/Modal";
import { useTranslation } from "react-i18next";

const AdminApplicant = () => {
  const { t } = useTranslation();
  const [openQuestion, setOpenQuestion] = useState(null);

  // Исходные данные загружаются из переводов только при инициализации
  const [leftBlocks, setLeftBlocks] = useState(() =>
    Array.isArray(t("withStudents.applicantstime", { returnObjects: true }))
      ? t("withStudents.applicantstime", { returnObjects: true })
      : [t("withStudents.applicantstime")]
  );

  const [rightMedia, setRightMedia] = useState([
    {
      type: "video",
      src: "https://www.youtube.com/embed/ebkc-lhQJZ0",
    },
  ]);

  const [bottomLeft, setBottomLeft] = useState(() =>
    Array.isArray(t("withStudents.applicantsinfo", { returnObjects: true }))
      ? t("withStudents.applicantsinfo", { returnObjects: true })
      : [t("withStudents.applicantsinfo")]
  );

  const [bottomRight, setBottomRight] = useState(() =>
    Array.isArray(t("withStudents.applicantsinfo1", { returnObjects: true }))
      ? t("withStudents.applicantsinfo1", { returnObjects: true })
      : [
          {
            topic: t("withStudents.applicantstopic1"),
            text: t("withStudents.applicantsinfo1"),
          },
        ]
  );

  const [faq, setFaq] = useState(() => {
    const questions = t("faq.questions", { returnObjects: true });
    return Array.isArray(questions) ? questions : [];
  });

  // Для модалки сделаем отдельное состояние для редактирования списка
  const [modalList, setModalList] = useState(() =>
    [...Array(7)].map((_, i) => t(`withStudents.applicantsdoc${i + 1}`))
  );

  // --- Функции редактирования ---

  const handleLeftBlockChange = (idx, value) => {
    setLeftBlocks((prev) => {
      const copy = [...prev];
      copy[idx] = value;
      return copy;
    });
  };

  const handleRightMediaChange = (idx, key, value) => {
    setRightMedia((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [key]: value };
      return copy;
    });
  };

  const handleBottomLeftChange = (idx, value) => {
    setBottomLeft((prev) => {
      const copy = [...prev];
      copy[idx] = value;
      return copy;
    });
  };

  const handleBottomRightChange = (idx, key, value) => {
    setBottomRight((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [key]: value };
      return copy;
    });
  };

  const handleFaqChange = (idx, key, value) => {
    setFaq((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [key]: value };
      return copy;
    });
  };

  const handleModalListChange = (idx, value) => {
    setModalList((prev) => {
      const copy = [...prev];
      copy[idx] = value;
      return copy;
    });
  };

  // --- Добавление элементов ---

  const handleAddLeftBlock = () =>
    setLeftBlocks((prev) => [...prev, "Новая информация"]);
  const handleAddMedia = () =>
    setRightMedia((prev) => [
      ...prev,
      { type: "image", src: "https://via.placeholder.com/300" },
    ]);
  const handleAddBottomLeft = () =>
    setBottomLeft((prev) => [...prev, "Новая информация"]);
  const handleAddBottomRight = () =>
    setBottomRight((prev) => [
      ...prev,
      { topic: "Новая тема", text: "Описание" },
    ]);
  const handleAddFaq = () =>
    setFaq((prev) => [
      ...prev,
      { question: "Новый вопрос", answer: "Ответ на вопрос" },
    ]);
  const handleAddModalItem = () =>
    setModalList((prev) => [...prev, "Новый пункт"]);

  // --- Удаление элементов ---

  const handleDeleteLeftBlock = (idx) =>
    setLeftBlocks((prev) => prev.filter((_, i) => i !== idx));
  const handleDeleteMedia = (idx) =>
    setRightMedia((prev) => prev.filter((_, i) => i !== idx));
  const handleDeleteBottomLeft = (idx) =>
    setBottomLeft((prev) => prev.filter((_, i) => i !== idx));
  const handleDeleteBottomRight = (idx) =>
    setBottomRight((prev) => prev.filter((_, i) => i !== idx));
  const handleDeleteFaq = (idx) =>
    setFaq((prev) => prev.filter((_, i) => i !== idx));
  const handleDeleteModalItem = (idx) =>
    setModalList((prev) => prev.filter((_, i) => i !== idx));

  return (
    <div className="bg-gray-400 mx-auto p-6 min-h-screen">
      <div className="max-w-7xl mx-auto p-6 bg-gray-50 rounded-3xl shadow-inner">
        <h1 className="text-4xl font-bold text-end mb-10 text-bordo">
          {t("withStudents.applicants")}
        </h1>

        <div className="flex flex-wrap justify-between gap-8">
          {/* Левая колонка */}
          <div className="w-full md:w-[55%] space-y-4">
            {leftBlocks.map((text, idx) => (
              <div
                key={idx}
                className="relative bg-white text-gray-800 rounded-3xl shadow p-4 border"
              >
                <textarea
                  value={text}
                  onChange={(e) => handleLeftBlockChange(idx, e.target.value)}
                  className="w-full resize-none border p-2 rounded"
                />
                <button
                  className="absolute top-2 right-2"
                  onClick={() => handleDeleteLeftBlock(idx)}
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              onClick={handleAddLeftBlock}
              className="mt-2 text-sm text-white bg-bordo px-4 py-1 rounded-full"
            >
              Добавить блок
            </button>

            {/* Модалка с редактируемым списком */}
            <div className="bg-white rounded-3xl shadow-[6px_6px_12px_rgba(128,0,32,0.15)] p-6 border border-gray-100 flex flex-col">
              <h2 className="text-xl font-semibold text-black text-center mb-4">
                {t("withStudents.applicantsdoc")}
              </h2>
              {modalList.map((item, idx) => (
                <div key={idx} className="flex items-center mb-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => handleModalListChange(idx, e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                  <button
                    className="ml-2 text-red-600 font-bold text-xl"
                    onClick={() => handleDeleteModalItem(idx)}
                    aria-label="Удалить пункт"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddModalItem}
                className="mt-2 self-center text-sm text-white bg-bordo px-4 py-1 rounded-full"
              >
                Добавить пункт
              </button>
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
                    {modalList.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
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
          <div className="w-full md:w-[40%] flex flex-col gap-4">
            {rightMedia.map((media, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl shadow overflow-hidden"
              >
                {media.type === "video" ? (
                  <iframe
                    width="100%"
                    height="315"
                    src={media.src}
                    title="Media"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="rounded-3xl"
                  ></iframe>
                ) : (
                  <img
                    src={media.src}
                    alt="media"
                    className="w-full h-auto rounded-3xl"
                  />
                )}
                {/* Редактирование медиа */}
                <input
                  type="text"
                  value={media.src}
                  onChange={(e) =>
                    handleRightMediaChange(idx, "src", e.target.value)
                  }
                  className="mt-2 w-full border p-1 rounded"
                  placeholder="URL медиа"
                />
                <select
                  value={media.type}
                  onChange={(e) =>
                    handleRightMediaChange(idx, "type", e.target.value)
                  }
                  className="mt-1 w-full border p-1 rounded"
                >
                  <option value="video">Видео</option>
                  <option value="image">Изображение</option>
                </select>
                <button
                  className="absolute top-2 right-2"
                  onClick={() => handleDeleteMedia(idx)}
                  aria-label="Удалить медиа"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              onClick={handleAddMedia}
              className="text-sm text-white bg-bordo px-4 py-1 rounded-full"
            >
              Добавить медиа
            </button>
          </div>
        </div>
      </div>

      {/* Нижняя секция */}
      <div className="max-w-7xl mx-auto mt-10 px-4">
        <div className="bg-white rounded-3xl border p-4 flex flex-col md:flex-row gap-6 shadow ring-1 ring-bordo/30">
          <div className="md:w-[30%] text-gray-800 space-y-2">
            {bottomLeft.map((text, idx) => (
              <div key={idx} className="relative">
                <textarea
                  value={text}
                  onChange={(e) => handleBottomLeftChange(idx, e.target.value)}
                  className="w-full resize-none border p-2 rounded"
                />
                <button
                  className="absolute top-0 right-0"
                  onClick={() => handleDeleteBottomLeft(idx)}
                  aria-label="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              onClick={handleAddBottomLeft}
              className="mt-2 text-sm text-white bg-bordo px-4 py-1 rounded-full"
            >
              Добавить
            </button>
          </div>

          <div className="md:w-[70%] text-gray-800 space-y-2">
            {bottomRight.map((item, idx) => (
              <div key={idx} className="relative">
                <input
                  value={item.topic}
                  onChange={(e) =>
                    handleBottomRightChange(idx, "topic", e.target.value)
                  }
                  className="w-full border p-2 rounded mb-1"
                  placeholder="Тема"
                />
                <textarea
                  value={item.text}
                  onChange={(e) =>
                    handleBottomRightChange(idx, "text", e.target.value)
                  }
                  className="w-full resize-none border p-2 rounded"
                  placeholder="Описание"
                />
                <button
                  className="absolute top-0 right-0"
                  onClick={() => handleDeleteBottomRight(idx)}
                  aria-label="Удалить"
                >
                  ✕
                </button>
              </div>
            ))}
            <button
              onClick={handleAddBottomRight}
              className="mt-2 text-sm text-white bg-bordo px-4 py-1 rounded-full"
            >
              Добавить
            </button>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto mt-16 px-4 mb-12">
        <h2 className="text-3xl font-bold text-bordo mb-8 text-center">
          {t("faq.title")}
        </h2>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow overflow-hidden relative"
            >
              <button
                onClick={() =>
                  setOpenQuestion(openQuestion === index ? null : index)
                }
                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50"
              >
                <span className="text-lg font-semibold">{item.question}</span>
                <span className="text-2xl">
                  {openQuestion === index ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {openQuestion === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4"
                  >
                    <textarea
                      value={item.answer}
                      onChange={(e) =>
                        handleFaqChange(index, "answer", e.target.value)
                      }
                      className="w-full resize-none border p-2 rounded"
                    />
                    <button
                      className="mt-2 text-red-600 font-bold"
                      onClick={() => handleDeleteFaq(index)}
                    >
                      Удалить вопрос
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <button
            onClick={handleAddFaq}
            className="mt-4 text-sm text-white bg-bordo px-4 py-2 rounded-full block mx-auto"
          >
            Добавить вопрос
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminApplicant;
