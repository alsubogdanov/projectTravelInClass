import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CommentWithoutReplay() {
  //   const { id } = useParams();
  //   console.log(id);
  const id = 1;

  //without replays
  const commentsArr = [
    {
      name: 'Emily Johnson',
      date: '2025-09-08',
      text: 'Отличная статья, спасибо!',
      articleId: 1,
    },
    {
      name: 'John Smith',
      date: '2025-09-07',
      text: 'Очень полезно, многое понял.',
      articleId: 1,
    },
  ];
  const [comments, setComments] = useState(commentsArr);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
    saveInfo: false,
  });
  useEffect(() => {
    const savedName = localStorage.getItem('commentName');
    const savedEmail = localStorage.getItem('commentEmail');
    if (savedName || savedEmail) {
      setFormData((prev) => ({
        ...prev,
        name: savedName || '',
        email: savedEmail || '',
      }));
    }
  }, []);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, text, saveInfo } = formData;
    if (!name || !email || !text) {
      setMsg('Please fill all inputs');
      return;
    }
    const newComment = {
      name,
      date: new Date().toLocaleString().split(',')[0],
      text,
      articleId: id,
    };

    setComments([newComment, ...comments]);
    if (saveInfo) {
      localStorage.setItem('commentName', name);
      localStorage.setItem('commentEmail', email);
    }
    console.log(comments);

    setFormData((prev) => ({
      ...prev,
      text: '',
      saveInfo: false,
    }));
    setMsg('');
  };
  return (
    <section className='comments'>
      <div className='container'>
        <h2>Comments</h2>
        <ul className='comments__wrap'>
          {comments &&
            comments.map((item, ind) => (
              <li key={`comment-${ind}`}>
                <p>
                  <strong>{item.name}</strong> - {item.date}
                </p>
                <p>{item.text}</p>
              </li>
            ))}
        </ul>
        <div className='comment-form'>
          <h2>Leave a Comment</h2>
          <form onSubmit={handleSubmit}>
            <div className='comment-form__inputs d-flex g2'>
              <input
                type='text'
                name='name'
                value={formData.name}
                placeholder='Your full name'
                onChange={handleChange}
              />
              <input
                type='text'
                name='email'
                value={formData.email}
                placeholder='Your full email'
                onChange={handleChange}
              />
            </div>
            <div className='comment-form__text'>
              <textarea name='text' value={formData.text} onChange={handleChange}></textarea>
            </div>
            <div className='comment-form__saveInfo'>
              <label htmlFor='saveInfo'>
                <input
                  type='checkbox'
                  id='saveInfo'
                  name='saveInfo'
                  checked={formData.saveInfo}
                  onChange={handleChange}
                />
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>
            <p className='form__msg'>{msg}</p>
            <button type='submit' className='main_btn'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default CommentWithoutReplay;
