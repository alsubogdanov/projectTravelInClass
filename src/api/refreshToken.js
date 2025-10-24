import axios from "axios";

export default async function refreshToken(setUser, logout) {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API}/api/auth/refresh/`,
      {}, // тело пустое, refresh берется из cookie
      { withCredentials: true } // cookie будут отправлены автоматически
    );

    const newAccess = res.data.access;

    // обновляем localStorage и state
    const raw = localStorage.getItem("admin_session");
    if (raw) {
      const session = JSON.parse(raw);
      session.access = newAccess;
      localStorage.setItem("admin_session", JSON.stringify(session));
      if (setUser) setUser(session); // обновляем state в контексте
    }

    return newAccess;
  } catch (err) {
    console.error("Не удалось обновить токен:", err);
    if (logout) logout(); // если refresh просрочен, делаем logout
    return null;
  }
}