import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ article }) {
  return (
    <Link className="card" to={"article/" + article.id}>
      <div className="card__img">
        <img src={article.img} alt="" />
      </div>
      <div className="card_desc d-flex f-column g1">
        <p>{article.category}</p>
        <h3>{article.title}</h3>
      </div>
    </Link>
  );
}

export default ArticleCard;
