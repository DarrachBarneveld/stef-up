import { FunctionComponent } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-6 bg-slate-300 text-white">
      <LoginForm />
      <RegisterForm />
    </div>
  );
};

export default HomePage;
