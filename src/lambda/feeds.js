import Parser from 'rss-parser'

const FEEDS = [

  // 'https://ethereumworldnews.com/feed/',
  
  'https://www.coindesk.com/feed/',
  'https://www.bitcoin.com/feed/',
  // 'https://cointelegraph.com/feed',
  // 'https://www.ccn.com/feed/',
  // 'https://nulltx.com/feed/',
  // 'https://toshitimes.com/feed/',
  // 'https://blog.kraken.com/feed/',
  // 'https://cryptopotato.com/feed/',
  // 'https://blog.cex.io/cryptonews/feed',
  // 'https://bitcoinist.com/feed/',
  // 'https://bitcoinmagazine.com/feed/',
  // 'https://www.newsbtc.com/feed/',
  // 'https://99bitcoins.com/feed/',
  // 'https://blog.coinspectator.com/feed/',
  
]

export function handler(event, context, callback) {
  let parser = new Parser()

  const feedRequests = FEEDS.map(feed => {
    return parser.parseURL(feed)
  })

  Promise.all(feedRequests).then(response => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  })
}