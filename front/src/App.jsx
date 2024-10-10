import { useState } from "react";
import "./App.css";
import Header from "./component/Header";
import AllNews from "./component/AllNews";
import Headlines from "./component/Headlines";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="w-full">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllNews />} />
          <Route path="/top-headlines/:category" element={<Headlines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;