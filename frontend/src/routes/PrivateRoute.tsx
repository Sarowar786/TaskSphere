import { Navigate, Outlet } from "react-router-dom";

type PrivateRouteProps = {
  allowedRoles: string[]; 
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ allowedRoles }) => {
  const userRole = "admin"; 

  return allowedRoles.includes(userRole) ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
