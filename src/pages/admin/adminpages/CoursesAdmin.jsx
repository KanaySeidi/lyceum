import { useState, useEffect, useRef } from "react";
import { Save, Plus, Trash2, Pencil, X, Upload, ImageIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = [
  { key: "sports",       label: "Спорт" },
  { key: "language",     label: "Языки" },
  { key: "professional", label: "Профессиональные" },
];

const EMPTY_FORM = { title: "", description: "", price: "", duration: "", imagePreview: null };

const toBase64 = (file) =>
  new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.readAsDataURL(file);
  });

const ImageUpload = ({ value, onChange }) => {
  const inputRef = useRef(null);

  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5" style={{ color: "#1A3FA0" }}>
        Фото курса
      </label>
      <div
        onClick={() => inputRef.current?.click()}
        className="relative cursor-pointer rounded-xl overflow-hidden border-2 border-dashed transition-all duration-200"
        style={{
          height: 160,
          borderColor: value ? "#1A3FA0" : "#1A3FA044",
          background: value ? "transparent" : "#F0F4FF",
        }}
      >
        {value ? (
          <>
            <img src={value} alt="preview" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white text-sm font-semibold">Заменить фото</p>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <ImageIcon size={32} style={{ color: "#1A3FA066" }} />
            <p className="text-sm font-medium" style={{ color: "#1A3FA088" }}>
              Нажмите чтобы загрузить
            </p>
            <p className="text-xs" style={{ color: "#1A3FA055" }}>JPG, PNG до 5MB</p>
          </div>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (file) {
            const base64 = await toBase64(file);
            onChange(base64);
          }
        }}
      />
    </div>
  );
};

const CourseForm = ({ initial, onSave, onCancel, title }) => {
  const [form, setForm] = useState(initial ?? EMPTY_FORM);

  const set = (key, val) => setForm((p) => ({ ...p, [key]: val }));
  const valid = form.title.trim() && form.description.trim() && form.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      className="rounded-2xl p-6 space-y-4"
      style={{ background: "#fff", border: "2px solid #1A3FA022", boxShadow: "0 4px 24px rgba(26,63,160,0.08)" }}
    >
      <h3 className="text-lg font-bold" style={{ color: "#1A3FA0" }}>{title}</h3>

      <ImageUpload value={form.imagePreview} onChange={(v) => set("imagePreview", v)} />

      {[
        { key: "title",       placeholder: "Название курса",   type: "text" },
        { key: "description", placeholder: "Краткое описание", type: "text" },
        { key: "duration",    placeholder: "Длительность (напр. 3 месяца)", type: "text" },
        { key: "price",       placeholder: "Цена (сом)",        type: "number" },
      ].map(({ key, placeholder, type }) => (
        <input
          key={key}
          type={type}
          value={form[key]}
          onChange={(e) => set(key, e.target.value)}
          placeholder={placeholder}
          className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all duration-200"
          style={{
            border: "2px solid #1A3FA022",
            background: "#F8FAFF",
            color: "#1A3FA0",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#1A3FA0")}
          onBlur={(e) => (e.target.style.borderColor = "#1A3FA022")}
        />
      ))}

      <div className="flex gap-2 pt-1">
        <button
          onClick={() => valid && onSave(form)}
          disabled={!valid}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200"
          style={{ background: valid ? "#1A3FA0" : "#1A3FA055", cursor: valid ? "pointer" : "not-allowed" }}
        >
          <Save size={15} /> Сохранить
        </button>
        <button
          onClick={onCancel}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200"
          style={{ background: "#F0F4FF", color: "#1A3FA0" }}
        >
          <X size={15} /> Отмена
        </button>
      </div>
    </motion.div>
  );
};

const CoursesAdmin = () => {
  const [courses, setCourses] = useState(() => {
    try { return JSON.parse(localStorage.getItem("courses") || "{}"); } catch { return {}; }
  });
  const [activeCategory, setActiveCategory] = useState("sports");
  const [editId, setEditId] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const list = courses[activeCategory] || [];

  const handleAdd = (form) => {
    const newCourse = { ...form, id: `custom_${Date.now()}`, category: activeCategory };
    setCourses((p) => ({ ...p, [activeCategory]: [...(p[activeCategory] || []), newCourse] }));
    setShowAddForm(false);
  };

  const handleEdit = (form) => {
    setCourses((p) => ({
      ...p,
      [activeCategory]: p[activeCategory].map((c) => (c.id === editId ? { ...c, ...form } : c)),
    }));
    setEditId(null);
  };

  const handleDelete = (id) => {
    if (!window.confirm("Удалить курс?")) return;
    setCourses((p) => ({ ...p, [activeCategory]: p[activeCategory].filter((c) => c.id !== id) }));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold" style={{ color: "#1A3FA0" }}>Управление курсами</h1>
          <p className="text-sm mt-0.5" style={{ color: "#1A3FA077" }}>Добавляйте, редактируйте и удаляйте курсы</p>
        </div>
        <button
          onClick={() => { setShowAddForm(true); setEditId(null); }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
          style={{ background: "#1A3FA0" }}
        >
          <Plus size={16} /> Добавить курс
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 p-1.5 rounded-2xl w-fit" style={{ background: "#fff", boxShadow: "0 2px 12px rgba(26,63,160,0.1)" }}>
        {CATEGORIES.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => { setActiveCategory(key); setShowAddForm(false); setEditId(null); }}
            className="px-5 py-2 rounded-xl text-sm font-bold transition-all duration-200"
            style={{
              background: activeCategory === key ? "#1A3FA0" : "transparent",
              color: activeCategory === key ? "#fff" : "#1A3FA077",
              boxShadow: activeCategory === key ? "0 4px 12px rgba(26,63,160,0.3)" : "none",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Add form */}
      <AnimatePresence>
        {showAddForm && (
          <div className="mb-6">
            <CourseForm
              title={`Новый курс — ${CATEGORIES.find(c => c.key === activeCategory)?.label}`}
              onSave={handleAdd}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        )}
      </AnimatePresence>

      {/* Course grid */}
      {list.length === 0 ? (
        <div className="text-center py-20 rounded-2xl" style={{ background: "#F0F4FF" }}>
          <ImageIcon size={40} className="mx-auto mb-3" style={{ color: "#1A3FA044" }} />
          <p className="font-bold" style={{ color: "#1A3FA0" }}>Курсов пока нет</p>
          <p className="text-sm mt-1" style={{ color: "#1A3FA066" }}>Нажмите «Добавить курс» чтобы создать первый</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {list.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="rounded-2xl overflow-hidden"
                style={{ background: "#fff", border: "2px solid #1A3FA011", boxShadow: "0 2px 12px rgba(26,63,160,0.06)" }}
              >
                {editId === course.id ? (
                  <div className="p-4">
                    <CourseForm
                      title="Редактировать курс"
                      initial={course}
                      onSave={handleEdit}
                      onCancel={() => setEditId(null)}
                    />
                  </div>
                ) : (
                  <>
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden" style={{ background: "#1A3FA0" }}>
                      {course.imagePreview ? (
                        <img src={course.imagePreview} alt={course.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <ImageIcon size={40} style={{ color: "rgba(255,255,255,0.2)" }} />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      {course.price && (
                        <span className="absolute bottom-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full"
                          style={{ background: "#C4973A", color: "#fff" }}>
                          {course.price} сом
                        </span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="p-4">
                      <p className="font-bold text-sm line-clamp-1" style={{ color: "#1A3FA0" }}>{course.title}</p>
                      <p className="text-xs mt-1 line-clamp-2" style={{ color: "#1A3FA077" }}>{course.description}</p>
                      {course.duration && (
                        <p className="text-xs mt-1.5 font-medium" style={{ color: "#C4973A" }}>⏱ {course.duration}</p>
                      )}

                      {/* Actions */}
                      <div className="flex gap-2 mt-3">
                        <button
                          onClick={() => { setEditId(course.id); setShowAddForm(false); }}
                          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200"
                          style={{ background: "#F0F4FF", color: "#1A3FA0" }}
                          onMouseEnter={e => e.currentTarget.style.background = "#1A3FA0" || (e.currentTarget.style.color = "#fff")}
                          onMouseLeave={e => { e.currentTarget.style.background = "#F0F4FF"; e.currentTarget.style.color = "#1A3FA0"; }}
                        >
                          <Pencil size={12} /> Изменить
                        </button>
                        <button
                          onClick={() => handleDelete(course.id)}
                          className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-200"
                          style={{ background: "#FFF0F0", color: "#dc2626" }}
                        >
                          <Trash2 size={12} />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default CoursesAdmin;
