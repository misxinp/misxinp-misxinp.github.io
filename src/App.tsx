import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'antd/dist/antd.min.css'
import Home from "./pages/Home";
import AssetTest from "./pages/AssetTest";
import TestAssetDetail from "./pages/TestAssetDetail";

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asset/detail" element={<TestAssetDetail />} />
          <Route path="/asset" element={<AssetTest />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
