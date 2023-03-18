import React from "react";
import ArticleImage from "../../LeftSection/Top/ArticleImage";
import ArticleTitle from "../../LeftSection/Top/ArticleTitle";
import SideBottomTitle from "./SideBottomTitle";
import "./style.css";

const SideBottom = () => {
  return (
    <>
      <ArticleTitle />
      <div className="widget-recent-post">
        <SideBottomTitle />
        <ArticleImage className="widget-image" />
      </div>
    </>
  );
};

export default SideBottom;
