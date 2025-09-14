import React, { useEffect, useState } from 'react';

function Counter() {
  const handleLocalStorage = () => {
    const user = { id: 1, name: 'Kate' };

    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('broken', 'невалидный json');
  };
  const handleGetLocalStorage = () => {
    const savedUser = getJSON('user', {});

    // корректное чтение
    console.log(getJSON('user')); //{ id: 1, name: 'Kate' }

    // ключа нет → получаем fallback
    console.log(getJSON('settings', { darkMode: false })); // { darkMode: false }

    // если кто-то положил туда мусор

    console.log(getJSON('broken', {})); // {}
  };
  // чтение (с безопасным парсом)
  function getJSON(key, fallback = null) {
    const raw = localStorage.getItem(key); // достаём строку по ключу
    if (raw == null) return fallback; // если ключа нет — возвращаем запасное значение
    try {
      return JSON.parse(raw); // пробуем распарсить JSON
    } catch {
      return fallback; // если в localStorage был "мусор", не валимся, а возвращаем fallback
    }
  }
  return (
    <div className='mt12'>
      <div className='mt12'></div>
      <h1>Test</h1>
      <button onClick={handleLocalStorage}>Save localStorage</button>
      <button onClick={handleGetLocalStorage}>Get localStorage</button>
    </div>
  );
}

export default Counter;
