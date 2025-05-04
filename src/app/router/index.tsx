import AboutPage from "@/pages/AboutPage";
import ContactsPage from "@/pages/ContactsPage";
import FiltersPage from "@/pages/FiltersPage";
import HomePage from "@/pages/HomePage";
import TrainingPage from "@/pages/TrainingPage";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../layout";
import { COMMON_ROUTES_NAMES } from "./commonRoutesNames";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={COMMON_ROUTES_NAMES.Home} element={<HomePage />} />
          <Route
            path={COMMON_ROUTES_NAMES.Training}
            element={<TrainingPage />}
          />
          <Route
            path={COMMON_ROUTES_NAMES.Category}
            element={<FiltersPage />}
          />
          <Route path={COMMON_ROUTES_NAMES.Contacts} element={<ContactsPage />} />
          <Route path={COMMON_ROUTES_NAMES.About} element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
