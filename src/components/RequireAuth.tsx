import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);
  const token = localStorage.getItem('authToken')

  if (!auth.user && !token) {
    return <Navigate to="/" />;
   }

    return children;
};
