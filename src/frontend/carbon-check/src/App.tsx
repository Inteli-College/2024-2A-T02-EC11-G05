import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/dashboard';
import MainPage from './pages/main';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
    </Router>
  );
}

export default App;
