import React from "react";
import { Link } from "react-router-dom";

function SecondPosts({ specialArticle, lastArticles }) {
  console.log(lastArticles);

  return (
    <section className="second__posts pt9 mt9">
      <div className="container">
        <div className="second__posts-wrap d-flex">
          {specialArticle && (
            <div className="left">
              <h2 className="section_title accent">Health and fitness</h2>
              <div className="special-article">
                <img src={specialArticle.img} alt="" />
                <h3>{specialArticle.title}</h3>
              </div>
            </div>
          )}
          {lastArticles && (
            <div className="right">
              <h2 className="section_title accent">Latest stories</h2>
              <div className="last-articles">
                {lastArticles.map((item, ind) => (
                  <div className="last-art d-flex g2">
                    <img src={item.img} alt="" />
                    <div className="last-art_desc">
                      <p>{item.createDate}</p>
                      {/* <Link to={`article/${item.id}`}>{item.title}</Link> */}
                      <Link className="" to={"article/" + item.id}>
                        {item.title}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SecondPosts;
