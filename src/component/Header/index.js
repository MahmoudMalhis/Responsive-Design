import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo />
        <nav>
          <ul>
            {[1, 2, 3].map(() => {
              return <NavList />;
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
