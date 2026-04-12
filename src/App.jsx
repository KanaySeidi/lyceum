import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import routes from "./routes/routes";
import ScrollToTopOnPageChange from "./utils/ScrollToTop";

function App() {
  const router = createBrowserRouter([
    {
      element: (
        <ScrollToTopOnPageChange>
          <Layout />
        </ScrollToTopOnPageChange>
      ),
      errorElement: <NotFound />,
      children: routes,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
