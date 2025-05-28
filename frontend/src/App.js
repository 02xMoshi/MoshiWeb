import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import MainPage from './pages/mainpage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;