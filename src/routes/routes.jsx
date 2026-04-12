import {
  CoursesPage,
  CourseDetailPage,
  InfoPage,
  AutoMechanic,
  Backend,
  Exploitation,
  Frontend,
  Information,
  Main,
  MechRob,
  MobileDevelopment,
  SisAdm,
  TD,
  Applicants,
  LDocs,
  NewsCards,
  News,
  About,
  TeacherSl,
  Masters,
  LoginPage,
  AdminPage,
  HomeAdmin,
  CoursesAdmin,
  DocsAdmin,
  NpaAdmin,
  NewsAdmin,
  PlitAdmin,
  AboutAdmin,
  TeachersSlAdmin,
} from "../pages";
import Layout from "../pages/admin/adminSidebar/Layout";
import GeneralSecEducation from "../pages/HeaderPages/documents/GeneralSecEducation";
import Npa99 from "../pages/HeaderPages/documents/Npa99";
import NpaKr from "../pages/HeaderPages/documents/NpaKr";
import NPAPosition from "../pages/HeaderPages/documents/NPAPosition";
import OP from "../pages/HeaderPages/documents/OP";
import RpObraz from "../pages/HeaderPages/documents/RpObraz";
import RPProf from "../pages/HeaderPages/documents/RPProf";
import SelfReport from "../pages/HeaderPages/documents/SelfReport";

const routes = [
  { path: "/", element: <Main /> },
  { path: "/courses", element: <CoursesPage /> },
  { path: "/courses/:id", element: <CourseDetailPage /> },
  { path: "/info", element: <InfoPage /> },
  { path: "/fr", element: <Frontend /> },
  { path: "/br", element: <Backend /> },
  { path: "/mr", element: <MechRob /> },
  { path: "/md", element: <MobileDevelopment /> },
  { path: "/sa", element: <SisAdm /> },
  { path: "/td", element: <TD /> },
  { path: "/am", element: <AutoMechanic /> },
  { path: "/in", element: <Information /> },
  { path: "/ex", element: <Exploitation /> },
  { path: "/info/applicant", element: <Applicants /> },
  { path: "/info/docs", element: <LDocs /> },
  { path: "/info/op", element: <OP /> },
  { path: "/info/position", element: <NPAPosition /> },
  { path: "/info/selfreport", element: <SelfReport /> },
  { path: "/info/generalseceducation", element: <GeneralSecEducation /> },
  { path: "/info/rpobraz", element: <RpObraz /> },
  { path: "/info/rpprof", element: <RPProf /> },
  { path: "/info/npakr", element: <NpaKr /> },
  { path: "/info/npa99", element: <Npa99 /> },
  { path: "/news", element: <NewsCards /> },
  { path: "/news/:id", element: <News /> },
  { path: "/plit/about", element: <About /> },
  { path: "/plit/teachers", element: <TeacherSl /> },
  { path: "/plit/masters", element: <Masters /> },
  // { path: "/plit/teachers/:id", element: <Teacherinfo /> },
  {
    path: "/admin",
    element: <Layout />,
    children: [
      { path: "sign", element: <LoginPage /> }, // Страница входа
      { path: "main", element: <AdminPage /> }, // Страница админки
      { path: "home", element: <HomeAdmin /> },
      { path: "courses", element: <CoursesAdmin /> },
      { path: "docs", element: <DocsAdmin /> },
      { path: "npa", element: <NpaAdmin /> },
      { path: "news", element: <NewsAdmin /> },
      { path: "plit", element: <PlitAdmin /> },
      { path: "about", element: <AboutAdmin /> },
      { path: "teachersad", element: <TeachersSlAdmin /> },
    ],
  },
];

export default routes;
