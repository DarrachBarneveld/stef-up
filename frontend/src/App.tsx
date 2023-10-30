import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WorkoutContextProvider } from "./context/WorkoutContext";

import "./App.css";
import SideBar from "./components/Sidebar";
import Header from "./components/Header";
import { useState } from "react";
import DashboardPage from "./pages/DashboardPage";
import WorkoutsPage from "./pages/WorkoutsPage";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  return (
    <WorkoutContextProvider>
      <BrowserRouter>
        <div className="flex h-screen bg-slate-200">
          <SideBar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
          <div className="flex flex-1 flex-col overflow-hidden">
            <Header setShowNavbar={setShowNavbar} />
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="workouts" element={<WorkoutsPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </WorkoutContextProvider>
  );
}

export default App;
