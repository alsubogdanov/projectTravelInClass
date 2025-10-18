import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import { useNavigate, useParams } from 'react-router-dom';
import ArticleForm from './ArticleForm';
import axios from 'axios';

function SingleArticle() {
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams(); // получаем id из URL
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  // Загружаем статью
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/articles/${id}/`)
      .then((res) => {
        console.log(res.data);
        setArticle(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка загрузки статьи:', err);
        setLoading(false);
      });
  }, [id]);

  const handleSave = (updatedArticle) => {
    console.log(updatedArticle);
    setArticle(updatedArticle);
    setIsEditing(false);
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('Вы действительно хотите удалить эту статью?');
    if (confirmDelete) {
      axios
        .delete(`http://127.0.0.1:8000/api/articles/${id}/`)
        .then(() => {
          navigate('/blog');
        })
        .catch((err) => {
          console.error('Ошибка при удалении:', err);
        });
    }
  };

  if (loading) return <p>Загрузка...</p>;
  if (!article) return <p>Статья не найдена</p>;

  const heroContent = {
    bgImg: '/img/about-banner.jpg',
    title: 'Blog Single',
    text: 'Home / Blog Single',
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
                  by <span>{article.author}</span> on {article.create_date}
                </p>
              </div>
              <h2 className='article_title section_title mb2'>{article.title}</h2>
              {article.img && <img src={`${article.img}`} alt={article.title} className='mb2' />}
              <div
                className='article__content'
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              <div className='d-flex g2'>
                <button className='btn' onClick={() => setIsEditing(true)}>
                  Edit
                </button>
                <button className='main_btn' onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

export default SingleArticle;
