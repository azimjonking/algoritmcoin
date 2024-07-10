// import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Login from "./routes/login/Login";
import Admin from "./routes/admin/Admin";
import Teachers from "./routes/teachers/Teachers";
import Students from "./routes/students/Students";

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  let isLogin = true;
  return (
    <div className="App">
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
}

export default App;
