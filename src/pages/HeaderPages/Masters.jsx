import { Navigate } from "react-router-dom";

// Мастера теперь часть единой страницы коллектива
const Masters = () => <Navigate to="/plit/teachers?tab=masters" replace />;

export default Masters;
