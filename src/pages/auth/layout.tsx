import { useEffect } from "react";
import toast from "react-hot-toast";
import { Outlet } from "react-router";

import { useRouter } from "@/router/router.hook";
import { useAuth } from "./auth.hook";

const AuthLayout = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      toast.error("You are already logged in");
      router.goTo("/dashboard");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
