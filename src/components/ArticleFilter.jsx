import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import { useLocation } from 'react-router-dom';

function ArticleFilter() {
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
  const categories = [...new Set(articles.map((item) => item.category))];

  const [activeTab, setActiveTab] = useState(categories[0]);

  const filteredArticles = articles.filter((item) => item.category === activeTab);

  return (
    <section className='article-filter'>
      <div className='article-filter__wrap'>
        <div className='container'>
          <div className='article-filter__tab d-flex jcc g2 mb3'>
            {categories &&
              categories.map((item) => (
                <button
                  key={`tab-art-${item}`}
                  onClick={() => setActiveTab(item)}
                  className={`${activeTab === item ? 'active' : ''}`}>
                  {item}
                </button>
              ))}
          </div>

          <div className='article-filter__cards d-flex g2'>
            {filteredArticles &&
              filteredArticles.map((item) => <ArticleCard key={item.id} article={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArticleFilter;
