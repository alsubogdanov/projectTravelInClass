import React, { useState } from 'react';

function ReplayForm({ onSubmit }) {
  const savedName = localStorage.getItem('commentName');
  const [name, setName] = useState(savedName || '');
  const [text, setText] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onSubmit({ name: name || 'Anonymous', text: text.trim() });
    setText('');
  };
  return (
    <form onSubmit={handleSubmit} className='replay-form'>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name:'
      />
      <textarea
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='Enter your comment:'></textarea>
      <button type='submit'>Send replay</button>
    </form>
  );
}

export default ReplayForm;
