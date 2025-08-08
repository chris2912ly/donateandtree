import React from 'react';
import { Leaf, MapPin, Calendar, TrendingUp, Award, ExternalLink } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import GlassButton from '../components/UI/GlassButton';
import { mockNFTTrees } from '../data/mockData';

const NFTTrees: React.FC = () => {
  const trees = mockNFTTrees;

  const handleShare = (treeId: string) => {
    // In a real app, this would open a share modal or copy link
    console.log('Share tree:', treeId);
  };

  const handleViewOnBlockchain = (tokenId: string) => {
    // In a real app, this would open the blockchain explorer
    console.log('View on blockchain:', tokenId);
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="animate-float mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 glass-card rounded-full">
              <Leaf className="h-8 w-8 text-emerald-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My NFT Tree Collection
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Each NFT represents a real tree planted thanks to your generous donations. 
            Track your environmental impact and share your achievements.
          </p>
        </div>

        {/* Collection Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <GlassCard className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 glass-button rounded-xl">
                <Leaf className="h-6 w-6 text-emerald-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-2">{trees.length}</div>
            <div className="text-white/70 text-sm">Trees Owned</div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 glass-button rounded-xl">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-2">
              {trees.reduce((sum, tree) => sum + tree.metadata.carbonOffset, 0).toFixed(1)} kg
            </div>
            <div className="text-white/70 text-sm">CO₂ Offset</div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 glass-button rounded-xl">
                <MapPin className="h-6 w-6 text-blue-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-2">
              {new Set(trees.map(t => t.location.split(',')[1]?.trim())).size}
            </div>
            <div className="text-white/70 text-sm">Countries</div>
          </GlassCard>

          <GlassCard className="text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 glass-button rounded-xl">
                <Award className="h-6 w-6 text-yellow-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-2">
              {new Set(trees.map(t => t.metadata.species)).size}
            </div>
            <div className="text-white/70 text-sm">Species</div>
          </GlassCard>
        </div>

        {/* NFT Trees Grid */}
        {trees.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trees.map((tree) => (
              <GlassCard key={tree.id} hover className="overflow-hidden">
                {/* Tree Image */}
                <div className="relative mb-6 rounded-xl overflow-hidden">
                  <img
                    src={tree.image}
                    alt={tree.treeType}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="glass-button px-3 py-1 rounded-full text-sm font-medium text-white">
                      #{tree.tokenId}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="glass-button p-2 rounded-full">
                      <Leaf className="h-4 w-4 text-emerald-400" />
                    </div>
                  </div>
                </div>

                {/* Tree Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{tree.treeType}</h3>
                    <p className="text-white/70 text-sm italic">{tree.metadata.species}</p>
                  </div>

                  {/* Location & Date */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-white/70">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{tree.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-white/70">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">Planted {new Date(tree.plantedDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  {/* Environmental Impact */}
                  <div className="glass-dark rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/70 text-sm">Carbon Offset</span>
                      <span className="text-emerald-400 font-semibold">
                        {tree.metadata.carbonOffset} kg CO₂
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/70 text-sm">Sponsored by</span>
                      <span className="text-white text-sm font-medium">
                        {tree.metadata.sponsor}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <GlassButton
                      onClick={() => handleShare(tree.id)}
                      className="flex-1 flex items-center justify-center space-x-2"
                      size="sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Share</span>
                    </GlassButton>
                    <GlassButton
                      onClick={() => handleViewOnBlockchain(tree.tokenId)}
                      variant="secondary"
                      className="flex-1 flex items-center justify-center space-x-2"
                      size="sm"
                    >
                      <TrendingUp className="h-4 w-4" />
                      <span>Blockchain</span>
                    </GlassButton>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16">
            <GlassCard className="max-w-md mx-auto">
              <div className="animate-pulse-slow mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 glass-button rounded-full">
                  <Leaf className="h-8 w-8 text-emerald-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No Trees Yet</h3>
              <p className="text-white/70 mb-6">
                Start donating to earn your first NFT tree! Every 10 ETH in donations earns you a tree reward.
              </p>
              <GlassButton className="flex items-center space-x-2">
                <span>Start Donating</span>
                <Leaf className="h-4 w-4" />
              </GlassButton>
            </GlassCard>
          </div>
        )}

        {/* Achievement Banner */}
        {trees.length > 0 && (
          <div className="mt-12">
            <GlassCard className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 glass-button rounded-2xl">
                  <Award className="h-8 w-8 text-yellow-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Environmental Champion!</h2>
              <p className="text-white/70 mb-6">
                You've contributed to planting {trees.length} tree{trees.length !== 1 ? 's' : ''} and 
                offsetting {trees.reduce((sum, tree) => sum + tree.metadata.carbonOffset, 0).toFixed(1)} kg of CO₂.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton onClick={() => handleShare('collection')}>
                  Share Achievement
                </GlassButton>
                <GlassButton variant="secondary">
                  Download Certificate
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTTrees;
