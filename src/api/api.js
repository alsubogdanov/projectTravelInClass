// src/api/api.js
import axios from "axios";
import refreshToken from "./refreshToken";

const session = JSON.parse(localStorage.getItem("admin_session"));

let storeSetUser = null;
let storeLogout = null;

// даём AuthContext возможность передать setUser и logout
export function initApi(setUser, logout) {
  storeSetUser = setUser;
  storeLogout = logout;
}


// создаём инстанс axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API,
//   baseURL: 'http://localhost:8000',
  headers: {
    "Content-Type": "application/json",
    Authorization: session ? `Bearer ${session.access}` : "",
  },
});

// можно добавить интерцептор для автоматически отправки токена
api.interceptors.request.use(
  (config) => {
    const raw = localStorage.getItem("admin_session");
    if (raw) {
      const { access } = JSON.parse(raw);
      if (access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);
api.interceptors.response.use(
  (response) => response, // если всё ок, просто возвращаем ответ
  async (error) => {
    const originalRequest = error.config;

    // ловим только первый 401 для одного запроса
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
       console.log("Access просрочен, вызываем refresh...");

      // вызываем функцию refreshToken
      const newAccess = await refreshToken(storeSetUser, storeLogout);

      if (newAccess) {
        // подставляем новый access в заголовок и повторяем запрос
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return api(originalRequest);
      }
    }

    // если refresh не сработал или ошибка другая — пробрасываем ошибку
    return Promise.reject(error);
  }
);
export default api;