import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Charities from './pages/Charities';
import Dashboard from './pages/Dashboard';
import NFTTrees from './pages/NFTTrees';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="charities" element={<Charities />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="nft-trees" element={<NFTTrees />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
