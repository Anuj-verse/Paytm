import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import LandingPage from './pages/LandingPage'
import SignupPage from './pages/Signup'
import LoginPage from './pages/Login'
import Dashboard from './pages/Dashboard'
import React from 'react';

function App() {
  const getToken = () => localStorage.getItem("token");

  const RequireAuth = ({ children }: { children: React.JSX.Element }) => {
    const token = getToken();
    return token ? children : <Navigate to="/login" replace />;
  };

  const RedirectIfAuthenticated = ({ children }: { children: React.JSX.Element }) => {
    const token = getToken();
    return token ? <Navigate to="/dashboard" replace /> : children;
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              getToken() ? <Navigate to="/dashboard" replace /> : <LandingPage />
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectIfAuthenticated>
                <SignupPage />
              </RedirectIfAuthenticated>
            }
          />
          <Route
            path="/login"
            element={
              <RedirectIfAuthenticated>
                <LoginPage />
              </RedirectIfAuthenticated>
            }
          />
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
