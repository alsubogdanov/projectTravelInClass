import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentItem from './CommentItem';

function CommentWithReplay() {
  //   const { id } = useParams();
  //   console.log(id);
  const id = 1;

  //without replays
  //with replays
  const commentsArr = [
    {
      name: 'Emily Johnson',
      date: '2025-09-08',
      text: 'Отличная статья, спасибо!',
      articleId: 1,
      replies: [
        {
          name: 'Alex Smith',
          date: '2025-09-07',
          text: 'Hi, многое понял.',
          articleId: 1,
          replies: [
            {
              name: 'Kate Smith',
              date: '2025-09-07',
              text: 'Очень полезно, многое понял.',
              articleId: 1,
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: 'John Smith',
      date: '2025-09-07',
      text: 'Очень полезно, многое понял.',
      articleId: 1,
      replies: [],
    },
    { name: 'Anna Lee', date: '2025-09-06', text: 'Супер материал!', articleId: 1, replies: [] },
    {
      name: 'Mike Brown',
      date: '2025-09-05',
      text: 'Спасибо за информацию.',
      articleId: 1,
      replies: [],
    },
    { name: 'Kate White', date: '2025-09-04', text: 'Очень интересно!', articleId: 1, replies: [] },
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
    <section className='comments mt12 mb12'>
      <div className='container'>
        <h2>Comments</h2>
        <ul className='comments__wrap'>
          {comments && comments.map((item, ind) => <CommentItem key={ind} comment={item} />)}
        </ul>
        <div className='comment-form'>
          <h2>Leave a Comment</h2>
          <form onSubmit={handleSubmit} className='form-comments'>
            <div className='comment-form__inputs d-flex jcsb'>
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
              <textarea
                name='text'
                value={formData.text}
                placeholder='Write your comment'
                onChange={handleChange}></textarea>
            </div>
            <div className='comment-form__saveInfo mt2'>
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

export default CommentWithReplay;
