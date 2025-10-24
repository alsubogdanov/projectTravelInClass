import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
import Hero from './Hero';
import axios from 'axios';

export default function AdminDashboard() {
  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/sitecontent/social-links/`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error('Ошибка загрузки ссылок:', err);
      });
  }, []);
  const heroContent = {
    bgImg: '/img/about-banner.jpg',
    title: '',
    text: '',
    height: '80px',
  };
  const auth = useContext(AuthContext);
  console.log(auth.user);
  return (
    <div className=''>
      <Hero content={heroContent} />
      <div className='container mt13'>
        <div style={{ padding: 20 }}>
          <h1>Админ панель</h1>
          <p>Добро пожаловать, {auth.user?.username}</p>
          <button onClick={auth.logout}>Выйти</button>
        </div>
      </div>
    </div>
  );
}
