import React from 'react';
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/layout/Header';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import './App.css'
function App() {
  return (
    <div className='userApp'>
      <HashRouter>
        <Header />
        <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
