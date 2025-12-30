import React from "react";
import Navbar from './components/Navbar'
import { useLocation, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Footer from "./components/Footer";
import AllRooms from "./components/pages/AllRooms";

const App = () => {

  const isOwnerPath=useLocation().pathname.includes("owner");
  return (
    <div>
      {!isOwnerPath && <Navbar />}

      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<AllRooms />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App