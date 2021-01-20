import React from "react";

import logo from "../../assets/imgs/logo.svg";
import menuIco from "../../assets/imgs/menu-icon.svg";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav-block nav-block-menu">
        <div className="menu-icon">
          <img src={menuIco} alt="menu-icon" />
        </div>
      </div>
      <div className="nav-block nav-block-logo">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="nav-block nav-block-other">
        <div className="nav-links">
          <a href="#">контакты</a>
          <a href="#">корзина <span>(0)</span></a>
        </div>
      </div>
    </header>
  );
}
