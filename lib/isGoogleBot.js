const uaStrings = [
  "AdsBot-Google",
  "APIs-Google",
  "DuplexWeb-Google",
  "FeedFetcher-Google",
  "Google Favicon",
  "Google-Read-Aloud",
  "Googlebot",
  "Mediapartners-Google",
];

const isGoogleBot = userAgent =>
  uaStrings.reduce(
    (a, b) => (a ? a : userAgent.toLowerCase().indexOf(b.toLowerCase()) > -1),
    false
  );

export default isGoogleBot;
