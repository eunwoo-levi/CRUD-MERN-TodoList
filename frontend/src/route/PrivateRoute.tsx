import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  user: any;
  children: ReactNode;
}

export default function PrivateRoute({ user, children }: Props) {
  return <>{user ? children : <Navigate to={"/login"} />};</>;
}
