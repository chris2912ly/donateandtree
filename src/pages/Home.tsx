import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Leaf, Users, TrendingUp, Heart, Globe } from 'lucide-react';
import GlassCard from '../components/UI/GlassCard';
import GlassButton from '../components/UI/GlassButton';

const Home: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Transparent Donations',
      description: 'Every donation is recorded on the blockchain for complete transparency and accountability.',
    },
    {
      icon: Leaf,
      title: 'NFT Tree Rewards',
      description: 'Earn unique NFT trees when you reach donation milestones, representing real trees planted.',
    },
    {
      icon: Users,
      title: 'Verified Charities',
      description: 'All charities are thoroughly vetted and verified to ensure your donations make a real impact.',
    },
    {
      icon: TrendingUp,
      title: 'Impact Tracking',
      description: 'Track your donation history and see the cumulative impact of your contributions.',
    },
  ];

  const stats = [
    { label: 'Total Donated', value: '$2.4M', icon: Heart },
    { label: 'Trees Planted', value: '12,450', icon: Leaf },
    { label: 'Active Donors', value: '8,234', icon: Users },
    { label: 'Verified Charities', value: '156', icon: Globe },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-float mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 glass-card rounded-full mb-6">
                <Leaf className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Donate with
              <span className="block gradient-text">Transparency</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the future of charitable giving with blockchain technology. Every donation is transparent, 
              traceable, and rewards you with NFT trees representing real environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/charities">
                <GlassButton size="lg" className="flex items-center space-x-2">
                  <span>Start Donating</span>
                  <ArrowRight className="h-5 w-5" />
                </GlassButton>
              </Link>
              <Link to="/dashboard">
                <GlassButton variant="secondary" size="lg">
                  View Dashboard
                </GlassButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 glass-button rounded-xl">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose GreenChain?
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Experience the next generation of charitable giving with cutting-edge blockchain technology
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <GlassCard key={index} hover className="text-center h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 glass-button rounded-2xl">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <GlassCard className="text-center">
            <div className="animate-pulse-slow mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 glass-button rounded-full">
                <Heart className="h-8 w-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join thousands of donors who are creating positive change while earning NFT rewards for their generosity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/charities">
                <GlassButton size="lg" className="flex items-center space-x-2">
                  <span>Browse Charities</span>
                  <ArrowRight className="h-5 w-5" />
                </GlassButton>
              </Link>
              <Link to="/nft-trees">
                <GlassButton variant="secondary" size="lg">
                  View NFT Trees
                </GlassButton>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
};

export default Home;
