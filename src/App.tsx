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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/charities" element={<Charities />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/nft-trees" element={<NFTTrees />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
