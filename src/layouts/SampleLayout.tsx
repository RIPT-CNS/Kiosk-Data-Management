import { Toaster } from "sonner";
import { Outlet } from "react-router";
import { useTheme } from "@/components/common/ThemeProvider";
const RootLayout = () => {
    const { theme } = useTheme();
    return (
        <>
            <div className="flex flex-col flex-1">
                <header className="top-0 z-50 sticky bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b w-full">
                    <div className="container-wrapper">
                        Sample header
                    </div>
                </header>
                <main className="flex flex-col flex-1">
                    <Outlet />
                </main>
                <footer className="py-6 md:py-0 border-t">
                    <div className="container-wrapper">
                        Sample footer
                    </div>
                </footer>
            </div>
            <Toaster richColors position="top-center" theme={theme} />
        </>
    );
}

export default RootLayout;