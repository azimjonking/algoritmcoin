import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/addteacher">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6 13H13M13 13H9.40002M13 13V9.39999M13 13V16.6"
                stroke="#878787"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M25 13C25 18.6568 25 21.4853 23.2426 23.2426C21.4853 25 18.6568 25 13 25C7.34314 25 4.51472 25 2.75736 23.2426C1 21.4853 1 18.6568 1 13C1 7.34314 1 4.51472 2.75736 2.75736C4.51472 1 7.34314 1 13 1C18.6568 1 21.4853 1 23.2426 2.75736C24.4112 3.92585 24.8027 5.56786 24.9339 8.2"
                stroke="#878787"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <span>O'qituvchi qo'shish</span>
          </Link>
        </li>
        <li>
          <Link>
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.1917 16.1569L21 21M18.7778 9.88889C18.7778 14.7981 14.7981 18.7778 9.88889 18.7778C4.97969 18.7778 1 14.7981 1 9.88889C1 4.97969 4.97969 1 9.88889 1C14.7981 1 18.7778 4.97969 18.7778 9.88889Z"
                stroke="#878787"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Qidirish</span>
          </Link>
        </li>
        <li>
          <Link className="username">
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6111 18.4456L24 12.04M24 12.04L17.6111 5.63443M24 12.04H8.66667M12.5 18.4456C12.5 18.8243 12.5 19.0136 12.4859 19.1776C12.34 20.8823 11.0879 22.2849 9.4142 22.6185C9.2532 22.6506 9.06536 22.6716 8.69011 22.7134L7.38498 22.8588C5.42428 23.0772 4.44388 23.1863 3.66501 22.9365C2.62652 22.6033 1.7787 21.8425 1.33373 20.8445C1 20.0959 1 19.107 1 17.129V6.95102C1 4.97307 1 3.9841 1.33373 3.23556C1.7787 2.23752 2.62652 1.47669 3.66501 1.14351C4.44388 0.89362 5.42425 1.00284 7.38498 1.22125L8.69011 1.36665C9.06549 1.40847 9.25318 1.42938 9.4142 1.46147C11.0879 1.79512 12.34 3.1978 12.4859 4.90241C12.5 5.06642 12.5 5.25576 12.5 5.63443"
                stroke="#939393"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
