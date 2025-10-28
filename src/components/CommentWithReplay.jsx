import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentItem from './CommentItem';
import axios from 'axios';

function CommentWithReplay() {
  const API = process.env.REACT_APP_API;
  const { id } = useParams();

  const [comments, setComments] = useState([]);
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    text: '',
    saveInfo: false,
  });
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    axios
      .get(`${API}/api/articles/${id}/comments/`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.error('Ошибка загрузки статьи:', err);
      });
  }, [id]);
  //   useEffect(() => {
  //     const savedName = localStorage.getItem('commentName');
  //     const savedEmail = localStorage.getItem('commentEmail');
  //     if (savedName || savedEmail) {
  //       setFormData((prev) => ({
  //         ...prev,
  //         name: savedName || '',
  //         email: savedEmail || '',
  //       }));
  //     }
  //   }, []);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const { name, email, text, saveInfo } = formData;
  //     if (!name || !email || !text) {
  //       setMsg('Please fill all inputs');
  //       return;
  //     }
  //     const newComment = {
  //       name,
  //       date: new Date().toLocaleString().split(',')[0],
  //       text,
  //       articleId: id,
  //     };

  //     setComments([newComment, ...comments]);
  //     if (saveInfo) {
  //       localStorage.setItem('commentName', name);
  //       localStorage.setItem('commentEmail', email);
  //     }
  //     console.log(comments);

  //     setFormData((prev) => ({
  //       ...prev,
  //       text: '',
  //       saveInfo: false,
  //     }));
  //     setMsg('');
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, text, saveInfo } = formData;

    if (!name || !email || !text) {
      setMsg('Please fill all inputs');
      return;
    }

    const newComment = {
      article: id,
      parent: null,
      name,
      email,
      text,
    };

    try {
      const res = await axios.post(`${API}/api/articles/${id}/comments/`, newComment, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('Создан комментарий:', res.data);

      // Добавляем новый комментарий в начало списка
      setComments((prev) => [res.data, ...prev]);

      // Очищаем форму
      setFormData((prev) => ({
        ...prev,
        text: '',
        saveInfo: false,
      }));
      setMsg('');
    } catch (error) {
      console.error('Ошибка при добавлении комментария:', error);
    }
  };

  //   const addReply = (reply, parentComment) => {
  //     const newReply = {
  //       ...reply,
  //       date: new Date().toLocaleString().split(',')[0],
  //       replies: [],
  //     };
  //     //  console.log(newReply);
  //     const updateComment = (commentList) => {
  //       console.log(commentList);
  //       return commentList.map((c) => {
  //         if (c === parentComment) {
  //           return { ...c, replies: [...(c.replies || []), newReply] };
  //         }
  //         if (c.replies && c.replies.length > 0) {
  //           return { ...c, replies: updateComment(c.replies) };
  //         }
  //         return c;
  //       });
  //     };
  //     setComments((prev) => updateComment(prev));
  //   };

  const addReply = async (reply, parentComment) => {
    const newReply = {
      article: id,
      parent: parentComment.id, //ссылка на родительский комментарий
      name: reply.name,
      email: reply.email,
      text: reply.text,
    };

    try {
      const res = await axios.post(`${API}/api/articles/${id}/comments/`, newReply, {
        headers: { 'Content-Type': 'application/json' },
      });

      const createdReply = res.data;
      console.log('Создан ответ:', createdReply);

      // Обновляем состояние, добавляя ответ в правильное место
      const updateComment = (commentList) => {
        return commentList.map((c) => {
          if (c.id === parentComment.id) {
            return { ...c, replies: [...(c.replies || []), createdReply] };
          }
          if (c.replies && c.replies.length > 0) {
            return { ...c, replies: updateComment(c.replies) };
          }
          return c;
        });
      };

      setComments((prev) => updateComment(prev));
    } catch (err) {
      console.error('Ошибка при добавлении ответа:', err);
    }
  };

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 2);
  };
  return (
    <section className='comments mt12 mb12'>
      <div className='container'>
        <h2>Comments</h2>
        <ul className='comments__wrap'>
          {/* {comments &&
            comments.map((item, ind) => (
              <CommentItem key={ind} comment={item} addReply={addReply} />
            ))} */}
          {comments &&
            comments
              .slice(0, visibleCount)
              .map((item, ind) => <CommentItem key={ind} comment={item} addReply={addReply} />)}
        </ul>
        {visibleCount < comments.length && <button onClick={handleShowMore}>Show more</button>}
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
