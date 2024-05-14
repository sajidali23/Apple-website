import React from "react";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Section from "./components/Section";
import Helper from "./components/Helper";
import Cards from "./components/Cards";
import Events from "./components/Events";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Offers />
      <Section />
      <Helper />
      <Cards />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
