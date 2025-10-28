import React, { useState } from 'react';

function ReplayForm({ onSubmit }) {
  const savedName = localStorage.getItem('commentName');
  const savedEmail = localStorage.getItem('commentEmail');

  const [name, setName] = useState(savedName || '');
  const [email, setEmail] = useState(savedEmail || '');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim() || !email.trim()) return;

    // передаём ВСЕ необходимые поля на сервер
    onSubmit({
      name: name || 'Anonymous',
      email,
      text: text.trim(),
    });

    // сохраняем данные для будущих комментариев
    localStorage.setItem('commentName', name);
    localStorage.setItem('commentEmail', email);

    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='replay-form'>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name'
      />
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Enter your email'
        required
      />
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Enter your reply'></textarea>
      <button type='submit'>Send reply</button>
    </form>
  );
}

export default ReplayForm;
