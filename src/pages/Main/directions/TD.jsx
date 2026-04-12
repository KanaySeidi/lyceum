import DirectionPage from "../../../components/molecules/DirectionPage";
import { useTranslation } from "react-i18next";
import img  from "../../../assets/img/td.png";
import img2 from "../../../assets/img/td2.png";

const TD = () => {
  const { t } = useTranslation();
  return (
    <DirectionPage
      image={img} image1={img2}
      name={t("TD.name")}
      tagline="Воплощаем идеи в визуальные решения, которые говорят сами за себя"
      title={t("TD.title")}   text={t("TD.text")}
      master={t("TD.master")}
      lvl1={t("TD.1lvl")}    lvl2={t("TD.2lvl")}  lvl3={t("TD.3lvl")}
      salary={t("TD.salary")}
      junior={t("TD.junior")} middle={t("TD.middle")} senior={t("TD.senior")}
    />
  );
};
export default TD;
