import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LDocs = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="w-full h-screen">
        <div className="w-11/12 mx-auto h-full flex items-center justify-between">
          <Link to="/info/position">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              {t("ldocs.positionPlit99")}
            </button>
          </Link>
          <Link to="/info/op">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              {t("ldocs.educationalPrograms")}
            </button>
          </Link>
          <Link to="/info/npakr">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              {t("ldocs.normativeActsKR")}
            </button>
          </Link>
          <Link to="/info/selfreport">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              {t("ldocs.selfAssessmentReports")}
            </button>
          </Link>
          <Link to="/info/generalseceducation">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              {t("ldocs.generalSecondaryEducation")}
            </button>
          </Link>
          <Link to="/info/rpobraz">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              {t("ldocs.generalEducationRP")}
            </button>
          </Link>
          <Link to="/info/rpprof">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              {t("ldocs.professionalRP")}
            </button>
          </Link>
          <Link to="/info/npa99">
            <button className="w-auto px-5 py-2 bg-bordo text-white rounded-md hover:bg-red-700">
              {t("ldocs.regulationsPlit99")}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default LDocs;