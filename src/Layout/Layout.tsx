import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={"min-vh-100 d-flex flex-column"}>
      <Header/>
      <main>
        <div className={"container mt-3"}>
          {children}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;