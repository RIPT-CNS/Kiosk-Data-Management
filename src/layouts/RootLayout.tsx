import RootFooter from "@/components/layout/RootFooter";
import RootHeader from "@/components/layout/RootHeader";
import { Toaster } from "sonner";
import { Outlet } from "react-router";
import { useTheme } from "@/components/common/ThemeProvider";

const RootLayout = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex flex-col flex-1">
        <RootHeader />
        <main className="flex flex-col flex-1">
          <Outlet />
        </main>
        <RootFooter />
      </div>
      <Toaster richColors position="top-center" theme={theme} />
    </>
  );
}

export default RootLayout;