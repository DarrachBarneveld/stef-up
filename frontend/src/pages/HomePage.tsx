import { FunctionComponent } from "react";
import LoginForm from "../components/LoginForm";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-300 text-white">
      <LoginForm />
    </div>
  );
};

export default HomePage;
