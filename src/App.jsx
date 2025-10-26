import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Templates from "./components/Templates";
import TemplateDetails from "./pages/TemplateDetails"; // Página de detalhes do template
import TextAction from "./components/TextAction";
import WhatsAppContact from "./components/WhatsAppContact";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Templates />
              <TextAction />
              <WhatsAppContact />
            </>
          }
        />
        <Route path="/template/:id" element={<TemplateDetails />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />  
    </BrowserRouter>
  );
}

export default App;
