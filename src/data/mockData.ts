import { Charity, User, Donation, NFTTree } from '../types';

export const mockCharities: Charity[] = [
  {
    id: '1',
    name: 'Hope Children\'s Foundation',
    description: 'Providing education, healthcare, and shelter to orphaned children worldwide. Our mission is to create a brighter future for vulnerable children.',
    category: 'Children & Education',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
    totalReceived: 45.7,
    donorCount: 234,
    verified: true,
    walletAddress: '0x1234...5678',
    location: 'Global'
  },
  {
    id: '2',
    name: 'Golden Years Care Center',
    description: 'Supporting elderly individuals with comprehensive care, medical assistance, and companionship programs in nursing homes.',
    category: 'Elderly Care',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=300&fit=crop',
    totalReceived: 32.1,
    donorCount: 156,
    verified: true,
    walletAddress: '0x2345...6789',
    location: 'North America'
  },
  {
    id: '3',
    name: 'Clean Water Initiative',
    description: 'Building wells and water purification systems in underserved communities to provide access to clean, safe drinking water.',
    category: 'Water & Sanitation',
    image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=300&fit=crop',
    totalReceived: 67.3,
    donorCount: 412,
    verified: true,
    walletAddress: '0x3456...7890',
    location: 'Africa'
  },
  {
    id: '4',
    name: 'Forest Restoration Project',
    description: 'Reforesting degraded lands and protecting existing forests to combat climate change and preserve biodiversity.',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    totalReceived: 89.5,
    donorCount: 567,
    verified: true,
    walletAddress: '0x4567...8901',
    location: 'South America'
  },
  {
    id: '5',
    name: 'Medical Relief Fund',
    description: 'Providing emergency medical care and supplies to disaster-affected areas and underserved communities worldwide.',
    category: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop',
    totalReceived: 123.8,
    donorCount: 789,
    verified: true,
    walletAddress: '0x5678...9012',
    location: 'Global'
  },
  {
    id: '6',
    name: 'Education for All',
    description: 'Building schools and providing educational resources to children in remote and impoverished areas.',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop',
    totalReceived: 54.2,
    donorCount: 298,
    verified: true,
    walletAddress: '0x6789...0123',
    location: 'Asia'
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  walletAddress: '0xabcd...efgh',
  totalDonated: 15.5,
  nftTrees: [],
  joinedAt: '2024-01-15'
};

export const mockNFTTrees: NFTTree[] = [
  {
    id: '1',
    tokenId: 'TREE001',
    treeType: 'Oak Tree',
    location: 'Amazon Rainforest, Brazil',
    plantedDate: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
    metadata: {
      species: 'Quercus robur',
      coordinates: { lat: -3.4653, lng: -62.2159 },
      carbonOffset: 22.5,
      sponsor: 'GreenTech Solutions'
    }
  },
  {
    id: '2',
    tokenId: 'TREE002',
    treeType: 'Pine Tree',
    location: 'Pacific Northwest, USA',
    plantedDate: '2024-02-28',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=400&fit=crop',
    metadata: {
      species: 'Pinus ponderosa',
      coordinates: { lat: 45.3311, lng: -121.7113 },
      carbonOffset: 18.3,
      sponsor: 'EcoForest Initiative'
    }
  }
];

export const mockDonations: Donation[] = [
  {
    id: '1',
    userId: '1',
    charityId: '1',
    amount: 2.5,
    currency: 'ETH',
    transactionHash: '0x1234567890abcdef',
    timestamp: '2024-03-20T10:30:00Z',
    status: 'confirmed'
  },
  {
    id: '2',
    userId: '1',
    charityId: '3',
    amount: 5.0,
    currency: 'ETH',
    transactionHash: '0x2345678901bcdef0',
    timestamp: '2024-03-18T14:15:00Z',
    status: 'confirmed'
  },
  {
    id: '3',
    userId: '1',
    charityId: '2',
    amount: 1.8,
    currency: 'ETH',
    transactionHash: '0x3456789012cdef01',
    timestamp: '2024-03-15T09:45:00Z',
    status: 'confirmed'
  }
];
