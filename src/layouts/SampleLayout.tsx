import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router";

const RootLayout = () => {
    return (
        <>
            <div className="flex flex-1 flex-col ">
                <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                    <div className="container-wrapper">
                        Sample header
                    </div>
                </header>
                <main className="flex flex-1 flex-col">
                    <Outlet />
                </main>
                <footer className="border-t py-6 md:py-0">
                    <div className="container-wrapper">
                        Sample footer
                    </div>
                </footer>
            </div>
            <Toaster />
        </>
    );
}

export default RootLayout;