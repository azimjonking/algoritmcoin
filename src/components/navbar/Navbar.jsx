import React from "react";
import { Link } from "react-router-dom";
import { FiUserPlus, FiSearch } from "react-icons/fi";
import { LuLogOut } from "react-icons/lu";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link>
            <FiUserPlus className="icon" />
            <span>O'qituvchi qo'shish</span>
          </Link>
        </li>
        <li>
          <Link>
            <FiSearch className="icon" />
            <span>Qidirish</span>
          </Link>
        </li>
        <li>
          <Link>
            <span>utkirgiyosov</span>
          </Link>
        </li>
        <li>
          <Link className="userImg">
            {false ? <img src="./assets/user.jfif" alt="U" /> : <span>U</span>}
          </Link>
        </li>
        <li>
          <Link>
            <span>Chiqish</span>
            <LuLogOut className="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
