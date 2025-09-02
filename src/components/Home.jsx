import React from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import ArticleCard from "./ArticleCard";
import SecondPosts from "./SecondPosts";
import VideoGallery from "./VideoGallery";
function Home() {
  const heroContent = {
    bgImg: "./img/banner1-img.jpg",
    height: "80vh",
    title: "Mountains are calling",
    text: "Let's Discover More",
  };
  const articlesPopular = [
    {
      id: 1,
      title: "How to Start with React",
      category: "foods",
      img: "./img/posts01.jpg",
      author: "John Smith",
      createDate: "2025-08-10",
      description: "A beginner's guide to starting your first React project.",
      content: [
        { type: "h2", text: "Introduction" },
        {
          type: "p",
          text: "React is a popular JavaScript library for building user interfaces. It is component-based and declarative.",
        },
        { type: "h2", text: "Installation" },
        {
          type: "p",
          text: "To start with React, you can use Create React App or Vite to quickly set up your environment. After installation, you can run the development server and start building components.",
        },
        { type: "h2", text: "Conclusion" },
        {
          type: "p",
          text: "React is powerful, flexible, and supported by a large community, making it a great choice for modern web apps.",
        },
      ],
    },
    {
      id: 2,
      title: "Mastering JavaScript Closures",
      category: "things to do",
      img: "./img/posts02.jpg",
      author: "Emily Johnson",
      createDate: "2025-08-09",
      description: "Understand closures in JavaScript with real-life examples.",
      content: [
        { type: "h2", text: "What are Closures?" },
        {
          type: "p",
          text: "A closure is created when a function remembers its lexical scope even when executed outside of it.",
        },
        { type: "h2", text: "Examples" },
        {
          type: "p",
          text: "Closures are often used for encapsulation and data privacy in JavaScript. They are also used in functional programming patterns and callbacks.",
        },
        { type: "h2", text: "Benefits" },
        {
          type: "p",
          text: "Closures make it easier to manage state in certain scenarios without global variables.",
        },
      ],
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox",
      category: "things to do",
      img: "./img/posts03.jpg",
      author: "Michael Lee",
      createDate: "2025-08-08",
      description: "A comparison between CSS Grid and Flexbox layout systems.",
      content: [
        { type: "h2", text: "CSS Grid" },
        {
          type: "p",
          text: "Grid is a two-dimensional layout system, perfect for creating full page layouts.",
        },
        { type: "h2", text: "Flexbox" },
        {
          type: "p",
          text: "Flexbox is one-dimensional, best for arranging items in a row or column. Both are powerful but serve different purposes.",
        },
        { type: "h2", text: "When to Use" },
        {
          type: "p",
          text: "Use Grid for page structure and Flexbox for small-scale alignment.",
        },
      ],
    },
    {
      id: 4,
      title: "Top 10 VS Code Extensions",
      category: "ravel guide",
      img: "./img/posts04.jpg",
      author: "Sarah Brown",
      createDate: "2025-08-07",
      description: "Extensions that boost your productivity in VS Code.",
      content: [
        { type: "h2", text: "Prettier" },
        {
          type: "p",
          text: "Automatically formats your code according to a set of rules.",
        },
        { type: "h2", text: "ESLint" },
        {
          type: "p",
          text: "Helps maintain clean and consistent JavaScript code. Integrates with Prettier for seamless formatting.",
        },
        { type: "h2", text: "Conclusion" },
        {
          type: "p",
          text: "These tools help keep your codebase organized and efficient.",
        },
      ],
    },
  ];
  const articlesLasts = [
    {
      id: 4,
      title: "Top 10 VS Code Extensions",
      category: "ravel guide",
      img: "./img/posts04.jpg",
      author: "Sarah Brown",
      createDate: "2025-08-07",
      description: "Extensions that boost your productivity in VS Code.",
      content: [
        { type: "h2", text: "Prettier" },
        {
          type: "p",
          text: "Automatically formats your code according to a set of rules.",
        },
        { type: "h2", text: "ESLint" },
        {
          type: "p",
          text: "Helps maintain clean and consistent JavaScript code. Integrates with Prettier for seamless formatting.",
        },
        { type: "h2", text: "Conclusion" },
        {
          type: "p",
          text: "These tools help keep your codebase organized and efficient.",
        },
      ],
    },
    {
      id: 5,
      title: "Understanding REST APIs",
      category: "things to do",
      img: "./img/posts05.jpg",
      author: "David Miller",
      createDate: "2025-08-06",
      description: "Learn how REST APIs work and how to consume them.",
      content: [
        { type: "h2", text: "What is REST?" },
        {
          type: "p",
          text: "REST stands for Representational State Transfer, a design pattern for APIs.",
        },
        { type: "h2", text: "HTTP Methods" },
        {
          type: "p",
          text: "Common methods include GET, POST, PUT, and DELETE. Each serves a specific purpose in CRUD operations.",
        },
        { type: "h2", text: "Best Practices" },
        {
          type: "p",
          text: "Use meaningful endpoints and handle errors gracefully.",
        },
      ],
    },
    {
      id: 6,
      title: "Responsive Design Tips",
      category: "ravel guide",
      img: "./img/posts06.jpg",
      author: "Anna Wilson",
      createDate: "2025-08-05",
      description: "Tips to make your website look great on all devices.",
      content: [
        { type: "h2", text: "Use Media Queries" },
        { type: "p", text: "Adapt your layout for different screen sizes." },
        { type: "h2", text: "Flexible Layouts" },
        {
          type: "p",
          text: "Use relative units like percentages instead of fixed pixels. Test on multiple devices for accuracy.",
        },
        { type: "h2", text: "Conclusion" },
        {
          type: "p",
          text: "Responsive design improves user experience and SEO.",
        },
      ],
    },
    {
      id: 7,
      title: "Getting Started with TypeScript",
      category: "things to do",
      img: "./img/posts07.jpg",
      author: "Chris Evans",
      createDate: "2025-08-04",
      description:
        "A quick introduction to TypeScript for JavaScript developers.",
      content: [
        { type: "h2", text: "What is TypeScript?" },
        {
          type: "p",
          text: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds static types to help catch errors early.",
        },
        { type: "h2", text: "Why Use TypeScript?" },
        {
          type: "p",
          text: "It improves code quality, readability, and maintainability, especially in large projects.",
        },
        { type: "h2", text: "Getting Started" },
        {
          type: "p",
          text: "Install TypeScript via npm and start adding type annotations to your JavaScript code.",
        },
      ],
    },
  ];
  const specialArticle = {
    id: 2,
    title: "Mastering JavaScript Closures",
    category: "things to do",
    img: "./img/posts02.jpg",
    author: "Emily Johnson",
    createDate: "2025-08-09",
    description: "Understand closures in JavaScript with real-life examples.",
    content: [
      { type: "h2", text: "What are Closures?" },
      {
        type: "p",
        text: "A closure is created when a function remembers its lexical scope even when executed outside of it.",
      },
      { type: "h2", text: "Examples" },
      {
        type: "p",
        text: "Closures are often used for encapsulation and data privacy in JavaScript. They are also used in functional programming patterns and callbacks.",
      },
      { type: "h2", text: "Benefits" },
      {
        type: "p",
        text: "Closures make it easier to manage state in certain scenarios without global variables.",
      },
    ],
  };

  return (
    <>
      <Hero content={heroContent} />
      <AboutSection btn={true} />
      <section className="article__cards pt14">
        <div className="container">
          <h2 className="section_title accent t-center mb2">Popular stories</h2>
          {articlesPopular && (
            <ul className="d-flex g2">
              {articlesPopular.map((item, ind) => (
                <li key={`popular-${ind}`}>
                  <ArticleCard article={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <section className="article__cards pt14 pb6">
        <div className="container">
          <h2 className="section_title accent t-center mb2">Latest posts</h2>
          {articlesLasts && (
            <ul className="d-flex g2">
              {articlesLasts.map((item, ind) => (
                <li key={`popular-${ind}`}>
                  <ArticleCard article={item} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      {/* <SecondPosts
        specialArticle={specialArticle}
        lastArticles={articlesLasts}
      /> */}
		<VideoGallery/>
    </>
  );
}

export default Home;
