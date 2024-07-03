import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Home from "./components/routes/home/Home";

function App() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="App">
      {isLogin && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
