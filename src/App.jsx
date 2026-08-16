import AboutUs from "./components/pages/AboutUs";
import Computers from "./components/pages/Computers";
import Home from "./components/pages/Home";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="flex flex-col min-h-screen">
      <Header setPage={setPage} />
      {page === "Home" && <Home />}
      {page === "Computers" && <Computers />}
      {page === "About us" && <AboutUs />}

      <main className="flex-1" />
      <Footer />
    </div>
  );
}
