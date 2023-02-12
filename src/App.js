import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import TopBurners from './pages/TopBurners';
import BurnReward from './pages/BurnReward';
import BurnHistory from './pages/BurnHistory';


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/burnhistory" element={<BurnHistory />} />
          <Route path="/topburners" element={<TopBurners />} />
          <Route path="/reward" element={<BurnReward />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;