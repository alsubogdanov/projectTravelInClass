// Login.jsx
import React, { useState, useContext } from 'react';
import AuthContext from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import Hero from './Hero';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    setErr('');
    //  console.log(auth);

    const res = auth.login(username.trim(), password);
    if (!res.ok) {
      setErr(res.message || 'Ошибка входа');
      return;
    }
    navigate('/admin');
  }
  const heroContent = {
    bgImg: '/img/about-banner.jpg',
    title: '',
    text: '',
    height: '80px',
  };

  return (
    <div className=''>
      <Hero content={heroContent} />
      <div
        style={{
          maxWidth: 480,
          margin: '40px auto',
          padding: 20,
          border: '1px solid #ddd',
          borderRadius: 8,
        }}>
        <h2>Вход для админа</h2>
        <form onSubmit={onSubmit}>
          <div style={{ marginBottom: 10 }}>
            <label>Имя пользователя</label>
            <br />
            <input value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div style={{ marginBottom: 10 }}>
            <label>Пароль</label>
            <br />
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {err && <div style={{ color: 'red', marginBottom: 10 }}>{err}</div>}
          <button type='submit'>Войти</button>
        </form>
      </div>
    </div>
  );
}
