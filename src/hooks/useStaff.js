import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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

const staffImages = {
  management: [teacher1, teacher2, teacher3, teacher4],
  teachers: [teacher1, teacher2, teacher3, teacher4, teacher5, teacher6, teacher7, teacher8, teacher9, teacher10],
  masters: [teacher3, teacher5, teacher7, teacher9, teacher2, teacher4, teacher6, teacher8],
};

export const useStaff = () => {
  const { t, i18n } = useTranslation();
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

    const localizedStaff = t("mockStaff", { returnObjects: true });
    const withImages = Object.fromEntries(
      ["management", "teachers", "masters"].map((group) => [
        group,
        Array.isArray(localizedStaff[group])
          ? localizedStaff[group].map((person, index) => ({
              ...person,
              img: staffImages[group][index],
            }))
          : [],
      ])
    );

    setData(withImages);
    setLoading(false);
  }, [i18n.language, t]);

  return { data, loading };
};
