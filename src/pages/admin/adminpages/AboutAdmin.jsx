import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaSave, FaPlus, FaTrash, FaEdit, FaTimes } from "react-icons/fa";

const AboutAdmin = () => {
  const { t, i18n } = useTranslation();

  // Получение перевода для другого языка
  const getTranslation = (key) => {
    const currentLang = i18n.language;
    const otherLang = currentLang === "KG" ? "RU" : "KG";
    return i18n.getFixedT(otherLang)(key) || "";
  };

  // Инициализация состояний
  const [hero, setHero] = useState({
    title: {
      text: t("about.hero.title") || "",
      translation: getTranslation("about.hero.title"),
    },
    subtitle: {
      text: t("about.hero.subtitle") || "",
      translation: getTranslation("about.hero.subtitle"),
    },
  });

  const [description, setDescription] = useState([
    {
      text: t("about.description.paragraph1") || "",
      translation: getTranslation("about.description.paragraph1"),
    },
    {
      text: t("about.description.paragraph2") || "",
      translation: getTranslation("about.description.paragraph2"),
    },
  ]);

  const [imageGallery, setImageGallery] = useState([
    {
      src: "/assets/img/About/img_ryanjacobsoncxuoqwdrv4iunsplashjpg.png",
      alt: {
        text: t("about.imageGallery.alt1") || "",
        translation: getTranslation("about.imageGallery.alt1"),
      },
      hasError: false, // Флаг для отслеживания ошибок
    },
    {
      src: "/assets/img/About/img_mikakorhonenmki1rfsqwvyunsplashjpg.png",
      alt: {
        text: t("about.imageGallery.alt2") || "",
        translation: getTranslation("about.imageGallery.alt2"),
      },
      hasError: false,
    },
    {
      src: "/assets/img/About/img_aliyahyaifpeapwegt4unsplashjpg.png",
      alt: {
        text: t("about.imageGallery.alt3") || "",
        translation: getTranslation("about.imageGallery.alt3"),
      },
      hasError: false,
    },
  ]);

  const [statistics, setStatistics] = useState([
    {
      key: "students",
      value: {
        text: t("about.statistics.students") || "",
        translation: getTranslation("about.statistics.students"),
      },
    },
    {
      key: "lyceum",
      value: {
        text: t("about.statistics.lyceum") || "",
        translation: getTranslation("about.statistics.lyceum"),
      },
    },
    {
      key: "years",
      value: {
        text: t("about.statistics.years") || "",
        translation: getTranslation("about.statistics.years"),
      },
    },
  ]);

  const [history, setHistory] = useState({
    title: {
      text: t("about.history.title") || "",
      translation: getTranslation("about.history.title"),
    },
    text: {
      text: t("about.history.text") || "",
      translation: getTranslation("about.history.text"),
    },
    button: {
      text: t("about.history.button") || "",
      translation: getTranslation("about.history.button"),
    },
  });

  const [mission, setMission] = useState({
    title: {
      text: t("about.mission.title") || "",
      translation: getTranslation("about.mission.title"),
    },
    text: {
      text: t("about.mission.text") || "",
      translation: getTranslation("about.mission.text"),
    },
    button: {
      text: t("about.mission.button") || "",
      translation: getTranslation("about.mission.button"),
    },
  });

  const [campusMedia, setCampusMedia] = useState([
    {
      type: "video",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      caption: {
        text: t("about.campus.title") || "",
        translation: getTranslation("about.campus.title"),
      },
    },
  ]);

  const [testimonial, setTestimonial] = useState({
    name: {
      text: t("about.testimonial.name") || "",
      translation: getTranslation("about.testimonial.name"),
    },
    degree: {
      text: t("about.testimonial.degree") || "",
      translation: getTranslation("about.testimonial.degree"),
    },
    quote: {
      text: t("about.testimonial.quote") || "",
      translation: getTranslation("about.testimonial.quote"),
    },
  });

  const [form, setForm] = useState({
    title: {
      text: t("about.form.title") || "",
      translation: getTranslation("about.form.title"),
    },
    subtitle: {
      text: t("about.form.subtitle") || "",
      translation: getTranslation("about.form.subtitle"),
    },
    application: {
      text: t("about.form.application") || "",
      translation: getTranslation("about.form.application"),
    },
    requestInfo: {
      text: t("about.form.requestInfo") || "",
      translation: getTranslation("about.form.requestInfo"),
    },
    visit: {
      text: t("about.form.visit") || "",
      translation: getTranslation("about.form.visit"),
    },
  });

  const [editImageIndex, setEditImageIndex] = useState(null);
  const [editImage, setEditImage] = useState({
    src: "",
    alt: { text: "", translation: "" },
  });

  // Ref для отслеживания выполненных проверок
  const checkedImagesRef = useRef(new Set());

  // Обработчики изменений
  const handleHeroChange = (key, field, value) =>
    setHero((prev) => ({ ...prev, [key]: { ...prev[key], [field]: value } }));
  const handleDescriptionChange = (idx, key, value) =>
    setDescription((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [key]: value } : item))
    );
  const handleImageGalleryChange = (idx, key, value) =>
    setImageGallery((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [key]: value } : item))
    );
  const handleStatisticsChange = (idx, key, field, value) =>
    setStatistics((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, [key]: { ...item[key], [field]: value } } : item
      )
    );
  const handleHistoryChange = (key, field, value) =>
    setHistory((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  const handleMissionChange = (key, field, value) =>
    setMission((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  const handleCampusMediaChange = (idx, key, field, value) =>
    setCampusMedia((prev) =>
      prev.map((item, i) =>
        i === idx ? { ...item, [key]: { ...item[key], [field]: value } } : item
      )
    );
  const handleTestimonialChange = (key, field, value) =>
    setTestimonial((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: value },
    }));
  const handleFormChange = (key, field, value) =>
    setForm((prev) => ({ ...prev, [key]: { ...prev[key], [field]: value } }));

  // Добавление элементов
  const handleAddDescription = () =>
    setDescription((prev) => [...prev, { text: "", translation: "" }]);
  const handleAddImageGallery = () =>
    setImageGallery((prev) => [
      ...prev,
      {
        src: "https://placehold.co/300x300",
        alt: { text: "", translation: "" },
        hasError: false,
      },
    ]);
  const handleAddStatistics = () =>
    setStatistics((prev) => [
      ...prev,
      { key: `new_${prev.length}`, value: { text: "", translation: "" } },
    ]);
  const handleAddCampusMedia = () =>
    setCampusMedia((prev) => [
      ...prev,
      {
        type: "video",
        src: "https://www.youtube.com/embed/placeholder",
        caption: { text: "", translation: "" },
      },
    ]);

  // Удаление элементов
  const handleDeleteDescription = (idx) =>
    setDescription((prev) => prev.filter((_, i) => i !== idx));
  const handleDeleteImageGallery = (idx) =>
    setImageGallery((prev) => prev.filter((_, i) => i !== idx));
  const handleDeleteStatistics = (idx) =>
    setStatistics((prev) => prev.filter((_, i) => i !== idx));
  const handleDeleteCampusMedia = (idx) =>
    setCampusMedia((prev) => prev.filter((_, i) => i !== idx));

  // Редактирование изображения
  const handleEditImage = (idx) => {
    setEditImageIndex(idx);
    setEditImage({ ...imageGallery[idx] });
  };

  const handleSaveEdit = () => {
    if (editImageIndex !== null) {
      handleImageGalleryChange(editImageIndex, "src", editImage.src);
      handleImageGalleryChange(editImageIndex, "alt", editImage.alt);
      setEditImageIndex(null);
    }
  };

  // Сохранение данных
  const handleSave = () => {
    const data = {
      hero,
      description,
      imageGallery,
      statistics,
      history,
      mission,
      campusMedia,
      testimonial,
      form,
    };
    try {
      localStorage.setItem("aboutData", JSON.stringify(data));
      alert("Данные успешно сохранены!");
    } catch (error) {
      console.error("Ошибка при сохранении данных:", error);
      alert("Не удалось сохранить данные.");
    }
  };

  // Проверка существования изображения
  const checkImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = src;
    });
  };

  useEffect(() => {
    imageGallery.forEach((item, idx) => {
      if (!checkedImagesRef.current.has(idx) && !item.hasError) {
        checkImage(item.src).then((exists) => {
          if (!exists) {
            console.warn(
              `Изображение по адресу ${item.src} не найдено для индекса ${idx}`
            );
            handleImageGalleryChange(idx, "src", "/assets/img/fallback.png");
            handleImageGalleryChange(idx, "hasError", true);
          }
          checkedImagesRef.current.add(idx);
        });
      }
    });
  }, [imageGallery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-100 p-4 md:p-8"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center text-bordo mb-6 flex items-center justify-center">
          <FaEdit className="mr-2" /> Админ-панель: О нас
        </h1>

        {/* Hero */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Hero</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={hero.title.text}
              onChange={(e) =>
                handleHeroChange("title", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-bordo"
              placeholder="Заголовок"
            />
            <input
              type="text"
              value={hero.title.translation}
              onChange={(e) =>
                handleHeroChange("title", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-bordo"
              placeholder="Перевод заголовка"
            />
            <input
              type="text"
              value={hero.subtitle.text}
              onChange={(e) =>
                handleHeroChange("subtitle", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-bordo"
              placeholder="Подзаголовок"
            />
            <input
              type="text"
              value={hero.subtitle.translation}
              onChange={(e) =>
                handleHeroChange("subtitle", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-bordo"
              placeholder="Перевод подзаголовка"
            />
          </div>
        </motion.section>

        {/* Description */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Описание
          </h2>
          {description.map((item, idx) => (
            <div
              key={idx}
              className="relative mb-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <textarea
                value={item.text}
                onChange={(e) =>
                  handleDescriptionChange(idx, "text", e.target.value)
                }
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-bordo"
                placeholder="Текст описания"
                rows="3"
              />
              <textarea
                value={item.translation}
                onChange={(e) =>
                  handleDescriptionChange(idx, "translation", e.target.value)
                }
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-bordo"
                placeholder="Перевод"
                rows="3"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute top-2 right-2 text-red-600"
                onClick={() => handleDeleteDescription(idx)}
              >
                <FaTrash />
              </motion.button>
            </div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleAddDescription}
            className="bg-bordo text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FaPlus className="mr-2" /> Добавить описание
          </motion.button>
        </motion.section>

        {/* Image Gallery */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Галерея изображений
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {imageGallery.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-gray-50 p-4 rounded-lg shadow"
              >
                <img
                  src={item.hasError ? "/assets/img/fallback.png" : item.src}
                  alt={item.alt.text}
                  className="w-full h-32 object-cover rounded mb-4"
                  onError={(e) => {
                    if (!item.hasError) {
                      e.target.src = "/assets/img/fallback.png";
                      handleImageGalleryChange(idx, "hasError", true);
                    }
                  }}
                />
                <input
                  type="file"
                  accept="image/*"
                  className="mb-2"
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    if (file && file.size < 5 * 1024 * 1024) {
                      const reader = new FileReader();
                      reader.onload = (ev) => {
                        handleImageGalleryChange(idx, "src", ev.target.result);
                        handleImageGalleryChange(idx, "hasError", false);
                      };
                      reader.readAsDataURL(file);
                    } else {
                      alert("Файл слишком большой или недопустимый.");
                    }
                  }}
                />
                <input
                  type="text"
                  value={item.alt.text}
                  onChange={(e) =>
                    handleImageGalleryChange(idx, "alt", {
                      ...item.alt,
                      text: e.target.value,
                    })
                  }
                  className="w-full p-3 border rounded-lg mb-2 focus:ring-2 focus:ring-bordo"
                  placeholder="Альтернативный текст"
                />
                <input
                  type="text"
                  value={item.alt.translation}
                  onChange={(e) =>
                    handleImageGalleryChange(idx, "alt", {
                      ...item.alt,
                      translation: e.target.value,
                    })
                  }
                  className="w-full p-3 border rounded-lg mb-2 focus:ring-2 focus:ring-purple-500"
                  placeholder="Перевод"
                />
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleEditImage(idx)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center"
                  >
                    <FaEdit className="mr-2" /> Изменить
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    onClick={() => handleDeleteImageGallery(idx)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"
                  >
                    <FaTrash className="mr-2" /> Удалить
                  </motion.button>
                </div>
              </div>
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleAddImageGallery}
            className="bg-bordo text-white px-4 py-2 rounded-lg mt-4 flex items-center"
          >
            <FaPlus className="mr-2" /> Добавить изображение
          </motion.button>
        </motion.section>

        {/* Statistics */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Статистика
          </h2>
          {statistics.map((stat, idx) => (
            <div
              key={idx}
              className="relative mb-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                value={stat.value.text}
                onChange={(e) =>
                  handleStatisticsChange(idx, "value", "text", e.target.value)
                }
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-bordo"
                placeholder="Значение"
              />
              <input
                type="text"
                value={stat.value.translation}
                onChange={(e) =>
                  handleStatisticsChange(
                    idx,
                    "value",
                    "translation",
                    e.target.value
                  )
                }
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-bordo"
                placeholder="Перевод"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute top-2 right-2 text-red-600"
                onClick={() => handleDeleteStatistics(idx)}
              >
                <FaTrash />
              </motion.button>
            </div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleAddStatistics}
            className="bg-bordo text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FaPlus className="mr-2" /> Добавить статистику
          </motion.button>
        </motion.section>

        {/* History */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">История</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={history.title.text}
              onChange={(e) =>
                handleHistoryChange("title", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Заголовок"
            />
            <input
              type="text"
              value={history.title.translation}
              onChange={(e) =>
                handleHistoryChange("title", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод заголовка"
            />
            <textarea
              value={history.text.text}
              onChange={(e) =>
                handleHistoryChange("text", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Текст"
              rows="4"
            />
            <textarea
              value={history.text.translation}
              onChange={(e) =>
                handleHistoryChange("text", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод текста"
              rows="4"
            />
            <input
              type="text"
              value={history.button.text}
              onChange={(e) =>
                handleHistoryChange("button", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Кнопка"
            />
            <input
              type="text"
              value={history.button.translation}
              onChange={(e) =>
                handleHistoryChange("button", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод кнопки"
            />
          </div>
        </motion.section>

        {/* Mission */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Миссия</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={mission.title.text}
              onChange={(e) =>
                handleMissionChange("title", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Заголовок"
            />
            <input
              type="text"
              value={mission.title.translation}
              onChange={(e) =>
                handleMissionChange("title", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод заголовка"
            />
            <textarea
              value={mission.text.text}
              onChange={(e) =>
                handleMissionChange("text", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Текст"
              rows="4"
            />
            <textarea
              value={mission.text.translation}
              onChange={(e) =>
                handleMissionChange("text", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод текста"
              rows="4"
            />
            <input
              type="text"
              value={mission.button.text}
              onChange={(e) =>
                handleMissionChange("button", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Кнопка"
            />
            <input
              type="text"
              value={mission.button.translation}
              onChange={(e) =>
                handleMissionChange("button", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод кнопки"
            />
          </div>
        </motion.section>

        {/* Campus Media */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Медиа кампуса
          </h2>
          {campusMedia.map((item, idx) => (
            <div
              key={idx}
              className="relative mb-4 grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                value={item.src}
                onChange={(e) =>
                  handleCampusMediaChange(idx, "src", "text", e.target.value)
                }
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="URL видео"
              />
              <input
                type="text"
                value={item.caption.text}
                onChange={(e) =>
                  handleCampusMediaChange(
                    idx,
                    "caption",
                    "text",
                    e.target.value
                  )
                }
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Подпись"
              />
              <input
                type="text"
                value={item.caption.translation}
                onChange={(e) =>
                  handleCampusMediaChange(
                    idx,
                    "caption",
                    "translation",
                    e.target.value
                  )
                }
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Перевод подписи"
              />
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="absolute top-2 right-2 text-red-600"
                onClick={() => handleDeleteCampusMedia(idx)}
              >
                <FaTrash />
              </motion.button>
            </div>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={handleAddCampusMedia}
            className="bg-bordo text-white px-4 py-2 rounded-lg flex items-center"
          >
            <FaPlus className="mr-2" /> Добавить медиа
          </motion.button>
        </motion.section>

        {/* Testimonial */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Отзыв</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={testimonial.name.text}
              onChange={(e) =>
                handleTestimonialChange("name", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Имя"
            />
            <input
              type="text"
              value={testimonial.name.translation}
              onChange={(e) =>
                handleTestimonialChange("name", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод имени"
            />
            <input
              type="text"
              value={testimonial.degree.text}
              onChange={(e) =>
                handleTestimonialChange("degree", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Степень"
            />
            <input
              type="text"
              value={testimonial.degree.translation}
              onChange={(e) =>
                handleTestimonialChange("degree", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод степени"
            />
            <textarea
              value={testimonial.quote.text}
              onChange={(e) =>
                handleTestimonialChange("quote", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Цитата"
              rows="4"
            />
            <textarea
              value={testimonial.quote.translation}
              onChange={(e) =>
                handleTestimonialChange("quote", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод цитаты"
              rows="4"
            />
          </div>
        </motion.section>

        {/* Form */}
        <motion.section
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Форма</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              value={form.title.text}
              onChange={(e) =>
                handleFormChange("title", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Заголовок"
            />
            <input
              type="text"
              value={form.title.translation}
              onChange={(e) =>
                handleFormChange("title", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод заголовка"
            />
            <input
              type="text"
              value={form.subtitle.text}
              onChange={(e) =>
                handleFormChange("subtitle", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Подзаголовок"
            />
            <input
              type="text"
              value={form.subtitle.translation}
              onChange={(e) =>
                handleFormChange("subtitle", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод подзаголовка"
            />
            <input
              type="text"
              value={form.application.text}
              onChange={(e) =>
                handleFormChange("application", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Заявка"
            />
            <input
              type="text"
              value={form.application.translation}
              onChange={(e) =>
                handleFormChange("application", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод заявки"
            />
            <input
              type="text"
              value={form.requestInfo.text}
              onChange={(e) =>
                handleFormChange("requestInfo", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Запрос информации"
            />
            <input
              type="text"
              value={form.requestInfo.translation}
              onChange={(e) =>
                handleFormChange("requestInfo", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод запроса информации"
            />
            <input
              type="text"
              value={form.visit.text}
              onChange={(e) =>
                handleFormChange("visit", "text", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Посещение"
            />
            <input
              type="text"
              value={form.visit.translation}
              onChange={(e) =>
                handleFormChange("visit", "translation", e.target.value)
              }
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-purple-500"
              placeholder="Перевод посещения"
            />
          </div>
        </motion.section>

        {/* Модальное окно для редактирования изображения */}
        {editImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <FaEdit className="mr-2" /> Редактировать изображение
              </h3>
              <input
                type="text"
                value={editImage.src}
                onChange={(e) =>
                  setEditImage({ ...editImage, src: e.target.value })
                }
                className="w-full p-3 border rounded-lg mb-2 focus:ring-2 focus:ring-purple-500"
                placeholder="URL изображения"
              />
              <input
                type="text"
                value={editImage.alt.text}
                onChange={(e) =>
                  setEditImage({
                    ...editImage,
                    alt: { ...editImage.alt, text: e.target.value },
                  })
                }
                className="w-full p-3 border rounded-lg mb-2 focus:ring-2 focus:ring-purple-500"
                placeholder="Альтернативный текст"
              />
              <input
                type="text"
                value={editImage.alt.translation}
                onChange={(e) =>
                  setEditImage({
                    ...editImage,
                    alt: { ...editImage.alt, translation: e.target.value },
                  })
                }
                className="w-full p-3 border rounded-lg mb-2 focus:ring-2 focus:ring-purple-500"
                placeholder="Перевод"
              />
              <div className="flex justify-end space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={handleSaveEdit}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <FaSave className="mr-2" /> Сохранить
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setEditImageIndex(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg flex items-center"
                >
                  <FaTimes className="mr-2" /> Отмена
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Кнопка сохранения */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className="bg-bordo text-white px-6 py-3 rounded-lg flex items-center mx-auto"
        >
          <FaSave className="mr-2" /> Сохранить все изменения
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AboutAdmin;
