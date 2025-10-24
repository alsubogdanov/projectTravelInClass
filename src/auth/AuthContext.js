// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { initApi } from "../api/api";

const AuthContext = createContext();
const API = process.env.REACT_APP_API;
const DEV_USERS = [
  { id: 1, username: "admin", password: "password123", role: "admin" },
  { id: 2, username: "editor", password: "editorpass", role: "editor" }
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(()=>{
	const raw = localStorage.getItem("admin_session");
	return raw ? JSON.parse(raw) : null
  });
  
  const navigate = useNavigate();

   useEffect(() => {
		if (user) {
			initApi(setUser, logout);
		}
	}, [user]);

//   useEffect(() => {
//     const raw = localStorage.getItem("admin_session");
//     if (raw) setUser(JSON.parse(raw));
//   }, []);

  async function login(username, password) {

    try {
      const res = await axios.post(
        `${API}/api/auth/login/`,
        { username, password },
        { withCredentials: true }
      );
      const session = {
        username,
        access: res.data.access,
      };
      localStorage.setItem("admin_session", JSON.stringify(session));
      setUser(session);
      return { ok: true };
    } catch (err) {
      if (err.response && err.response.status === 401) {
        return { ok: false, message: "Неправильный логин или пароль" };
      }
      return { ok: false, message: "Ошибка соединения с сервером" };
    }
  }

  async function logout() {
	try {
		// отправляем запрос на бекенд для удаления refresh token
		await axios.post(`${API}/api/auth/logout/`, {}, { withCredentials: true });
	} catch (err) {
		console.error("Ошибка при logout:", err);
		// можно продолжить logout даже если сервер недоступен
	} finally {
		// очищаем фронтовые данные
		localStorage.removeItem("admin_session");
		setUser(null);
		navigate("/admin/login");
	}
	}
 
  

  const value = { user, login, logout, isAuthenticated: !!user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
