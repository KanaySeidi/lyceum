import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash, FaUpload, FaSave } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TeachersSlAdmin = () => {
  // Загружаем данные из localStorage при монтировании
  const [teachers, setTeachers] = useState(() => {
    const savedTeachers = localStorage.getItem("teachers");
    return savedTeachers
      ? JSON.parse(savedTeachers)
      : [
          {
            id: 1,
            name: "Преподаватель 1",
            role: "Профессор",
            img: "teacher1.jpg",
            hasDetails: true,
            dateAdded: new Date().toLocaleDateString(),
          },
          {
            id: 2,
            name: "Преподаватель 2",
            role: "Доцент",
            img: "teacher2.jpg",
            hasDetails: true,
            dateAdded: new Date().toLocaleDateString(),
          },
        ];
  });
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    role: "",
    img: null,
    hasDetails: false,
  });
  const [filter, setFilter] = useState("");
  const [previewImg, setPreviewImg] = useState(null);
  const [editTeacher, setEditTeacher] = useState(null); // Состояние для редактируемого учителя
  const [editForm, setEditForm] = useState({
    name: "",
    role: "",
    img: null,
    hasDetails: false,
  });
  const [editPreviewImg, setEditPreviewImg] = useState(null);

  // Сохраняем данные в localStorage при изменении
  useEffect(() => {
    const savedTeachers = teachers.map((teacher) => ({
      ...teacher,
      img:
        teacher.img instanceof File
          ? URL.createObjectURL(teacher.img)
          : teacher.img,
    }));
    localStorage.setItem("teachers", JSON.stringify(savedTeachers));
  }, [teachers]);

  // Обработка загрузки изображения для нового учителя
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setNewTeacher({ ...newTeacher, img: file });
      setPreviewImg(imgUrl);
    }
  };

  // Обработка загрузки изображения для редактирования
  const handleEditImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgUrl = URL.createObjectURL(file);
      setEditForm({ ...editForm, img: file });
      setEditPreviewImg(imgUrl);
    }
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    if (newTeacher.name && newTeacher.role && newTeacher.img) {
      const imgUrl = URL.createObjectURL(newTeacher.img);
      setTeachers([
        ...teachers,
        {
          ...newTeacher,
          id: Date.now(),
          img: imgUrl,
          dateAdded: new Date().toLocaleDateString(),
        },
      ]);
      setNewTeacher({ name: "", role: "", img: null, hasDetails: false });
      setPreviewImg(null);
    }
  };

  const handleDeleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
    if (editTeacher && editTeacher.id === id) setEditTeacher(null);
  };

  const handleEditSave = (e) => {
    e.preventDefault();
    if (editForm.name && editForm.role && (editForm.img || editTeacher.img)) {
      const imgUrl = editForm.img
        ? URL.createObjectURL(editForm.img)
        : editTeacher.img;
      setTeachers(
        teachers.map((t) =>
          t.id === editTeacher.id
            ? {
                ...t,
                name: editForm.name,
                role: editForm.role,
                img: imgUrl,
                hasDetails: editForm.hasDetails,
              }
            : t
        )
      );
      setEditTeacher(null);
      setEditForm({ name: "", role: "", img: null, hasDetails: false });
      setEditPreviewImg(null);
    }
  };

  // Фильтрация учителей
  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(filter.toLowerCase()) ||
      teacher.role.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-white text-gray-800 p-4 md:p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#A1002F] text-center">
        Управление преподавателями
      </h2>
      {/* Поле фильтрации */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
        <input
          type="text"
          placeholder="Фильтр по имени или роли..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full p-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1002F]"
        />
      </div>

      {/* Форма добавления */}
      <motion.form
        onSubmit={handleAddTeacher}
        className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Имя"
            value={newTeacher.name}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, name: e.target.value })
            }
            className="w-full p-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1002F]"
          />
          <input
            type="text"
            placeholder="Роль"
            value={newTeacher.role}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, role: e.target.value })
            }
            className="w-full p-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1002F]"
          />
        </div>
        <div className="mt-4">
          <label className="block mb-2 text-[#A1002F]">
            Загрузить изображение
          </label>
          <motion.label
            htmlFor="imageUpload"
            className="w-full p-2 bg-[#A1002F] text-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#800020] transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUpload className="mr-2" /> Выбрать фото
          </motion.label>
          <input
            id="imageUpload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          {previewImg && (
            <img
              src={previewImg}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded-lg shadow-md"
            />
          )}
        </div>
        <label className="flex items-center mt-4">
          <input
            type="checkbox"
            checked={newTeacher.hasDetails}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, hasDetails: e.target.checked })
            }
            className="mr-2"
          />
          <span className="text-[#A1002F]">Есть подробности</span>
        </label>
        <motion.button
          type="submit"
          className="w-full mt-4 bg-[#A1002F] text-white p-2 rounded-lg hover:bg-[#800020] flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPlus className="mr-2" /> Добавить преподавателя
        </motion.button>
      </motion.form>
      {/* Список преподавателей */}
      <AnimatePresence>
        {filteredTeachers.map((teacher) => (
          <motion.div
            key={teacher.id}
            className="bg-gray-50 p-4 rounded-lg flex flex-col md:flex-row justify-between items-center mb-4 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-4 md:mb-0">
              <p className="font-bold text-[#A1002F]">{teacher.name}</p>
              <p className="text-gray-600">{teacher.role}</p>
              <p className="text-sm text-gray-500">
                Добавлен: {teacher.dateAdded}
              </p>
              {teacher.img && (
                <img
                  src={teacher.img}
                  alt={teacher.name}
                  className="mt-2 w-24 h-24 object-cover rounded-lg shadow-md"
                />
              )}
            </div>
            <div className="flex space-x-2">
              <motion.button
                onClick={() => {
                  setEditTeacher(teacher);
                  setEditForm({
                    name: teacher.name,
                    role: teacher.role,
                    img: null,
                    hasDetails: teacher.hasDetails,
                  });
                  setEditPreviewImg(teacher.img);
                }}
                className="bg-[#A1002F] text-white p-2 rounded-lg hover:bg-[#800020] flex items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEdit />{" "}
                <span className="ml-1 hidden md:inline">Редактировать</span>
              </motion.button>
              <motion.button
                onClick={() => handleDeleteTeacher(teacher.id)}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 flex items-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTrash />{" "}
                <span className="ml-1 hidden md:inline">Удалить</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      {/* Форма редактирования */}
      <AnimatePresence>
        {editTeacher && (
          <motion.div
            className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-md mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#A1002F] text-center">
              Редактирование преподавателя
            </h3>
            <form onSubmit={handleEditSave} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Имя"
                  value={editForm.name}
                  onChange={(e) =>
                    setEditForm({ ...editForm, name: e.target.value })
                  }
                  className="w-full p-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1002F]"
                />
                <input
                  type="text"
                  placeholder="Роль"
                  value={editForm.role}
                  onChange={(e) =>
                    setEditForm({ ...editForm, role: e.target.value })
                  }
                  className="w-full p-2 bg-white text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A1002F]"
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-[#A1002F]">
                  Загрузить новое изображение
                </label>
                <motion.label
                  htmlFor="editImageUpload"
                  className="w-full p-2 bg-[#A1002F] text-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#800020] transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaUpload className="mr-2" /> Выбрать фото
                </motion.label>
                <input
                  id="editImageUpload"
                  type="file"
                  accept="image/*"
                  onChange={handleEditImageUpload}
                  className="hidden"
                />
                {editPreviewImg && (
                  <img
                    src={editPreviewImg}
                    alt="Edit Preview"
                    className="mt-2 w-32 h-32 object-cover rounded-lg shadow-md"
                  />
                )}
              </div>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={editForm.hasDetails}
                  onChange={(e) =>
                    setEditForm({ ...editForm, hasDetails: e.target.checked })
                  }
                  className="mr-2"
                />
                <span className="text-[#A1002F]">Есть подробности</span>
              </label>
              <div className="flex space-x-2">
                <motion.button
                  type="submit"
                  className="w-full md:w-auto bg-[#A1002F] text-white p-2 rounded-lg hover:bg-[#800020] flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaSave className="mr-2" /> Сохранить
                </motion.button>
                <motion.button
                  type="button"
                  onClick={() => setEditTeacher(null)}
                  className="w-full md:w-auto bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Отмена
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TeachersSlAdmin;
