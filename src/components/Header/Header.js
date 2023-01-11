import "./Header.scss";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/images/BrainFlix-logo.svg";
import headerIcon from "../../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img className="header__logo" src={logo} alt="brainflix logo"></img>
        </Link>
        <form className="header__form">
          <div className="header__input__form">
            <label className="header__input__field">
              <input type="text" placeholder="Search" name="input-field" />
            </label>
            <img
              className="header__icon"
              src={headerIcon}
              alt="profile picture"
            ></img>
          </div>

          <Link to="/upload" className="header__btn-link">
            <label className="header__btn__label">
              <button type="submit" name="submit-btn">
                UPLOAD
              </button>
            </label>
          </Link>
          <img
            className="header__icon header__icon--tablet"
            src={headerIcon}
            alt="profile picture"
          ></img>
        </form>
      </div>
    </header>
  );
};

export default Header;
