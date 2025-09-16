import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import ArticleCard from './ArticleCard';
import ArticleFilter from './ArticleFilter';
import { useLocation } from 'react-router-dom';

function BlogPage() {
  const [filteredArticles, setFilteredArticles] = useState([]);
  const articles = [
    {
      id: 1,
      title: 'Mastering JavaScript Closures',
      category: 'things to do',
      img: './img/posts01.jpg',
      author: 'Emily Johnson',
      description: 'Understand closures in JavaScript with real-life examples.',
    },
    {
      id: 2,
      title: 'React Basics for Beginners',
      category: 'learning',
      img: './img/posts02.jpg',
      author: 'John Smith',
      description: 'Get started with React and understand components, props, and state.',
    },
    {
      id: 3,
      title: 'Node.js Event Loop Explained',
      category: 'learning',
      img: './img/posts03.jpg',
      author: 'Sarah Williams',
      description: 'Dive into the Node.js event loop and asynchronous programming.',
    },
    {
      id: 4,
      title: 'CSS Grid Layout',
      category: 'things to do',
      img: './img/posts04.jpg',
      author: 'Michael Brown',
      description: 'Learn how to build responsive layouts using CSS Grid.',
    },
    {
      id: 5,
      title: 'Understanding Async/Await',
      category: 'learning',
      img: './img/posts05.jpg',
      author: 'Emily Johnson',
      description: 'Simplify asynchronous JavaScript code using async/await syntax.',
    },
    {
      id: 6,
      title: '10 Productivity Tips for Developers',
      category: 'lifestyle',
      img: './img/posts06.jpg',
      author: 'Anna Davis',
      description: 'Boost your coding efficiency with these practical tips.',
    },
    {
      id: 7,
      title: 'TypeScript for Beginners',
      category: 'learning',
      img: './img/posts07.jpg',
      author: 'David Lee',
      description: 'Start using TypeScript to write safer JavaScript code.',
    },
    {
      id: 8,
      title: 'Building a To-Do App with React',
      category: 'things to do',
      img: './img/posts08.jpg',
      author: 'Sarah Williams',
      description: 'Create a functional to-do application with React and state management.',
    },
    {
      id: 9,
      title: 'Healthy Work-Life Balance for Developers',
      category: 'lifestyle',
      img: './img/posts03.jpg',
      author: 'Michael Brown',
      description: 'Learn how to maintain balance and avoid burnout.',
    },
    {
      id: 10,
      title: 'Debugging JavaScript Like a Pro',
      category: 'things to do',
      img: './img/posts04.jpg',
      author: 'Anna Davis',
      description: 'Master the tools and techniques for efficient debugging.',
    },
  ];
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
  }, [location.search]);

  return (
    <div>
      <Hero content={heroContent} />

      <section className='blog-page mb13'>
        <div className='container'>
          <button className='main_btn mt5'>Create new Article</button>
          {(searchTerm || category) && (
            <h2>
              {category ? `Results by cats: "${category}"` : `Results by search: "${searchTerm}"`}
            </h2>
          )}
          <div className='blog-page__wrap d-flex f-wrap mt9 mb5'>
            {currentArticles &&
              currentArticles.length > 0 &&
              currentArticles.map((item) => <ArticleCard key={item.id} article={item} />)}
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
            <ul className='d-flex g2'>
              {articlesPopular.map((item, ind) => (
                <li key={`popular-${ind}`}>
                  <ArticleCard article={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <section className='article__cards pt14 pb6'>
        <div className='container'>
          <h2 className='section_title accent t-center mb2'>Latest posts</h2>
          {articlesLasts && (
            <ul className='d-flex g2'>
              {articlesLasts.map((item, ind) => (
                <li key={`popular-${ind}`}>
                  <ArticleCard article={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <ArticleFilter />
    </div>
  );
}

export default BlogPage;
