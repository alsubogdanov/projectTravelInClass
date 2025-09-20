import { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";

function ArticleForm({ article, onSave, onCancel }) {
  const editor = useRef(null);

  const [formData, setFormData] = useState({
    title: article.title || "",
    img: article.img || "",
    author: article.author || "",
    createDate: article.createDate || "",
    content: article.content || "", // HTML-строка
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" }); // очистка ошибки при изменении
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Введите заголовок";
    if (!formData.author.trim()) newErrors.author = "Введите автора";
    if (!formData.createDate.trim()) newErrors.createDate = "Выберите дату";
    if (!formData.content.trim()) newErrors.content = "Введите текст статьи";

    if (!formData.img && !formData.imgFile)
      newErrors.img = "Выберите изображение";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSave(formData);
  };

  const editorConfig = {
    readonly: false,
    height: 300,
    toolbarButtonSize: "middle",
    buttons: [
      "bold",
      "italic",
      "underline",
      "|",
      "link",
      "unlink",
      "|",
      "font",
      "fontsize",
      "|",
      "ul",
      "ol",
      "|",
      "left", // выравнивание влево
      "center", // по центру
      "right", // вправо
      "justify", // по ширине
      "|",
      "undo",
      "redo",
    ],
  };
  // обработчик загрузки файла
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const validTypes = ["image/jpeg", "image/png", "image/gif"];
      const maxSize = 2 * 1024 * 1024; // 2MB
      if (!validTypes.includes(file.type)) {
        setErrors({ ...errors, img: "Допустимые форматы: JPG, PNG, GIF" });
        return;
      }
      if (file.size > maxSize) {
        setErrors({ ...errors, img: "Файл должен быть меньше 2MB" });
        return;
      }
      const preview = URL.createObjectURL(file);
      setFormData({ ...formData, imgFile: file, img: preview });
      setErrors({ ...errors, img: "" });
    }
  };
  return (
    <form onSubmit={handleSubmit} className="edit-article-form">
      <div>
        <label>Title:</label>
        <input
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <div className="error">{errors.title}</div>}
      </div>

      <div>
        <label>Author:</label>
        <input
          name="author"
          type="text"
          value={formData.author}
          onChange={handleChange}
        />
        {errors.author && <div className="error">{errors.author}</div>}
      </div>

      <div>
        <label>Date:</label>
        <input
          type="date"
          name="createDate"
          value={formData.createDate}
          max={new Date().toISOString().split("T")[0]} // ограничение будущей даты
          onChange={handleChange}
        />
        {errors.createDate && <div className="error">{errors.createDate}</div>}
      </div>
      {/* Загрузка файла для изображения */}
      <div className="">
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {errors.img && <div className="error">{errors.img}</div>}
      </div>
      {formData.img && (
        <div className="mb2">
          <img
            src={formData.img}
            alt="Preview"
            style={{
              maxWidth: "200px",
              maxHeight: "200px",
              objectFit: "contain",
            }}
          />
        </div>
      )}
      <div>
        <label>Content:</label>
        <JoditEditor
          ref={editor}
          value={formData.content}
          config={editorConfig}
          onBlur={(newContent) =>
            setFormData({ ...formData, content: newContent })
          }
        />
        {errors.content && <div className="error">{errors.content}</div>}
      </div>

      <div className="mt3">
        <button type="submit" className="main_btn mr1">
          Save
        </button>
        <button type="button" onClick={onCancel} className="btn">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ArticleForm;
