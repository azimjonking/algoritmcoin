import "./Header.css";
import { Link } from "react-router-dom";
import SocialNetwork from "../socialNetwork/SocialNetwork";
import Navbar from "../navbar/Navbar";

const Header = ({ isLogin }) => {
  return (
    <header className="container">
      <Link to="/" className="logo">
        <img src="./assets/logo.png" alt="Algoritm" />
        <span>COIN</span>
      </Link>

      {!isLogin && <span className="edu-name">Algoritm O'quv Markazi</span>}
      {isLogin && (
        <div className="coin-list__text">
          <div className="img">
            <img src="./assets/logo.png" alt="algoritm logo" />
          </div>
          <span>Coin List</span>
        </div>
      )}
      {!isLogin && <SocialNetwork />}
      {isLogin && <Navbar />}
      {!isLogin && (
        <Link to="result" className="result">
          Natijani ko'rish
        </Link>
      )}
    </header>
  );
};

export default Header;
