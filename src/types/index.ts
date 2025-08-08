export interface User {
  id: string;
  name: string;
  email: string;
  walletAddress: string;
  totalDonations: number;
  nftTrees: NFTTree[];
  joinedAt: string;
}

export interface Charity {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  totalReceived: number;
  donorCount: number;
  verified: boolean;
  walletAddress: string;
  location: string;
}

export interface Donation {
  id: string;
  userId: string;
  charityId: string;
  amount: number;
  currency: 'ETH' | 'BTC' | 'USD';
  transactionHash: string;
  timestamp: string;
  status: 'pending' | 'confirmed' | 'failed';
}

export interface NFTTree {
  id: string;
  tokenId: string;
  treeType: string;
  location: string;
  plantedDate: string;
  image: string;
  metadata: {
    species: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    carbonOffset: number;
    sponsor: string;
  };
}

export interface TreeReward {
  id: string;
  userId: string;
  threshold: number;
  achieved: boolean;
  nftTreeId?: string;
  achievedAt?: string;
}
