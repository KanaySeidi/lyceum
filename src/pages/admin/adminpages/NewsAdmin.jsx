import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNews } from "../../../hooks/useNews";

const EMPTY = { title: "", category: "", date: "", content: "", image: null, imagePreview: null };

const Field = ({ label, children }) => (
  <div>
    <label className="block text-xs font-bold uppercase tracking-wide mb-1.5" style={{ color: "#63001F99" }}>
      {label}
    </label>
    {children}
  </div>
);

const inputCls = "w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200";
const inputStyle = { border: "2px solid #63001F11", background: "#F8F2F4", color: "#63001F" };

export default function NewsAdmin() {
  const { news, pinnedId, togglePin } = useNews();
  const [localNews, setLocalNews] = useState(news);
  const [form, setForm] = useState(EMPTY);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((p) => ({ ...p, image: files[0], imagePreview: URL.createObjectURL(files[0]) }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
  };

  const handleSave = () => {
    if (!form.title || !form.category || !form.date) return;
    if (editId !== null) {
      setLocalNews((p) => p.map((n) => (n.id === editId ? { ...n, ...form } : n)));
      setEditId(null);
    } else {
      setLocalNews((p) => [{ id: Date.now(), ...form }, ...p]);
    }
    setForm(EMPTY);
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setForm({ ...item });
    setEditId(item.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    setLocalNews((p) => p.filter((n) => n.id !== id));
    setDeleteId(null);
  };

  const handleCancel = () => {
    setForm(EMPTY);
    setEditId(null);
    setShowForm(false);
  };

  const displayNews = localNews.length ? localNews : news;

  return (
    <div className="max-w-6xl space-y-6">
      {/* Заголовок */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: "#63001F" }}>Новости</h2>
          <p className="text-sm" style={{ color: "#63001F66" }}>{displayNews.length} материалов</p>
        </div>
        <button
          onClick={() => { setShowForm(!showForm); setEditId(null); setForm(EMPTY); }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:scale-105"
          style={{ background: "linear-gradient(135deg, #63001F, #8B0032)", boxShadow: "0 4px 16px rgba(99,0,31,0.3)" }}
        >
          {showForm ? "✕ Отмена" : "+ Добавить новость"}
        </button>
      </div>

      {/* Форма */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl p-6 space-y-4"
            style={{ background: "#fff", border: "2px solid #C4973A44", boxShadow: "0 4px 24px rgba(99,0,31,0.1)" }}
          >
            <h3 className="font-bold text-base" style={{ color: "#63001F" }}>
              {editId ? "✏️ Редактирование новости" : "➕ Новая новость"}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Field label="Заголовок">
                <input name="title" value={form.title} onChange={handleChange} placeholder="Введите заголовок"
                  className={inputCls} style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#C4973A")}
                  onBlur={(e) => (e.target.style.borderColor = "#63001F11")} />
              </Field>
              <Field label="Категория">
                <input name="category" value={form.category} onChange={handleChange} placeholder="Напр.: СОБЫТИЯ"
                  className={inputCls} style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#C4973A")}
                  onBlur={(e) => (e.target.style.borderColor = "#63001F11")} />
              </Field>
              <Field label="Дата">
                <input name="date" type="date" value={form.date} onChange={handleChange}
                  className={inputCls} style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "#C4973A")}
                  onBlur={(e) => (e.target.style.borderColor = "#63001F11")} />
              </Field>
              <Field label="Изображение">
                <label className="flex items-center gap-3 cursor-pointer px-4 py-2.5 rounded-xl text-sm transition-all duration-200"
                  style={{ border: "2px dashed #63001F33", background: "#F8F2F4", color: "#63001F99" }}>
                  <span>📎 {form.image ? form.image.name : "Выбрать файл"}</span>
                  <input type="file" name="image" accept="image/*" onChange={handleChange} className="hidden" />
                </label>
              </Field>
            </div>

            <Field label="Содержание">
              <textarea name="content" value={form.content} onChange={handleChange} placeholder="Текст новости..."
                rows={5} className={inputCls} style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = "#C4973A")}
                onBlur={(e) => (e.target.style.borderColor = "#63001F11")} />
            </Field>

            {form.imagePreview && (
              <img src={form.imagePreview} alt="preview" className="h-32 w-auto rounded-xl object-cover" />
            )}

            <div className="flex gap-3 pt-2">
              <button onClick={handleSave}
                className="px-6 py-2.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #63001F, #8B0032)", boxShadow: "0 4px 16px rgba(99,0,31,0.3)" }}>
                💾 Сохранить
              </button>
              <button onClick={handleCancel}
                className="px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-200"
                style={{ background: "#63001F11", color: "#63001F" }}>
                Отмена
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Список новостей */}
      <div className="space-y-3">
        {displayNews.map((item, i) => {
          const isPinned = item.id === pinnedId;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200"
              style={{
                background: "#fff",
                border: isPinned ? "2px solid #C4973A" : "2px solid #63001F0D",
                boxShadow: isPinned ? "0 4px 20px rgba(196,151,58,0.15)" : "0 2px 10px rgba(99,0,31,0.05)",
              }}
            >
              {/* Фото */}
              <img
                src={item.image || item.imagePreview}
                alt={item.title}
                className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                onError={(e) => { e.target.src = "https://placehold.co/64x64?text=?"; }}
              />

              {/* Инфо */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {isPinned && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#C4973A", color: "#fff" }}>
                      📌 Закреплено
                    </span>
                  )}
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: "#63001F0D", color: "#63001F99" }}>
                    {item.category}
                  </span>
                </div>
                <p className="font-bold text-sm truncate" style={{ color: "#63001F" }}>{item.title}</p>
                <p className="text-xs" style={{ color: "#63001F55" }}>{item.date}</p>
              </div>

              {/* Действия */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {/* Пин */}
                <button
                  onClick={() => togglePin(item.id)}
                  title={isPinned ? "Открепить" : "Закрепить на главной"}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all duration-200 hover:scale-110"
                  style={{
                    background: isPinned ? "#C4973A" : "#63001F0D",
                    color: isPinned ? "#fff" : "#63001F66",
                  }}
                >
                  📌
                </button>

                {/* Редактировать */}
                <button
                  onClick={() => handleEdit(item)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all duration-200 hover:scale-110"
                  style={{ background: "#63001F0D", color: "#63001F" }}
                >
                  ✏️
                </button>

                {/* Удалить */}
                <button
                  onClick={() => setDeleteId(item.id)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-base transition-all duration-200 hover:scale-110"
                  style={{ background: "#FF000011", color: "#CC0000" }}
                >
                  🗑️
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Подтверждение удаления */}
      <AnimatePresence>
        {deleteId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50"
              style={{ background: "rgba(99,0,31,0.5)", backdropFilter: "blur(4px)" }}
              onClick={() => setDeleteId(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-sm p-6 rounded-2xl"
              style={{ background: "#fff", boxShadow: "0 20px 60px rgba(99,0,31,0.3)" }}
            >
              <p className="text-xl font-bold mb-2" style={{ color: "#63001F" }}>Удалить новость?</p>
              <p className="text-sm mb-6" style={{ color: "#63001F77" }}>Это действие нельзя отменить.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleDelete(deleteId)}
                  className="flex-1 py-2.5 rounded-xl font-bold text-sm text-white"
                  style={{ background: "#CC0000" }}
                >
                  Удалить
                </button>
                <button
                  onClick={() => setDeleteId(null)}
                  className="flex-1 py-2.5 rounded-xl font-bold text-sm"
                  style={{ background: "#63001F0D", color: "#63001F" }}
                >
                  Отмена
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
