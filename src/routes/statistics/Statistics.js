import React from "react";
import "./Statistics.css";
import { GrPowerCycle } from "react-icons/gr";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";

const Statistics = () => {
  return (
    <div
      className="statistics"
      style={{ backgroundImage: "url(./assets/coinbg.png)" }}
    >
      <div className="statistics-container container">
        <div className="statistics-info">
          <h1 className="section-title">
            Eng ko'p coin <br />
            to'plagan <br />
            O'quvchilar
          </h1>
          <div className="lider">
            <img src="./assets/lider.png" alt="lider img" />
            <p>Лидеры</p>
          </div>
          <p className="section-subtitle">
            Наши ученики, собравшие больше всего монет
          </p>
        </div>

        <div className="statistics-data">
          <div className="data-header">
            <div className="data-header__content">
              <img src="./assets/lider.png" alt="img" />
              <p>Liderlar</p>
            </div>
            <div className="data-header__content">
              <select name="" id="">
                <option value="">Beta-oylar</option>
              </select>
            </div>
            <div className="data-header__content">
              <select name="" id="">
                <option value="">Fanlar Bo'yicha</option>
              </select>
            </div>
          </div>
          <div className="data-container">
            <table>
              <thead>
                <tr>
                  <td>Joy</td>
                  <td>Reyting</td>
                  <td>Ism / Familiya</td>
                  <td>Fanlar</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="lider">
                    <img src="./assets/lider.png" alt="img" />
                    <span>10.642</span>
                  </td>
                  <td>O'tkir Eshmatov</td>
                  <td>Eng / Math / IT</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td className="lider">
                    <img src="./assets/lider.png" alt="img" />
                    <span>10.642</span>
                  </td>
                  <td>Muxammadsoliyev Muhammadalixonbek</td>
                  <td>Eng / Math / IT</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td className="lider">
                    <img src="./assets/lider.png" alt="img" />
                    <span>10.642</span>
                  </td>
                  <td>O'tkir Eshmatov</td>
                  <td>Eng / Math / IT</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td className="lider">
                    <img src="./assets/lider.png" alt="img" />
                    <span>10.642</span>
                  </td>
                  <td>O'tkir Eshmatov</td>
                  <td>Eng / Math / IT</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td className="lider">
                    <img src="./assets/lider.png" alt="img" />
                    <span>10.642</span>
                  </td>
                  <td>O'tkir Eshmatov</td>
                  <td>Eng / Math / IT</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td className="lider">
                    <img src="./assets/lider.png" alt="img" />
                    <span>10.642</span>
                  </td>
                  <td>O'tkir Eshmatov</td>
                  <td>Eng / Math / IT</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td className="lider">
                    <img src="./assets/lider.png" alt="img" />
                    <span>10.642</span>
                  </td>
                  <td>O'tkir Eshmatov</td>
                  <td>Eng / Math / IT</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td className="lider">
                    <img src="./assets/lider.png" alt="img" />
                    <span>10.642</span>
                  </td>
                  <td>O'tkir Eshmatov</td>
                  <td>Eng / Math / IT</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td className="lider">
                    <img src="./assets/lider.png" alt="img" />
                    <span>10.642</span>
                  </td>
                  <td>O'tkir Eshmatov</td>
                  <td>Eng / Math / IT</td>
                </tr>
                <tr>
                  <td>10</td>
                  <td className="lider">
                    <img src="./assets/lider.png" alt="img" />
                    <span>10.642</span>
                  </td>
                  <td>O'tkir Eshmatov</td>
                  <td>Eng / Math / IT</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="data-footer">
            <div className="data-footer__time">
              <p>12:42, 2024, 17-avgust</p>
              <button>
                <GrPowerCycle className="icon" />
              </button>
            </div>
            <div className="data-footer__links">
              <button className="showme">
                <MdOutlineRemoveRedEye className="icon" />
                <span>Meni ko'rsating</span>
              </button>
              <button className="toplink">
                <FaArrowUp className="icon" />
                <span>Yuqoriga</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
