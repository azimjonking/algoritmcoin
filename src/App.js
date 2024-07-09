// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Login from "./routes/login/Login";
import Admin from "./routes/admin/Admin";

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  let isLogin = true;
  return (
    <div className="App">
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
