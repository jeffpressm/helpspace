const RESPONSE_ID =
  '2PACX-1vSKkxXElvnYWtW1JsPERDNik0_HHWX04vmYt8pyEIwbGD0iqATK8vzh_9ccnhwjjhwieAZKXAp_J7pL';

const CMS_ID =
  '2PACX-1vSmtOPXSXSc7pLmuJ34CbNEE9vi9yOOYc4TD2T4lUaSNiA2PlyrntywhvlymNUvdrASDQKBBeO8IGj1';

function getUrl(id, gid) {
  return `https://docs.google.com/spreadsheets/d/e/${id}/pub?output=csv&id=${id}&gid=${gid}`;
}

export const RESPONSE_URL = {
  Client: getUrl(RESPONSE_ID, '0'),
  Advisor: getUrl(RESPONSE_ID, '272579147'),
  Match: getUrl(RESPONSE_ID, '1370515805'),
};

export const CMS_URL = {
  'Home: Hero': getUrl(CMS_ID, '1735742374'),
  'Home: About': getUrl(CMS_ID, '821774933'),
  'Home: Challenges': getUrl(CMS_ID, '455527675'),
  'FAQ: Hero': getUrl(CMS_ID, '1610729600'),
  'FAQ: Items': getUrl(CMS_ID, '1757938589'),
  Register: getUrl(CMS_ID, '1601522059'),
  Guidelines: getUrl(CMS_ID, '372460091'),
  Profile: getUrl(CMS_ID, '1287419052'),
  Dashboard: getUrl(CMS_ID, '1193942118'),
  Login: getUrl(CMS_ID, '953777399'),
  Footer: getUrl(CMS_ID, '1233724588'),
};
