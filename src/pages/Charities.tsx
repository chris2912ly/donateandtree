import React, { useState } from 'react';
import { Search, Filter, MapPin, Users, DollarSign, CheckCircle } from 'lucide-react';
import { mockCharities } from '../data/mockData';
import GlassCard from '../components/UI/GlassCard';
import GlassButton from '../components/UI/GlassButton';

const Charities: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Children', 'Elderly', 'Environment', 'Education', 'Wildlife', 'Emergency'];

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
            Support verified charitable organizations worldwide with transparent blockchain donations.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <GlassCard>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Search charities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-white/70" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/30"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Charities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharities.map(charity => (
            <GlassCard key={charity.id} hover>
              <div className="relative">
                <img
                  src={charity.image}
                  alt={charity.name}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                {charity.verified && (
                  <div className="absolute top-2 right-2 glass-button p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                )}
                <div className="absolute top-2 left-2 glass-button px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-white">{charity.category}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{charity.name}</h3>
              <p className="text-white/70 text-sm mb-4 line-clamp-3">{charity.description}</p>

              <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{charity.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{charity.donorCount} donors</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="flex items-center gap-1 text-white">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-semibold">{charity.totalReceived} ETH</span>
                  </div>
                  <div className="text-xs text-white/60">Total received</div>
                </div>
              </div>

              <GlassButton
                onClick={() => handleDonate(charity.id)}
                className="w-full"
              >
                Donate Now
              </GlassButton>
            </GlassCard>
          ))}
        </div>

        {filteredCharities.length === 0 && (
          <div className="text-center py-12">
            <GlassCard>
              <p className="text-white/70 text-lg">No charities found matching your criteria.</p>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default Charities;
