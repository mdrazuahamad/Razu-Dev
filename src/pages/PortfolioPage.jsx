import React from "react";
import { useEffect } from "react";
import Portfolio from "../sections/Portfolio";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PortfolioPage = () => {
  useEffect(() => {
    const section = document.getElementById("portfolio");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "125px" }}>
        <Portfolio showAll={true} />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;
