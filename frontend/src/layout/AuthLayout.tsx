import { FunctionComponent, ReactNode, useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FunctionComponent<AuthLayoutProps> = ({ children }) => {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <div className="flex h-screen bg-slate-200">
      <SideBar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header setShowNavbar={setShowNavbar} />
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
