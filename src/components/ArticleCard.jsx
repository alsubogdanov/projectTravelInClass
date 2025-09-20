// ArticleCard.jsx
import React from "react";
import { Link } from "react-router-dom";

function ArticleCard({ article, onDelete, canDelete = false }) {
  const handleDelete = (e) => {
    e.preventDefault(); // чтобы не перейти по ссылке
    if (
      onDelete &&
      window.confirm(
        `Вы действительно хотите удалить эту статью: "${article.title}"?`
      )
    ) {
      onDelete(article.id);
    }
  };

  return (
    <div className="card__wrap">
      <Link className="card" to={"/article/" + article.id}>
        <div className="card__img">
          <img src={article.img} alt="" />
        </div>
        <div className="card_desc d-flex f-column g1">
          <p>{article.category}</p>
          <h3>{article.title}</h3>
        </div>
      </Link>

      {canDelete && (
        <button className="btn btn-danger mt1" onClick={handleDelete}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="red"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6L18.333 19.333C18.3 19.777 17.966 20.111 17.522 20.111H6.478C6.034 20.111 5.7 19.777 5.667 19.333L5 6"></path>
            <line x1="10" y1="11" x2="10" y2="17"></line>
            <line x1="14" y1="11" x2="14" y2="17"></line>
          </svg>
        </button>
      )}
    </div>
  );
}

export default ArticleCard;
