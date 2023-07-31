import React from "react";
import "./reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/main.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/shop" element={"쇼핑"} />
          <Route path="/fishing" element={"낙시터"} />
          <Route path="/realEstate" element={"부동산"} />
          <Route path="*" element={"없는 페이지 또는 Main으로 이동"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
