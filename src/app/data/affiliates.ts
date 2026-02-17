// Affiliate links configuration
export const affiliateLinks: Record<string, {
  name: string;
  url: string;
  bonus?: string;
  note?: string;
}> = {
  'bc-game': {
    name: 'BC.Game',
    url: 'https://bc.game?i=xxxxxxxx', // Replace with actual affiliate link
    bonus: '180% first deposit bonus',
    note: 'Popular dice platform'
  },
  'bitcasino': {
    name: 'Bitcasino',
    url: 'https://bitcasino.io?ref=xxxxx',
    bonus: '100% welcome bonus',
    note: 'Established since 2014'
  },
  'trustdice': {
    name: 'TrustDice',
    url: 'https://trustdice.win?bonus=xxxxx',
    bonus: '3 BTC + 50 FS',
    note: 'Telegram integration'
  },
  '1xbit': {
    name: '1xBit',
    url: 'https://1xbit.com?tag=xxxxx',
    bonus: '100% up to 7 BTC',
    note: 'Sports betting'
  },
  'betonline': {
    name: 'BetOnline',
    url: 'https://betonline.ag?bonus=xxxxx',
    bonus: '$3,000 welcome bonus',
    note: 'US-friendly'
  },
  'cloudbet': {
    name: 'Cloudbet',
    url: 'https://cloudbet.com?bonus=xxxxx',
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
