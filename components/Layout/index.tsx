// components/Layout.tsx
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Add your header, footer, and other common UI elements here */}
      {children}
    </div>
  );
};

export default Layout;
