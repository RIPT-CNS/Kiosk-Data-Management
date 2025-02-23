import { useTheme } from "@/components/common/ThemeProvider";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

const AuthLayout = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="min-h-screen">
        <main>
          <Outlet />
        </main>
      </div>
      <Toaster richColors position="top-center" theme={theme} />
    </>
  );
}

export default AuthLayout;
