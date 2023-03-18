import React from "react";
import ArticleBody from "./ArticleBody";
import ArticleImage from "./ArticleImage";
import ArticleInfo from "./ArticleInfo";
import ArticleTitle from "./ArticleTitle";
import ReadMore from "./ReadMore/Index";
import "./style.css";

const Top = () => {
  return (
    <main role="main">
      <article className="article-featured">
        <ArticleTitle />
        <ArticleImage />
        <ArticleInfo />
        <ArticleBody />
        <ReadMore />
      </article>
    </main>
  );
};

export default Top;
