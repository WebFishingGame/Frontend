import React from "react";
import "./reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/main.tsx";
import Fishing from "./components/Fishing/river.tsx";
import RealEstate from "./components/realEstate/realEstate.tsx";
import Shopping from "./components/Shop/shopping.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={<Shopping />} />
          <Route path="/fishing" element={<Fishing />} />
          <Route path="/realEstate" element={<RealEstate />} />
          <Route path="*" element={"없는 페이지 또는 Main으로 이동"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
