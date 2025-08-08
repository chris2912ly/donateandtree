import { Charity, User, Donation, NFTTree } from '../types';

export const mockCharities: Charity[] = [
  {
    id: '1',
    name: 'Hope Children\'s Foundation',
    description: 'Providing education, healthcare, and shelter to orphaned children worldwide. Our mission is to create a brighter future for vulnerable children.',
    category: 'Children',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
    totalReceived: 45.7,
    donorCount: 234,
    verified: true,
    walletAddress: '0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4',
    location: 'Global'
  },
  {
    id: '2',
    name: 'Golden Years Care',
    description: 'Supporting elderly communities with healthcare, companionship, and essential services. Ensuring dignity and comfort in their golden years.',
    category: 'Elderly',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop',
    totalReceived: 32.1,
    donorCount: 156,
    verified: true,
    walletAddress: '0x8f3CF7ad23Cd3CaDbD9735AFf958023239c6A063',
    location: 'North America'
  },
  {
    id: '3',
    name: 'Clean Water Initiative',
    description: 'Building wells and water purification systems in underserved communities. Access to clean water is a fundamental human right.',
    category: 'Environment',
    image: 'https://images.unsplash.com/photo-1541544181051-e46607bc22a4?w=400&h=300&fit=crop',
    totalReceived: 67.3,
    donorCount: 412,
    verified: true,
    walletAddress: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    location: 'Africa'
  },
  {
    id: '4',
    name: 'Education for All',
    description: 'Providing educational resources, scholarships, and learning opportunities to underprivileged students globally.',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=300&fit=crop',
    totalReceived: 28.9,
    donorCount: 189,
    verified: true,
    walletAddress: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    location: 'Asia'
  },
  {
    id: '5',
    name: 'Wildlife Conservation Trust',
    description: 'Protecting endangered species and their habitats through conservation efforts and community education programs.',
    category: 'Wildlife',
    image: 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop',
    totalReceived: 51.2,
    donorCount: 298,
    verified: true,
    walletAddress: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
    location: 'Global'
  },
  {
    id: '6',
    name: 'Disaster Relief Network',
    description: 'Rapid response emergency aid for natural disasters, providing food, shelter, and medical assistance to affected communities.',
    category: 'Emergency',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop',
    totalReceived: 89.4,
    donorCount: 567,
    verified: true,
    walletAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    location: 'Global'
  }
];

export const mockUser: User = {
  id: '1',
  name: 'Alex Johnson',
  email: 'alex.johnson@email.com',
  walletAddress: '0x742d35Cc6634C0532925a3b8D4C0532925a3b8D4',
  totalDonations: 125.6,
  nftTrees: [],
  joinedAt: '2024-01-15'
};

export const mockNFTTrees: NFTTree[] = [
  {
    id: '1',
    tokenId: 'TREE001',
    treeType: 'Oak',
    location: 'Amazon Rainforest, Brazil',
    plantedDate: '2024-03-15',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
    metadata: {
      species: 'Quercus robur',
      coordinates: { lat: -3.4653, lng: -62.2159 },
      carbonOffset: 22.5,
      sponsor: 'GreenFuture Foundation'
    }
  },
  {
    id: '2',
    tokenId: 'TREE002',
    treeType: 'Pine',
    location: 'Pacific Northwest, USA',
    plantedDate: '2024-02-28',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop',
    metadata: {
      species: 'Pinus ponderosa',
      coordinates: { lat: 45.3311, lng: -121.7113 },
      carbonOffset: 18.3,
      sponsor: 'Forest Restoration Alliance'
    }
  },
  {
    id: '3',
    tokenId: 'TREE003',
    treeType: 'Baobab',
    location: 'Madagascar',
    plantedDate: '2024-01-20',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&h=300&fit=crop',
    metadata: {
      species: 'Adansonia grandidieri',
      coordinates: { lat: -20.2619, lng: 44.2020 },
      carbonOffset: 35.7,
      sponsor: 'Madagascar Conservation Society'
    }
  }
];

export const mockDonations: Donation[] = [
  {
    id: '1',
    userId: '1',
    charityId: '1',
    amount: 0.5,
    currency: 'ETH',
    transactionHash: '0x1234567890abcdef1234567890abcdef12345678',
    timestamp: '2024-03-20T10:30:00Z',
    status: 'confirmed'
  },
  {
    id: '2',
    userId: '1',
    charityId: '3',
    amount: 1.2,
    currency: 'ETH',
    transactionHash: '0xabcdef1234567890abcdef1234567890abcdef12',
    timestamp: '2024-03-18T14:15:00Z',
    status: 'confirmed'
  },
  {
    id: '3',
    userId: '1',
    charityId: '2',
    amount: 0.8,
    currency: 'ETH',
    transactionHash: '0x567890abcdef1234567890abcdef1234567890ab',
    timestamp: '2024-03-15T09:45:00Z',
    status: 'confirmed'
  }
];
