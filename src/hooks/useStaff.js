import { useState, useEffect } from "react";
import teacher1 from "../assets/img/teacher1.jpg";
import teacher2 from "../assets/img/teacher2.jpg";
import teacher3 from "../assets/img/teacher3.jpg";
import teacher4 from "../assets/img/teacher4.jpg";
import teacher5 from "../assets/img/teacher5.jpg";
import teacher6 from "../assets/img/teacher6.jpg";
import teacher7 from "../assets/img/teacher7.jpg";
import teacher8 from "../assets/img/teacher8.jpg";
import teacher9 from "../assets/img/teacher9.jpg";
import teacher10 from "../assets/img/teacher10.jpg";

// TODO: заменить на API-вызов:
// const res = await fetch(`${API_URL}/api/staff?type=${type}`)

const mockManagement = [
  { id: 1, name: "Руководитель 1", role: "Директор", img: teacher1 },
  { id: 2, name: "Руководитель 2", role: "Заместитель директора", img: teacher2 },
  { id: 3, name: "Руководитель 3", role: "Завуч по учебной части", img: teacher3 },
  { id: 4, name: "Руководитель 4", role: "Завуч по воспитательной работе", img: teacher4 },
];

const mockTeachers = [
  { id: 1, name: "Преподаватель 1",  role: "Преподаватель информатики",  img: teacher1 },
  { id: 2, name: "Преподаватель 2",  role: "Преподаватель математики",   img: teacher2 },
  { id: 3, name: "Преподаватель 3",  role: "Преподаватель физики",       img: teacher3 },
  { id: 4, name: "Преподаватель 4",  role: "Преподаватель программирования", img: teacher4 },
  { id: 5, name: "Преподаватель 5",  role: "Преподаватель английского",  img: teacher5 },
  { id: 6, name: "Преподаватель 6",  role: "Преподаватель базы данных",  img: teacher6 },
  { id: 7, name: "Преподаватель 7",  role: "Преподаватель сетей",        img: teacher7 },
  { id: 8, name: "Преподаватель 8",  role: "Преподаватель веб-дизайна",  img: teacher8 },
  { id: 9, name: "Преподаватель 9",  role: "Преподаватель кыргызского",  img: teacher9 },
  { id: 10, name: "Преподаватель 10", role: "Преподаватель истории",     img: teacher10 },
];

const mockMasters = [
  { id: 1, name: "Мастер 1",  role: "Мастер производственного обучения", img: teacher3 },
  { id: 2, name: "Мастер 2",  role: "Мастер производственного обучения", img: teacher5 },
  { id: 3, name: "Мастер 3",  role: "Мастер производственного обучения", img: teacher7 },
  { id: 4, name: "Мастер 4",  role: "Мастер производственного обучения", img: teacher9 },
  { id: 5, name: "Мастер 5",  role: "Мастер производственного обучения", img: teacher2 },
  { id: 6, name: "Мастер 6",  role: "Мастер производственного обучения", img: teacher4 },
  { id: 7, name: "Мастер 7",  role: "Мастер производственного обучения", img: teacher6 },
  { id: 8, name: "Мастер 8",  role: "Мастер производственного обучения", img: teacher8 },
];

export const useStaff = () => {
  const [data, setData] = useState({ management: [], teachers: [], masters: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: заменить на:
    // const [mgmt, teach, mast] = await Promise.all([
    //   fetch(`${API_URL}/api/staff?type=management`).then(r => r.json()),
    //   fetch(`${API_URL}/api/staff?type=teachers`).then(r => r.json()),
    //   fetch(`${API_URL}/api/staff?type=masters`).then(r => r.json()),
    // ]);
    // setData({ management: mgmt, teachers: teach, masters: mast });

    setData({ management: mockManagement, teachers: mockTeachers, masters: mockMasters });
    setLoading(false);
  }, []);

  return { data, loading };
};
