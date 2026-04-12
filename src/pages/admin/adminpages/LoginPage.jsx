import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Проверка логина и пароля
    if (username === "" && password === "") {
      navigate("/admin/main"); // Перенаправление на страницу админки
    } else {
      setError("Неверный логин или пароль");
    }
  };

  return (
    <div className="w-full h-screen absolute top-0 left-0">
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Вход в админку
          </h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border p-2 rounded"
            />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border p-2 rounded"
            />
            <button
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
