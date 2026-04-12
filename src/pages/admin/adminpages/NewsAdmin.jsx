import { useState, useEffect } from "react";
import { FaSave, FaPlus, FaEllipsisV } from "react-icons/fa";
import { motion } from "framer-motion";

const NewsAdmin = () => {
  const [newsList, setNewsList] = useState(() => {
    const saved = localStorage.getItem("news");
    return saved ? JSON.parse(saved) : [];
  });

  const [newNews, setNewNews] = useState({
    title: "",
    content: "",
    date: "",
    image: null,
  });

  const [editNews, setEditNews] = useState(null);
  const [showMenu, setShowMenu] = useState(null);

  useEffect(() => {
    localStorage.setItem("news", JSON.stringify(newsList));
  }, [newsList]);

  const handleAddNews = () => {
    if (!newNews.title || !newNews.content || !newNews.date) return;
    const id = Date.now();
    const newsWithId = {
      ...newNews,
      id,
      imagePreview: newNews.image ? URL.createObjectURL(newNews.image) : null,
    };
    setNewsList((prev) => [...prev, newsWithId]);
    setNewNews({ title: "", content: "", date: "", image: null });
  };

  const handleDeleteNews = (news) => {
    setNewsList((prev) => prev.filter((n) => n.id !== news.id));
    setShowMenu(null);
  };

  const handleEditNews = (news) => {
    setEditNews(news);
    setShowMenu(null);
  };

  const handleSaveEdit = () => {
    if (!editNews.title || !editNews.content || !editNews.date) return;
    setNewsList((prev) =>
      prev.map((n) => (n.id === editNews.id ? editNews : n))
    );
    setEditNews(null);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const updater = (prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
      ...(files && {
        imagePreview: URL.createObjectURL(files[0]),
      }),
    });

    editNews ? setEditNews(updater) : setNewNews(updater);
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#222]">Управление новостями</h1>
        <button
          onClick={handleAddNews}
          className="bg-[#8B0000] text-white px-4 py-2 rounded-2xl hover:bg-[#600000] transition flex items-center"
        >
          <FaPlus className="mr-2" /> Добавить новость
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {newsList.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-2xl shadow-md p-4 relative"
          >
            {news.imagePreview && (
              <img
                src={news.imagePreview}
                alt={news.title}
                className="w-full h-32 object-cover rounded-xl mb-3"
              />
            )}
            <h3 className="text-xl font-semibold">{news.title}</h3>
            <p className="text-sm text-gray-700 mt-1">{news.content}</p>
            <p className="text-xs text-gray-500">{news.date}</p>

            <div className="absolute top-2 right-2">
              <button
                onClick={() =>
                  setShowMenu(news.id === showMenu ? null : news.id)
                }
                className="text-gray-600 hover:text-[#8B0000]"
              >
                <FaEllipsisV />
              </button>
              {showMenu === news.id && (
                <div className="absolute right-0 mt-2 w-44 bg-white border rounded-2xl shadow z-10">
                  <button
                    onClick={() => handleEditNews(news)}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Редактировать
                  </button>
                  <button
                    onClick={() => handleDeleteNews(news)}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                  >
                    Удалить
                  </button>
                </div>
              )}
            </div>

            {editNews && editNews.id === news.id && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 space-y-4"
              >
                <input
                  type="text"
                  name="title"
                  value={editNews.title}
                  onChange={handleChange}
                  placeholder="Заголовок"
                  className="w-full p-3 border rounded-2xl shadow"
                />
                <textarea
                  name="content"
                  value={editNews.content}
                  onChange={handleChange}
                  placeholder="Содержание"
                  className="w-full p-3 border rounded-2xl shadow"
                />
                <input
                  type="date"
                  name="date"
                  value={editNews.date}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-2xl shadow"
                />
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  className="w-full p-3 border rounded-2xl shadow"
                />
                <button
                  onClick={handleSaveEdit}
                  className="bg-[#8B0000] text-white px-4 py-2 rounded-2xl hover:bg-[#600000] flex items-center"
                >
                  <FaSave className="mr-2" /> Сохранить
                </button>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Форма добавления новости */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-md p-6"
      >
        <input
          type="text"
          name="title"
          value={newNews.title}
          onChange={handleChange}
          placeholder="Заголовок"
          className="w-full p-3 border rounded-2xl shadow mb-4"
        />

        <textarea
          name="content"
          value={newNews.content}
          onChange={handleChange}
          placeholder="Содержание"
          className="w-full p-3 border rounded-2xl shadow mb-4"
        />
        <input
          type="date"
          name="date"
          value={newNews.date}
          onChange={handleChange}
          className="w-full p-3 border rounded-2xl shadow mb-4"
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          className="w-full p-3 border rounded-2xl shadow mb-4"
        />
        <button
          onClick={handleAddNews}
          className="bg-[#8B0000] text-white px-4 py-2 rounded-2xl hover:bg-[#600000] flex items-center"
        >
          <FaSave className="mr-2" /> Сохранить
        </button>
      </motion.div>
    </div>
  );
};

export default NewsAdmin;
