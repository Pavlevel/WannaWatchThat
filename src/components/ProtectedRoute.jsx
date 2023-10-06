import { useAuth } from "../context/useAuth";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (user === true) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
