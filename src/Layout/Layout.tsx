import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <div className={"min-vh-100 d-flex flex-column bg-secondary"}>
      <Header/>
      <main style={{marginTop:65}}>
        <div className={"container h-100 overflow-y-auto"}>
          {children}
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;