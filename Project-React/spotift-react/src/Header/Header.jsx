import React from "react";
import "./Header.css";

import smallRight from "../../src/assets/icons/small-right.png";
import smalLeft from "../../src/assets/icons/small-left.png";
import search from "../../src/assets/icons/search.png";

const Header = () => {
  return (
    <nav className="header__navigation">
      <div className="navigation">
        <button className="arrow-left">
          <img src={smalLeft} alt="" />
        </button>
        <button className="arrow-right">
          <img src={smallRight} alt="" />
        </button>
      </div>
      <div className="header__search">
        <img src={search} alt="" />
        <input
          id="search-input"
          maxLength="800"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          placeholder="O que você quer ouvir?"
          value=""
        />
      </div>
      <div className="header__login">
        <button className="subscribe">Inscreva-se</button>
        <button className="login">Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
