import React, { useState } from 'react';

function ArticleForm({ article, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: article.title,
    img: article.img,
    author: article.author,
    createDate: article.createDate,
    description: article.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // updating a specific field
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className='edit-article mb3'>
      <h3 className='section_title mt4 mb4'>Edit form</h3>
      <div className='d-flex jcsb aic mb2'>
        <label>Title:</label>
        <input type='text' name='title' value={formData.title} onChange={handleChange} />
      </div>
      <div className='d-flex jcsb aic mb2'>
        <label>Author:</label>
        <input type='text' name='author' value={formData.author} onChange={handleChange} />
      </div>
      <div className='d-flex aic mb2'>
        <label>Date:</label>
        <input type='date' name='createDate' value={formData.createDate} onChange={handleChange} />
      </div>
      <div className='d-flex jcsb aic mb2'>
        <label>Description:</label>
        <input
          type='text'
          className='text-description'
          name='description'
          value={formData.description}
          onChange={handleChange}
        />
        {/* <textarea name='description' onChange={handleChange}>
          {formData.description}
        </textarea> */}
      </div>
      <div className='d-flex g2'>
        <button type='submit' className='main_btn'>
          save
        </button>
        <button onClick={onCancel} className='btn'>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ArticleForm;
