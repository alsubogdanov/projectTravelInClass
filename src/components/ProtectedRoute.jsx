// ProtectedRoute.jsx
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../auth/AuthContext';

export default function ProtectedRoute({ children }) {
  const auth = useContext(AuthContext);
  if (!auth.isAuthenticated) {
    return <Navigate to='/admin/login' replace />;
  }
  return children;
}
