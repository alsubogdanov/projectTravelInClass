import React, { useState } from 'react';
import Hero from './Hero';
import { Form, useParams } from 'react-router-dom';
import CommentWithoutReplay from './CommentWithoutReplay';
import CommentWithReplay from './CommentWithReplay';
import ArticleForm from './ArticleForm';

function SingleArticle() {
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();
  console.log(id);

  const [article, setArticle] = useState({
    id: 1,
    title: 'How to Start with React',
    img: '/img/posts01.jpg',
    author: 'John Smith',
    createDate: '2025-08-10',
    description: "A beginner's guide to starting your first React project.",
    content: [
      {
        type: 'h2',
        text: "When it comes to traveling, the well-trodden paths often overshadow the hidden gems that truly define a destination. Whether you're an adventurer seeking off-the-beaten-path destinations or a cultural enthusiast looking to immerse yourself in local traditions, [Destination Name] offers something for every traveler.",
      },
      {
        type: 'p',
        text: 'React is a popular JavaScript library for building user interfaces. It is component-based and declarative.',
      },
      { type: 'h2', text: 'Installation' },
      {
        type: 'p',
        text: 'To start with React, you can use Create React App or Vite to quickly set up your environment. After installation, you can run the development server and start building components.',
      },
      { type: 'h2', text: 'Conclusion' },
      {
        type: 'p',
        text: 'React is powerful, flexible, and supported by a large community, making it a great choice for modern web apps.',
      },
    ],
  });
  const heroContent = {
    bgImg: '/img/about-banner.jpg',
    title: 'Blog Single',
    text: 'Home / Blog Single',
  };
  //   const data = {
  //     id: 1,
  //     title: 'How to Start with React',
  //     img: '/img/posts01.jpg',
  //     author: 'John Smith',
  //     createDate: '2025-08-10',
  //     description: "A beginner's guide to starting your first React project.",
  //     content: [
  //       {
  //         type: 'h2',
  //         text: "When it comes to traveling, the well-trodden paths often overshadow the hidden gems that truly define a destination. Whether you're an adventurer seeking off-the-beaten-path destinations or a cultural enthusiast looking to immerse yourself in local traditions, [Destination Name] offers something for every traveler.",
  //       },
  //       {
  //         type: 'p',
  //         text: 'React is a popular JavaScript library for building user interfaces. It is component-based and declarative.',
  //       },
  //       { type: 'h2', text: 'Installation' },
  //       {
  //         type: 'p',
  //         text: 'To start with React, you can use Create React App or Vite to quickly set up your environment. After installation, you can run the development server and start building components.',
  //       },
  //       { type: 'h2', text: 'Conclusion' },
  //       {
  //         type: 'p',
  //         text: 'React is powerful, flexible, and supported by a large community, making it a great choice for modern web apps.',
  //       },
  //     ],
  //   };

  const handleSave = (updatedArticle) => {
    console.log(updatedArticle);
    setArticle(updatedArticle);
    setIsEditing(false);
  };
  return (
    <div>
      <Hero content={heroContent} />
      <article>
        <div className='container'>
          {isEditing ? (
            <ArticleForm
              article={article}
              onSave={handleSave}
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            <div className='article__wrap mb5'>
              <div className='block_data'>
                <p className='mb2'>
                  by <span>{article.author}</span> on {article.createDate}
                </p>
              </div>
              <h2 className='article_title section_title mb2'>{article.title}</h2>
              <img src={article.img} alt='' className='mb2' />
              <div className='article__content'>
                {article.content.map((block, i) => {
                  if (block.type === 'h2') return <h2 key={i}>{block.text}</h2>;
                  if (block.type === 'p') return <p key={i}>{block.text}</p>;
                })}
              </div>
              <div className='d-flex g2'>
                <button className='btn' onClick={() => setIsEditing(true)}>
                  Edit
                </button>
                <button className='main_btn'>Delete</button>
              </div>
            </div>
          )}
        </div>
      </article>
      {/* <CommentWithoutReplay /> */}
      {/* <CommentWithReplay /> */}
    </div>
  );
}

export default SingleArticle;
