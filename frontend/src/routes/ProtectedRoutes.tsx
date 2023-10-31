import { FunctionComponent, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface ProtectedRoutesProps {}

const ProtectedRoutes: FunctionComponent<ProtectedRoutesProps> = () => {
  const { user } = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
