import DirectionPage from "../../../components/molecules/DirectionPage";
import { useTranslation } from "react-i18next";
import img  from "../../../assets/img/mobDevelop.webp";
import img2 from "../../../assets/img/mobDeveloper.webp";

const MobileDevelopment = () => {
  const { t } = useTranslation();
  return (
    <DirectionPage
      image={img} image1={img2}
      name={t("mobDevelopment.name")}
      tagline="Разрабатываем приложения, которые живут в кармане у миллионов"
      title={t("mobDevelopment.title")}   text={t("mobDevelopment.text")}
      master={t("mobDevelopment.master")}
      lvl1={t("mobDevelopment.1lvl")}    lvl2={t("mobDevelopment.2lvl")}  lvl3={t("mobDevelopment.3lvl")}
      salary={t("mobDevelopment.salary")}
      junior={t("mobDevelopment.junior")} middle={t("mobDevelopment.middle")} senior={t("mobDevelopment.senior")}
    />
  );
};
export default MobileDevelopment;
