import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import api from '../../api/api';
import JoditEditor from 'jodit-react';

function AboutSection() {
  const editor = useRef(null);
  const API = process.env.REACT_APP_API;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null); // превью нового изображения
  const [changed, setChanged] = useState(false); // отслеживаем изменения

  // Загружаем текущие данные "О нас"
  useEffect(() => {
    fetchAbout();
  }, [API]);

  // Отслеживаем изменения, чтобы не отправлять форму, если ничего не меняли
  // Этот код отслеживает, были ли изменения на странице, и если пользователь пытается закрыть вкладку или перезагрузить страницу, он предупреждает о несохранённых изменениях.
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (changed) {
        e.preventDefault();
        e.returnValue = ''; // стандартное сообщение браузера о несохранённых изменениях
      }
    };
    //beforeunload — это событие браузера, которое срабатывает перед тем, как пользователь покидает страницу:
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [changed]);

  async function fetchAbout() {
    try {
      const res = await axios.get(`${API}/api/sitecontent/about/`);
      console.log(res.data);

      setData(res.data);
    } catch (err) {
      console.error('Ошибка при загрузке секции:', err);
    } finally {
      setLoading(false);
    }
  }
  // Обработка сохранения
  async function handleSave() {
    try {
      setSaving(true);
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('content', data.content);
      if (imageFile) formData.append('image', imageFile);
      // console.log([...formData.entries()]);

      const res = await api.put('/api/admin/sitecontent/about/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setData(res.data);
      setImageFile(null);
      setPreview(null);
      setChanged(false);

      alert('Изменения успешно сохранены!');
    } catch (err) {
      console.error('Ошибка при сохранении:', err);
      alert('Не удалось сохранить изменения.');
    } finally {
      setSaving(false);
    }
  }

  // Подтверждение при отмене
  function handleCancel() {
    if (changed) {
      const confirmExit = window.confirm(
        'Вы уверены, что хотите отменить изменения? Несохранённые данные будут потеряны.',
      );
      if (!confirmExit) return;
    }
    // перезагружаем данные
    window.location.reload();
  }

  // Превью изображения
  function handleImageChange(e) {
    //  console.log(e.target.files);

    const file = e.target.files[0];
    if (!file) return;
    setImageFile(file);
    setChanged(true);
    const previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }

  if (loading) return <p>Загрузка...</p>;
  if (!data) return <p>Нет данных для отображения.</p>;

  const editorConfig = {
    readonly: false,
    height: 300,
    toolbarButtonSize: 'middle',
    buttons: [
      'bold',
      'italic',
      'underline',
      '|',
      'link',
      'unlink',
      '|',
      'font',
      'fontsize',
      '|',
      'ul',
      'ol',
      '|',
      'left',
      'center',
      'right',
      'justify',
      '|',
      'undo',
      'redo',
    ],
  };

  return (
    <div className='about-section'>
      <h3>Секция “О нас”</h3>

      {/* Title */}
      <label>Заголовок:</label>
      <input
        type='text'
        value={data.title || ''}
        onChange={(e) => {
          setData({ ...data, title: e.target.value });
          setChanged(true);
        }}
      />

      {/* Content */}
      <label>Контент:</label>
      <JoditEditor
        ref={editor}
        value={data.content}
        config={editorConfig}
        onBlur={(newContent) => {
          setData({ ...data, content: newContent });
          setChanged(true);
        }}
      />

      {/* Image */}
      <label>Изображение:</label>
      {(preview || data.image) && (
        <div className='image-preview'>
          <img src={preview || data.image} alt='About section' />
        </div>
      )}
      <input type='file' accept='image/*' onChange={handleImageChange} />

      {/* Buttons */}
      <div className='buttons'>
        <button onClick={handleSave} disabled={saving}>
          {saving ? 'Сохранение...' : 'Сохранить'}
        </button>
        <button onClick={handleCancel}>Отмена</button>
      </div>

      <p className='updated'>Последнее обновление: {new Date(data.updated_at).toLocaleString()}</p>
    </div>
  );
}

export default AboutSection;
