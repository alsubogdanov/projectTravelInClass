import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';
import Hero from './Hero';

export default function AdminDashboard() {
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
