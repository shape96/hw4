import React from 'react';
import './App.css';
import AboutPage from './pages/aboutPage/AboutPage';
import MainPages from './pages/mainPages/MainPages';
import UsersPage from './pages/usersPage/UsersPage';

function App() {
  return (
    <div className="App">
      {/* <MainPages/> */}
      {/* <AboutPage/> */}
      <UsersPage/>
    </div>
  );
}

export default App;
