import React from "react";
import NavList from "./NavList";
import "./style.css";
import SubTitle from "./SubTitle";
import Title from "./Title";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="site-title">
          <Title />
          <SubTitle />
        </div>
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
