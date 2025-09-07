import React, { useState } from 'react';
import ArticleCard from './ArticleCard';
import { useNavigate } from 'react-router-dom';

function SearchOverlay({ isOpen, onClose }) {
  const navigate = useNavigate();
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
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  if (!isOpen) return null;
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = articles.filter(
      (item) =>
        item.title.toLowerCase().includes(term.toLowerCase()) ||
        item.description.toLowerCase().includes(term.toLowerCase()),
    );
    setFilteredArticles(filtered);
  };
  const handleClick = (e) => {
    console.log(e.target);
    if (e.target.classList.contains('overlay-container')) {
      handleClose();
    }
  };
  const handleClose = () => {
    setSearchTerm('');
    onClose();
  };
  const handleSeeAll = () => {
    handleClose();
    //  console.log(searchTerm);
    navigate(`/blog?search=${encodeURIComponent(searchTerm)}`);
  };
  return (
    <div className='overlay-container d-flex jcc aic' onClick={handleClick}>
      <div className='overlay-content'>
        <div className='overlay-search'>
          <input
            type='text'
            placeholder='Enter your request'
            className='search-input'
            value={searchTerm}
            onChange={handleSearch}
          />
          <svg
            id='search'
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'>
            <title>Search</title>
            <path
              fill='currentColor'
              d='M19 3C13.488 3 9 7.488 9 13c0 2.395.84 4.59 2.25 6.313L3.281 27.28l1.439 1.44l7.968-7.969A9.922 9.922 0 0 0 19 23c5.512 0 10-4.488 10-10S24.512 3 19 3zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8s-8-3.57-8-8s3.57-8 8-8z'></path>
          </svg>
        </div>
        <div className='overlay-cats'>
          <h5>Browse Categories</h5>
          <div className='overlay-cats__wrap d-flex jcc'>
            {categories &&
              categories.map((item, ind) => (
                <button
                  key={`search-cat-${ind}`}
                  onClick={() => {
                    handleClose();
                    navigate(`/blog?cats=${encodeURIComponent(item)}`);
                  }}>
                  {item} /{' '}
                </button>
              ))}
          </div>
        </div>
        <div className='overlay-result mt5'>
          <div className='overlay-result__wrap d-flex jcc g2'>
            {searchTerm !== '' && filteredArticles.length > 0 ? (
              filteredArticles
                .slice(0, 4)
                .map((item) => (
                  <ArticleCard key={item.id} article={item} onClick={() => handleClose()} />
                ))
            ) : searchTerm !== '' ? (
              <p>Not found</p>
            ) : null}
          </div>

          {searchTerm !== '' && filteredArticles.length > 4 && (
            <div className='see-all mt2'>
              <button onClick={handleSeeAll}>See all</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchOverlay;
