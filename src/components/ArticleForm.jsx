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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
      const preview = URL.createObjectURL(file);
      // setFormData({ ...formData, img: preview });
      // Если нужен реальный файл для отправки на сервер, можно хранить file в state
      setFormData({ ...formData, imgFile: file, img: preview });
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
      </div>

      <div>
        <label>Author:</label>
        <input
          name="author"
          type="text"
          value={formData.author}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Date:</label>
        <input
          type="date"
          name="createDate"
          value={formData.createDate}
          onChange={handleChange}
        />
      </div>
      {/* Загрузка файла для изображения */}
      <div className="">
        <label>Image:</label>
        <input type="file" accept="image/*" onChange={handleFileChange} />
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
