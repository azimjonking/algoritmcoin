import React from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

import "./SocialNetwork.css";

const SocialNetwork = () => {
  return (
    <>
      <ul className="social-network">
        <li>
          <Link>
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link>
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link>
            <FaTelegramPlane />
          </Link>
        </li>
        <li>
          <Link>
            <FaYoutube />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default SocialNetwork;
