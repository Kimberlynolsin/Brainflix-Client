import "./Header.scss";

import logo from "../../assets/images/BrainFlix-logo.svg";
import headerIcon from "../../assets/images/Mohan-muruge.jpg";


const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="brainflix logo"></img>
      <form className="header__form">
        <div className="header__input__form">
          <label className="header__input__field">
            <input type="text" placeholder="Search" name="input-field" />
          </label>
          <img className="header__icon" src={headerIcon}></img>
        </div>
        <label className="header__btn__label">
          <button type="submit" name="submit-btn">
            UPLOAD
          </button>
        </label>
          <img className="header__icon header__icon--tablet" src={headerIcon}></img>
      </form>
    </header>
  );
};

export default Header;
