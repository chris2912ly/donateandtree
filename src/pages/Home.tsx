import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Leaf, TrendingUp, Users, Globe, Heart } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import GlassButton from '../components/UI/GlassButton';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="floating-animation mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 glass-card rounded-full pulse-glow">
                <Leaf className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Give with
              <span className="block gradient-text">Transparency</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
              The world's first blockchain-powered charity platform where every donation is tracked transparently, 
              and your generosity grows real trees as NFT rewards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/charities">
                <GlassButton size="lg" className="w-full sm:w-auto">
                  Start Donating <ArrowRight className="ml-2 h-5 w-5" />
                </GlassButton>
              </Link>
              <Link to="/dashboard">
                <GlassButton variant="secondary" size="lg" className="w-full sm:w-auto">
                  View Dashboard
                </GlassButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose GreenChain?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Revolutionary features that make charitable giving transparent, rewarding, and impactful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GlassCard hover>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 glass-button rounded-full mb-6">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Blockchain Transparency</h3>
                <p className="text-white/70">
                  Every donation is recorded on the blockchain, ensuring complete transparency and traceability of funds.
                </p>
              </div>
            </GlassCard>

            <GlassCard hover>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 glass-button rounded-full mb-6">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">NFT Tree Rewards</h3>
                <p className="text-white/70">
                  Reach donation milestones and receive unique NFT trees representing real trees planted in your honor.
                </p>
              </div>
            </GlassCard>

            <GlassCard hover>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 glass-button rounded-full mb-6">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Impact Tracking</h3>
                <p className="text-white/70">
                  Monitor your donation impact with detailed analytics and real-time updates from charities.
                </p>
              </div>
            </GlassCard>

            <GlassCard hover>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 glass-button rounded-full mb-6">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Verified Charities</h3>
                <p className="text-white/70">
                  All charities are thoroughly vetted and verified to ensure your donations reach legitimate causes.
                </p>
              </div>
            </GlassCard>

            <GlassCard hover>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 glass-button rounded-full mb-6">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Global Reach</h3>
                <p className="text-white/70">
                  Support causes worldwide with cryptocurrency donations that transcend traditional banking barriers.
                </p>
              </div>
            </GlassCard>

            <GlassCard hover>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 glass-button rounded-full mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Social Impact</h3>
                <p className="text-white/70">
                  Share your charitable achievements and inspire others to join the movement for positive change.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GlassCard className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">$2.4M+</div>
                <div className="text-white/70">Total Donated</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">15,000+</div>
                <div className="text-white/70">Trees Planted</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-white/70">Verified Charities</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">8,500+</div>
                <div className="text-white/70">Active Donors</div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <GlassCard>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Make a Difference?</h2>
            <p className="text-xl text-white/70 mb-8">
              Join thousands of donors who are creating positive change while earning NFT tree rewards.
            </p>
            <Link to="/charities">
              <GlassButton size="lg">
                Explore Charities <ArrowRight className="ml-2 h-5 w-5" />
              </GlassButton>
            </Link>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Home;
