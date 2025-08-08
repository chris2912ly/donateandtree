import React from 'react';
import { TrendingUp, Heart, Leaf, Award, Calendar, ExternalLink } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import { mockUser, mockDonations, mockCharities } from '../data/mockData';

const Dashboard: React.FC = () => {
  const user = mockUser;
  const donations = mockDonations;

  // Calculate progress to next tree reward (every 10 ETH)
  const nextTreeThreshold = Math.ceil(user.totalDonated / 10) * 10;
  const progressToNextTree = ((user.totalDonated % 10) / 10) * 100;

  const stats = [
    {
      label: 'Total Donated',
      value: `${user.totalDonated} ETH`,
      icon: Heart,
      color: 'text-red-400',
    },
    {
      label: 'Charities Supported',
      value: new Set(donations.map(d => d.charityId)).size,
      icon: TrendingUp,
      color: 'text-green-400',
    },
    {
      label: 'NFT Trees Earned',
      value: user.nftTrees.length,
      icon: Leaf,
      color: 'text-emerald-400',
    },
    {
      label: 'Donation Streak',
      value: '12 days',
      icon: Award,
      color: 'text-yellow-400',
    },
  ];

  const getCharityName = (charityId: string) => {
    return mockCharities.find(c => c.id === charityId)?.name || 'Unknown Charity';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-xl text-white/70">
            Track your donations and see the impact you're making.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <GlassCard key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 glass-button rounded-xl">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tree Reward Progress */}
          <div className="lg:col-span-2">
            <GlassCard>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Next Tree Reward</h2>
                <div className="flex items-center space-x-2 text-emerald-400">
                  <Leaf className="h-5 w-5" />
                  <span className="font-semibold">{nextTreeThreshold} ETH Goal</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm text-white/70 mb-2">
                  <span>{user.totalDonated} ETH donated</span>
                  <span>{(nextTreeThreshold - user.totalDonated).toFixed(1)} ETH remaining</span>
                </div>
                <div className="w-full glass rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-emerald-400 to-green-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progressToNextTree}%` }}
                  ></div>
                </div>
              </div>

              <div className="glass-dark rounded-xl p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 glass-button rounded-lg">
                    <Award className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Tree Planting Reward</h3>
                    <p className="text-white/70 text-sm">
                      A real tree will be planted and you'll receive an NFT when you reach {nextTreeThreshold} ETH in total donations.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Quick Actions */}
          <div>
            <GlassCard>
              <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
              <div className="space-y-4">
                <button className="w-full glass-button p-4 rounded-xl text-left hover:scale-105 transition-transform">
                  <div className="flex items-center space-x-3">
                    <Heart className="h-5 w-5 text-red-400" />
                    <div>
                      <div className="font-semibold text-white">Make a Donation</div>
                      <div className="text-white/70 text-sm">Support a charity</div>
                    </div>
                  </div>
                </button>
                
                <button className="w-full glass-button p-4 rounded-xl text-left hover:scale-105 transition-transform">
                  <div className="flex items-center space-x-3">
                    <Leaf className="h-5 w-5 text-emerald-400" />
                    <div>
                      <div className="font-semibold text-white">View NFT Trees</div>
                      <div className="text-white/70 text-sm">See your collection</div>
                    </div>
                  </div>
                </button>
                
                <button className="w-full glass-button p-4 rounded-xl text-left hover:scale-105 transition-transform">
                  <div className="flex items-center space-x-3">
                    <TrendingUp className="h-5 w-5 text-blue-400" />
                    <div>
                      <div className="font-semibold text-white">Impact Report</div>
                      <div className="text-white/70 text-sm">Download summary</div>
                    </div>
                  </div>
                </button>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Recent Donations */}
        <div className="mt-8">
          <GlassCard>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Recent Donations</h2>
              <button className="text-white/70 hover:text-white text-sm font-medium flex items-center space-x-1">
                <span>View All</span>
                <ExternalLink className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {donations.slice(0, 5).map((donation) => (
                <div key={donation.id} className="glass-dark rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 glass-button rounded-lg">
                        <Heart className="h-4 w-4 text-red-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">
                          {getCharityName(donation.charityId)}
                        </div>
                        <div className="text-white/70 text-sm flex items-center space-x-2">
                          <Calendar className="h-3 w-3" />
                          <span>{formatDate(donation.timestamp)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-white">
                        {donation.amount} {donation.currency}
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        donation.status === 'confirmed' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {donation.status}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
