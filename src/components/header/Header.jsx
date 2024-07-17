import { Link } from "react-router-dom"
import Navbar from "../navbar/Navbar"
import SocialNetwork from "../socialNetwork/SocialNetwork"
import "./Header.css"

const Header = ({ isLogin }) => {
  return (
    <>
    <header>
      <Link to="/" className="logo">
        <img src="./assets/logo.png" alt="Algoritm" />
        <span>COIN</span>
      </Link>

      {true && <span className="edu-name">Algoritm O'quv Markazi</span>}
      {false && (
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
        <>
          <Link to="forget" className="forget">
            Parolni unutdingizmi?
          </Link>
          <Link to="result" className="result">
            Natijani ko'rish
          </Link>
        </>
      )}
    </header>
    <div className="space_header"></div>
    </>
  );
};

export default Header;
