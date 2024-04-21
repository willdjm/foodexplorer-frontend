import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from '../hooks/auth';

export function Routes() {
  
  const { user, isAuthenticated } = useAuth();
  const isAdmin = user ? user.admin : false;

  const Authenticated = isAuthenticated();

  return (
    <BrowserRouter>
      {(user && Authenticated) ? <AppRoutes isAdmin={isAdmin} /> : <AuthRoutes />}
    </BrowserRouter>
  );
}