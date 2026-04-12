import React, { useState, useEffect } from "react";
import { FaSave, FaPlus, FaEllipsisV, FaTrash, FaUpload } from "react-icons/fa";
import { motion } from "framer-motion";

const CoursesAdmin = () => {
  const [courses, setCourses] = useState(() => {
    const savedCourses = localStorage.getItem("courses");
    return savedCourses ? JSON.parse(savedCourses) : {};
  });

  const [selectedCategory, setSelectedCategory] = useState("спорт");
  const [newCourse, setNewCourse] = useState({
    category: "спорт",
    title: "",
    description: "",
    price: "",
    image: null,
  });

  const [editCourse, setEditCourse] = useState(null);
  const [showMenu, setShowMenu] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const handleAddCourse = () => {
    if (!newCourse.title || !newCourse.description || !newCourse.price) return;
    const id = Date.now();
    const courseWithId = {
      ...newCourse,
      id,
      imagePreview: newCourse.image
        ? URL.createObjectURL(newCourse.image)
        : null,
    };
    setCourses((prev) => ({
      ...prev,
      [newCourse.category]: [...(prev[newCourse.category] || []), courseWithId],
    }));
    setNewCourse({
      category: selectedCategory,
      title: "",
      description: "",
      price: "",
      image: null,
    });
  };

  const handleDeleteCourse = (course) => {
    if (window.confirm("Вы уверены, что хотите удалить курс?")) {
      setCourses((prev) => {
        const updatedCategory = prev[course.category].filter(
          (c) => c.id !== course.id
        );
        const updatedCourses = { ...prev };
        if (updatedCategory.length === 0) {
          delete updatedCourses[course.category];
        } else {
          updatedCourses[course.category] = updatedCategory;
        }
        return updatedCourses;
      });
      setShowMenu(null);
    }
  };

  const handleEditCourse = (course) => {
    setEditCourse(course);
    setShowMenu(null);
  };

  const handleSaveEdit = () => {
    if (!editCourse.title || !editCourse.description || !editCourse.price)
      return;
    setCourses((prev) => {
      const updatedCourses = { ...prev };
      updatedCourses[editCourse.category] = updatedCourses[
        editCourse.category
      ].map((c) => (c.id === editCourse.id ? editCourse : c));
      return updatedCourses;
    });
    setEditCourse(null);
  };

  const handleCancelEdit = () => {
    setEditCourse(null);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (editCourse) {
      if (name === "image" && files) {
        setEditCourse((prev) => ({
          ...prev,
          [name]: files[0],
          imagePreview: URL.createObjectURL(files[0]),
        }));
      } else {
        setEditCourse((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      if (name === "image" && files) {
        setNewCourse((prev) => ({
          ...prev,
          [name]: files[0],
          imagePreview: URL.createObjectURL(files[0]),
        }));
      } else {
        setNewCourse((prev) => ({ ...prev, [name]: value }));
      }
    }
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setNewCourse((prev) => ({ ...prev, category }));
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const sortedCourses = courses[selectedCategory]
    ? [...courses[selectedCategory]].sort((a, b) =>
        sortOrder === "asc"
          ? parseFloat(a.price) - parseFloat(b.price)
          : parseFloat(b.price) - parseFloat(a.price)
      )
    : [];

  const categories = ["спорт", "языки", "профессиональные"];

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-[#222]">Управление курсами</h1>
        </div>
        <div className="mb-8">
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition mb-4"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
          <button
            onClick={handleSort}
            className="bg-[#8B0000] text-white px-4 py-2 rounded-2xl hover:bg-[#600000] transition-colors duration-200 ml-2"
          >
            Сортировать по цене ({sortOrder === "asc" ? "↑" : "↓"})
          </button>
        </div>

        {selectedCategory && (
          <>
            <div className="space-y-8">
              {sortedCourses.length > 0 && (
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold text-[#222]">
                    {selectedCategory.charAt(0).toUpperCase() +
                      selectedCategory.slice(1)}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortedCourses.map((course) => (
                      <div
                        key={course.id}
                        className="bg-white rounded-2xl shadow-md p-4 relative"
                      >
                        {course.imagePreview && (
                          <img
                            src={course.imagePreview}
                            alt={course.title}
                            className="w-full h-32 object-cover rounded-xl mb-3"
                            onError={(e) => (e.target.style.display = "none")}
                          />
                        )}
                        <h3 className="text-xl font-semibold text-[#222]">
                          {course.title}
                        </h3>
                        <p className="text-sm text-[#333] mt-1">
                          {course.description}
                        </p>
                        <p className="text-sm text-[#333] mt-1">
                          Цена: {course.price} руб.
                        </p>
                        <div className="absolute top-2 right-2">
                          <button
                            onClick={() =>
                              setShowMenu(
                                course.id === showMenu ? null : course.id
                              )
                            }
                            className="text-[#333] hover:text-[#600000] transition-colors"
                          >
                            <FaEllipsisV />
                          </button>
                          {showMenu === course.id && (
                            <div className="absolute right-0 mt-2 w-32 bg-white border rounded-2xl shadow-md z-10">
                              <button
                                onClick={() => handleEditCourse(course)}
                                className="w-full text-left px-4 py-2 text-[#222] hover:bg-[#F9F9F9] rounded-t-2xl"
                              >
                                Редактировать
                              </button>
                              <button
                                onClick={() => handleDeleteCourse(course)}
                                className="w-full text-left px-4 py-2 text-[#8B0000] hover:bg-[#F9F9F9] rounded-b-2xl"
                              >
                                <FaTrash className="mr-2" /> Удалить
                              </button>
                            </div>
                          )}
                        </div>
                        {editCourse && editCourse.id === course.id && (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 space-y-4"
                          >
                            <input
                              type="text"
                              name="title"
                              value={editCourse.title}
                              onChange={handleChange}
                              placeholder="Название"
                              className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition"
                            />
                            <input
                              type="text"
                              name="description"
                              value={editCourse.description}
                              onChange={handleChange}
                              placeholder="Описание"
                              className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition"
                            />
                            <input
                              type="number"
                              name="price"
                              value={editCourse.price}
                              onChange={handleChange}
                              placeholder="Цена"
                              className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition"
                            />
                            <div className="relative">
                              <input
                                type="file"
                                name="image"
                                onChange={handleChange}
                                className="hidden"
                                id="editImageInput"
                              />
                              <label
                                htmlFor="editImageInput"
                                className="w-full flex items-center justify-center bg-[#8B0000] text-white px-4 py-3 rounded-2xl hover:bg-[#600000] transition-colors duration-200 cursor-pointer shadow-md"
                              >
                                <FaUpload className="mr-2" /> Выбрать файл
                              </label>
                            </div>
                            <div className="flex gap-2">
                              <button
                                onClick={handleSaveEdit}
                                className="bg-[#8B0000] text-white px-4 py-2 rounded-2xl hover:bg-[#600000] transition-colors duration-200 flex items-center"
                              >
                                <FaSave className="mr-2" /> Сохранить
                              </button>
                              <button
                                onClick={handleCancelEdit}
                                className="bg-gray-300 text-[#222] px-4 py-2 rounded-2xl hover:bg-gray-400 transition-colors duration-200"
                              >
                                Отмена
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-md p-4 mt-8"
            >
              <h3 className="text-xl font-semibold text-[#222] mb-4">
                Добавить курс в категорию{" "}
                {selectedCategory.charAt(0).toUpperCase() +
                  selectedCategory.slice(1)}
              </h3>
              <input
                type="text"
                name="title"
                value={newCourse.title}
                onChange={handleChange}
                placeholder="Название"
                className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition mb-4"
              />
              <input
                type="text"
                name="description"
                value={newCourse.description}
                onChange={handleChange}
                placeholder="Описание"
                className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition mb-4"
              />
              <input
                type="number"
                name="price"
                value={newCourse.price}
                onChange={handleChange}
                placeholder="Цена"
                className="w-full p-3 border border-[#8B0000]/20 rounded-2xl shadow-md focus:outline-none focus:ring-2 focus:ring-[#8B0000] transition mb-4"
              />
              <div className="relative">
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="hidden"
                  id="newImageInput"
                />
                <label
                  htmlFor="newImageInput"
                  className="w-full flex items-center justify-center bg-[#8B0000] text-white px-4 py-3 rounded-2xl hover:bg-[#600000] transition-colors duration-200 cursor-pointer shadow-md"
                >
                  <FaUpload className="mr-2" /> Выбрать файл
                </label>
              </div>
              <button
                onClick={handleAddCourse}
                className="bg-[#8B0000] text-white px-4 py-2 rounded-2xl hover:bg-[#600000] transition-colors duration-200 flex items-center mt-4"
              >
                <FaSave className="mr-2" /> Сохранить
              </button>
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default CoursesAdmin;
