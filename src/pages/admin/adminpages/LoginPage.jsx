import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logoRu from "../../../assets/icon/rus_logo.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    // TODO: заменить на реальную проверку через API
    if (username === "admin" && password === "admin") {
      navigate("/admin/main");
    } else {
      setError("Неверный логин или пароль");
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex" style={{ background: "#F8F2F4" }}>
      {/* ── Левая панель ── */}
      <div
        className="hidden lg:flex flex-col justify-between w-[45%] p-12 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #63001F 0%, #8B0032 60%, #A0003A 100%)",
        }}
      >
        {/* Декор */}
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{ background: "#C4973A" }}
        />
        <div
          className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full opacity-10"
          style={{ background: "#C4973A" }}
        />

        <div className="relative"></div>

        <div className="relative space-y-6">
          <h1 className="text-4xl font-bold text-white leading-tight">
            Панель управления
            <br />
            сайтом ПЛИТ
          </h1>
          <p className="text-white/60 text-base leading-relaxed max-w-sm">
            Управляйте новостями, документами, курсами и коллективом колледжа в
            едином интерфейсе.
          </p>
          <div className="flex gap-4 pt-2">
            {["Новости", "Курсы", "Коллектив", "Документы"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold px-3 py-1.5 rounded-full"
                style={{
                  background: "#C4973A22",
                  color: "#C4973A",
                  border: "1px solid #C4973A44",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <p className="relative text-white/30 text-xs">
          © 2025 ПЛИТ — Все права защищены
        </p>
      </div>

      {/* ── Правая панель (форма) ── */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Мобильный лого */}
          <div className="lg:hidden flex justify-center mb-8">
            <img src={logoRu} alt="ПЛИТ" className="h-16 w-auto" />
          </div>

          <div className="mb-8">
            <h2
              className="text-3xl font-bold mb-1"
              style={{ color: "#63001F" }}
            >
              Добро пожаловать
            </h2>
            <p style={{ color: "#63001F77" }}>
              Войдите в панель администратора
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Логин */}
            <div>
              <label
                className="block text-sm font-bold mb-2"
                style={{ color: "#63001F" }}
              >
                Логин
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Введите логин"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  border: "2px solid #63001F22",
                  background: "#fff",
                  color: "#63001F",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#C4973A")}
                onBlur={(e) => (e.target.style.borderColor = "#63001F22")}
              />
            </div>

            {/* Пароль */}
            <div>
              <label
                className="block text-sm font-bold mb-2"
                style={{ color: "#63001F" }}
              >
                Пароль
              </label>
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите пароль"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 pr-12"
                  style={{
                    border: "2px solid #63001F22",
                    background: "#fff",
                    color: "#63001F",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#C4973A")}
                  onBlur={(e) => (e.target.style.borderColor = "#63001F22")}
                />
                <button
                  type="button"
                  onClick={() => setShow(!show)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-lg"
                  style={{ color: "#63001F66" }}
                >
                  {show ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Ошибка */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium"
                style={{
                  background: "#63001F11",
                  color: "#63001F",
                  border: "1px solid #63001F33",
                }}
              >
                ⚠️ {error}
              </motion.div>
            )}

            {/* Кнопка */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: "linear-gradient(135deg, #63001F, #8B0032)",
                boxShadow: "0 4px 20px rgba(99,0,31,0.3)",
              }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Вход...
                </span>
              ) : (
                "Войти"
              )}
            </button>
          </form>

          <p
            className="text-center text-xs mt-8"
            style={{ color: "#63001F44" }}
          >
            Демо: admin / admin
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;
