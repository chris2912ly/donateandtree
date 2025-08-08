import React, { useState } from 'react';
import { Search, MapPin, Users, TrendingUp, Shield, Heart } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import GlassButton from '../components/UI/GlassButton';
import { mockCharities } from '../data/mockData';

const Charities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Children & Education', 'Elderly Care', 'Water & Sanitation', 'Environment', 'Healthcare', 'Education'];

  const filteredCharities = mockCharities.filter(charity => {
    const matchesSearch = charity.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         charity.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || charity.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDonate = (charityId: string) => {
    // In a real app, this would open a donation modal
    console.log('Donate to charity:', charityId);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Verified Charities
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Support verified charitable organizations and make a real impact with transparent, blockchain-recorded donations.
          </p>
        </div>

        {/* Search and Filters */}
        <GlassCard className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="text"
                placeholder="Search charities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'glass-button text-white'
                      : 'glass border-white/20 text-white/70 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </GlassCard>

        {/* Charities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharities.map((charity) => (
            <GlassCard key={charity.id} hover className="h-full flex flex-col">
              {/* Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden">
                <img
                  src={charity.image}
                  alt={charity.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  {charity.verified && (
                    <div className="glass-button p-2 rounded-full">
                      <Shield className="h-4 w-4 text-green-400" />
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">{charity.name}</h3>
                  <p className="text-white/70 text-sm mb-3 line-clamp-3">{charity.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-white/60">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{charity.location}</span>
                    </div>
                    <span className="px-2 py-1 glass rounded-full text-xs">{charity.category}</span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <TrendingUp className="h-4 w-4 text-green-400 mr-1" />
                      <span className="text-lg font-semibold text-white">{charity.totalReceived} ETH</span>
                    </div>
                    <span className="text-xs text-white/60">Total Received</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="h-4 w-4 text-blue-400 mr-1" />
                      <span className="text-lg font-semibold text-white">{charity.donorCount}</span>
                    </div>
                    <span className="text-xs text-white/60">Donors</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="mt-auto">
                  <GlassButton
                    onClick={() => handleDonate(charity.id)}
                    className="w-full flex items-center justify-center space-x-2"
                  >
                    <Heart className="h-4 w-4" />
                    <span>Donate Now</span>
                  </GlassButton>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* No Results */}
        {filteredCharities.length === 0 && (
          <div className="text-center py-12">
            <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
              <Search className="h-12 w-12 text-white/50 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No charities found</h3>
              <p className="text-white/70">Try adjusting your search terms or filters.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Charities;
