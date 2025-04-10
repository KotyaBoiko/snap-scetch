import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import TrainingPage from "../pages/TrainingPage";
import HomePage from "../pages/HomePage";
import GalleryPage from "../pages/GalleryPage";
import AboutPage from "../pages/AboutPage";
import { COMMON_ROUTES_NAMES } from "./commonRoutesNames";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={COMMON_ROUTES_NAMES.Home} element={<HomePage />} />
          <Route path={COMMON_ROUTES_NAMES.Training} element={<TrainingPage />} />
          <Route path={COMMON_ROUTES_NAMES.Gallery} element={<GalleryPage />} />
          <Route path={COMMON_ROUTES_NAMES.About} element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
