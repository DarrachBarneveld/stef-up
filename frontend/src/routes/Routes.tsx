import { FunctionComponent } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import WorkoutsPage from "../pages/WorkoutsPage";
import ProtectedRoutes from "./ProtectedRoutes";

interface RoutesProps {}

const RootRoutes: FunctionComponent<RoutesProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/workout" element={<WorkoutsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRoutes;
