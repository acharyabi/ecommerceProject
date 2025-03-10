"use client";
import type { Metadata } from "next";
import TopBar from "@/app/_components/ui/top-bar";
import NavBar from "@/app/_components/ui/nav-bar";
import "@/app/styles/globals.css";
import Footer from "./_components/ui/footer";
import { usePathname } from "next/navigation";
export const meta: Metadata = {
  title: "Ever Donuts",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col  mx-auto ">
        <div className="sticky top-0 z-50  left-0 right-0 shadow-sm  ">
        <TopBar />
          <div className="bg-white max-w-[1380px]  mx-auto">
          <NavBar />
        </div>
        {pathname === "/" ? (
            <section className="bg-primary px-3  py-5 flex justify-center   text-white w-full ">
            <p>
              Come run with us! Apply to join our exceptional team
              <span className="underline pl-1 cursor-pointer">here.</span>
            </p>
          </section>
        ) : null}
      </div>

      <div className="container px-3 sm:px-14 max-w-[1380px] min-h-screen mx-auto">
        {children}
      </div>
      <div className="bg-[#ffeaf4]">
        <Footer />
      </div>
      </body>
    </html>
  );
}
