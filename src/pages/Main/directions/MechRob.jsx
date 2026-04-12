import DirectionPage from "../../../components/molecules/DirectionPage";
import { useTranslation } from "react-i18next";
import img  from "../../../assets/img/mechRab.png";
import img2 from "../../../assets/img/mechRab2.png";

const MechRob = () => {
  const { t } = useTranslation();
  return (
    <DirectionPage
      image={img} image1={img2}
      name={t("MechRob.name")}
      tagline="Проектируем роботов и системы автоматизации будущего"
      title={t("MechRob.title")}   text={t("MechRob.text")}
      master={t("MechRob.master")}
      lvl1={t("MechRob.1lvl")}    lvl2={t("MechRob.2lvl")}  lvl3={t("MechRob.3lvl")}
      salary={t("MechRob.salary")}
      junior={t("MechRob.junior")} middle={t("MechRob.middle")} senior={t("MechRob.senior")}
    />
  );
};
export default MechRob;
