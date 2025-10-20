import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import ArticleCard from './ArticleCard';
import ArticleFilter from './ArticleFilter';
import { useLocation } from 'react-router-dom';
import ArticleForm from './ArticleForm';
import axios from 'axios';

function BlogPage() {
  const [filteredArticles, setFilteredArticles] = useState([]);

  const [articles, setArticles] = useState([]);
  const [isCreating, setIsCreating] = useState(false); // состояние для новой статьи
  const heroContent = {
    bgImg: '/img/about-banner.jpg',
    title: 'Blog',
    text: 'Home / Blog',
  };
  const articlesPopular = [
    {
      id: 1,
      title: 'How to Start with React',
      category: 'foods',
      img: './img/posts01.jpg',
      author: 'John Smith',
      createDate: '2025-08-10',
      description: "A beginner's guide to starting your first React project.",
      content: [
        { type: 'h2', text: 'Introduction' },
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
    },
    {
      id: 2,
      title: 'Mastering JavaScript Closures',
      category: 'things to do',
      img: './img/posts02.jpg',
      author: 'Emily Johnson',
      createDate: '2025-08-09',
      description: 'Understand closures in JavaScript with real-life examples.',
      content: [
        { type: 'h2', text: 'What are Closures?' },
        {
          type: 'p',
          text: 'A closure is created when a function remembers its lexical scope even when executed outside of it.',
        },
        { type: 'h2', text: 'Examples' },
        {
          type: 'p',
          text: 'Closures are often used for encapsulation and data privacy in JavaScript. They are also used in functional programming patterns and callbacks.',
        },
        { type: 'h2', text: 'Benefits' },
        {
          type: 'p',
          text: 'Closures make it easier to manage state in certain scenarios without global variables.',
        },
      ],
    },
    {
      id: 3,
      title: 'CSS Grid vs Flexbox',
      category: 'things to do',
      img: './img/posts03.jpg',
      author: 'Michael Lee',
      createDate: '2025-08-08',
      description: 'A comparison between CSS Grid and Flexbox layout systems.',
      content: [
        { type: 'h2', text: 'CSS Grid' },
        {
          type: 'p',
          text: 'Grid is a two-dimensional layout system, perfect for creating full page layouts.',
        },
        { type: 'h2', text: 'Flexbox' },
        {
          type: 'p',
          text: 'Flexbox is one-dimensional, best for arranging items in a row or column. Both are powerful but serve different purposes.',
        },
        { type: 'h2', text: 'When to Use' },
        {
          type: 'p',
          text: 'Use Grid for page structure and Flexbox for small-scale alignment.',
        },
      ],
    },
    {
      id: 4,
      title: 'Top 10 VS Code Extensions',
      category: 'ravel guide',
      img: './img/posts04.jpg',
      author: 'Sarah Brown',
      createDate: '2025-08-07',
      description: 'Extensions that boost your productivity in VS Code.',
      content: [
        { type: 'h2', text: 'Prettier' },
        {
          type: 'p',
          text: 'Automatically formats your code according to a set of rules.',
        },
        { type: 'h2', text: 'ESLint' },
        {
          type: 'p',
          text: 'Helps maintain clean and consistent JavaScript code. Integrates with Prettier for seamless formatting.',
        },
        { type: 'h2', text: 'Conclusion' },
        {
          type: 'p',
          text: 'These tools help keep your codebase organized and efficient.',
        },
      ],
    },
  ];
  const articlesLasts = [
    {
      id: 4,
      title: 'Top 10 VS Code Extensions',
      category: 'ravel guide',
      img: './img/posts04.jpg',
      author: 'Sarah Brown',
      createDate: '2025-08-07',
      description: 'Extensions that boost your productivity in VS Code.',
      content: [
        { type: 'h2', text: 'Prettier' },
        {
          type: 'p',
          text: 'Automatically formats your code according to a set of rules.',
        },
        { type: 'h2', text: 'ESLint' },
        {
          type: 'p',
          text: 'Helps maintain clean and consistent JavaScript code. Integrates with Prettier for seamless formatting.',
        },
        { type: 'h2', text: 'Conclusion' },
        {
          type: 'p',
          text: 'These tools help keep your codebase organized and efficient.',
        },
      ],
    },
    {
      id: 5,
      title: 'Understanding REST APIs',
      category: 'things to do',
      img: './img/posts05.jpg',
      author: 'David Miller',
      createDate: '2025-08-06',
      description: 'Learn how REST APIs work and how to consume them.',
      content: [
        { type: 'h2', text: 'What is REST?' },
        {
          type: 'p',
          text: 'REST stands for Representational State Transfer, a design pattern for APIs.',
        },
        { type: 'h2', text: 'HTTP Methods' },
        {
          type: 'p',
          text: 'Common methods include GET, POST, PUT, and DELETE. Each serves a specific purpose in CRUD operations.',
        },
        { type: 'h2', text: 'Best Practices' },
        {
          type: 'p',
          text: 'Use meaningful endpoints and handle errors gracefully.',
        },
      ],
    },
    {
      id: 6,
      title: 'Responsive Design Tips',
      category: 'ravel guide',
      img: './img/posts06.jpg',
      author: 'Anna Wilson',
      createDate: '2025-08-05',
      description: 'Tips to make your website look great on all devices.',
      content: [
        { type: 'h2', text: 'Use Media Queries' },
        { type: 'p', text: 'Adapt your layout for different screen sizes.' },
        { type: 'h2', text: 'Flexible Layouts' },
        {
          type: 'p',
          text: 'Use relative units like percentages instead of fixed pixels. Test on multiple devices for accuracy.',
        },
        { type: 'h2', text: 'Conclusion' },
        {
          type: 'p',
          text: 'Responsive design improves user experience and SEO.',
        },
      ],
    },
    {
      id: 7,
      title: 'Getting Started with TypeScript',
      category: 'things to do',
      img: './img/posts07.jpg',
      author: 'Chris Evans',
      createDate: '2025-08-04',
      description: 'A quick introduction to TypeScript for JavaScript developers.',
      content: [
        { type: 'h2', text: 'What is TypeScript?' },
        {
          type: 'p',
          text: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static types to help catch errors early.',
        },
        { type: 'h2', text: 'Why Use TypeScript?' },
        {
          type: 'p',
          text: 'It improves code quality, readability, and maintainability, especially in large projects.',
        },
        { type: 'h2', text: 'Getting Started' },
        {
          type: 'p',
          text: 'Install TypeScript via npm and start adding type annotations to your JavaScript code.',
        },
      ],
    },
  ];
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/articles/`)
      .then((res) => {
        console.log(res.data);
        setArticles(res.data);
      })
      .catch((err) => {
        console.error('Ошибка загрузки статей:', err);
      });
  }, []);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get('search') || '';
  const category = params.get('cats') || '';

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const articlePerPage = 5; // count articles on page

  //1*5=5; 5-5=0 -> [0...4];
  //2*5=10; 10-5=5 -> [5 ... 9]
  //3*5=15; 15-5=10 -> [10 ... 14]
  const indexOfLastArticle = currentPage * articlePerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlePerPage;

  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(filteredArticles.length / articlePerPage); //5

  useEffect(() => {
    const filtered = articles.filter((item) => {
      if (searchTerm) {
        return (
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      if (category) {
        return item.category.toLowerCase() === category.toLowerCase();
      }
      return true;
    });
    setFilteredArticles(filtered);
  }, [location.search, articles]); // <---- добавляем articles

  // функция сохранения новой статьи
  const handleSaveNew = (articleData) => {
    setArticles([articleData, ...articles]); // добавляем новую статью в начало
    setIsCreating(false); // закрываем форму
  };
  // шаблон новой статьи
  const newArticleTemplate = {
    id: articles.length + 1,
    title: '',
    img: '',
    author: '',
    createDate: new Date().toISOString().slice(0, 10), // текущая дата
    description: '',
    content: '', // строка HTML для Jodit
  };
  const handleDeleteArticle = (id) => {
    const updatedArticles = articles.filter((article) => article.id !== id);
    setArticles(updatedArticles);
    const updatedFiltered = filteredArticles.filter((article) => article.id !== id);
    setFilteredArticles(updatedFiltered);
  };
  return (
    <div>
      <Hero content={heroContent} />

      <section className='blog-page mb13'>
        <div className='container'>
          <button className='main_btn mt5' onClick={() => setIsCreating(true)}>
            Create new Article
          </button>
          {(searchTerm || category) && (
            <h2>
              {category ? `Results by cats: "${category}"` : `Results by search: "${searchTerm}"`}
            </h2>
          )}
          {isCreating && (
            <ArticleForm
              article={newArticleTemplate}
              onSave={handleSaveNew}
              onCancel={() => setIsCreating(false)}
            />
          )}
          <div className='blog-page__wrap d-flex f-wrap mt9 mb5 g1'>
            {currentArticles &&
              currentArticles.length > 0 &&
              currentArticles.map((item) => (
                <ArticleCard
                  key={item.id}
                  article={item}
                  onDelete={handleDeleteArticle}
                  canDelete={true} // только здесь включаем Delete
                />
              ))}
          </div>

          {totalPages > 1 && (
            <div className='pagination d-flex jcc g2'>
              {/* <button
				  onClick={()=>setCurrentPage(prev=>Math.max(prev-1, 1))}
				  disabled={currentPage===1}
				  >Prev</button> */}
              {currentPage > 1 && (
                <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
                  Prev
                </button>
              )}
              {[...Array(totalPages)].map((_, ind) => (
                <button
                  key={`pagin-${ind}`}
                  onClick={() => setCurrentPage(ind + 1)}
                  // onClick={setCurrentPage(ind+1)} // Not correct -> call setCurrentPage()
                  className={currentPage === ind + 1 ? 'active' : ''}>
                  {ind + 1}
                </button>
              ))}

              {/* <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}>
                Next
              </button> */}
              {currentPage !== totalPages && (
                <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
                  Next
                </button>
              )}
            </div>
          )}
        </div>
      </section>
      <section className='article__cards pt14'>
        <div className='container'>
          <h2 className='section_title accent t-center mb2'>Popular stories</h2>
          {articlesPopular && (
            <div className='d-flex g2'>
              {articlesPopular.map((item, ind) => (
                <ArticleCard key={`popular-${ind}`} article={item} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className='article__cards pt14 pb6'>
        <div className='container'>
          <h2 className='section_title accent t-center mb2'>Latest posts</h2>
          {articlesLasts && (
            <div className='d-flex g2'>
              {articlesLasts.map((item, ind) => (
                <ArticleCard key={`popular-${ind}`} article={item} />
              ))}
            </div>
          )}
        </div>
      </section>
      <ArticleFilter />
    </div>
  );
}

export default BlogPage;
