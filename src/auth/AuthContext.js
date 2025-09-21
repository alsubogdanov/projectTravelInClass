// AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const DEV_USERS = [
  { id: 1, username: "admin", password: "password123", role: "admin" },
  { id: 2, username: "editor", password: "editorpass", role: "editor" }
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const raw = localStorage.getItem("admin_session");
    if (raw) setUser(JSON.parse(raw));
  }, []);

  function login(username, password) {
	console.log("login");
	
    // simple dev check against hardcoded users
    const found = DEV_USERS.find(
      u => u.username === username && u.password === password
    );
    if (!found) return { ok: false, message: "Неправильный логин или пароль" };

    const session = { id: found.id, username: found.username, role: found.role, token: "dev-token" };
    localStorage.setItem("admin_session", JSON.stringify(session));
    setUser(session);
    return { ok: true };
  }

  function logout() {
    localStorage.removeItem("admin_session");
    setUser(null);
    navigate("/admin/login");
  }

  const value = { user, login, logout, isAuthenticated: !!user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;
