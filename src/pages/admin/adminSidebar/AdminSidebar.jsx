import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAdminStore } from "./useAdminStore";
import { MdOutlineMenuBook } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiNewspaperLine } from "react-icons/ri";
import { GiScales } from "react-icons/gi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { MdAdminPanelSettings } from "react-icons/md";
import { GiTeacher } from "react-icons/gi";
import { GiMechanicGarage } from "react-icons/gi";

export default function AdminSidebar() {
  const { closePanel, isOpen, openPanel } = useAdminStore();
  const location = useLocation();

  useEffect(() => {
    closePanel();
  }, [location.pathname]);

  const menuItems = [
    { icon: <MdOutlineMenuBook />, text: "Курсы", path: "/admin/courses" },
    {
      icon: <HiOutlineDocumentText />,
      text: "Документация",
      path: "/admin/docs",
    },
    { icon: <GiScales />, text: "НПА КР", path: "/admin/npa" },
    { icon: <RiNewspaperLine />, text: "Новости", path: "/admin/news" },
    {
      icon: <MdAdminPanelSettings />,
      text: "Администрация",
      path: "",
    },
    {
      icon: <GiTeacher />,
      text: "Педагоги",
      path: "/admin/teachersad",
    },
    { icon: <GiMechanicGarage />, text: "Мастера", path: "" },
    { icon: <AiOutlineInfoCircle />, text: "О нас", path: "/admin/about" },
  ];

  return (
    <div className={`flex `}>
      <div
        onMouseEnter={openPanel}
        onMouseLeave={closePanel}
        className={`h-screen bg-[#5a0a2d] transition-all duration-300 ease-in-out
          ${isOpen ? "w-56" : "w-16"}
          flex flex-col justify-between fixed`}
      >
        <div className="pt-4 space-y-6">
          {menuItems.map((item, index) => (
            <Link
              to={item.path}
              key={index}
              className="flex items-center text-white px-4 py-2 hover:bg-[#6c183b] transition-colors"
            >
              <div className="text-xl">{item.icon}</div>
              <span
                className={`ml-3 whitespace-nowrap overflow-hidden transition-opacity duration-200 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
