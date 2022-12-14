import React, { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Footer from "./Footer";

export default function Container() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderContent = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    return <Resume />;
  };

  const renderFooter = () => {
    return <Footer />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Header />
          <Nav currentPage={currentPage} pageChange={handlePageChange} />
        </nav>
      </header>
      {renderContent()}
      {renderFooter()}
    </div>
  );
}
