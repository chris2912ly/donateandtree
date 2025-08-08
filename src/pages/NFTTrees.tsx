import React from 'react';
import { MapPin, Calendar, Leaf, ExternalLink, Share2 } from 'lucide-react';
import { mockNFTTrees } from '../data/mockData';
import GlassCard from '../components/UI/GlassCard';
import GlassButton from '../components/UI/GlassButton';

const NFTTrees: React.FC = () => {
  const handleShare = (tree: any) => {
    // In a real app, this would open a share modal or use Web Share API
    console.log('Share tree:', tree.id);
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My NFT Trees
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Your collection of NFT trees representing real trees planted through your charitable donations.
          </p>
        </div>

        {/* Collection Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <GlassCard>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{mockNFTTrees.length}</div>
              <div className="text-white/70">Trees Owned</div>
            </div>
          </GlassCard>
          <GlassCard>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {mockNFTTrees.reduce((sum, tree) => sum + tree.metadata.carbonOffset, 0).toFixed(1)} kg
              </div>
              <div className="text-white/70">Total CO₂ Offset</div>
            </div>
          </GlassCard>
          <GlassCard>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {new Set(mockNFTTrees.map(tree => tree.location.split(',')[1]?.trim())).size}
              </div>
              <div className="text-white/70">Countries</div>
            </div>
          </GlassCard>
        </div>

        {/* NFT Trees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockNFTTrees.map(tree => (
            <GlassCard key={tree.id} hover>
              <div className="relative mb-4">
                <img
                  src={tree.image}
                  alt={`${tree.treeType} tree`}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="absolute top-2 right-2 glass-button p-2 rounded-full">
                  <Leaf className="h-5 w-5 text-green-400" />
                </div>
                <div className="absolute top-2 left-2 glass-button px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-white">#{tree.tokenId}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">{tree.treeType} Tree</h3>
              <p className="text-white/70 text-sm mb-4">{tree.metadata.species}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <MapPin className="h-4 w-4" />
                  <span>{tree.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Calendar className="h-4 w-4" />
                  <span>Planted {new Date(tree.plantedDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/70">
                  <Leaf className="h-4 w-4" />
                  <span>{tree.metadata.carbonOffset} kg CO₂ offset</span>
                </div>
              </div>

              <div className="glass p-3 rounded-xl mb-4">
                <div className="text-xs text-white/60 mb-1">Sponsored by</div>
                <div className="text-sm text-white font-medium">{tree.metadata.sponsor}</div>
              </div>

              <div className="flex gap-2">
                <GlassButton
                  onClick={() => handleViewOnBlockchain(tree.tokenId)}
                  variant="secondary"
                  size="sm"
                  className="flex-1"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View on Chain
                </GlassButton>
                <GlassButton
                  onClick={() => handleShare(tree)}
                  variant="secondary"
                  size="sm"
                  className="flex-1"
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </GlassButton>
              </div>
            </GlassCard>
          ))}
        </div>

        {mockNFTTrees.length === 0 && (
          <div className="text-center py-12">
            <GlassCard>
              <div className="text-center">
                <Leaf className="h-16 w-16 text-white/30 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No NFT Trees Yet</h3>
                <p className="text-white/70 mb-6">
                  Start donating to earn your first NFT tree reward! Every 5 ETH donated earns you a tree.
                </p>
                <GlassButton>
                  Start Donating
                </GlassButton>
              </div>
            </GlassCard>
          </div>
        )}

        {/* Environmental Impact */}
        {mockNFTTrees.length > 0 && (
          <div className="mt-12">
            <GlassCard>
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Environmental Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {mockNFTTrees.reduce((sum, tree) => sum + tree.metadata.carbonOffset, 0).toFixed(1)}
                  </div>
                  <div className="text-white/70 mb-2">kg of CO₂ Offset</div>
                  <div className="text-white/50 text-sm">
                    Equivalent to driving {(mockNFTTrees.reduce((sum, tree) => sum + tree.metadata.carbonOffset, 0) * 2.3).toFixed(0)} km less
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-2">
                    {(mockNFTTrees.reduce((sum, tree) => sum + tree.metadata.carbonOffset, 0) * 0.5).toFixed(0)}
                  </div>
                  <div className="text-white/70 mb-2">Liters of Oxygen/Day</div>
                  <div className="text-white/50 text-sm">
                    Your trees produce oxygen for {Math.ceil(mockNFTTrees.reduce((sum, tree) => sum + tree.metadata.carbonOffset, 0) * 0.1)} people daily
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        )}
      </div>
    </div>
  );
};

export default NFTTrees;
