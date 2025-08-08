import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, User, Wallet, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/charities', label: 'Charities' },
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/nft-trees', label: 'My Trees' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="p-2 glass-button rounded-xl">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">GreenChain</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="glass-button px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center space-x-2">
              <Wallet className="h-4 w-4" />
              <span>0xabcd...efgh</span>
            </button>
            <Link
              to="/profile"
              className="glass-button p-2 rounded-lg text-white hover:text-white/80 transition-colors"
            >
              <User className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden glass-button p-2 rounded-lg text-white"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20">
                <button className="glass-button px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center space-x-2 w-full justify-center">
                  <Wallet className="h-4 w-4" />
                  <span>Connect Wallet</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
