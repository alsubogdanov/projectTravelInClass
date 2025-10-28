import React, { useContext, useState } from 'react';
import AuthContext from '../../auth/AuthContext';
import Hero from '../Hero';
import AboutPageTab from './AboutPageTab';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('home_page');

  const tabs = [
    { id: 'home_page', label: 'Home page', content: <p>Главная страница</p> },
    { id: 'about_page', label: 'About page', content: <AboutPageTab /> },
    { id: 'blog_page', label: 'Blog page', content: <p>Раздел “Блог” скоро появится</p> },
    { id: 'contacts_page', label: 'Contacts', content: <p>Раздел “Контакты” скоро появится</p> },
  ];

  const heroContent = {
    bgImg: '/img/about-banner.jpg',
    title: '',
    text: '',
    height: '80px',
  };

  const auth = useContext(AuthContext);

  return (
    <div className='admin-dashboard'>
      <Hero content={heroContent} />

      <div className='admin-container'>
        <h1>Админ панель</h1>
        <p>Добро пожаловать, {auth.user?.username}</p>
        <button className='logout-btn' onClick={auth.logout}>
          Выйти
        </button>

        {/* Навигация вкладок */}
        <div className='tabs'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Контент выбранной вкладки */}
        <div className='tab-content'>{tabs.find((tab) => tab.id === activeTab)?.content}</div>
      </div>
    </div>
  );
}
