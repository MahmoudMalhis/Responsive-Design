import React from "react";
import ArticleImage from "../LeftSection/Top/ArticleImage";
import ArticleTitle from "../LeftSection/Top/ArticleTitle";
import SideBottom from "./SideBottom";
import "./style.css";

const RightSection = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-widget">
        <ArticleTitle />
        <ArticleImage />
        <p class="widget-body">
          I find life better, and I'm happier, when things are nice and simple.
        </p>
      </div>
      <div className="sidebar-widget">
        {[1, 2, 3].map(() => {
          return <SideBottom />;
        })}
      </div>
    </aside>
  );
};

export default RightSection;
