import React from "react";
import HeaderIntroSection from "./HeaderIntroSection";
import ContactSection from "./ContactSection";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900">
      <main className="container mx-auto px-4 py-12 max-w-6xl flex flex-col items-center">
        <HeaderIntroSection />
        {children}
        <ContactSection />
      </main>
    </div>
  );
};

export default MainLayout;
