import Header from "./components/Header/Header";
import "./assets/tailwind.css";
import "./assets/style.css";
import SubHeader from "./components/SubHeader/SubHeader";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Auth from "./pages/Auth/Auth";
import About from "./pages/About/About";

function App() {
  const location = useLocation();
  const [activateLayout, setActivateLayout] = useState(false);

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/register") {
      setActivateLayout(false);
    } else {
      setActivateLayout(true);
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <>
      {activateLayout ? (
        <>
          <Header />
          <SubHeader />
        </>
      ) : (
        ""
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {activateLayout ? <Footer /> : ""}
    </>
  );
}

export default App;
