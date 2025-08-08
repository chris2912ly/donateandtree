import React from 'react';
import { TrendingUp, DollarSign, Leaf, Award, Calendar, ExternalLink } from 'lucide-react';
import { mockUser, mockDonations, mockCharities } from '../data/mockData';
import GlassCard from '../components/UI/GlassCard';
import GlassButton from '../components/UI/GlassButton';

const Dashboard: React.FC = () => {
  const totalDonations = mockDonations.reduce((sum, donation) => sum + donation.amount, 0);
  const nextTreeThreshold = 5; // ETH needed for next tree
  const progressToNextTree = (totalDonations % nextTreeThreshold) / nextTreeThreshold * 100;

  const getCharityName = (charityId: string) => {
    const charity = mockCharities.find(c => c.id === charityId);
    return charity?.name || 'Unknown Charity';
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome back, {mockUser.name}!</h1>
          <p className="text-white/70">Track your donations, view your impact, and manage your NFT trees.</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">Total Donated</p>
                <p className="text-2xl font-bold text-white">{totalDonations.toFixed(2)} ETH</p>
              </div>
              <div className="glass-button p-3 rounded-xl">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">NFT Trees Owned</p>
                <p className="text-2xl font-bold text-white">3</p>
              </div>
              <div className="glass-button p-3 rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">Charities Supported</p>
                <p className="text-2xl font-bold text-white">{new Set(mockDonations.map(d => d.charityId)).size}</p>
              </div>
              <div className="glass-button p-3 rounded-xl">
                <Award className="h-6 w-6 text-white" />
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/70 text-sm">Member Since</p>
                <p className="text-2xl font-bold text-white">Jan 2024</p>
              </div>
              <div className="glass-button p-3 rounded-xl">
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tree Reward Progress */}
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Next Tree Reward</h3>
              <Leaf className="h-6 w-6 text-green-400" />
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-white/70 mb-2">
                <span>Progress to next tree</span>
                <span>{(totalDonations % nextTreeThreshold).toFixed(2)} / {nextTreeThreshold} ETH</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progressToNextTree}%` }}
                ></div>
              </div>
            </div>
            <p className="text-white/70 text-sm mb-4">
              You're {(nextTreeThreshold - (totalDonations % nextTreeThreshold)).toFixed(2)} ETH away from your next NFT tree reward!
            </p>
            <GlassButton className="w-full">
              Donate to Earn Tree
            </GlassButton>
          </GlassCard>

          {/* Recent Donations */}
          <GlassCard>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-white">Recent Donations</h3>
              <TrendingUp className="h-6 w-6 text-blue-400" />
            </div>
            <div className="space-y-4">
              {mockDonations.slice(0, 3).map(donation => (
                <div key={donation.id} className="flex items-center justify-between p-3 glass rounded-xl">
                  <div>
                    <p className="text-white font-medium">{getCharityName(donation.charityId)}</p>
                    <p className="text-white/60 text-sm">
                      {new Date(donation.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-semibold">{donation.amount} {donation.currency}</p>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-green-400 text-xs">Confirmed</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <GlassButton variant="secondary" className="w-full mt-4">
              View All Donations
            </GlassButton>
          </GlassCard>
        </div>

        {/* Impact Summary */}
        <div className="mt-8">
          <GlassCard>
            <h3 className="text-2xl font-semibold text-white mb-6">Your Impact Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">67.5 kg</div>
                <div className="text-white/70">CO₂ Offset</div>
                <div className="text-white/50 text-sm">From your NFT trees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">156</div>
                <div className="text-white/70">Lives Impacted</div>
                <div className="text-white/50 text-sm">Through your donations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">12</div>
                <div className="text-white/70">Projects Supported</div>
                <div className="text-white/50 text-sm">Across different causes</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
