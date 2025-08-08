import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Wallet, User, Settings } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="glass fixed top-0 left-0 right-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 glass-button rounded-xl">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">GreenChain</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Home
            </Link>
            <Link
              to="/charities"
              className={`text-sm font-medium transition-colors ${
                isActive('/charities') ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Charities
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm font-medium transition-colors ${
                isActive('/dashboard') ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/nft-trees"
              className={`text-sm font-medium transition-colors ${
                isActive('/nft-trees') ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              My Trees
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="glass-button p-2 rounded-xl text-white hover:text-white/80 transition-colors">
              <Wallet className="h-5 w-5" />
            </button>
            <Link to="/profile" className="glass-button p-2 rounded-xl text-white hover:text-white/80 transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <button className="glass-button p-2 rounded-xl text-white hover:text-white/80 transition-colors">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
