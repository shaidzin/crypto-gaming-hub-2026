// Affiliate links configuration
// NOTE: Replace with real affiliate links once accounts are approved
// Current: Direct casino links (not affiliate) - revenue will come from N1 Partners once verified
export const affiliateLinks: Record<string, {
  name: string;
  url: string;
  bonus?: string;
  note?: string;
}> = {
  'bc-game': {
    name: 'BC.Game',
    url: 'https://bc.game',
    bonus: '180% first deposit bonus',
    note: 'Popular dice platform'
  },
  'bitcasino': {
    name: 'Bitcasino',
    url: 'https://bitcasino.io',
    bonus: '100% welcome bonus',
    note: 'Established since 2014'
  },
  'trustdice': {
    name: 'TrustDice',
    url: 'https://trustdice.win',
    bonus: '3 BTC + 50 FS',
    note: 'Telegram integration'
  },
  '1xbit': {
    name: '1xBit',
    url: 'https://1xbit.com',
    bonus: '100% up to 7 BTC',
    note: 'Sports betting'
  },
  'betonline': {
    name: 'BetOnline',
    url: 'https://betonline.ag',
    bonus: '$3,000 welcome bonus',
    note: 'US-friendly'
  },
  'cloudbet': {
    name: 'Cloudbet',
    url: 'https://cloudbet.com',
    bonus: '100% up to 5 BTC',
    note: 'Fastest BTC withdrawals'
  }
};

export function getAffiliateLinks() {
  return Object.values(affiliateLinks);
}

export function getAffiliateLink(platform: string) {
  return affiliateLinks[platform] || null;
}
