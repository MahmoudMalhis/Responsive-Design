import React from "react";
import ArticleTitle from "../Top/ArticleTitle";
import ReadMore from "../Top/ReadMore/Index";
import ArticleInfo from "../Top/ArticleInfo";
import "./style.css";
import ArticleImage from "../Top/ArticleImage";

const Bottom = () => {
  return (
    <article className="article-recent">
      <div className="article-recent-main">
        <ArticleTitle />
        <p className="article-body">
          Food is a very important part of everyone's life. If you want to be
          healthy, you have to eat healthy. One of the easiest ways to do that
          is to keep your cooking nice and simple.
        </p>
        <ReadMore />
      </div>
      <div className="article-recent-secondary">
        <ArticleImage />
        <ArticleInfo />
      </div>
    </article>
  );
};

export default Bottom;
