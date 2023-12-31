import React, { Component } from 'react'
// import React from 'react'
import NewsItem from './NewsItem'
// import Navbar from './Navbar';

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [


            //     {
            //         "source": {
            //             "id": "engadget",
            //             "name": "Engadget"
            //         },
            //         "author": "Lawrence Bonk",
            //         "title": "Venmo now lets you send crypto to other users for some reason",
            //         "description": "Paypal-owned money transfer service Venmo dipped its toes into cryptocurrencies in 2021 after opening up an in-app trading platform.\r\n That was just for individuals to buy or sell crypto. Now, the company is going further into the once-heralded digital curren…",
            //         "url": "https://www.engadget.com/venmo-now-lets-you-send-crypto-to-other-users-for-some-reason-192015694.html",
            //         "urlToImage": "https://s.yimg.com/uu/api/res/1.2/LKRH31mzL9wqtcqoQ_lkjw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/835a5670-e5f4-11ed-9db6-3febf57b7a4a.cf.jpg",
            //         "publishedAt": "2023-04-28T19:20:15Z",
            //         "content": "Paypal-owned money transfer service Venmo dipped its toes into cryptocurrencies in 2021 after opening up an in-app trading platform.\r\n That was just for individuals to buy or sell crypto. Now, the co… [+1625 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Gizmodo.com"
            //         },
            //         "author": "Kyle Barr",
            //         "title": "Bitcoin Pyramid Scheme Fraudster Ordered to Pay $3.4 Billion",
            //         "description": "The Commodities Futures Trading Commission patted itself on the back for winning one of the largest civil cases against a crypto crook, even if most—or any—of those affected will see any of their money returned. On Thursday, a Texas judge issued a default jud…",
            //         "url": "https://gizmodo.com/bitcoin-mlm-joe-steyn-mirror-trading-international-1850385963",
            //         "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/16e5700ae24064ff50deef40ec83875d.jpg",
            //         "publishedAt": "2023-04-28T14:35:25Z",
            //         "content": "The Commodities Futures Trading Commission patted itself on the back for winning one of the largest civil cases against a crypto crook, even if mostor anyof those affected will see any of their money… [+3594 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "engadget",
            //             "name": "Engadget"
            //         },
            //         "author": "Mariella Moon",
            //         "title": "White House proposes 30 percent tax on electricity used for crypto mining",
            //         "description": "The Biden administration wants to impose a 30 percent tax on the electricity used by cryptocurrency mining operations, and it has included the proposal in its budget for the fiscal year of 2024. In a blog post on the White House website, the administration ha…",
            //         "url": "https://www.engadget.com/white-house-proposes-30-percent-tax-on-electricity-used-for-crypto-mining-090342986.html",
            //         "urlToImage": "https://s.yimg.com/uu/api/res/1.2/_0lUWxV0epaYKnRPQ1.Jxw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/5d8f2740-e97d-11ed-b4b3-dfb213c6d348.cf.jpg",
            //         "publishedAt": "2023-05-03T09:03:42Z",
            //         "content": "The Biden administration wants to impose a 30 percent tax on the electricity used by cryptocurrency mining operations, and it has included the proposal in its budget for the fiscal year of 2024. In a… [+3408 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Gizmodo.com"
            //         },
            //         "author": "Kyle Barr",
            //         "title": "Here’s How to Find the Original Bitcoin Manifesto in Your Mac",
            //         "description": "An Apple developer left one of the strangest Easter eggs hidden in the macOS, offering a surprising and baffling connection between the Cupertino tech company’s mainline operating system to everybody’s (least) favorite cryptographic digital currency. Read mor…",
            //         "url": "https://gizmodo.com/bitcoin-apple-mac-bitcoin-white-paper-1850307069",
            //         "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/176f6f215c9c45306ca8269f8232701e.jpg",
            //         "publishedAt": "2023-04-06T15:30:00Z",
            //         "content": "An Apple developer left one of the strangest Easter eggs hidden in the macOS, offering a surprising and baffling connection between the Cupertino tech companys mainline operating system to everybodys… [+3865 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "Intel ends its bitcoin mining chip series - Reuters",
            //         "description": "Intel ends its bitcoin mining chip series  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiWGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvaW50ZWwtZW5kcy1pdHMtYml0Y29pbi1taW5pbmctY2hpcC1zZXJpZXMtMjAyMy0wNC0xOC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-18T18:07:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "Hamas armed wing announces suspension of bitcoin fundraising - Reuters",
            //         "description": "Hamas armed wing announces suspension of bitcoin fundraising  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL21pZGRsZS1lYXN0L2hhbWFzLWFybWVkLXdpbmctYW5ub3VuY2VzLXN1c3BlbnNpb24tYml0Y29pbi1mdW5kcmFpc2luZy0yMDIzLTA0LTI4L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-28T12:36:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "Bitcoin pushes past $30000 as investors eye end of rate rises - Reuters",
            //         "description": "Bitcoin pushes past $30000 as investors eye end of rate rises  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi1wdXNoZXMtcGFzdC0zMDAwMC1pbnZlc3RvcnMtZXllLWVuZC1yYXRlLXJpc2VzLTIwMjMtMDQtMTEv0gEA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-11T03:55:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "Bitcoin could hit $100000 by end-2024, Standard Chartered says - Reuters",
            //         "description": "Bitcoin could hit $100000 by end-2024, Standard Chartered says  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvYml0Y29pbi1jb3VsZC1oaXQtMTAwMDAwLWJ5LWVuZC0yMDI0LXN0YW5kYXJkLWNoYXJ0ZXJlZC1zYXlzLTIwMjMtMDQtMjQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-24T13:25:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "Bitcoin could hit $100000 by end-2024, Standard Chartered says - Reuters",
            //         "description": "Bitcoin could hit $100000 by end-2024, Standard Chartered says  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi1jb3VsZC1oaXQtMTAwMDAwLWJ5LWVuZC0yMDI0LXN0YW5kYXJkLWNoYXJ0ZXJlZC1zYXlzLTIwMjMtMDQtMjQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-24T09:18:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "US court orders South African firm's CEO to pay $3.4 bln for bitcoin ... - Reuters",
            //         "description": "US court orders South African firm's CEO to pay $3.4 bln for bitcoin ...  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2xlZ2FsL3VzLWNvdXJ0LW9yZGVycy1zb3V0aC1hZnJpY2FuLWZpcm1zLWNlby1wYXktMzQtYmxuLWJpdGNvaW4tZnJhdWQtMjAyMy0wNC0yNy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-27T21:43:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "Dollar pauses after strong gains on hawkish Fed bets; bitcoin hits ... - Reuters",
            //         "description": "Dollar pauses after strong gains on hawkish Fed bets; bitcoin hits ...  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMie2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvY3VycmVuY2llcy9kb2xsYXItcGF1c2VzLWFmdGVyLXN0cm9uZy1nYWlucy1oYXdraXNoLWZlZC1iZXRzLWJpdGNvaW4taGl0cy0zMDAwMC0yMDIzLTA0LTExL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-11T01:47:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "The Guardian"
            //         },
            //         "author": "Erum Salam",
            //         "title": "Bitcoin is terrible for the environment – can it ever go green?",
            //         "description": "Cryptocurrency mining uses huge amounts of energy, but activists are urging for a change in its code to reduce its environmental impactOn the corner of New York’s Park Avenue and 52nd Street, curious onlookers recently stopped in front of a giant green skull …",
            //         "url": "https://www.theguardian.com/technology/2023/apr/26/bitcoin-mining-climate-crisis-environmental-impact",
            //         "urlToImage": "https://i.guim.co.uk/img/media/ce173dd8b34322b541bbcb6f3a4c9adee553fc86/0_116_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d02e45765850d5551b54c41c58ce9a34",
            //         "publishedAt": "2023-04-26T09:00:03Z",
            //         "content": "On the corner of New Yorks Park Avenue and 52nd Street, curious onlookers recently stopped in front of a giant green skull sitting in the bed of a truck parked outside the office of Fidelity Investme… [+7288 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "The Guardian"
            //         },
            //         "author": "Alex Hern",
            //         "title": "Bitcoin price rises above $30,000 for first time since June 2022",
            //         "description": "Cyptocurrency’s steady increase in value reignites fears of widespread market manipulationA sharp rise in bitcoin prices has pushed the cryptocurrency above $30,000 (£24,118) for the first time since 10 June last year, just before the Celsius crypto lending c…",
            //         "url": "https://www.theguardian.com/technology/2023/apr/11/bitcoin-price-rises-usd-cyptocurrency-value",
            //         "urlToImage": "https://i.guim.co.uk/img/media/557a4b7ba8d4a7ac4ffdc68894f2b3caa276f344/0_235_3551_2132/master/3551.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=56808976844276c471575e281886d474",
            //         "publishedAt": "2023-04-11T11:15:45Z",
            //         "content": "A sharp rise in bitcoin prices has pushed the cryptocurrency above $30,000 (£24,118) for the first time since 10 June last year, just before the Celsius crypto lending company froze withdrawals in th… [+6113 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Slashdot.org"
            //         },
            //         "author": "msmash",
            //         "title": "Intel Discontinues Bitcoin-Mining Blockscale Chips",
            //         "description": "It's been just a year since Intel officially announced its Bitcoin-mining Blockscale ASICs, but today the company announced the end of life of its first-gen Blockscale 1000-series chips without announcing any follow-up generations of the chips. From a report:…",
            //         "url": "https://slashdot.org/story/23/04/18/1652237/intel-discontinues-bitcoin-mining-blockscale-chips",
            //         "urlToImage": "https://a.fsdn.com/sd/topics/intel_64.png",
            //         "publishedAt": "2023-04-18T22:00:00Z",
            //         "content": "We spoke with Intel on the matter, and the company told Tom's Hardware that \"as we prioritize our investments in IDM 2.0, we have end-of-lifed the Intel Blockscale 1000 Series ASIC while we continue … [+795 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Matthew Fox",
            //         "title": "Here's the outlook for bitcoin as the cryptocurrency struggles to reclaim the all-important $30,000 technical level",
            //         "description": "If bitcoin can decisively clear that level, Stockton expects the cryptocurrency to trend toward its key resistance level at $35,900.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-technical-resistance-important-30000-level-upside-downside-2023-4",
            //         "urlToImage": "https://i.insider.com/644a81e2edc7ea00183306ec?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-27T14:52:45Z",
            //         "content": "El Salvador made bitcoin official currency. Now a new crop of bitcoin experiments wants to do the same around the world.MARVIN RECINOS / Contributor / Getty Images\r\n<ul><li>The price of bitcoin is te… [+2393 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Phil Rosen",
            //         "title": "Apple hiding a bitcoin manifesto in Macs is fueling theories that Steve Jobs was Satoshi Nakamoto, the crypto's mysterious inventor",
            //         "description": "The discovery that Apple includes a PDF of Satoshi's original bitcoin white paper in every new Mac has sparked fresh conspiracies tied to Jobs.",
            //         "url": "https://markets.businessinsider.com/news/currencies/apple-bitcoin-manifesto-steve-jobs-satoshi-nakamoto-white-paper-cryptocurrency-2023-4",
            //         "urlToImage": "https://i.insider.com/6430035a3007470019fe1513?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-07T13:19:48Z",
            //         "content": "Steve Jobs.David Paul Morris / Stringer\r\n<ul>\n<li>Technologist Andy Baio wrote this week that he discovered a PDF of the original bitcoin white paper on his Mac.</li>\n<li>The revelation fueled theori… [+3349 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Filip De Mott",
            //         "title": "Ray Dalio says he has a little bitcoin but prefers gold, calling it 'timeless and universal'",
            //         "description": "Bitcoin moves unreliably and has a smaller valuation than mega-cap stocks like Microsoft, Dalio said on a podcast.",
            //         "url": "https://markets.businessinsider.com/news/currencies/ray-dalio-bitcoin-gold-reserve-asset-microsoft-banking-crypto-rally-2023-4",
            //         "urlToImage": "https://i.insider.com/644abf0fda6d7b0019bd80be?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-27T19:51:21Z",
            //         "content": "Bridgewater founder Ray Dalio.Brendan McDermid/File Photo/Reuters\r\n<ul>\n<li>Billionaire investor Ray Dalio said he has a little bitcoin but prefers gold.</li>\n<li>On a recent podcast, he said bitcoin… [+1951 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "George Glover",
            //         "title": "A bitcoin thief who stole $5 million of the crypto and posed in a dollar-filled bathtub is sentenced to 4 years in prison",
            //         "description": "Gary Harmon pled guilty to stealing 713 bitcoin in January. Law enforcement agents found a photo on his phone showing him posing in a tub of cash.",
            //         "url": "https://markets.businessinsider.com/news/stocks/bitcoin-thief-5m-ohio-prison-gary-harmon-bathtub-of-money-2023-4",
            //         "urlToImage": "https://i.insider.com/644b9b21da6d7b0019bd8fcf?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-28T11:22:11Z",
            //         "content": "Gary Harmon posing in a bathtub of dollar bills.US District Court for the District of Columbia/Bloomberg\r\n<ul>\n<li>An Ohio man who stole more than 712 bitcoin was sentenced to four years in prison Th… [+1644 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Filip De Mott",
            //         "title": "Bitcoin could jump nearly 70% if the US defaulted on its debt, Standard Chartered analyst says",
            //         "description": "\"So actually, the optimal trade would probably be long bitcoin, short ethereum,\" Standard Chartered's Geoff Kendrick told Insider.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-us-default-debt-ceiling-crisis-ethereum-price-2023-4",
            //         "urlToImage": "https://i.insider.com/644ad2ac74e9330018ef7555?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-29T12:30:06Z",
            //         "content": "Bitcoin.Photo by Getty Images\r\n<ul>\n<li>Bitcoin could climb by $20,000 if a US default happened, Standard Chartered's Geoff Kendrick said.</li>\n<li>Not every crypto would act similarly, with some beh… [+2744 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Huileng Tan",
            //         "title": "Bitcoin's nearing a breakout moment — prices topped $30,000 for the first time since June 2022",
            //         "description": "Bitcoin is up about 80% this year so far while Ether is up about 60% in the same period.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoins-breakout-moment-first-time-since-june-2022-2023-4",
            //         "urlToImage": "https://i.insider.com/6434df53ca216e001820ff87?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-11T06:18:31Z",
            //         "content": "Bitcoin has rallied over $30,000.Anadolu Agency/Getty Images\r\n<ul>\n<li>Bitcoin has rallied above the $30,000 level for the first time since June 2022.</li>\n<li>The gains are driven by expectations th… [+1755 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Phil Rosen",
            //         "title": "Who is Satoshi Nakamoto? Crypto fans just celebrated the bitcoin inventor's birthday and his legend is as mysterious as ever.",
            //         "description": "Theories swirled this week that Apple visionary Steve Jobs was the legendary Satoshi Nakamoto after the bitcoin white paper was found on macOS.",
            //         "url": "https://markets.businessinsider.com/news/currencies/who-is-satoshi-nakamoto-bitcoin-inventor-crypto-steve-jobs-apple-2023-4",
            //         "urlToImage": "https://i.insider.com/643023743007470019fe17e4?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-07T16:38:23Z",
            //         "content": "A statue of Satoshi Nakamoto, a presumed pseudonym used by the inventor of Bitcoin, is displayed in Graphisoft Park on September 22, 2021 in Budapest, Hungary.Janos Kummer / Stringer, Getty Images\r\n<… [+4728 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Phil Rosen",
            //         "title": "Bitcoin's 72% rally to start 2023 helps push Michael Saylor's MicroStrategy to its first profitable quarter in over 2 years",
            //         "description": "The company is the largest holder of bitcoin, and added 7,500 bitcoins in the first quarter of the year, bringing its total to 140,000 tokens.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-microstrategy-michael-saylor-bull-quarter-cryptocurrency-rally-crypto-70-2023-5",
            //         "urlToImage": "https://i.insider.com/60ca262123393a00188e3872?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-02T15:43:05Z",
            //         "content": "MicroStrategy CEO Michael SaylorJoe Raedle/Getty Images\r\n<ul>\n<li>Michael Saylor's MicroStrategy posted its first profit in nine quarters to start 2023.</li>\n<li>The largest holder of bitcoin added 7… [+1863 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Zinya Salfiti",
            //         "title": "Bitcoin's 73% rally is fueling optimism the crypto winter is ending. Here are fresh forecasts on the token from StanChart, Matrixport and others.",
            //         "description": "Bitcoin has rallied 73% this year, after a grim 2022. Some analysts are predicting this may be just the beginning of a bigger advance.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-predictions-crypto-forecasts-robert-kiyosaki-standard-chartered-matrixport-analysts-2023-5",
            //         "urlToImage": "https://i.insider.com/62a76660a464ed0019584a3b?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-03T13:48:14Z",
            //         "content": "Bitcoin.Getty Images\r\n<ul>\n<li>Bitcoin has rallied more than 70% this year, outperforming most other asset classes, after a dismal 2022. </li>\n<li>Some analysts are predicting this may just be the st… [+5150 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Filip De Mott,Zinya Salfiti",
            //         "title": "Bitcoin's huge rally is masking a drop in liquidity as smaller trades move the market",
            //         "description": "A trade of 462 bitcoins can move the price by 1% compared to more than 1,400 bitcoins in January, according to CCData.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-rally-crypto-liquidity-market-moving-small-trades-btc-2023-5",
            //         "urlToImage": "https://i.insider.com/6453aacdb4a8cd00187ab9e5?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-04T15:30:28Z",
            //         "content": "(Photo by Jakub Porzycki/NurPhoto via Getty Images)\r\n<ul>\n<li>Bitcoin's huge price rally this year is masking a decline in market liquidity.</li>\n<li>That means smaller bitcoin trades can have a bigg… [+1766 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Slashdot.org"
            //         },
            //         "author": "msmash",
            //         "title": "Balaji Srinivasan Closes Out $1 Million Bitcoin Bet Early",
            //         "description": "Balaji Srinivasan, the former chief technology officer of Coinbase Global, said he closed out what appeared to be a losing bet that Bitcoin would rise to $1 million within 90 days. From a report: Srinivasan said he gave $1 million to two organizations, includ…",
            //         "url": "https://slashdot.org/story/23/05/03/1924216/balaji-srinivasan-closes-out-1-million-bitcoin-bet-early",
            //         "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            //         "publishedAt": "2023-05-03T21:20:00Z",
            //         "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "The crypto market rally is built on hopes of Fed rate hike slowdown and looming US credit crunch, Galaxy Digital's Mike Novogratz says",
            //         "description": "Crypto markets have been mostly trending upward since the start of the year. Bitcoin notched a 10-month high Tuesday, shooting past $30,000.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-outlook-mike-novogratz-galaxy-digital-fed-2023-4",
            //         "urlToImage": "https://i.insider.com/6435a157ca216e001821145a?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-11T19:20:01Z",
            //         "content": "Mike Novogratz.Marco Bello / Stringer /Getty Images\r\n\n<ul>\n<li>Bitcoin notched a 10-month high Tuesday amid a broader upswing in crypto markets. </li>\n<li>Galaxy Digital CEO Mike Novogratz said marke… [+2022 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Theron Mohamed",
            //         "title": "Warren Buffett just revealed his company plowed $4 billion into stocks last quarter. Here are 8 key takeaways from a new interview.",
            //         "description": "Warren Buffett touted Apple, ripped bitcoin, warned inflation and recession are serious risks, and revealed he's been worried about banks for a while.",
            //         "url": "https://markets.businessinsider.com/news/stocks/warren-buffett-stock-portfolio-banks-inflation-recession-apple-paramount-bitcoin-2023-4",
            //         "urlToImage": "https://i.insider.com/54031f486bb3f7280dbef4ce?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-13T17:02:00Z",
            //         "content": "Warren Buffett.REUTERS/Rick Wilking\r\n<ul>\n<li>Warren Buffett piled about $4 billion into stocks in the first quarter, he revealed this week.</li>\n<li>The investor spoke about banks, bitcoin, Apple, P… [+6202 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Raphael Sanis",
            //         "title": "What is crypto, and is it making a comeback?",
            //         "description": "Cryptocurrencies have been on a wild journey since bitcoin emerged in 2009. The future is still murky, as skeptics say they need to prove their worth.",
            //         "url": "https://www.businessinsider.com/what-is-crypto-and-is-it-making-a-comeback-2023-4",
            //         "urlToImage": "https://i.insider.com/643ec50e0a29b400188107b5?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-18T17:36:11Z",
            //         "content": "<ul>\n<li>Cryptocurrencies had a dreadful year in 2022, with investors losing billions.</li>\n<li>Now, prices of bitcoin and ethereum are recovering.</li>\n<li>But Insider correspondent April Joyner say… [+384 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Theron Mohamed",
            //         "title": "Howard Marks says rock-bottom rates are history, bitcoin has its uses, and AI won't replace the best investors. Here are his 8 best quotes from a new interview.",
            //         "description": "Rates won't return to zero, the banking fiasco shone a light on bitcoin, and AI wouldn't spot Steve Jobs' or Amazon's potential, Howard Marks said.",
            //         "url": "https://markets.businessinsider.com/news/stocks/howard-marks-oaktree-interest-rates-fed-bitcoin-crypto-government-debt-2023-4",
            //         "urlToImage": "https://i.insider.com/64395319f62706001942feb0?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-15T10:46:08Z",
            //         "content": "Howard Marks.K. Y. Cheng/South China Morning Post/Getty Images\r\n<ul>\n<li>Howard Marks says interest rates won't return to zero anytime soon.</li>\n<li>The billionaire investor warns the ballooning US … [+2867 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Carla Mozée",
            //         "title": "People can now buy and sell real estate with crypto on what's being billed as the first US bitcoin property marketplace",
            //         "description": "Texas properties are the first listed on a new platform allowing people to use bitcoin to buy residential and commercial real estate in the US.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-real-estate-crypto-marketplace-properties-buy-sell-platform-coinbase-2023-4",
            //         "urlToImage": "https://i.insider.com/6442e3b6e1a96300185aa255?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-24T12:08:35Z",
            //         "content": "Tricon Residential is slowing purchases in the face of higher interest rates. But it's also waiting for opportunities to buy larger portfolios at discounted prices, its CEO, Gary Berman, said. pbk-pg… [+2540 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Zahra Tayeb",
            //         "title": "'Rich Dad Poor Dad' author Robert Kiyosaki says cash is trash - and touts bitcoin as 'real money' after previously slamming it as speculative play",
            //         "description": "\"To me, Gold, Silver, &Bitcoin are real money. To me Cash is trash,\" the \"Rich Dad Poor Dad\" author tweeted on Monday.",
            //         "url": "https://markets.businessinsider.com/news/currencies/rich-dad-poor-dad-robert-kiyosaki-cash-is-trash-bitcoin-2023-4",
            //         "urlToImage": "https://i.insider.com/5e2b330162fa813e507e2845?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-24T11:04:02Z",
            //         "content": "\"Rich Dad Poor Dad\" author Robert Kiyosaki.Matt Carasella/Patrick McMullan/Getty Images\r\n<ul>\n<li>Personal-finance guru Robert Kiyosaki thinks cash is trash, while touting bitcoin, silver and gold as… [+1913 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Jennifer Sor",
            //         "title": "Apple will remove the bitcoin white paper from its computers in the next update to macOS, report says",
            //         "description": "Apple will likely take the bitcoin white paper out of future updates, and a work ticket has already been filed to remove the paper, a source said.",
            //         "url": "https://markets.businessinsider.com/news/currencies/apple-bitcoin-white-paper-andy-baio-remove-update-satoshi-nakamoto-2023-4",
            //         "urlToImage": "https://i.insider.com/644933ca90523900196ff5e1?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-26T15:32:37Z",
            //         "content": "A man walks past a backlit Apple logo during an Apple media event in San Francisco, California, September 9, 2015REUTERS/Beck Diefenbach\r\n<ul>\n<li>Apple will likely remove the bitcoin white paper fro… [+2458 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Slashdot.org"
            //         },
            //         "author": "msmash",
            //         "title": "The Kingdom Of Bhutan Has Been Quietly Mining Bitcoin For Years",
            //         "description": "The Himalayan kingdom confirmed it has been running a bitcoin mining operation as mystery surrounds the scale of its earlier cryptocurrency investments. From a report: Beneath the Himalayas, rivers fed by ancient glaciers supply the tiny kingdom of Bhutan wit…",
            //         "url": "https://slashdot.org/story/23/05/01/0840251/the-kingdom-of-bhutan-has-been-quietly-mining-bitcoin-for-years",
            //         "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            //         "publishedAt": "2023-05-01T15:20:00Z",
            //         "content": "Beneath the Himalayas, rivers fed by ancient glaciers supply the tiny kingdom of Bhutan with immense stores of hydroelectricity. The renewable resource has become an economic engine, accounting for 3… [+1495 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Filip De Mott",
            //         "title": "Bitcoin could soar 268% to $100,000 as crypto winter is finally over, Standard Chartered says",
            //         "description": "\"While sources of uncertainty remain, we think the pathway to the USD 100,000 level is becoming clearer.\"",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-100000-crypto-winter-bank-crisis-btc-halving-2023-4",
            //         "urlToImage": "https://i.insider.com/6446a1d5101b77001857b08b?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-24T17:43:48Z",
            //         "content": "Yuichiro Chino/Getty Images\r\n<ul>\n<li>Bitcoin could surge to $100,000 by the end of 2024, according to a Standard Chartered note.</li>\n<li>That's due to bank turmoil, bitcoin halving, and the expecte… [+2841 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "Bitcoin surges 9% toward key level of $30,000 as crypto market rallies amid fresh banking sector fears",
            //         "description": "\"[Investors are] signaling risk-on sentiment, as they anticipate a potential softer Fed policy and liquidity injections surrounding First Republic.\"",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-rally-ethereum-solana-first-republic-bank-2023-4",
            //         "urlToImage": "https://i.insider.com/62d8aec20c98f500195ec74f?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-26T18:35:27Z",
            //         "content": "Bitcoin offices in Istanbul, Turkey on June 21, 2022.Umit Turhan Coskun/Getty Images\r\n<ul>\n<li>Bitcoin surged as much as 9% on Wednesday, nearing the important $30,000 level.</li>\n<li>The rally comes… [+2304 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "wired",
            //             "name": "Wired"
            //         },
            //         "author": "Paul Ford",
            //         "title": "So Your Kid Wants to Be a Twitch Streamer",
            //         "description": "Don’t panic. Instead, teach your beloved offspring to answer the Three Questions of Streaming.",
            //         "url": "https://www.wired.com/story/so-your-kid-wants-to-be-a-twitch-streamer-three-questions/",
            //         "urlToImage": "https://media.wired.com/photos/643f0dd221515ed3833570d1/191:100/w_1280,c_limit/WIRED_TwishaP_03_YouTube-Money-web.jpg",
            //         "publishedAt": "2023-04-25T11:00:00Z",
            //         "content": "I pray that one day you will not. But look inside the can, beyond the neon-pink ichor. You want that beverage. But when you are a streamer, that beverage wants things from you. It wants you to drive … [+3027 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "George Glover",
            //         "title": "Crypto stocks rally after bitcoin breaks above $30,000 to hit a 10-month high",
            //         "description": "Shares of crypto-related Coinbase, MicroStrategy, and Marathon Digital look set to build on gains as investors took heart from bitcoin's resurgence.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-crypto-bitcoin-30k-coinbase-microstrategy-investing-analysis-2023-4",
            //         "urlToImage": "https://i.insider.com/614c4813c2c9630018f5ec68?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-11T12:15:11Z",
            //         "content": "Coinbase set to build on gains after bitcoin hit a 10-month high Tuesday.Richard Drew/Associated Press\r\n<ul>\n<li>Crypto-related stocks rose Tuesday after bitcoin broke above $30,000 to hit a 10-month… [+2303 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Gizmodo.com"
            //         },
            //         "author": "Jody Serrano",
            //         "title": "Twitter Partners with eToro to Let Users Buy and Sell Stocks, Crypto",
            //         "description": "Elon Musk’s Twitter, which the billionaire said this week is now being run by his dog, has closed a partnership deal with the online investing platform eToro, proving that the company might not be as radioactive as some people might think. Read more...",
            //         "url": "https://gizmodo.com/twitter-partners-etoro-buy-stocks-crypto-cashtags-1850331598",
            //         "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5b32026cc24af364a349c287a696b5a5.jpg",
            //         "publishedAt": "2023-04-13T11:50:00Z",
            //         "content": "Elon Musks Twitter, which the billionaire said this week is now being run by his dog, has closed a partnership deal with the online investing platform eToro, proving that the company might not be as … [+2326 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Gizmodo.com"
            //         },
            //         "author": "Lauren Leffer",
            //         "title": "'The Dumpster Fire Is Out:' Attorneys for Bankrupt FTX Consider Restarting Exchange",
            //         "description": "While SBF and other former FTX execs face criminal fraud charges, the company's attorney says they've recovered $7.3 billion in assets.",
            //         "url": "https://gizmodo.com/ftx-sam-bankman-fried-crypto-sbf-1850331812",
            //         "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/110fad4ab8a698a4be70f1d1464dafbe.jpg",
            //         "publishedAt": "2023-04-13T14:45:00Z",
            //         "content": "You know that classic zombie movie scene where the everyone thinks the monster is dead, but then suddenly its not?\r\nFTX, the bankrupt crypto exchange that imploded last year, has recouped over $7.3 b… [+2371 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Slashdot.org"
            //         },
            //         "author": "msmash",
            //         "title": "Crypto's Ethereum Blockchain Completes Its Key Shanghai Software Upgrade",
            //         "description": "The Ethereum blockchain, the most important commercial highway in the digital-asset sector, successfully implemented a widely anticipated software upgrade. From a report: The so-called Shanghai update enables investors to queue up to withdraw Ether coins that…",
            //         "url": "https://tech.slashdot.org/story/23/04/13/0856215/cryptos-ethereum-blockchain-completes-its-key-shanghai-software-upgrade",
            //         "urlToImage": "https://a.fsdn.com/sd/topics/software_64.png",
            //         "publishedAt": "2023-04-13T15:20:00Z",
            //         "content": "The so-called Shanghai update enables investors to queue up to withdraw Ether coins that they had pledged to help operate the network in return for rewards, a process called staking. Tim Beiko, who h… [+866 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Zahra Tayeb",
            //         "title": "Ark's Cathie Wood once again hypes Tesla – expecting her darling stock to hit $2,000 in five years thanks to a robotaxi boom",
            //         "description": "Cathie Wood said Tesla stock could hit $2,000 by 2027 thanks to a robotaxi boom, marking a 1,127% surge from the carmaker's current share price.",
            //         "url": "https://markets.businessinsider.com/news/stocks/cathie-wood-tesla-outlook-stock-could-hit-2000-by-2027-2023-4",
            //         "urlToImage": "https://i.insider.com/628605460fdb180018cc1a1f?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-21T09:46:58Z",
            //         "content": "Ark Invest's Cathie Wood.Photo by Marco Bello/Getty Images\r\n<ul>\n<li>Famed money manager Cathie Wood has made an eye-popping prediction about Tesla, once again. </li>\n<li>The Ark Invest CEO said the … [+2162 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Xataka.com"
            //         },
            //         "author": "Enrique Pérez",
            //         "title": "El Bitcoin supera de nuevo los 30.000 dólares: una loca (y frágil) subida en medio de la incertidumbre",
            //         "description": "El Bitcoin ya supera los 30.000 dólares. La criptomoneda más popular está teniendo un inicio de año espectacular, con una subida de más del 82%. En medio de la incertidumbre económica, el Bitcoin está teniendo un resultado más que positivo.\n<!-- BREAK 1 -->\nR…",
            //         "url": "https://www.xataka.com/criptomonedas/bitcoin-supera-30-000-dolares-loca-fragil-subida-medio-incertidumbre-economica",
            //         "urlToImage": "https://i.blogs.es/8b7b1e/bitcoin/840_560.jpeg",
            //         "publishedAt": "2023-04-11T09:30:43Z",
            //         "content": "El Bitcoin ya supera los 30.000 dólares. La criptomoneda más popular está teniendo un inicio de año espectacular, con una subida de más del 82%. En medio de la incertidumbre económica, el Bitcoin est… [+2321 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Hipertextual"
            //         },
            //         "author": "Gabriel Erard",
            //         "title": "Intel cancela su chip para minar Bitcoin, apenas un año después de anunciarlo",
            //         "description": "La aventura de Intel en el mundo de las criptomonedas ha finalizado de un modo repentino. Tom's Hardware reporta que la compañía ha decidido discontinuar Blockscale, su chip dedicado a equipos para minar Bitcoin —conocidos como mineros ASIC—. La noticia sale …",
            //         "url": "http://hipertextual.com/2023/04/intel-cancela-chip-minar-bitcoin",
            //         "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/04/intel-scaled.jpg",
            //         "publishedAt": "2023-04-18T18:22:13Z",
            //         "content": "La aventura de Intel en el mundo de las criptomonedas ha finalizado de un modo repentino. Tom's Hardware reporta que la compañía ha decidido discontinuar Blockscale, su chip dedicado a equipos para m… [+4462 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "Dogecoin's sharp rally fades after brief burst of enthusiasm around Twitter's new Shiba Inu logo",
            //         "description": "When Insider reached out for comment on Twitter's new Shiba Inu logo, its press email auto-responded with a single poop emoji.",
            //         "url": "https://markets.businessinsider.com/news/currencies/dogecoin-price-elon-musk-twitter-crypto-meme-coin-shiba-inu-2023-4",
            //         "urlToImage": "https://i.insider.com/642ec5f5de7d9200193a4314?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-06T14:36:00Z",
            //         "content": "Bitcoin and Dogecoin cryptocurrencies.Jakub Porzycki/NurPhoto via Getty Images\r\n<ul>\n<li>Dogecoin has fallen 8% over the past 24 hours following a huge meme-coin rally earlier this week. </li>\n<li>Th… [+1466 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "MacRumors"
            //         },
            //         "author": "MacRumors Staff",
            //         "title": "Top Stories: iOS 17 and watchOS 10 Rumors, When to Expect a New iMac, and More",
            //         "description": "WWDC is now just two months away, and we're starting to hear a bit more about what we might see with upcoming iOS 17 and watchOS 10 updates that should be unveiled during the keynote.\n\n\n\n\n\nThis week also saw the release of an iOS 16.4.1 bug fix update, anothe…",
            //         "url": "https://www.macrumors.com/2023/04/08/top-stories-ios-17-watchos-10-rumors/",
            //         "urlToImage": "https://images.macrumors.com/t/0v6rR6VqVq6JRGH-t2VBONRUGUc=/1600x/article-new/2023/04/top-stories-8apr2023.jpg",
            //         "publishedAt": "2023-04-08T13:00:00Z",
            //         "content": "WWDC is now just two months away, and we're starting to hear a bit more about what we might see with upcoming iOS 17 and watchOS 10 updates that should be unveiled during the keynote.\r\nThis week also… [+3786 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "engadget",
            //             "name": "Engadget"
            //         },
            //         "author": "Mat Smith",
            //         "title": "The Morning After: White House proposes a 30 percent tax on electricity used for crypto mining",
            //         "description": "The Biden administration wants to impose a 30 percent tax, called the Digital Asset Mining Energy or DAME excise tax, on the electricity used for cryptocurrency mining. It explained it wants to tax crypto-mining companies because they aren't paying for the \"f…",
            //         "url": "https://www.engadget.com/the-morning-after-white-house-proposes-a-30-percent-tax-on-electricity-used-for-crypto-mining-095933394.html",
            //         "urlToImage": "https://s.yimg.com/uu/api/res/1.2/WT0rf.kcraACXJO_L1CMOg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/77b3f5d0-e9ad-11ed-b6dd-8ea4ea1b0a6b.cf.jpg",
            //         "publishedAt": "2023-05-04T09:59:33Z",
            //         "content": "The Biden administration wants to impose a 30 percent tax, called the Digital Asset Mining Energy or DAME excise tax, on the electricity used for cryptocurrency mining. It explained it wants to tax c… [+3753 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Max Adams",
            //         "title": "Crypto is either dead in the water or about to notch new records as soon as next year - it depends on who you ask",
            //         "description": "Insider breaks down some divergent views on the fate of the cryptocurrency market.",
            //         "url": "https://www.businessinsider.com/crypto-dead-bitcoin-prediction-100000-2024-chamath-palihapitiya-cryptocurrency-podcast-2023-4",
            //         "urlToImage": "https://i.insider.com/6446dda5120cd7001865ea56?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-25T10:16:07Z",
            //         "content": "Good morning. I'm senior editor, Max Adams. \r\nYou don't have to be an avid follower of the media's comings and goings to know that yesterday was a momentous day for cable news. \r\nSpecifically, two of… [+5289 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "Ethereum drops 7% amid wider crypto sell-off as traders assess rate uncertainty",
            //         "description": "From whales unloading massive positions to broader uncertainty, crypto experts weigh in on what's causing the downside pressure.",
            //         "url": "https://markets.businessinsider.com/news/currencies/ethereum-price-crypto-market-crash-bitcoin-doge-solana-inflation-recession-2023-4",
            //         "urlToImage": "https://i.insider.com/643fdff83f6f690018de75e5?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-19T15:13:57Z",
            //         "content": "(Photo illustration by Jonathan Raa/NurPhoto via Getty Images)\r\n<ul>\n<li>Ethereum fell as much as 7% and bitcoin fell 3% in under 30 minutes early Wednesday.</li>\n<li>Altcoins are taking hits too, wi… [+2555 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "ReadWrite"
            //         },
            //         "author": "Joel Comm",
            //         "title": "How to Beat the Crypto Tax Crisis",
            //         "description": "Clinton Donnelly has a horror story that could keep many crypto investors awake at night. The CPA, who specializes in calculating taxes on crypto profits, had a client who came to him after being arrested by the IRS. The client wasn’t a crypto trader. He hadn…",
            //         "url": "https://readwrite.com/how-to-beat-the-crypto-tax-crisis/",
            //         "urlToImage": "https://images.readwrite.com/wp-content/uploads/2022/10/Buying-and-Selling-Cryptocurrency.jpg",
            //         "publishedAt": "2023-05-03T12:00:44Z",
            //         "content": "Clinton Donnelly has a horror story that could keep many crypto investors awake at night.\r\nThe CPA, who specializes in calculating taxes on crypto profits, had a client who came to him after being ar… [+5069 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Xataka.com"
            //         },
            //         "author": "Enrique Pérez",
            //         "title": "El gran secreto de Bután: han estado minando Bitcoin silenciosamente en el Himalaya durante años",
            //         "description": "Bután es un reino budista con menos de 800.000 habitantes. Es uno de los países más pequeños del mundo y está oculto entre los valles y montañas que conforman el Himalaya. Su economía se basa principalmente en el turismo, pero desde hace años han estado traba…",
            //         "url": "https://www.xataka.com/criptomonedas/gran-secreto-butan-han-estado-minando-bitcoin-silenciosamente-himalaya-durante-anos",
            //         "urlToImage": "https://i.blogs.es/726e7b/butan-templo/840_560.jpeg",
            //         "publishedAt": "2023-05-02T16:30:37Z",
            //         "content": "Bután es un reino budista con menos de 800.000 habitantes. Es uno de los países más pequeños del mundo y está oculto entre los valles y montañas que conforman el Himalaya. Su economía se basa princip… [+2656 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "AppleInsider"
            //         },
            //         "author": "news@appleinsider.com (Andrew Orr)",
            //         "title": "Man who claims to be Bitcoin creator eyes lawsuit against Apple",
            //         "description": "The Bitcoin whitepaper was recently discovered to be embedded in several versions of macOS, and now a person who claims to be the creator of Bitcoin is accusing Apple of copyright violation.Latest Bitcoin controversyJust two days ago, on April 5, a Mac user d…",
            //         "url": "https://appleinsider.com/articles/23/04/07/man-who-claims-to-be-bitcoin-creator-eyes-lawsuit-against-apple",
            //         "urlToImage": "https://photos5.appleinsider.com/gallery/53864-108358-bitcoin-xl.jpg",
            //         "publishedAt": "2023-04-07T15:49:24Z",
            //         "content": "Latest Bitcoin controversy\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe Bitcoin whitepaper was recently discovered to be embedded in several versio… [+1751 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "heise online"
            //         },
            //         "author": "Mark Mantel",
            //         "title": "Blockscale: Intel gibt seine Bitcoin-Miner auf",
            //         "description": "Weitere Konsolidierung bei Intel: Die Firma stellt die Entwicklung von ASICs fürs Krypto-Mining ein, schließt eine Wiederkehr aber nicht aus.",
            //         "url": "https://www.heise.de/news/Blockscale-Intel-gibt-seine-Bitcoin-Miner-auf-8971444.html",
            //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/5/4/7/2/Intel_Bitcoin-4cda2db81899e691.jpg",
            //         "publishedAt": "2023-04-19T08:04:00Z",
            //         "content": "Intel hat den Produktionsstopp seiner anwendungsspezifischen Schaltungen (ASICs) fürs Mining der Kryptowährung Bitcoin bekannt gegeben. Unternehmenskunden können Modelle aus der aktuellen Blockscale-… [+2376 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Theron Mohamed",
            //         "title": "Warren Buffett predicts more bank failures, dismisses bitcoin buyers as gamblers, and warns inflation and recession are serious threats in a new interview. Here are the 14 best quotes.",
            //         "description": "Warren Buffett touted the immense value of Apple's products, joked his planned successor does all the work, and asked if ChatGPT is good for society.",
            //         "url": "https://markets.businessinsider.com/news/stocks/warren-buffett-banking-crisis-bitcoin-inflation-recession-apple-chatgpt-abel-2023-4",
            //         "urlToImage": "https://i.insider.com/61695bfc38c1960018300702?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-13T10:51:57Z",
            //         "content": "Warren Buffett.Alex Wong / Getty Images\r\n<ul>\n<li>Warren Buffett predicted more banks will fail and compared bitcoin fans to gamblers.</li>\n<li>He warned inflation and recession are major risks, prai… [+4316 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Phil Rosen",
            //         "title": "How Warren Buffett's Berkshire Hathaway can navigate the looming economic turmoil",
            //         "description": "Top Buffett historians and financial pros shared how the conglomerate can withstand a looming recession and scoop up bargains along the way.",
            //         "url": "https://www.businessinsider.com/how-warren-buffetts-berkshire-hathaway-can-navigate-economic-turmoil-2023-4",
            //         "urlToImage": "https://i.insider.com/642ed65d2a659a0019a6a8f0?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-07T10:12:12Z",
            //         "content": "Markets are closed today but the Opening Bell newsletter rings nonetheless. Phil Rosen here — good to see you. The main thing to watch today is the March jobs report, which is due at 8:30 a.m. ET. Wh… [+3157 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Matthew Fox",
            //         "title": "US stocks trade mixed as investors weigh solid earnings against continued bank stress",
            //         "description": "A poor earnings report from First Republic Bank sent the stock to new all-time lows as it failed to stem deposit outflows.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-first-republic-instability-reignites-bank-fears-2023-4",
            //         "urlToImage": "https://i.insider.com/64497c9a9052390019700ee1?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-26T20:05:44Z",
            //         "content": "Traders look on after trading was halted on the floor of the New York Stock Exchange (NYSE) in New York, U.S., March 18, 2020Lucas Jackson/Reuters\r\n<ul><li>US stocks were mixed on Wednesday after str… [+2598 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Gigazine.net"
            //         },
            //         "author": "@GIGAZINE",
            //         "title": "Mojave以降のmacOSに「ビットコインの論文」が隠されていることが判明、保存場所はココ",
            //         "description": "ビットコインが「サトシ・ナカモト」と名乗る匿名の研究者によって開発されたことは広く知られています。新たに、2018年にリリースされた「macOS Mojave」以降のmacOSに「サトシ・ナカモトが記したビットコインの論文」が初期状態で保存されていることが明らかになりました。続きを読む...",
            //         "url": "https://gigazine.net/news/20230406-macos-bitcoin-whitepaper/",
            //         "urlToImage": "https://i.gzn.jp/img/2023/04/06/macos-bitcoin-whitepaper/00.png",
            //         "publishedAt": "2023-04-06T11:00:00Z",
            //         "content": "2018macOS MojavemacOS\r\nThe Bitcoin Whitepaper Is Hidden in Every Modern Copy of macOS - Waxy.orghttps://waxy.org/2023/04/the-bitcoin-whitepaper-is-hidden-in-every-modern-copy-of-macos/\r\nFinderMacinto… [+382 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "jsor@insider.com (Jennifer Sor)",
            //         "title": "Markets are facing a black swan event with 'nowhere to hide' as the latest rally has fueled a bubble that could burst at any time, veteran technical analyst says",
            //         "description": "\"There's nowhere to hide, no diversification in this type of market. This is a black swan event,\" one veteran technical strategist says.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-outlook-black-swan-crash-rally-bubble-burst-earnings-2023-4",
            //         "urlToImage": "https://i.insider.com/644178d3632fda001803d5c1?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-20T17:50:02Z",
            //         "content": "Markets are facing a black swan event, and investors have nowhere to run as the rally across markets in 2023 has inflated a dangerous bubble, according to veteran technical analyst Jeff Bierman.\r\nBie… [+1726 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Rongarret.info"
            //         },
            //         "author": "Ron",
            //         "title": "A systematic critique of Bitcoin's value proposition",
            //         "description": "1. Introduction This essay was originally entitled \"Bitcoin's design contains the seeds of its own destruction\".  The thesis was going to be...",
            //         "url": "http://blog.rongarret.info/2023/04/a-systematic-critique-of-bitcoins-value.html",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-12T18:02:02Z",
            //         "content": "1. Introduction\r\nThis essay was originally entitled \"Bitcoin's design contains the seeds of its own destruction\".  The thesis was going to be that Bitcoin's security depends entirely on consuming vas… [+30728 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "heise online"
            //         },
            //         "author": "Adam Popescu",
            //         "title": "heise+ | Mining für den Naturschutz: Warum ein Nationalpark im Kongo Bitcoins schürft",
            //         "description": "Um seine Wälder samt Tierwelt zu schützen, hat der Nationalpark Virunga im Kongo eine Bitcoin-Mining-Farm eröffnet.",
            //         "url": "https://www.heise.de/hintergrund/Mining-fuer-den-Naturschutz-Warum-ein-Nationalpark-im-Kongo-Bitcoins-schuerft-8244190.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/0/9/3/7/0/2/aufmacher_bitcoin_mine-0f975cce5d7a941c.jpg",
            //         "publishedAt": "2023-04-28T12:30:00Z",
            //         "content": "Inhaltsverzeichnis\r\nDie AK-47 ist schwer, aber der Mann, der die Waffe in der Hand hält, zuckt nicht mit der Wimper, als er auf dem dicht bewaldeten Berg patrouilliert. Hier im Ostkongo kostet die Mu… [+1581 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "AppleInsider"
            //         },
            //         "author": "news@appleinsider.com (Wesley Hilliard)",
            //         "title": "Bitcoin whitepaper removed in macOS Ventura 13.4 beta 3",
            //         "description": "Apple quietly removed the Virtual Scanner II app and, with it, the Bitcoin whitepaper in the latest macOS Ventura 13.4 beta.Apple removed the Bitcoin whitepaperThere are numerous Easter eggs and hidden files in macOS that won't appear without some kind of spe…",
            //         "url": "https://appleinsider.com/articles/23/04/25/bitcoin-whitepaper-removed-in-macos-ventura-134-beta-3",
            //         "urlToImage": "https://photos5.appleinsider.com/gallery/54152-109106-53841-108287-bitcoin-o-xl.jpg",
            //         "publishedAt": "2023-04-25T20:44:25Z",
            //         "content": "Apple removed the Bitcoin whitepaper\r\nApple quietly removed the Virtual Scanner II app and, with it, the Bitcoin whitepaper in the latest macOS Ventura 13.4 beta.\r\nThere are numerous Easter eggs and … [+1376 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Xataka.com"
            //         },
            //         "author": "Enrique Pérez",
            //         "title": "Golpe sorpresa de Argentina contra las criptomonedas: ha prohibido a las billeteras ofrecerlas",
            //         "description": "El Banco Central de Argentina ha tomado una decisión que pocos esperaban. A partir de hoy, las billeteras virtuales no podrán operar con criptomonedas. Un movimiento que estrecha el cerco ante este tipo de activos, ya que impide su acceso desde un gran número…",
            //         "url": "https://www.xataka.com/criptomonedas/golpe-sorpresa-argentina-criptomonedas-ha-prohibido-a-billeteras-ofrecerlas",
            //         "urlToImage": "https://i.blogs.es/a30291/argentina-bitcoin/840_560.jpeg",
            //         "publishedAt": "2023-05-05T08:12:29Z",
            //         "content": "El Banco Central de Argentina ha tomado una decisión que pocos esperaban. A partir de hoy, las billeteras virtuales no podrán operar con criptomonedas. Un movimiento que estrecha el cerco ante este t… [+2220 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Xataka.com"
            //         },
            //         "author": "Enrique Pérez",
            //         "title": "Ethereum está recortando distancia al Bitcoin con una fórmula ganadora: ser más descentralizado que nunca",
            //         "description": "El 'cripto invierno' ha quedado atrás. Si el Bitcoin lleva un 2023 muy bueno, la segunda criptomoneda más importante está teniendo un camino similar. Ethereum se encuentra en un momento crítico, pues estos días se ha completado Shapella, su actualización más …",
            //         "url": "https://www.xataka.com/criptomonedas/ethereum-esta-recortando-distancia-al-bitcoin-formula-ganadora-ser-descentralizado-que-nunca",
            //         "urlToImage": "https://i.blogs.es/b9c1dd/ethereum/840_560.jpeg",
            //         "publishedAt": "2023-04-17T10:00:44Z",
            //         "content": "El 'cripto invierno' ha quedado atrás. Si el Bitcoin lleva un 2023 muy bueno, la segunda criptomoneda más importante está teniendo un camino similar. Ethereum se encuentra en un momento crítico, pues… [+3126 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks decline as traders brace for big earnings from mega-cap tech firms",
            //         "description": "Tech giants Alphabet and Microsoft are set to report quarterly results after the closing bell on Tuesday.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-microsoft-alphabet-tech-earnings-season-investing-outlook-2023-4",
            //         "urlToImage": "https://i.insider.com/6447c9b190523900196fcd10?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-25T13:51:06Z",
            //         "content": "Traders work on the floor of the New York Stock ExchangeSpencer Platt/Getty Images\r\n<ul>\n<li>US stocks are trading lower on Tuesday as trader braces for more earnings reports. </li>\n<li>Tech giants A… [+1813 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks rise as Big Tech earnings stay strong and US GDP growth slows",
            //         "description": "Meta Platforms stock jumped after reporting first-quarter results that beat Wall Street's estimates.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-meta-facebook-instagram-big-tech-gdp-growth-2023-4",
            //         "urlToImage": "https://i.insider.com/640f546aa3b2a10018b2b2f1?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-27T13:45:37Z",
            //         "content": "TIMOTHY A. CLARY / Getty\r\n<ul>\n<li>US stocks rose as Big Tech earnings stayed strong while US GDP growths slowed. </li>\n<li>Meta stock jumped after reporting first-quarter results that beat Wall Stre… [+1756 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "heise online"
            //         },
            //         "author": "Michael Plura",
            //         "title": "heise+ | Hardware-Wallets: Bitcoin und andere Kryptowährungen sicher aufbewahren",
            //         "description": "Immer wieder stehlen Hacker Kryptocoins oder bekannte Börsen gehen pleite. Eine Hardware-Wallet schützt gegen den Verlust – doch welche sollte man benutzen?​",
            //         "url": "https://www.heise.de/tests/Anbieter-Uebersicht-Kryptocoins-mit-Hardware-Wallets-sichern-8969077.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/4/2/4/1/Titel-034ee0d559ee0fbc.JPG",
            //         "publishedAt": "2023-04-25T10:15:00Z",
            //         "content": "Inhaltsverzeichnis\r\nViele Besitzer von Kryptowährungen gehen oft erstaunlich unbedarft mit ihrem Kapital um. Auf dem PC oder noch schlimmer dem Handy lagern Kryptocoins im Wert von hunderten, tausend… [+1911 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "heise online"
            //         },
            //         "author": "Martin Holland",
            //         "title": "USA: Geschäftsmann soll wegen Bitcoin-Betrug 3,4 Milliarden US-Dollar zahlen",
            //         "description": "Weil er mit falschen Versprechen Bitcoin eingetrieben und die veruntreut hat, muss ein südafrikanischer Geschäftsmann das Geld zurück- und eine Strafe bezahlen.",
            //         "url": "https://www.heise.de/news/USA-Geschaeftsmann-soll-wegen-Bitcoin-Betrug-3-4-Milliarden-US-Dollar-zahlen-8981637.html",
            //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/5/0/9/6/8/shutterstock_1937129161-91f75b37827ffe38.jpg",
            //         "publishedAt": "2023-04-28T06:34:00Z",
            //         "content": "Der Chef einer südafrikanischen Firma ist von einem US-Gericht dazu verurteilt worden, wegen Bitcoin-Betrugs insgesamt 3,4 Milliarden US-Dollar (3,1 Milliarden Euro) zu zahlen. Das berichtet die Nach… [+2025 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "9to5Mac"
            //         },
            //         "author": "Filipe Espósito",
            //         "title": "Here’s why macOS has the Bitcoin whitepaper hidden in its files",
            //         "description": "It’s not unusual to have a few easter eggs hidden in operating systems, and it’s no different with Apple’s. However, some users recently discovered something intriguing. Every copy of macOS has the original Bitcoin whitepaper hidden in its internal files. Whi…",
            //         "url": "https://9to5mac.com/2023/04/06/macos-bitcoin-whitepaper-hidden/",
            //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/macOS-Bitcoin-whitepaper.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            //         "publishedAt": "2023-04-06T22:40:52Z",
            //         "content": "It’s not unusual to have a few easter eggs hidden in operating systems, and it’s no different with Apple’s. However, some users recently discovered something intriguing. Every copy of macOS has the o… [+3439 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "9to5Mac"
            //         },
            //         "author": "Filipe Espósito",
            //         "title": "Apple removes original Bitcoin whitepaper from the latest macOS Ventura beta",
            //         "description": "A few weeks ago, users discovered that every copy of macOS has the original Bitcoin whitepaper hidden in its internal files. Apple never discussed the reason for this, although we believe that the existence of the file there was just a joke among Apple engine…",
            //         "url": "https://9to5mac.com/2023/04/25/apple-removes-bitcoin-whitepaper-from-macos/",
            //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/macOS-Bitcoin-whitepaper.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            //         "publishedAt": "2023-04-25T20:14:19Z",
            //         "content": "A few weeks ago, users discovered that every copy of macOS has the original Bitcoin whitepaper hidden in its internal files. Apple never discussed the reason for this, although we believe that the ex… [+1585 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Peter Rothbart,Angela Fung",
            //         "title": "Upgrade Card Reviews 2023",
            //         "description": "Read our Upgrade card reviews and see why these cards are ideal for those who want the flexibility of a credit card and the predictability of a loan.",
            //         "url": "https://www.businessinsider.com/personal-finance/upgrade-card-reviews",
            //         "urlToImage": "https://i.insider.com/6453c739dcb78700180cdd87?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-04T22:10:50Z",
            //         "content": "Our experts answer readers' credit card questions and write unbiased product reviews (here's how we assess credit cards). In some cases, we receive a commission from our partners; however, our opinio… [+10713 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "MarketWatch"
            //         },
            //         "author": "Anushree Dave",
            //         "title": "Key Words: ‘I don’t understand why people are more inclined to go to bitcoin than gold’, says hedge fund billionaire Ray Dalio",
            //         "description": "Ray Dalio, billionaire and founder of Bridgewater Associates, says he still owns a little bit of bitcoin.",
            //         "url": "https://www.marketwatch.com/story/i-dont-understand-why-people-are-more-inclined-to-go-to-bitcoin-than-gold-says-hedge-fund-billionaire-ray-dalio-5bb0c823",
            //         "urlToImage": "https://images.mktw.net/im-715923/social",
            //         "publishedAt": "2023-04-26T18:05:00Z",
            //         "content": "Ray Dalio, billionaire and founder of Bridgewater Associates, holds a little bit of bitcoin BTCUSD, but doesnt understand why people are more inclined to go to bitcoin than gold, he said in a new pod… [+321 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Journal du geek"
            //         },
            //         "author": "Tristan",
            //         "title": "Le “livre blanc” du Bitcoin était caché dans macOS depuis 5 ans",
            //         "description": "Le Bitcoin est aujourd'hui la devise numérique al plus populaire au monde, son \"livre blanc\" écrit en 2008 en explique les grands principes. \nLe “livre blanc” du Bitcoin était caché dans macOS depuis 5 ans",
            //         "url": "https://www.journaldugeek.com/2023/04/07/le-livre-blanc-du-bitcoin-etait-cache-dans-macos-depuis-5-ans/",
            //         "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/02/comment-vendre-bitcoin.jpg",
            //         "publishedAt": "2023-04-07T14:30:43Z",
            //         "content": "Le Bitcoin est aujourd'hui la devise numérique al plus populaire au monde, son \"livre blanc\" écrit en 2008 en explique les grands principes.Andy Baio est un développeur assez connu aux États-Unis. Il… [+2787 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "The Guardian"
            //         },
            //         "author": "Emma Beddington",
            //         "title": "What has my terrifying fridge taught me? I am too relaxed about best before dates | Emma Beddington",
            //         "description": "In our culinary catacomb, the unwary visitor is greeted by explosive kimchi, mould-capped pesto, tahini like concrete and a vat of vintage vinegars“Does everyone,” the film critic Anne Billson asked on Twitter, “have an evil jar in their fridge?” To which sur…",
            //         "url": "https://www.theguardian.com/commentisfree/2023/apr/10/fridge-best-before-dates-kimchi-pesto-tahini",
            //         "urlToImage": "https://i.guim.co.uk/img/media/8f8782be0f0cbac07bc6c32226bfce0513636609/82_100_4876_2926/master/4876.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=40f55513312944f31c9f084f4684a397",
            //         "publishedAt": "2023-04-10T06:00:12Z",
            //         "content": "Does everyone, the film critic Anne Billson asked on Twitter, have an evil jar in their fridge? To which surely the correct answer is: Only one? Lightweight. We have a whole fridge shelf dedicated to… [+2000 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Golem.de"
            //         },
            //         "author": "Daniel Ziegener",
            //         "title": "Kryptoleitwährung im Aufwind: Bitcoin erstmals seit Monaten wieder über 30.000 US-Dollar",
            //         "description": "Im Juni 2022 durchbrach die größte Kryptowährung den Wert von oben. Neun Monate später hat sich der Bitcoin-Kurs wieder erholt. (Bitcoin, Silicon Valley)",
            //         "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkryptoleitwaehrung-im-aufwind-bitcoin-erstmals-seit-monaten-wieder-ueber-30-000-us-dollar-2304-173342.html&referer=https%3A%2F%2Ft.co%2Fbf065d3080",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-11T13:46:01Z",
            //         "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "VentureBeat"
            //         },
            //         "author": "Adrian Krion, Spielworks",
            //         "title": "From battlefield to homefront: AR is bigger than the metaverse",
            //         "description": "Military uses of AR and VR can trickle down to the gaming and consumer worlds, much as the government-created internet did.",
            //         "url": "https://venturebeat.com/virtual/from-battlefield-to-homefront-ar-bigger-than-metaverse/",
            //         "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/03/GettyImages-1187160851.jpg?w=1200&strip=all",
            //         "publishedAt": "2023-04-17T20:07:00Z",
            //         "content": "Join top executives in San Francisco on July 11-12, to hear how leaders are integrating and optimizing AI investments for success. Learn More\r\nThroughout modern history, the military has supplemented… [+1583 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Phil Rosen",
            //         "title": "Are we in a recession? Elon Musk says the pile of failed banks proves it.",
            //         "description": "Insider's Phil Rosen breaks down the latest market developments and the economic outlook of top commentators.",
            //         "url": "https://www.businessinsider.com/recession-forecast-elon-musk-tesla-larry-summers-treasury-markets-finance-2023-5",
            //         "urlToImage": "https://i.insider.com/645005d674e9330018efc32f?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-02T10:16:08Z",
            //         "content": "Good morning, team. I'm Phil Rosen. If you missed it Monday, regulators seized First Republic Bank and JPMorgan took over the majority of its assets. \r\nShares crashed almost 50% as markets opened and… [+4794 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Hallam Bullock",
            //         "title": "After gaining control of our reporter's phone, a hacker ripped her off for $10,000. She set out to find them.",
            //         "description": "In today's edition of 10 Things in Tech: TikTok has changed the dance industry, Musk's $1 million bounty, and your Mac may contain a hidden manifesto.",
            //         "url": "https://www.businessinsider.com/hacker-hunting-elon-musk-apple-bitcoin-bob-lee-lex-fridman-2023-4",
            //         "urlToImage": "https://i.insider.com/642eea6fde7d9200193a4bc7?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-08T11:30:13Z",
            //         "content": "Do you eat meat, reader? If so, what is your meatball of choice — beef, chicken… mammoth? Yes, you read that right. Newsletter editor Hallam Bullock here, coming to you from London.An Australian star… [+4054 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Jason Ma",
            //         "title": "US stocks climb on strong Chinese economic growth and upbeat earnings",
            //         "description": "Bank of America and Johnson & Johnson beat first-quarter earnings views, while Goldman Sachs missed.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-china-gdp-growth-goldman-sachs-earnings-2023-4",
            //         "urlToImage": "https://i.insider.com/63975699a3bebb0018b40e0e?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-18T13:33:56Z",
            //         "content": "Traders work on the floor of the New York Stock Exchange (NYSE) on October 27, 2022 in New York City.Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks rose Tuesday as China's first-quarter GDP growth of… [+2045 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "Dogecoin has surged 24% in a month, outperforming major cryptos on Elon Musk's antics",
            //         "description": "Dogecoin added to gains on Monday, spiking 6%. Elon Musk has offered a million dogecoin to whoever can prove his family owned an emerald mine.",
            //         "url": "https://markets.businessinsider.com/news/currencies/dogecoin-price-elon-musk-twitter-crypto-market-outlook-bitcoin-ethereum-2023-4",
            //         "urlToImage": "https://i.insider.com/643d3b1556f0dc0019895edc?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-17T15:37:07Z",
            //         "content": "Carina Johansen/NTB/AFP via Getty Images\r\n<ul>\n<li>Dogecoin has jumped 24% in the past month, according to Messari.</li>\n<li>The token's price often fluctuates on comments from Twitter and Tesla CEO … [+1783 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks fall after Fed raises rates but points to possible pause on further increases",
            //         "description": "Hopes for a pivot to rate cuts from the Fed were dampened after Chairman Jerome Powell expressed optimism about avoiding a recession.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-signals-future-rate-hike-pause-2023-5",
            //         "urlToImage": "https://i.insider.com/640f546aa3b2a10018b2b2f1?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-03T20:09:56Z",
            //         "content": "The central bank hiked rates by 25 basis points, as was widely expected.TIMOTHY A. CLARY / Getty\r\n<ul>\n<li>US stocks fell on Wednesday as markets digested the latest Fed rate hike of 25 basis points.… [+2212 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks rise as markets prepare for Fed's next policy decision",
            //         "description": "Wall Street will be closely watching Fed Chair Jerome Powell's comments for signals of future central bank tightening.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-powell-interest-rate-hike-inflation-2023-5",
            //         "urlToImage": "https://i.insider.com/6452599df6389a0018ef4781?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-03T13:38:56Z",
            //         "content": "Traders work on the floor of the New York Stock ExchangeSpencer Platt/Getty Images\r\n<ul>\n<li>US stocks rose slightly as traders brace for the Fed's next rate move.</li>\n<li>Markets are pricing in 87%… [+1973 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "George Glover",
            //         "title": "FTX could relaunch - and one of its former VC backers may lead a $250 million funding round to revive the failed exchange, report says",
            //         "description": "FTX executives are still in the early stages of deciding whether reviving the failed crypto exchange would be worthwhile.",
            //         "url": "https://markets.businessinsider.com/news/currencies/ftx-relaunch-tribe-capital-vc-crypto-crash-sam-bankman-fried-2023-4",
            //         "urlToImage": "https://i.insider.com/643f9f5d632fda00180393e8?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-19T09:11:10Z",
            //         "content": "The logo of FTX at the entrance of the FTX Arena in Miami, Florida.Marco Bello/Reuters\r\n<ul>\n<li>Tribe Capital may lead a $250 million funding round to reboot FTX, according to Bloomberg.</li>\n<li>Tr… [+2315 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "Billionaire crypto bull Mike Novogratz says the US is headed for a credit crisis and a dramatic economic slowdown that will make bitcoin's investment case stronger",
            //         "description": "\"The government has kind of gone full jihad against crypto,\" Galaxy Digital CEO Mike Novogratz said.",
            //         "url": "https://markets.businessinsider.com/news/currencies/credit-crisis-recession-crypto-market-outlook-mike-novogratz-galaxy-digital-2023-4",
            //         "urlToImage": "https://i.insider.com/643816995f081b0019c0fe28?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-13T15:46:22Z",
            //         "content": "Mike Novogratz.Marco Bello / Stringer /Getty Images\r\n<ul>\n<li>Galaxy Digital CEO Mike Novogratz said the US is heading towards a credit crisis and a dramatic economic downturn.</li>\n<li>The crypto bu… [+1895 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Carla Mozée",
            //         "title": "US stocks fall as investors assess latest earnings and climbing bond yields",
            //         "description": "The S&P 500 was on course to fall for the first time after two straight days of gains. Morgan Stanley and Netflix shares were on the move.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-dow-nasdaq-earnings-bond-yields-banks-netflix-2023-4",
            //         "urlToImage": "https://i.insider.com/62bad7662224c3001813f01e?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-19T13:44:18Z",
            //         "content": "Traders on the floor of the New York Stock Exchange.Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks fell Wednesday, feeling the pinch from rising bond yields and as investors mulled earnings. </li>\n<l… [+2148 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Matthew Fox",
            //         "title": "US stocks trade mixed as investors prepare for first-quarter earnings results",
            //         "description": "Wall Street analysts have lowered their Q1 S&P 500 earnings estimates to $50.76 per share from $54.13 at the start of the year.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-prepare-first-quarter-earnings-results-2023-4",
            //         "urlToImage": "https://i.insider.com/5f4fb1da7ed0ee001e25cfb0?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-11T13:38:46Z",
            //         "content": "Lucas Jackson/Reuters\r\n<ul><li>US stocks traded mixed on Tuesday as investors prepare for first-quarter earnings results.</li><li>The mega-cap banks including JPMorgan and Wells Fargo are scheduled t… [+2509 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Jennifer Sor",
            //         "title": "US stocks trade mixed as investors assess wave of earnings results from big companies",
            //         "description": "Earnings season has kicked off in earnest. Investors are looking past results from the biggest banks and getting ready for big tech firms to report.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-bofa-gs-jnj-corporate-earnings-economy-2023-4",
            //         "urlToImage": "https://i.insider.com/5e7cc4132d41c150481afc74?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-18T20:24:04Z",
            //         "content": "Traders work on the floor of the New York Stock Exchange (NYSE) in New York, U.S., March 20, 2020Lucas Jackson/Reuters\r\n<ul>\n<li>Stocks traded mixed on Tuesday as investors digested the wave of earni… [+2430 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Phil Rosen",
            //         "title": "US stocks climb as fresh signs point to cooling inflation and a softer labor market",
            //         "description": "The March producer price index declined 0.5% month-over-month, more than expected, while weekly jobless claims were higher than estimates.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-ppi-cooling-inflation-data-jobless-claims-2023-4",
            //         "urlToImage": "https://i.insider.com/643801285f081b0019c0f9b1?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-13T13:41:37Z",
            //         "content": "Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks climbed Thursday as investors took in new economic data that pointed to cooling inflation. </li>\n<li>Thursday data showed the March producer price index… [+2162 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Jennifer Sor",
            //         "title": "Dow soars 383 points as US stocks jump on more signs inflation is falling",
            //         "description": "Data on Thursday showed that wholesale inflation tumbled in March to its lowest level since January 2021.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-inflation-march-ppi-dow-jones-economy-2023-4",
            //         "urlToImage": "https://i.insider.com/6219465caa07b20019fa1bc4?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-13T20:13:25Z",
            //         "content": "Brendan McDermid/Reuters\r\n<ul>\n<li>US stocks jumped on Thursday on more signs of falling inflation and a cooling labor market.</li>\n<li>Investors cheered data that showed a big drop in the Producer P… [+2316 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks trade mixed as traders wait for next wave of corporate earnings reports",
            //         "description": "Bank of America, Goldman Sachs, and Tesla are all expected to deliver quarterly results this week.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-markets-news-dow-nasdaq-corporate-quarterly-earnings-inflation-fed-2023-4",
            //         "urlToImage": "https://i.insider.com/643d429556f0dc0019895fcf?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-17T13:36:54Z",
            //         "content": "Stock tradersDrew Angerer/Getty Images\r\n<ul>\n<li>Moves in stock indexes were muted Monday on corporate earnings uncertainty.</li>\n<li>First-quarter earnings kicked off on Friday, with strong results … [+1847 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks trade mixed as Wall Street digests slew of earnings results",
            //         "description": "The S&P 500 and Dow Jones Industrial Average are headed for their worst trading week since March.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-pg-q1earnings-results-2023-4",
            //         "urlToImage": "https://i.insider.com/644286d277ecc80019e5b9de?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-21T13:41:47Z",
            //         "content": "Friday's inflation print shocked investors.Xinhua News Agency/Getty Images\r\n<ul>\n<li>US stocks were mixed Friday but largely flat amid more earnings reports.</li>\n<li>Over 75% of S&P 500 companies th… [+2020 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks rise but close lower for the week as investors mull mixed bag of corporate earnings",
            //         "description": "Mega-cap tech companies like Alphabet and Amazon are on deck to report quarterly results next week.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-mixed-earnings-reports-2023-4",
            //         "urlToImage": "https://i.insider.com/6442e7c5e1a96300185aa30d?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-21T20:07:23Z",
            //         "content": "Traders work on the floor of the New York Stock ExchangeMichael M. Santiago/Getty Images\r\n<ul>\n<li>US stock indices rose Friday as investors digested mixed earnings reports.</li>\n<li>However, all thr… [+1907 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Matthew Fox",
            //         "title": "US stocks jump after big-tech earnings from Microsoft don't disappoint",
            //         "description": "Activision Blizzard fell 9% after a UK regulator said it would block the proposed merger between the video game company and Microsoft.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-big-tech-earnings-microsoft-alphabet-msft-2023-4",
            //         "urlToImage": "https://i.insider.com/60aff56ebee0fc0019d5a090?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-26T13:34:42Z",
            //         "content": "Xinhua/Wang Ying/ Getty Images\r\n<ul><li>US stocks jumped on Wednesday after strong earnings from Microsoft and Alphabet.</li><li>Microsoft surged 8% after it reported solid growth in its cloud divisi… [+1971 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Jennifer Sor",
            //         "title": "US stocks tumble as investors fret over new bout of banking sector volatility",
            //         "description": "Banking fears piled up on Thursday, with shares of PacWest and Western Alliance plummeting throughout the trading session.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-banking-crisis-volatility-pacwest-western-alliance-2023-5",
            //         "urlToImage": "https://i.insider.com/5d7faf892e22af1a0454061d?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-04T20:22:32Z",
            //         "content": "Worried traderRichard Drew/Associated Press\r\n<ul>\n<li>US stocks slid on Thursday as investors dealt with fresh volatility in bank shares.</li>\n<li>All three indexes ended the day lower, with the Dow … [+1897 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "MakeUseOf"
            //         },
            //         "author": "Katie Rees",
            //         "title": "The 5 Best Bitcoin Ordinal Compatible Wallets",
            //         "description": "These wallets are the best choices to store your Bitcoin Ordinals.",
            //         "url": "https://www.makeuseof.com/best-bitcoin-ordinal-compatible-wallets/",
            //         "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/11/crypto-wallet-pic-1.jpg",
            //         "publishedAt": "2023-05-03T17:00:16Z",
            //         "content": "Bitcoin Ordinals have amassed quite a lot of hype since their launch, so it's no surprise that users are looking for wallets in which they can store them. So, what are the best Bitcoin Ordinal-compat… [+5938 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "MakeUseOf"
            //         },
            //         "author": "Temitope Olatunji",
            //         "title": "What Is Binance Auto-Invest and How Does It Work?",
            //         "description": "You can now regularly buy Bitcoin and other cryptos with Binance.",
            //         "url": "https://www.makeuseof.com/what-is-binance-auto-invest-how-does-it-work/",
            //         "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/a-picture-of-a-hand-carrying-a-phone-with-binance-chart.jpg",
            //         "publishedAt": "2023-04-18T15:00:16Z",
            //         "content": "Investing in cryptocurrencies requires studying price charts and spotting the right opportunities, which can sometimes be stressful depending on your strategy and what you want to achieve. But with B… [+5124 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "MakeUseOf"
            //         },
            //         "author": "Katie Rees",
            //         "title": "2 Reasons Bitcoin Transaction Fees Are So High Right Now",
            //         "description": "Bitcoin transaction fees are soaring once more, but what's behind the sudden rise?",
            //         "url": "https://www.makeuseof.com/reasons-bitcoin-transaction-fees-are-so-high-right-now/",
            //         "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/05/btc-graph-1.jpg",
            //         "publishedAt": "2023-05-05T17:06:17Z",
            //         "content": "If you conduct a Bitcoin transaction, chances are you'll have to pay a fee. But this fee does not stay at one figure. Bitcoin transaction fees vary all the time and are affected by several factors. A… [+4563 chars]"
            //     },
            //     {

            //         "source": {
            //             "id": "engadget",
            //             "name": "Engadget"
            //         },
            //         "author": "Lawrence Bonk",
            //         "title": "Venmo now lets you send crypto to other users for some reason",
            //         "description": "Paypal-owned money transfer service Venmo dipped its toes into cryptocurrencies in 2021 after opening up an in-app trading platform.\r\n That was just for individuals to buy or sell crypto. Now, the company is going further into the once-heralded digital curren…",
            //         "url": "https://www.engadget.com/venmo-now-lets-you-send-crypto-to-other-users-for-some-reason-192015694.html",
            //         "urlToImage": "https://s.yimg.com/uu/api/res/1.2/LKRH31mzL9wqtcqoQ_lkjw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-04/835a5670-e5f4-11ed-9db6-3febf57b7a4a.cf.jpg",
            //         "publishedAt": "2023-04-28T19:20:15Z",
            //         "content": "Paypal-owned money transfer service Venmo dipped its toes into cryptocurrencies in 2021 after opening up an in-app trading platform.\r\n That was just for individuals to buy or sell crypto. Now, the co… [+1625 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Gizmodo.com"
            //         },
            //         "author": "Kyle Barr",
            //         "title": "Bitcoin Pyramid Scheme Fraudster Ordered to Pay $3.4 Billion",
            //         "description": "The Commodities Futures Trading Commission patted itself on the back for winning one of the largest civil cases against a crypto crook, even if most—or any—of those affected will see any of their money returned. On Thursday, a Texas judge issued a default jud…",
            //         "url": "https://gizmodo.com/bitcoin-mlm-joe-steyn-mirror-trading-international-1850385963",
            //         "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/16e5700ae24064ff50deef40ec83875d.jpg",
            //         "publishedAt": "2023-04-28T14:35:25Z",
            //         "content": "The Commodities Futures Trading Commission patted itself on the back for winning one of the largest civil cases against a crypto crook, even if mostor anyof those affected will see any of their money… [+3594 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "engadget",
            //             "name": "Engadget"
            //         },
            //         "author": "Mariella Moon",
            //         "title": "White House proposes 30 percent tax on electricity used for crypto mining",
            //         "description": "The Biden administration wants to impose a 30 percent tax on the electricity used by cryptocurrency mining operations, and it has included the proposal in its budget for the fiscal year of 2024. In a blog post on the White House website, the administration ha…",
            //         "url": "https://www.engadget.com/white-house-proposes-30-percent-tax-on-electricity-used-for-crypto-mining-090342986.html",
            //         "urlToImage": "https://s.yimg.com/uu/api/res/1.2/_0lUWxV0epaYKnRPQ1.Jxw--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/5d8f2740-e97d-11ed-b4b3-dfb213c6d348.cf.jpg",
            //         "publishedAt": "2023-05-03T09:03:42Z",
            //         "content": "The Biden administration wants to impose a 30 percent tax on the electricity used by cryptocurrency mining operations, and it has included the proposal in its budget for the fiscal year of 2024. In a… [+3408 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Gizmodo.com"
            //         },
            //         "author": "Kyle Barr",
            //         "title": "Here’s How to Find the Original Bitcoin Manifesto in Your Mac",
            //         "description": "An Apple developer left one of the strangest Easter eggs hidden in the macOS, offering a surprising and baffling connection between the Cupertino tech company’s mainline operating system to everybody’s (least) favorite cryptographic digital currency. Read mor…",
            //         "url": "https://gizmodo.com/bitcoin-apple-mac-bitcoin-white-paper-1850307069",
            //         "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/176f6f215c9c45306ca8269f8232701e.jpg",
            //         "publishedAt": "2023-04-06T15:30:00Z",
            //         "content": "An Apple developer left one of the strangest Easter eggs hidden in the macOS, offering a surprising and baffling connection between the Cupertino tech companys mainline operating system to everybodys… [+3865 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "Intel ends its bitcoin mining chip series - Reuters",
            //         "description": "Intel ends its bitcoin mining chip series  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiWGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvaW50ZWwtZW5kcy1pdHMtYml0Y29pbi1taW5pbmctY2hpcC1zZXJpZXMtMjAyMy0wNC0xOC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-18T18:07:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "Hamas armed wing announces suspension of bitcoin fundraising - Reuters",
            //         "description": "Hamas armed wing announces suspension of bitcoin fundraising  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMib2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3dvcmxkL21pZGRsZS1lYXN0L2hhbWFzLWFybWVkLXdpbmctYW5ub3VuY2VzLXN1c3BlbnNpb24tYml0Y29pbi1mdW5kcmFpc2luZy0yMDIzLTA0LTI4L9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-28T12:36:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "Bitcoin pushes past $30000 as investors eye end of rate rises - Reuters",
            //         "description": "Bitcoin pushes past $30000 as investors eye end of rate rises  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi1wdXNoZXMtcGFzdC0zMDAwMC1pbnZlc3RvcnMtZXllLWVuZC1yYXRlLXJpc2VzLTIwMjMtMDQtMTEv0gEA?oc%3D5%26hl%3Den-CA%26gl%3DCA%26ceid%3DCA:en&gl=FR&hl=en-CA&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-11T03:55:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "Bitcoin could hit $100000 by end-2024, Standard Chartered says - Reuters",
            //         "description": "Bitcoin could hit $100000 by end-2024, Standard Chartered says  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvdXMvYml0Y29pbi1jb3VsZC1oaXQtMTAwMDAwLWJ5LWVuZC0yMDI0LXN0YW5kYXJkLWNoYXJ0ZXJlZC1zYXlzLTIwMjMtMDQtMjQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-24T13:25:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "Bitcoin could hit $100000 by end-2024, Standard Chartered says - Reuters",
            //         "description": "Bitcoin could hit $100000 by end-2024, Standard Chartered says  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMia2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL3RlY2hub2xvZ3kvYml0Y29pbi1jb3VsZC1oaXQtMTAwMDAwLWJ5LWVuZC0yMDI0LXN0YW5kYXJkLWNoYXJ0ZXJlZC1zYXlzLTIwMjMtMDQtMjQv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-24T09:18:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "US court orders South African firm's CEO to pay $3.4 bln for bitcoin ... - Reuters",
            //         "description": "US court orders South African firm's CEO to pay $3.4 bln for bitcoin ...  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2xlZ2FsL3VzLWNvdXJ0LW9yZGVycy1zb3V0aC1hZnJpY2FuLWZpcm1zLWNlby1wYXktMzQtYmxuLWJpdGNvaW4tZnJhdWQtMjAyMy0wNC0yNy_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-27T21:43:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "google-news",
            //             "name": "Google News"
            //         },
            //         "author": null,
            //         "title": "Dollar pauses after strong gains on hawkish Fed bets; bitcoin hits ... - Reuters",
            //         "description": "Dollar pauses after strong gains on hawkish Fed bets; bitcoin hits ...  Reuters",
            //         "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMie2h0dHBzOi8vd3d3LnJldXRlcnMuY29tL21hcmtldHMvY3VycmVuY2llcy9kb2xsYXItcGF1c2VzLWFmdGVyLXN0cm9uZy1nYWlucy1oYXdraXNoLWZlZC1iZXRzLWJpdGNvaW4taGl0cy0zMDAwMC0yMDIzLTA0LTExL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-11T01:47:00Z",
            //         "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "The Guardian"
            //         },
            //         "author": "Erum Salam",
            //         "title": "Bitcoin is terrible for the environment – can it ever go green?",
            //         "description": "Cryptocurrency mining uses huge amounts of energy, but activists are urging for a change in its code to reduce its environmental impactOn the corner of New York’s Park Avenue and 52nd Street, curious onlookers recently stopped in front of a giant green skull …",
            //         "url": "https://www.theguardian.com/technology/2023/apr/26/bitcoin-mining-climate-crisis-environmental-impact",
            //         "urlToImage": "https://i.guim.co.uk/img/media/ce173dd8b34322b541bbcb6f3a4c9adee553fc86/0_116_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d02e45765850d5551b54c41c58ce9a34",
            //         "publishedAt": "2023-04-26T09:00:03Z",
            //         "content": "On the corner of New Yorks Park Avenue and 52nd Street, curious onlookers recently stopped in front of a giant green skull sitting in the bed of a truck parked outside the office of Fidelity Investme… [+7288 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "The Guardian"
            //         },
            //         "author": "Alex Hern",
            //         "title": "Bitcoin price rises above $30,000 for first time since June 2022",
            //         "description": "Cyptocurrency’s steady increase in value reignites fears of widespread market manipulationA sharp rise in bitcoin prices has pushed the cryptocurrency above $30,000 (£24,118) for the first time since 10 June last year, just before the Celsius crypto lending c…",
            //         "url": "https://www.theguardian.com/technology/2023/apr/11/bitcoin-price-rises-usd-cyptocurrency-value",
            //         "urlToImage": "https://i.guim.co.uk/img/media/557a4b7ba8d4a7ac4ffdc68894f2b3caa276f344/0_235_3551_2132/master/3551.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=56808976844276c471575e281886d474",
            //         "publishedAt": "2023-04-11T11:15:45Z",
            //         "content": "A sharp rise in bitcoin prices has pushed the cryptocurrency above $30,000 (£24,118) for the first time since 10 June last year, just before the Celsius crypto lending company froze withdrawals in th… [+6113 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Slashdot.org"
            //         },
            //         "author": "msmash",
            //         "title": "Intel Discontinues Bitcoin-Mining Blockscale Chips",
            //         "description": "It's been just a year since Intel officially announced its Bitcoin-mining Blockscale ASICs, but today the company announced the end of life of its first-gen Blockscale 1000-series chips without announcing any follow-up generations of the chips. From a report:…",
            //         "url": "https://slashdot.org/story/23/04/18/1652237/intel-discontinues-bitcoin-mining-blockscale-chips",
            //         "urlToImage": "https://a.fsdn.com/sd/topics/intel_64.png",
            //         "publishedAt": "2023-04-18T22:00:00Z",
            //         "content": "We spoke with Intel on the matter, and the company told Tom's Hardware that \"as we prioritize our investments in IDM 2.0, we have end-of-lifed the Intel Blockscale 1000 Series ASIC while we continue … [+795 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Matthew Fox",
            //         "title": "Here's the outlook for bitcoin as the cryptocurrency struggles to reclaim the all-important $30,000 technical level",
            //         "description": "If bitcoin can decisively clear that level, Stockton expects the cryptocurrency to trend toward its key resistance level at $35,900.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-technical-resistance-important-30000-level-upside-downside-2023-4",
            //         "urlToImage": "https://i.insider.com/644a81e2edc7ea00183306ec?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-27T14:52:45Z",
            //         "content": "El Salvador made bitcoin official currency. Now a new crop of bitcoin experiments wants to do the same around the world.MARVIN RECINOS / Contributor / Getty Images\r\n<ul><li>The price of bitcoin is te… [+2393 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Phil Rosen",
            //         "title": "Apple hiding a bitcoin manifesto in Macs is fueling theories that Steve Jobs was Satoshi Nakamoto, the crypto's mysterious inventor",
            //         "description": "The discovery that Apple includes a PDF of Satoshi's original bitcoin white paper in every new Mac has sparked fresh conspiracies tied to Jobs.",
            //         "url": "https://markets.businessinsider.com/news/currencies/apple-bitcoin-manifesto-steve-jobs-satoshi-nakamoto-white-paper-cryptocurrency-2023-4",
            //         "urlToImage": "https://i.insider.com/6430035a3007470019fe1513?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-07T13:19:48Z",
            //         "content": "Steve Jobs.David Paul Morris / Stringer\r\n<ul>\n<li>Technologist Andy Baio wrote this week that he discovered a PDF of the original bitcoin white paper on his Mac.</li>\n<li>The revelation fueled theori… [+3349 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Filip De Mott",
            //         "title": "Ray Dalio says he has a little bitcoin but prefers gold, calling it 'timeless and universal'",
            //         "description": "Bitcoin moves unreliably and has a smaller valuation than mega-cap stocks like Microsoft, Dalio said on a podcast.",
            //         "url": "https://markets.businessinsider.com/news/currencies/ray-dalio-bitcoin-gold-reserve-asset-microsoft-banking-crypto-rally-2023-4",
            //         "urlToImage": "https://i.insider.com/644abf0fda6d7b0019bd80be?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-27T19:51:21Z",
            //         "content": "Bridgewater founder Ray Dalio.Brendan McDermid/File Photo/Reuters\r\n<ul>\n<li>Billionaire investor Ray Dalio said he has a little bitcoin but prefers gold.</li>\n<li>On a recent podcast, he said bitcoin… [+1951 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "George Glover",
            //         "title": "A bitcoin thief who stole $5 million of the crypto and posed in a dollar-filled bathtub is sentenced to 4 years in prison",
            //         "description": "Gary Harmon pled guilty to stealing 713 bitcoin in January. Law enforcement agents found a photo on his phone showing him posing in a tub of cash.",
            //         "url": "https://markets.businessinsider.com/news/stocks/bitcoin-thief-5m-ohio-prison-gary-harmon-bathtub-of-money-2023-4",
            //         "urlToImage": "https://i.insider.com/644b9b21da6d7b0019bd8fcf?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-28T11:22:11Z",
            //         "content": "Gary Harmon posing in a bathtub of dollar bills.US District Court for the District of Columbia/Bloomberg\r\n<ul>\n<li>An Ohio man who stole more than 712 bitcoin was sentenced to four years in prison Th… [+1644 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Filip De Mott",
            //         "title": "Bitcoin could jump nearly 70% if the US defaulted on its debt, Standard Chartered analyst says",
            //         "description": "\"So actually, the optimal trade would probably be long bitcoin, short ethereum,\" Standard Chartered's Geoff Kendrick told Insider.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-us-default-debt-ceiling-crisis-ethereum-price-2023-4",
            //         "urlToImage": "https://i.insider.com/644ad2ac74e9330018ef7555?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-29T12:30:06Z",
            //         "content": "Bitcoin.Photo by Getty Images\r\n<ul>\n<li>Bitcoin could climb by $20,000 if a US default happened, Standard Chartered's Geoff Kendrick said.</li>\n<li>Not every crypto would act similarly, with some beh… [+2744 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Huileng Tan",
            //         "title": "Bitcoin's nearing a breakout moment — prices topped $30,000 for the first time since June 2022",
            //         "description": "Bitcoin is up about 80% this year so far while Ether is up about 60% in the same period.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoins-breakout-moment-first-time-since-june-2022-2023-4",
            //         "urlToImage": "https://i.insider.com/6434df53ca216e001820ff87?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-11T06:18:31Z",
            //         "content": "Bitcoin has rallied over $30,000.Anadolu Agency/Getty Images\r\n<ul>\n<li>Bitcoin has rallied above the $30,000 level for the first time since June 2022.</li>\n<li>The gains are driven by expectations th… [+1755 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Phil Rosen",
            //         "title": "Who is Satoshi Nakamoto? Crypto fans just celebrated the bitcoin inventor's birthday and his legend is as mysterious as ever.",
            //         "description": "Theories swirled this week that Apple visionary Steve Jobs was the legendary Satoshi Nakamoto after the bitcoin white paper was found on macOS.",
            //         "url": "https://markets.businessinsider.com/news/currencies/who-is-satoshi-nakamoto-bitcoin-inventor-crypto-steve-jobs-apple-2023-4",
            //         "urlToImage": "https://i.insider.com/643023743007470019fe17e4?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-07T16:38:23Z",
            //         "content": "A statue of Satoshi Nakamoto, a presumed pseudonym used by the inventor of Bitcoin, is displayed in Graphisoft Park on September 22, 2021 in Budapest, Hungary.Janos Kummer / Stringer, Getty Images\r\n<… [+4728 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Phil Rosen",
            //         "title": "Bitcoin's 72% rally to start 2023 helps push Michael Saylor's MicroStrategy to its first profitable quarter in over 2 years",
            //         "description": "The company is the largest holder of bitcoin, and added 7,500 bitcoins in the first quarter of the year, bringing its total to 140,000 tokens.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-microstrategy-michael-saylor-bull-quarter-cryptocurrency-rally-crypto-70-2023-5",
            //         "urlToImage": "https://i.insider.com/60ca262123393a00188e3872?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-02T15:43:05Z",
            //         "content": "MicroStrategy CEO Michael SaylorJoe Raedle/Getty Images\r\n<ul>\n<li>Michael Saylor's MicroStrategy posted its first profit in nine quarters to start 2023.</li>\n<li>The largest holder of bitcoin added 7… [+1863 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Zinya Salfiti",
            //         "title": "Bitcoin's 73% rally is fueling optimism the crypto winter is ending. Here are fresh forecasts on the token from StanChart, Matrixport and others.",
            //         "description": "Bitcoin has rallied 73% this year, after a grim 2022. Some analysts are predicting this may be just the beginning of a bigger advance.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-predictions-crypto-forecasts-robert-kiyosaki-standard-chartered-matrixport-analysts-2023-5",
            //         "urlToImage": "https://i.insider.com/62a76660a464ed0019584a3b?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-03T13:48:14Z",
            //         "content": "Bitcoin.Getty Images\r\n<ul>\n<li>Bitcoin has rallied more than 70% this year, outperforming most other asset classes, after a dismal 2022. </li>\n<li>Some analysts are predicting this may just be the st… [+5150 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Filip De Mott,Zinya Salfiti",
            //         "title": "Bitcoin's huge rally is masking a drop in liquidity as smaller trades move the market",
            //         "description": "A trade of 462 bitcoins can move the price by 1% compared to more than 1,400 bitcoins in January, according to CCData.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-rally-crypto-liquidity-market-moving-small-trades-btc-2023-5",
            //         "urlToImage": "https://i.insider.com/6453aacdb4a8cd00187ab9e5?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-04T15:30:28Z",
            //         "content": "(Photo by Jakub Porzycki/NurPhoto via Getty Images)\r\n<ul>\n<li>Bitcoin's huge price rally this year is masking a decline in market liquidity.</li>\n<li>That means smaller bitcoin trades can have a bigg… [+1766 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Slashdot.org"
            //         },
            //         "author": "msmash",
            //         "title": "Balaji Srinivasan Closes Out $1 Million Bitcoin Bet Early",
            //         "description": "Balaji Srinivasan, the former chief technology officer of Coinbase Global, said he closed out what appeared to be a losing bet that Bitcoin would rise to $1 million within 90 days. From a report: Srinivasan said he gave $1 million to two organizations, includ…",
            //         "url": "https://slashdot.org/story/23/05/03/1924216/balaji-srinivasan-closes-out-1-million-bitcoin-bet-early",
            //         "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            //         "publishedAt": "2023-05-03T21:20:00Z",
            //         "content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "The crypto market rally is built on hopes of Fed rate hike slowdown and looming US credit crunch, Galaxy Digital's Mike Novogratz says",
            //         "description": "Crypto markets have been mostly trending upward since the start of the year. Bitcoin notched a 10-month high Tuesday, shooting past $30,000.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-outlook-mike-novogratz-galaxy-digital-fed-2023-4",
            //         "urlToImage": "https://i.insider.com/6435a157ca216e001821145a?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-11T19:20:01Z",
            //         "content": "Mike Novogratz.Marco Bello / Stringer /Getty Images\r\n\n<ul>\n<li>Bitcoin notched a 10-month high Tuesday amid a broader upswing in crypto markets. </li>\n<li>Galaxy Digital CEO Mike Novogratz said marke… [+2022 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Theron Mohamed",
            //         "title": "Warren Buffett just revealed his company plowed $4 billion into stocks last quarter. Here are 8 key takeaways from a new interview.",
            //         "description": "Warren Buffett touted Apple, ripped bitcoin, warned inflation and recession are serious risks, and revealed he's been worried about banks for a while.",
            //         "url": "https://markets.businessinsider.com/news/stocks/warren-buffett-stock-portfolio-banks-inflation-recession-apple-paramount-bitcoin-2023-4",
            //         "urlToImage": "https://i.insider.com/54031f486bb3f7280dbef4ce?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-13T17:02:00Z",
            //         "content": "Warren Buffett.REUTERS/Rick Wilking\r\n<ul>\n<li>Warren Buffett piled about $4 billion into stocks in the first quarter, he revealed this week.</li>\n<li>The investor spoke about banks, bitcoin, Apple, P… [+6202 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Raphael Sanis",
            //         "title": "What is crypto, and is it making a comeback?",
            //         "description": "Cryptocurrencies have been on a wild journey since bitcoin emerged in 2009. The future is still murky, as skeptics say they need to prove their worth.",
            //         "url": "https://www.businessinsider.com/what-is-crypto-and-is-it-making-a-comeback-2023-4",
            //         "urlToImage": "https://i.insider.com/643ec50e0a29b400188107b5?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-18T17:36:11Z",
            //         "content": "<ul>\n<li>Cryptocurrencies had a dreadful year in 2022, with investors losing billions.</li>\n<li>Now, prices of bitcoin and ethereum are recovering.</li>\n<li>But Insider correspondent April Joyner say… [+384 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Theron Mohamed",
            //         "title": "Howard Marks says rock-bottom rates are history, bitcoin has its uses, and AI won't replace the best investors. Here are his 8 best quotes from a new interview.",
            //         "description": "Rates won't return to zero, the banking fiasco shone a light on bitcoin, and AI wouldn't spot Steve Jobs' or Amazon's potential, Howard Marks said.",
            //         "url": "https://markets.businessinsider.com/news/stocks/howard-marks-oaktree-interest-rates-fed-bitcoin-crypto-government-debt-2023-4",
            //         "urlToImage": "https://i.insider.com/64395319f62706001942feb0?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-15T10:46:08Z",
            //         "content": "Howard Marks.K. Y. Cheng/South China Morning Post/Getty Images\r\n<ul>\n<li>Howard Marks says interest rates won't return to zero anytime soon.</li>\n<li>The billionaire investor warns the ballooning US … [+2867 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Carla Mozée",
            //         "title": "People can now buy and sell real estate with crypto on what's being billed as the first US bitcoin property marketplace",
            //         "description": "Texas properties are the first listed on a new platform allowing people to use bitcoin to buy residential and commercial real estate in the US.",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-real-estate-crypto-marketplace-properties-buy-sell-platform-coinbase-2023-4",
            //         "urlToImage": "https://i.insider.com/6442e3b6e1a96300185aa255?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-24T12:08:35Z",
            //         "content": "Tricon Residential is slowing purchases in the face of higher interest rates. But it's also waiting for opportunities to buy larger portfolios at discounted prices, its CEO, Gary Berman, said. pbk-pg… [+2540 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Zahra Tayeb",
            //         "title": "'Rich Dad Poor Dad' author Robert Kiyosaki says cash is trash - and touts bitcoin as 'real money' after previously slamming it as speculative play",
            //         "description": "\"To me, Gold, Silver, &Bitcoin are real money. To me Cash is trash,\" the \"Rich Dad Poor Dad\" author tweeted on Monday.",
            //         "url": "https://markets.businessinsider.com/news/currencies/rich-dad-poor-dad-robert-kiyosaki-cash-is-trash-bitcoin-2023-4",
            //         "urlToImage": "https://i.insider.com/5e2b330162fa813e507e2845?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-24T11:04:02Z",
            //         "content": "\"Rich Dad Poor Dad\" author Robert Kiyosaki.Matt Carasella/Patrick McMullan/Getty Images\r\n<ul>\n<li>Personal-finance guru Robert Kiyosaki thinks cash is trash, while touting bitcoin, silver and gold as… [+1913 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Jennifer Sor",
            //         "title": "Apple will remove the bitcoin white paper from its computers in the next update to macOS, report says",
            //         "description": "Apple will likely take the bitcoin white paper out of future updates, and a work ticket has already been filed to remove the paper, a source said.",
            //         "url": "https://markets.businessinsider.com/news/currencies/apple-bitcoin-white-paper-andy-baio-remove-update-satoshi-nakamoto-2023-4",
            //         "urlToImage": "https://i.insider.com/644933ca90523900196ff5e1?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-26T15:32:37Z",
            //         "content": "A man walks past a backlit Apple logo during an Apple media event in San Francisco, California, September 9, 2015REUTERS/Beck Diefenbach\r\n<ul>\n<li>Apple will likely remove the bitcoin white paper fro… [+2458 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Slashdot.org"
            //         },
            //         "author": "msmash",
            //         "title": "The Kingdom Of Bhutan Has Been Quietly Mining Bitcoin For Years",
            //         "description": "The Himalayan kingdom confirmed it has been running a bitcoin mining operation as mystery surrounds the scale of its earlier cryptocurrency investments. From a report: Beneath the Himalayas, rivers fed by ancient glaciers supply the tiny kingdom of Bhutan wit…",
            //         "url": "https://slashdot.org/story/23/05/01/0840251/the-kingdom-of-bhutan-has-been-quietly-mining-bitcoin-for-years",
            //         "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            //         "publishedAt": "2023-05-01T15:20:00Z",
            //         "content": "Beneath the Himalayas, rivers fed by ancient glaciers supply the tiny kingdom of Bhutan with immense stores of hydroelectricity. The renewable resource has become an economic engine, accounting for 3… [+1495 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Filip De Mott",
            //         "title": "Bitcoin could soar 268% to $100,000 as crypto winter is finally over, Standard Chartered says",
            //         "description": "\"While sources of uncertainty remain, we think the pathway to the USD 100,000 level is becoming clearer.\"",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-100000-crypto-winter-bank-crisis-btc-halving-2023-4",
            //         "urlToImage": "https://i.insider.com/6446a1d5101b77001857b08b?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-24T17:43:48Z",
            //         "content": "Yuichiro Chino/Getty Images\r\n<ul>\n<li>Bitcoin could surge to $100,000 by the end of 2024, according to a Standard Chartered note.</li>\n<li>That's due to bank turmoil, bitcoin halving, and the expecte… [+2841 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "Bitcoin surges 9% toward key level of $30,000 as crypto market rallies amid fresh banking sector fears",
            //         "description": "\"[Investors are] signaling risk-on sentiment, as they anticipate a potential softer Fed policy and liquidity injections surrounding First Republic.\"",
            //         "url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-market-rally-ethereum-solana-first-republic-bank-2023-4",
            //         "urlToImage": "https://i.insider.com/62d8aec20c98f500195ec74f?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-26T18:35:27Z",
            //         "content": "Bitcoin offices in Istanbul, Turkey on June 21, 2022.Umit Turhan Coskun/Getty Images\r\n<ul>\n<li>Bitcoin surged as much as 9% on Wednesday, nearing the important $30,000 level.</li>\n<li>The rally comes… [+2304 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "wired",
            //             "name": "Wired"
            //         },
            //         "author": "Paul Ford",
            //         "title": "So Your Kid Wants to Be a Twitch Streamer",
            //         "description": "Don’t panic. Instead, teach your beloved offspring to answer the Three Questions of Streaming.",
            //         "url": "https://www.wired.com/story/so-your-kid-wants-to-be-a-twitch-streamer-three-questions/",
            //         "urlToImage": "https://media.wired.com/photos/643f0dd221515ed3833570d1/191:100/w_1280,c_limit/WIRED_TwishaP_03_YouTube-Money-web.jpg",
            //         "publishedAt": "2023-04-25T11:00:00Z",
            //         "content": "I pray that one day you will not. But look inside the can, beyond the neon-pink ichor. You want that beverage. But when you are a streamer, that beverage wants things from you. It wants you to drive … [+3027 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "George Glover",
            //         "title": "Crypto stocks rally after bitcoin breaks above $30,000 to hit a 10-month high",
            //         "description": "Shares of crypto-related Coinbase, MicroStrategy, and Marathon Digital look set to build on gains as investors took heart from bitcoin's resurgence.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-crypto-bitcoin-30k-coinbase-microstrategy-investing-analysis-2023-4",
            //         "urlToImage": "https://i.insider.com/614c4813c2c9630018f5ec68?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-11T12:15:11Z",
            //         "content": "Coinbase set to build on gains after bitcoin hit a 10-month high Tuesday.Richard Drew/Associated Press\r\n<ul>\n<li>Crypto-related stocks rose Tuesday after bitcoin broke above $30,000 to hit a 10-month… [+2303 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Gizmodo.com"
            //         },
            //         "author": "Jody Serrano",
            //         "title": "Twitter Partners with eToro to Let Users Buy and Sell Stocks, Crypto",
            //         "description": "Elon Musk’s Twitter, which the billionaire said this week is now being run by his dog, has closed a partnership deal with the online investing platform eToro, proving that the company might not be as radioactive as some people might think. Read more...",
            //         "url": "https://gizmodo.com/twitter-partners-etoro-buy-stocks-crypto-cashtags-1850331598",
            //         "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5b32026cc24af364a349c287a696b5a5.jpg",
            //         "publishedAt": "2023-04-13T11:50:00Z",
            //         "content": "Elon Musks Twitter, which the billionaire said this week is now being run by his dog, has closed a partnership deal with the online investing platform eToro, proving that the company might not be as … [+2326 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Gizmodo.com"
            //         },
            //         "author": "Lauren Leffer",
            //         "title": "'The Dumpster Fire Is Out:' Attorneys for Bankrupt FTX Consider Restarting Exchange",
            //         "description": "While SBF and other former FTX execs face criminal fraud charges, the company's attorney says they've recovered $7.3 billion in assets.",
            //         "url": "https://gizmodo.com/ftx-sam-bankman-fried-crypto-sbf-1850331812",
            //         "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/110fad4ab8a698a4be70f1d1464dafbe.jpg",
            //         "publishedAt": "2023-04-13T14:45:00Z",
            //         "content": "You know that classic zombie movie scene where the everyone thinks the monster is dead, but then suddenly its not?\r\nFTX, the bankrupt crypto exchange that imploded last year, has recouped over $7.3 b… [+2371 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Slashdot.org"
            //         },
            //         "author": "msmash",
            //         "title": "Crypto's Ethereum Blockchain Completes Its Key Shanghai Software Upgrade",
            //         "description": "The Ethereum blockchain, the most important commercial highway in the digital-asset sector, successfully implemented a widely anticipated software upgrade. From a report: The so-called Shanghai update enables investors to queue up to withdraw Ether coins that…",
            //         "url": "https://tech.slashdot.org/story/23/04/13/0856215/cryptos-ethereum-blockchain-completes-its-key-shanghai-software-upgrade",
            //         "urlToImage": "https://a.fsdn.com/sd/topics/software_64.png",
            //         "publishedAt": "2023-04-13T15:20:00Z",
            //         "content": "The so-called Shanghai update enables investors to queue up to withdraw Ether coins that they had pledged to help operate the network in return for rewards, a process called staking. Tim Beiko, who h… [+866 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Zahra Tayeb",
            //         "title": "Ark's Cathie Wood once again hypes Tesla – expecting her darling stock to hit $2,000 in five years thanks to a robotaxi boom",
            //         "description": "Cathie Wood said Tesla stock could hit $2,000 by 2027 thanks to a robotaxi boom, marking a 1,127% surge from the carmaker's current share price.",
            //         "url": "https://markets.businessinsider.com/news/stocks/cathie-wood-tesla-outlook-stock-could-hit-2000-by-2027-2023-4",
            //         "urlToImage": "https://i.insider.com/628605460fdb180018cc1a1f?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-21T09:46:58Z",
            //         "content": "Ark Invest's Cathie Wood.Photo by Marco Bello/Getty Images\r\n<ul>\n<li>Famed money manager Cathie Wood has made an eye-popping prediction about Tesla, once again. </li>\n<li>The Ark Invest CEO said the … [+2162 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Xataka.com"
            //         },
            //         "author": "Enrique Pérez",
            //         "title": "El Bitcoin supera de nuevo los 30.000 dólares: una loca (y frágil) subida en medio de la incertidumbre",
            //         "description": "El Bitcoin ya supera los 30.000 dólares. La criptomoneda más popular está teniendo un inicio de año espectacular, con una subida de más del 82%. En medio de la incertidumbre económica, el Bitcoin está teniendo un resultado más que positivo.\n<!-- BREAK 1 -->\nR…",
            //         "url": "https://www.xataka.com/criptomonedas/bitcoin-supera-30-000-dolares-loca-fragil-subida-medio-incertidumbre-economica",
            //         "urlToImage": "https://i.blogs.es/8b7b1e/bitcoin/840_560.jpeg",
            //         "publishedAt": "2023-04-11T09:30:43Z",
            //         "content": "El Bitcoin ya supera los 30.000 dólares. La criptomoneda más popular está teniendo un inicio de año espectacular, con una subida de más del 82%. En medio de la incertidumbre económica, el Bitcoin est… [+2321 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Hipertextual"
            //         },
            //         "author": "Gabriel Erard",
            //         "title": "Intel cancela su chip para minar Bitcoin, apenas un año después de anunciarlo",
            //         "description": "La aventura de Intel en el mundo de las criptomonedas ha finalizado de un modo repentino. Tom's Hardware reporta que la compañía ha decidido discontinuar Blockscale, su chip dedicado a equipos para minar Bitcoin —conocidos como mineros ASIC—. La noticia sale …",
            //         "url": "http://hipertextual.com/2023/04/intel-cancela-chip-minar-bitcoin",
            //         "urlToImage": "https://imgs.hipertextual.com/wp-content/uploads/2023/04/intel-scaled.jpg",
            //         "publishedAt": "2023-04-18T18:22:13Z",
            //         "content": "La aventura de Intel en el mundo de las criptomonedas ha finalizado de un modo repentino. Tom's Hardware reporta que la compañía ha decidido discontinuar Blockscale, su chip dedicado a equipos para m… [+4462 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "Dogecoin's sharp rally fades after brief burst of enthusiasm around Twitter's new Shiba Inu logo",
            //         "description": "When Insider reached out for comment on Twitter's new Shiba Inu logo, its press email auto-responded with a single poop emoji.",
            //         "url": "https://markets.businessinsider.com/news/currencies/dogecoin-price-elon-musk-twitter-crypto-meme-coin-shiba-inu-2023-4",
            //         "urlToImage": "https://i.insider.com/642ec5f5de7d9200193a4314?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-06T14:36:00Z",
            //         "content": "Bitcoin and Dogecoin cryptocurrencies.Jakub Porzycki/NurPhoto via Getty Images\r\n<ul>\n<li>Dogecoin has fallen 8% over the past 24 hours following a huge meme-coin rally earlier this week. </li>\n<li>Th… [+1466 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "MacRumors"
            //         },
            //         "author": "MacRumors Staff",
            //         "title": "Top Stories: iOS 17 and watchOS 10 Rumors, When to Expect a New iMac, and More",
            //         "description": "WWDC is now just two months away, and we're starting to hear a bit more about what we might see with upcoming iOS 17 and watchOS 10 updates that should be unveiled during the keynote.\n\n\n\n\n\nThis week also saw the release of an iOS 16.4.1 bug fix update, anothe…",
            //         "url": "https://www.macrumors.com/2023/04/08/top-stories-ios-17-watchos-10-rumors/",
            //         "urlToImage": "https://images.macrumors.com/t/0v6rR6VqVq6JRGH-t2VBONRUGUc=/1600x/article-new/2023/04/top-stories-8apr2023.jpg",
            //         "publishedAt": "2023-04-08T13:00:00Z",
            //         "content": "WWDC is now just two months away, and we're starting to hear a bit more about what we might see with upcoming iOS 17 and watchOS 10 updates that should be unveiled during the keynote.\r\nThis week also… [+3786 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "engadget",
            //             "name": "Engadget"
            //         },
            //         "author": "Mat Smith",
            //         "title": "The Morning After: White House proposes a 30 percent tax on electricity used for crypto mining",
            //         "description": "The Biden administration wants to impose a 30 percent tax, called the Digital Asset Mining Energy or DAME excise tax, on the electricity used for cryptocurrency mining. It explained it wants to tax crypto-mining companies because they aren't paying for the \"f…",
            //         "url": "https://www.engadget.com/the-morning-after-white-house-proposes-a-30-percent-tax-on-electricity-used-for-crypto-mining-095933394.html",
            //         "urlToImage": "https://s.yimg.com/uu/api/res/1.2/WT0rf.kcraACXJO_L1CMOg--~B/Zmk9ZmlsbDtoPTYzMDtweW9mZj0wO3c9MTIwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-05/77b3f5d0-e9ad-11ed-b6dd-8ea4ea1b0a6b.cf.jpg",
            //         "publishedAt": "2023-05-04T09:59:33Z",
            //         "content": "The Biden administration wants to impose a 30 percent tax, called the Digital Asset Mining Energy or DAME excise tax, on the electricity used for cryptocurrency mining. It explained it wants to tax c… [+3753 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Max Adams",
            //         "title": "Crypto is either dead in the water or about to notch new records as soon as next year - it depends on who you ask",
            //         "description": "Insider breaks down some divergent views on the fate of the cryptocurrency market.",
            //         "url": "https://www.businessinsider.com/crypto-dead-bitcoin-prediction-100000-2024-chamath-palihapitiya-cryptocurrency-podcast-2023-4",
            //         "urlToImage": "https://i.insider.com/6446dda5120cd7001865ea56?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-25T10:16:07Z",
            //         "content": "Good morning. I'm senior editor, Max Adams. \r\nYou don't have to be an avid follower of the media's comings and goings to know that yesterday was a momentous day for cable news. \r\nSpecifically, two of… [+5289 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "Ethereum drops 7% amid wider crypto sell-off as traders assess rate uncertainty",
            //         "description": "From whales unloading massive positions to broader uncertainty, crypto experts weigh in on what's causing the downside pressure.",
            //         "url": "https://markets.businessinsider.com/news/currencies/ethereum-price-crypto-market-crash-bitcoin-doge-solana-inflation-recession-2023-4",
            //         "urlToImage": "https://i.insider.com/643fdff83f6f690018de75e5?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-19T15:13:57Z",
            //         "content": "(Photo illustration by Jonathan Raa/NurPhoto via Getty Images)\r\n<ul>\n<li>Ethereum fell as much as 7% and bitcoin fell 3% in under 30 minutes early Wednesday.</li>\n<li>Altcoins are taking hits too, wi… [+2555 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "ReadWrite"
            //         },
            //         "author": "Joel Comm",
            //         "title": "How to Beat the Crypto Tax Crisis",
            //         "description": "Clinton Donnelly has a horror story that could keep many crypto investors awake at night. The CPA, who specializes in calculating taxes on crypto profits, had a client who came to him after being arrested by the IRS. The client wasn’t a crypto trader. He hadn…",
            //         "url": "https://readwrite.com/how-to-beat-the-crypto-tax-crisis/",
            //         "urlToImage": "https://images.readwrite.com/wp-content/uploads/2022/10/Buying-and-Selling-Cryptocurrency.jpg",
            //         "publishedAt": "2023-05-03T12:00:44Z",
            //         "content": "Clinton Donnelly has a horror story that could keep many crypto investors awake at night.\r\nThe CPA, who specializes in calculating taxes on crypto profits, had a client who came to him after being ar… [+5069 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Xataka.com"
            //         },
            //         "author": "Enrique Pérez",
            //         "title": "El gran secreto de Bután: han estado minando Bitcoin silenciosamente en el Himalaya durante años",
            //         "description": "Bután es un reino budista con menos de 800.000 habitantes. Es uno de los países más pequeños del mundo y está oculto entre los valles y montañas que conforman el Himalaya. Su economía se basa principalmente en el turismo, pero desde hace años han estado traba…",
            //         "url": "https://www.xataka.com/criptomonedas/gran-secreto-butan-han-estado-minando-bitcoin-silenciosamente-himalaya-durante-anos",
            //         "urlToImage": "https://i.blogs.es/726e7b/butan-templo/840_560.jpeg",
            //         "publishedAt": "2023-05-02T16:30:37Z",
            //         "content": "Bután es un reino budista con menos de 800.000 habitantes. Es uno de los países más pequeños del mundo y está oculto entre los valles y montañas que conforman el Himalaya. Su economía se basa princip… [+2656 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "AppleInsider"
            //         },
            //         "author": "news@appleinsider.com (Andrew Orr)",
            //         "title": "Man who claims to be Bitcoin creator eyes lawsuit against Apple",
            //         "description": "The Bitcoin whitepaper was recently discovered to be embedded in several versions of macOS, and now a person who claims to be the creator of Bitcoin is accusing Apple of copyright violation.Latest Bitcoin controversyJust two days ago, on April 5, a Mac user d…",
            //         "url": "https://appleinsider.com/articles/23/04/07/man-who-claims-to-be-bitcoin-creator-eyes-lawsuit-against-apple",
            //         "urlToImage": "https://photos5.appleinsider.com/gallery/53864-108358-bitcoin-xl.jpg",
            //         "publishedAt": "2023-04-07T15:49:24Z",
            //         "content": "Latest Bitcoin controversy\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe Bitcoin whitepaper was recently discovered to be embedded in several versio… [+1751 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "heise online"
            //         },
            //         "author": "Mark Mantel",
            //         "title": "Blockscale: Intel gibt seine Bitcoin-Miner auf",
            //         "description": "Weitere Konsolidierung bei Intel: Die Firma stellt die Entwicklung von ASICs fürs Krypto-Mining ein, schließt eine Wiederkehr aber nicht aus.",
            //         "url": "https://www.heise.de/news/Blockscale-Intel-gibt-seine-Bitcoin-Miner-auf-8971444.html",
            //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/5/4/7/2/Intel_Bitcoin-4cda2db81899e691.jpg",
            //         "publishedAt": "2023-04-19T08:04:00Z",
            //         "content": "Intel hat den Produktionsstopp seiner anwendungsspezifischen Schaltungen (ASICs) fürs Mining der Kryptowährung Bitcoin bekannt gegeben. Unternehmenskunden können Modelle aus der aktuellen Blockscale-… [+2376 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Theron Mohamed",
            //         "title": "Warren Buffett predicts more bank failures, dismisses bitcoin buyers as gamblers, and warns inflation and recession are serious threats in a new interview. Here are the 14 best quotes.",
            //         "description": "Warren Buffett touted the immense value of Apple's products, joked his planned successor does all the work, and asked if ChatGPT is good for society.",
            //         "url": "https://markets.businessinsider.com/news/stocks/warren-buffett-banking-crisis-bitcoin-inflation-recession-apple-chatgpt-abel-2023-4",
            //         "urlToImage": "https://i.insider.com/61695bfc38c1960018300702?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-13T10:51:57Z",
            //         "content": "Warren Buffett.Alex Wong / Getty Images\r\n<ul>\n<li>Warren Buffett predicted more banks will fail and compared bitcoin fans to gamblers.</li>\n<li>He warned inflation and recession are major risks, prai… [+4316 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Phil Rosen",
            //         "title": "How Warren Buffett's Berkshire Hathaway can navigate the looming economic turmoil",
            //         "description": "Top Buffett historians and financial pros shared how the conglomerate can withstand a looming recession and scoop up bargains along the way.",
            //         "url": "https://www.businessinsider.com/how-warren-buffetts-berkshire-hathaway-can-navigate-economic-turmoil-2023-4",
            //         "urlToImage": "https://i.insider.com/642ed65d2a659a0019a6a8f0?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-07T10:12:12Z",
            //         "content": "Markets are closed today but the Opening Bell newsletter rings nonetheless. Phil Rosen here — good to see you. The main thing to watch today is the March jobs report, which is due at 8:30 a.m. ET. Wh… [+3157 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Matthew Fox",
            //         "title": "US stocks trade mixed as investors weigh solid earnings against continued bank stress",
            //         "description": "A poor earnings report from First Republic Bank sent the stock to new all-time lows as it failed to stem deposit outflows.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-first-republic-instability-reignites-bank-fears-2023-4",
            //         "urlToImage": "https://i.insider.com/64497c9a9052390019700ee1?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-26T20:05:44Z",
            //         "content": "Traders look on after trading was halted on the floor of the New York Stock Exchange (NYSE) in New York, U.S., March 18, 2020Lucas Jackson/Reuters\r\n<ul><li>US stocks were mixed on Wednesday after str… [+2598 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Gigazine.net"
            //         },
            //         "author": "@GIGAZINE",
            //         "title": "Mojave以降のmacOSに「ビットコインの論文」が隠されていることが判明、保存場所はココ",
            //         "description": "ビットコインが「サトシ・ナカモト」と名乗る匿名の研究者によって開発されたことは広く知られています。新たに、2018年にリリースされた「macOS Mojave」以降のmacOSに「サトシ・ナカモトが記したビットコインの論文」が初期状態で保存されていることが明らかになりました。続きを読む...",
            //         "url": "https://gigazine.net/news/20230406-macos-bitcoin-whitepaper/",
            //         "urlToImage": "https://i.gzn.jp/img/2023/04/06/macos-bitcoin-whitepaper/00.png",
            //         "publishedAt": "2023-04-06T11:00:00Z",
            //         "content": "2018macOS MojavemacOS\r\nThe Bitcoin Whitepaper Is Hidden in Every Modern Copy of macOS - Waxy.orghttps://waxy.org/2023/04/the-bitcoin-whitepaper-is-hidden-in-every-modern-copy-of-macos/\r\nFinderMacinto… [+382 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "jsor@insider.com (Jennifer Sor)",
            //         "title": "Markets are facing a black swan event with 'nowhere to hide' as the latest rally has fueled a bubble that could burst at any time, veteran technical analyst says",
            //         "description": "\"There's nowhere to hide, no diversification in this type of market. This is a black swan event,\" one veteran technical strategist says.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-outlook-black-swan-crash-rally-bubble-burst-earnings-2023-4",
            //         "urlToImage": "https://i.insider.com/644178d3632fda001803d5c1?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-20T17:50:02Z",
            //         "content": "Markets are facing a black swan event, and investors have nowhere to run as the rally across markets in 2023 has inflated a dangerous bubble, according to veteran technical analyst Jeff Bierman.\r\nBie… [+1726 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Rongarret.info"
            //         },
            //         "author": "Ron",
            //         "title": "A systematic critique of Bitcoin's value proposition",
            //         "description": "1. Introduction This essay was originally entitled \"Bitcoin's design contains the seeds of its own destruction\".  The thesis was going to be...",
            //         "url": "http://blog.rongarret.info/2023/04/a-systematic-critique-of-bitcoins-value.html",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-12T18:02:02Z",
            //         "content": "1. Introduction\r\nThis essay was originally entitled \"Bitcoin's design contains the seeds of its own destruction\".  The thesis was going to be that Bitcoin's security depends entirely on consuming vas… [+30728 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "heise online"
            //         },
            //         "author": "Adam Popescu",
            //         "title": "heise+ | Mining für den Naturschutz: Warum ein Nationalpark im Kongo Bitcoins schürft",
            //         "description": "Um seine Wälder samt Tierwelt zu schützen, hat der Nationalpark Virunga im Kongo eine Bitcoin-Mining-Farm eröffnet.",
            //         "url": "https://www.heise.de/hintergrund/Mining-fuer-den-Naturschutz-Warum-ein-Nationalpark-im-Kongo-Bitcoins-schuerft-8244190.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/0/9/3/7/0/2/aufmacher_bitcoin_mine-0f975cce5d7a941c.jpg",
            //         "publishedAt": "2023-04-28T12:30:00Z",
            //         "content": "Inhaltsverzeichnis\r\nDie AK-47 ist schwer, aber der Mann, der die Waffe in der Hand hält, zuckt nicht mit der Wimper, als er auf dem dicht bewaldeten Berg patrouilliert. Hier im Ostkongo kostet die Mu… [+1581 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "AppleInsider"
            //         },
            //         "author": "news@appleinsider.com (Wesley Hilliard)",
            //         "title": "Bitcoin whitepaper removed in macOS Ventura 13.4 beta 3",
            //         "description": "Apple quietly removed the Virtual Scanner II app and, with it, the Bitcoin whitepaper in the latest macOS Ventura 13.4 beta.Apple removed the Bitcoin whitepaperThere are numerous Easter eggs and hidden files in macOS that won't appear without some kind of spe…",
            //         "url": "https://appleinsider.com/articles/23/04/25/bitcoin-whitepaper-removed-in-macos-ventura-134-beta-3",
            //         "urlToImage": "https://photos5.appleinsider.com/gallery/54152-109106-53841-108287-bitcoin-o-xl.jpg",
            //         "publishedAt": "2023-04-25T20:44:25Z",
            //         "content": "Apple removed the Bitcoin whitepaper\r\nApple quietly removed the Virtual Scanner II app and, with it, the Bitcoin whitepaper in the latest macOS Ventura 13.4 beta.\r\nThere are numerous Easter eggs and … [+1376 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Xataka.com"
            //         },
            //         "author": "Enrique Pérez",
            //         "title": "Golpe sorpresa de Argentina contra las criptomonedas: ha prohibido a las billeteras ofrecerlas",
            //         "description": "El Banco Central de Argentina ha tomado una decisión que pocos esperaban. A partir de hoy, las billeteras virtuales no podrán operar con criptomonedas. Un movimiento que estrecha el cerco ante este tipo de activos, ya que impide su acceso desde un gran número…",
            //         "url": "https://www.xataka.com/criptomonedas/golpe-sorpresa-argentina-criptomonedas-ha-prohibido-a-billeteras-ofrecerlas",
            //         "urlToImage": "https://i.blogs.es/a30291/argentina-bitcoin/840_560.jpeg",
            //         "publishedAt": "2023-05-05T08:12:29Z",
            //         "content": "El Banco Central de Argentina ha tomado una decisión que pocos esperaban. A partir de hoy, las billeteras virtuales no podrán operar con criptomonedas. Un movimiento que estrecha el cerco ante este t… [+2220 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Xataka.com"
            //         },
            //         "author": "Enrique Pérez",
            //         "title": "Ethereum está recortando distancia al Bitcoin con una fórmula ganadora: ser más descentralizado que nunca",
            //         "description": "El 'cripto invierno' ha quedado atrás. Si el Bitcoin lleva un 2023 muy bueno, la segunda criptomoneda más importante está teniendo un camino similar. Ethereum se encuentra en un momento crítico, pues estos días se ha completado Shapella, su actualización más …",
            //         "url": "https://www.xataka.com/criptomonedas/ethereum-esta-recortando-distancia-al-bitcoin-formula-ganadora-ser-descentralizado-que-nunca",
            //         "urlToImage": "https://i.blogs.es/b9c1dd/ethereum/840_560.jpeg",
            //         "publishedAt": "2023-04-17T10:00:44Z",
            //         "content": "El 'cripto invierno' ha quedado atrás. Si el Bitcoin lleva un 2023 muy bueno, la segunda criptomoneda más importante está teniendo un camino similar. Ethereum se encuentra en un momento crítico, pues… [+3126 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks decline as traders brace for big earnings from mega-cap tech firms",
            //         "description": "Tech giants Alphabet and Microsoft are set to report quarterly results after the closing bell on Tuesday.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-microsoft-alphabet-tech-earnings-season-investing-outlook-2023-4",
            //         "urlToImage": "https://i.insider.com/6447c9b190523900196fcd10?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-25T13:51:06Z",
            //         "content": "Traders work on the floor of the New York Stock ExchangeSpencer Platt/Getty Images\r\n<ul>\n<li>US stocks are trading lower on Tuesday as trader braces for more earnings reports. </li>\n<li>Tech giants A… [+1813 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks rise as Big Tech earnings stay strong and US GDP growth slows",
            //         "description": "Meta Platforms stock jumped after reporting first-quarter results that beat Wall Street's estimates.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-meta-facebook-instagram-big-tech-gdp-growth-2023-4",
            //         "urlToImage": "https://i.insider.com/640f546aa3b2a10018b2b2f1?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-27T13:45:37Z",
            //         "content": "TIMOTHY A. CLARY / Getty\r\n<ul>\n<li>US stocks rose as Big Tech earnings stayed strong while US GDP growths slowed. </li>\n<li>Meta stock jumped after reporting first-quarter results that beat Wall Stre… [+1756 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "heise online"
            //         },
            //         "author": "Michael Plura",
            //         "title": "heise+ | Hardware-Wallets: Bitcoin und andere Kryptowährungen sicher aufbewahren",
            //         "description": "Immer wieder stehlen Hacker Kryptocoins oder bekannte Börsen gehen pleite. Eine Hardware-Wallet schützt gegen den Verlust – doch welche sollte man benutzen?​",
            //         "url": "https://www.heise.de/tests/Anbieter-Uebersicht-Kryptocoins-mit-Hardware-Wallets-sichern-8969077.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/4/2/4/1/Titel-034ee0d559ee0fbc.JPG",
            //         "publishedAt": "2023-04-25T10:15:00Z",
            //         "content": "Inhaltsverzeichnis\r\nViele Besitzer von Kryptowährungen gehen oft erstaunlich unbedarft mit ihrem Kapital um. Auf dem PC oder noch schlimmer dem Handy lagern Kryptocoins im Wert von hunderten, tausend… [+1911 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "heise online"
            //         },
            //         "author": "Martin Holland",
            //         "title": "USA: Geschäftsmann soll wegen Bitcoin-Betrug 3,4 Milliarden US-Dollar zahlen",
            //         "description": "Weil er mit falschen Versprechen Bitcoin eingetrieben und die veruntreut hat, muss ein südafrikanischer Geschäftsmann das Geld zurück- und eine Strafe bezahlen.",
            //         "url": "https://www.heise.de/news/USA-Geschaeftsmann-soll-wegen-Bitcoin-Betrug-3-4-Milliarden-US-Dollar-zahlen-8981637.html",
            //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/5/0/9/6/8/shutterstock_1937129161-91f75b37827ffe38.jpg",
            //         "publishedAt": "2023-04-28T06:34:00Z",
            //         "content": "Der Chef einer südafrikanischen Firma ist von einem US-Gericht dazu verurteilt worden, wegen Bitcoin-Betrugs insgesamt 3,4 Milliarden US-Dollar (3,1 Milliarden Euro) zu zahlen. Das berichtet die Nach… [+2025 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "9to5Mac"
            //         },
            //         "author": "Filipe Espósito",
            //         "title": "Here’s why macOS has the Bitcoin whitepaper hidden in its files",
            //         "description": "It’s not unusual to have a few easter eggs hidden in operating systems, and it’s no different with Apple’s. However, some users recently discovered something intriguing. Every copy of macOS has the original Bitcoin whitepaper hidden in its internal files. Whi…",
            //         "url": "https://9to5mac.com/2023/04/06/macos-bitcoin-whitepaper-hidden/",
            //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/macOS-Bitcoin-whitepaper.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            //         "publishedAt": "2023-04-06T22:40:52Z",
            //         "content": "It’s not unusual to have a few easter eggs hidden in operating systems, and it’s no different with Apple’s. However, some users recently discovered something intriguing. Every copy of macOS has the o… [+3439 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "9to5Mac"
            //         },
            //         "author": "Filipe Espósito",
            //         "title": "Apple removes original Bitcoin whitepaper from the latest macOS Ventura beta",
            //         "description": "A few weeks ago, users discovered that every copy of macOS has the original Bitcoin whitepaper hidden in its internal files. Apple never discussed the reason for this, although we believe that the existence of the file there was just a joke among Apple engine…",
            //         "url": "https://9to5mac.com/2023/04/25/apple-removes-bitcoin-whitepaper-from-macos/",
            //         "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/04/macOS-Bitcoin-whitepaper.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
            //         "publishedAt": "2023-04-25T20:14:19Z",
            //         "content": "A few weeks ago, users discovered that every copy of macOS has the original Bitcoin whitepaper hidden in its internal files. Apple never discussed the reason for this, although we believe that the ex… [+1585 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Peter Rothbart,Angela Fung",
            //         "title": "Upgrade Card Reviews 2023",
            //         "description": "Read our Upgrade card reviews and see why these cards are ideal for those who want the flexibility of a credit card and the predictability of a loan.",
            //         "url": "https://www.businessinsider.com/personal-finance/upgrade-card-reviews",
            //         "urlToImage": "https://i.insider.com/6453c739dcb78700180cdd87?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-04T22:10:50Z",
            //         "content": "Our experts answer readers' credit card questions and write unbiased product reviews (here's how we assess credit cards). In some cases, we receive a commission from our partners; however, our opinio… [+10713 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "MarketWatch"
            //         },
            //         "author": "Anushree Dave",
            //         "title": "Key Words: ‘I don’t understand why people are more inclined to go to bitcoin than gold’, says hedge fund billionaire Ray Dalio",
            //         "description": "Ray Dalio, billionaire and founder of Bridgewater Associates, says he still owns a little bit of bitcoin.",
            //         "url": "https://www.marketwatch.com/story/i-dont-understand-why-people-are-more-inclined-to-go-to-bitcoin-than-gold-says-hedge-fund-billionaire-ray-dalio-5bb0c823",
            //         "urlToImage": "https://images.mktw.net/im-715923/social",
            //         "publishedAt": "2023-04-26T18:05:00Z",
            //         "content": "Ray Dalio, billionaire and founder of Bridgewater Associates, holds a little bit of bitcoin BTCUSD, but doesnt understand why people are more inclined to go to bitcoin than gold, he said in a new pod… [+321 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Journal du geek"
            //         },
            //         "author": "Tristan",
            //         "title": "Le “livre blanc” du Bitcoin était caché dans macOS depuis 5 ans",
            //         "description": "Le Bitcoin est aujourd'hui la devise numérique al plus populaire au monde, son \"livre blanc\" écrit en 2008 en explique les grands principes. \nLe “livre blanc” du Bitcoin était caché dans macOS depuis 5 ans",
            //         "url": "https://www.journaldugeek.com/2023/04/07/le-livre-blanc-du-bitcoin-etait-cache-dans-macos-depuis-5-ans/",
            //         "urlToImage": "https://www.journaldugeek.com/content/uploads/2022/02/comment-vendre-bitcoin.jpg",
            //         "publishedAt": "2023-04-07T14:30:43Z",
            //         "content": "Le Bitcoin est aujourd'hui la devise numérique al plus populaire au monde, son \"livre blanc\" écrit en 2008 en explique les grands principes.Andy Baio est un développeur assez connu aux États-Unis. Il… [+2787 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "The Guardian"
            //         },
            //         "author": "Emma Beddington",
            //         "title": "What has my terrifying fridge taught me? I am too relaxed about best before dates | Emma Beddington",
            //         "description": "In our culinary catacomb, the unwary visitor is greeted by explosive kimchi, mould-capped pesto, tahini like concrete and a vat of vintage vinegars“Does everyone,” the film critic Anne Billson asked on Twitter, “have an evil jar in their fridge?” To which sur…",
            //         "url": "https://www.theguardian.com/commentisfree/2023/apr/10/fridge-best-before-dates-kimchi-pesto-tahini",
            //         "urlToImage": "https://i.guim.co.uk/img/media/8f8782be0f0cbac07bc6c32226bfce0513636609/82_100_4876_2926/master/4876.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=40f55513312944f31c9f084f4684a397",
            //         "publishedAt": "2023-04-10T06:00:12Z",
            //         "content": "Does everyone, the film critic Anne Billson asked on Twitter, have an evil jar in their fridge? To which surely the correct answer is: Only one? Lightweight. We have a whole fridge shelf dedicated to… [+2000 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Golem.de"
            //         },
            //         "author": "Daniel Ziegener",
            //         "title": "Kryptoleitwährung im Aufwind: Bitcoin erstmals seit Monaten wieder über 30.000 US-Dollar",
            //         "description": "Im Juni 2022 durchbrach die größte Kryptowährung den Wert von oben. Neun Monate später hat sich der Bitcoin-Kurs wieder erholt. (Bitcoin, Silicon Valley)",
            //         "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkryptoleitwaehrung-im-aufwind-bitcoin-erstmals-seit-monaten-wieder-ueber-30-000-us-dollar-2304-173342.html&referer=https%3A%2F%2Ft.co%2Fbf065d3080",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-11T13:46:01Z",
            //         "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "VentureBeat"
            //         },
            //         "author": "Adrian Krion, Spielworks",
            //         "title": "From battlefield to homefront: AR is bigger than the metaverse",
            //         "description": "Military uses of AR and VR can trickle down to the gaming and consumer worlds, much as the government-created internet did.",
            //         "url": "https://venturebeat.com/virtual/from-battlefield-to-homefront-ar-bigger-than-metaverse/",
            //         "urlToImage": "https://venturebeat.com/wp-content/uploads/2022/03/GettyImages-1187160851.jpg?w=1200&strip=all",
            //         "publishedAt": "2023-04-17T20:07:00Z",
            //         "content": "Join top executives in San Francisco on July 11-12, to hear how leaders are integrating and optimizing AI investments for success. Learn More\r\nThroughout modern history, the military has supplemented… [+1583 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Phil Rosen",
            //         "title": "Are we in a recession? Elon Musk says the pile of failed banks proves it.",
            //         "description": "Insider's Phil Rosen breaks down the latest market developments and the economic outlook of top commentators.",
            //         "url": "https://www.businessinsider.com/recession-forecast-elon-musk-tesla-larry-summers-treasury-markets-finance-2023-5",
            //         "urlToImage": "https://i.insider.com/645005d674e9330018efc32f?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-02T10:16:08Z",
            //         "content": "Good morning, team. I'm Phil Rosen. If you missed it Monday, regulators seized First Republic Bank and JPMorgan took over the majority of its assets. \r\nShares crashed almost 50% as markets opened and… [+4794 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Hallam Bullock",
            //         "title": "After gaining control of our reporter's phone, a hacker ripped her off for $10,000. She set out to find them.",
            //         "description": "In today's edition of 10 Things in Tech: TikTok has changed the dance industry, Musk's $1 million bounty, and your Mac may contain a hidden manifesto.",
            //         "url": "https://www.businessinsider.com/hacker-hunting-elon-musk-apple-bitcoin-bob-lee-lex-fridman-2023-4",
            //         "urlToImage": "https://i.insider.com/642eea6fde7d9200193a4bc7?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-08T11:30:13Z",
            //         "content": "Do you eat meat, reader? If so, what is your meatball of choice — beef, chicken… mammoth? Yes, you read that right. Newsletter editor Hallam Bullock here, coming to you from London.An Australian star… [+4054 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Jason Ma",
            //         "title": "US stocks climb on strong Chinese economic growth and upbeat earnings",
            //         "description": "Bank of America and Johnson & Johnson beat first-quarter earnings views, while Goldman Sachs missed.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-china-gdp-growth-goldman-sachs-earnings-2023-4",
            //         "urlToImage": "https://i.insider.com/63975699a3bebb0018b40e0e?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-18T13:33:56Z",
            //         "content": "Traders work on the floor of the New York Stock Exchange (NYSE) on October 27, 2022 in New York City.Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks rose Tuesday as China's first-quarter GDP growth of… [+2045 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "Dogecoin has surged 24% in a month, outperforming major cryptos on Elon Musk's antics",
            //         "description": "Dogecoin added to gains on Monday, spiking 6%. Elon Musk has offered a million dogecoin to whoever can prove his family owned an emerald mine.",
            //         "url": "https://markets.businessinsider.com/news/currencies/dogecoin-price-elon-musk-twitter-crypto-market-outlook-bitcoin-ethereum-2023-4",
            //         "urlToImage": "https://i.insider.com/643d3b1556f0dc0019895edc?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-17T15:37:07Z",
            //         "content": "Carina Johansen/NTB/AFP via Getty Images\r\n<ul>\n<li>Dogecoin has jumped 24% in the past month, according to Messari.</li>\n<li>The token's price often fluctuates on comments from Twitter and Tesla CEO … [+1783 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks fall after Fed raises rates but points to possible pause on further increases",
            //         "description": "Hopes for a pivot to rate cuts from the Fed were dampened after Chairman Jerome Powell expressed optimism about avoiding a recession.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-signals-future-rate-hike-pause-2023-5",
            //         "urlToImage": "https://i.insider.com/640f546aa3b2a10018b2b2f1?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-03T20:09:56Z",
            //         "content": "The central bank hiked rates by 25 basis points, as was widely expected.TIMOTHY A. CLARY / Getty\r\n<ul>\n<li>US stocks fell on Wednesday as markets digested the latest Fed rate hike of 25 basis points.… [+2212 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks rise as markets prepare for Fed's next policy decision",
            //         "description": "Wall Street will be closely watching Fed Chair Jerome Powell's comments for signals of future central bank tightening.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-fed-powell-interest-rate-hike-inflation-2023-5",
            //         "urlToImage": "https://i.insider.com/6452599df6389a0018ef4781?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-03T13:38:56Z",
            //         "content": "Traders work on the floor of the New York Stock ExchangeSpencer Platt/Getty Images\r\n<ul>\n<li>US stocks rose slightly as traders brace for the Fed's next rate move.</li>\n<li>Markets are pricing in 87%… [+1973 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "George Glover",
            //         "title": "FTX could relaunch - and one of its former VC backers may lead a $250 million funding round to revive the failed exchange, report says",
            //         "description": "FTX executives are still in the early stages of deciding whether reviving the failed crypto exchange would be worthwhile.",
            //         "url": "https://markets.businessinsider.com/news/currencies/ftx-relaunch-tribe-capital-vc-crypto-crash-sam-bankman-fried-2023-4",
            //         "urlToImage": "https://i.insider.com/643f9f5d632fda00180393e8?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-19T09:11:10Z",
            //         "content": "The logo of FTX at the entrance of the FTX Arena in Miami, Florida.Marco Bello/Reuters\r\n<ul>\n<li>Tribe Capital may lead a $250 million funding round to reboot FTX, according to Bloomberg.</li>\n<li>Tr… [+2315 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "Billionaire crypto bull Mike Novogratz says the US is headed for a credit crisis and a dramatic economic slowdown that will make bitcoin's investment case stronger",
            //         "description": "\"The government has kind of gone full jihad against crypto,\" Galaxy Digital CEO Mike Novogratz said.",
            //         "url": "https://markets.businessinsider.com/news/currencies/credit-crisis-recession-crypto-market-outlook-mike-novogratz-galaxy-digital-2023-4",
            //         "urlToImage": "https://i.insider.com/643816995f081b0019c0fe28?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-13T15:46:22Z",
            //         "content": "Mike Novogratz.Marco Bello / Stringer /Getty Images\r\n<ul>\n<li>Galaxy Digital CEO Mike Novogratz said the US is heading towards a credit crisis and a dramatic economic downturn.</li>\n<li>The crypto bu… [+1895 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Carla Mozée",
            //         "title": "US stocks fall as investors assess latest earnings and climbing bond yields",
            //         "description": "The S&P 500 was on course to fall for the first time after two straight days of gains. Morgan Stanley and Netflix shares were on the move.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-dow-nasdaq-earnings-bond-yields-banks-netflix-2023-4",
            //         "urlToImage": "https://i.insider.com/62bad7662224c3001813f01e?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-19T13:44:18Z",
            //         "content": "Traders on the floor of the New York Stock Exchange.Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks fell Wednesday, feeling the pinch from rising bond yields and as investors mulled earnings. </li>\n<l… [+2148 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Matthew Fox",
            //         "title": "US stocks trade mixed as investors prepare for first-quarter earnings results",
            //         "description": "Wall Street analysts have lowered their Q1 S&P 500 earnings estimates to $50.76 per share from $54.13 at the start of the year.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-investors-prepare-first-quarter-earnings-results-2023-4",
            //         "urlToImage": "https://i.insider.com/5f4fb1da7ed0ee001e25cfb0?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-11T13:38:46Z",
            //         "content": "Lucas Jackson/Reuters\r\n<ul><li>US stocks traded mixed on Tuesday as investors prepare for first-quarter earnings results.</li><li>The mega-cap banks including JPMorgan and Wells Fargo are scheduled t… [+2509 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Jennifer Sor",
            //         "title": "US stocks trade mixed as investors assess wave of earnings results from big companies",
            //         "description": "Earnings season has kicked off in earnest. Investors are looking past results from the biggest banks and getting ready for big tech firms to report.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-bofa-gs-jnj-corporate-earnings-economy-2023-4",
            //         "urlToImage": "https://i.insider.com/5e7cc4132d41c150481afc74?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-18T20:24:04Z",
            //         "content": "Traders work on the floor of the New York Stock Exchange (NYSE) in New York, U.S., March 20, 2020Lucas Jackson/Reuters\r\n<ul>\n<li>Stocks traded mixed on Tuesday as investors digested the wave of earni… [+2430 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Phil Rosen",
            //         "title": "US stocks climb as fresh signs point to cooling inflation and a softer labor market",
            //         "description": "The March producer price index declined 0.5% month-over-month, more than expected, while weekly jobless claims were higher than estimates.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-ppi-cooling-inflation-data-jobless-claims-2023-4",
            //         "urlToImage": "https://i.insider.com/643801285f081b0019c0f9b1?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-13T13:41:37Z",
            //         "content": "Spencer Platt/Getty Images\r\n<ul>\n<li>US stocks climbed Thursday as investors took in new economic data that pointed to cooling inflation. </li>\n<li>Thursday data showed the March producer price index… [+2162 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Jennifer Sor",
            //         "title": "Dow soars 383 points as US stocks jump on more signs inflation is falling",
            //         "description": "Data on Thursday showed that wholesale inflation tumbled in March to its lowest level since January 2021.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-inflation-march-ppi-dow-jones-economy-2023-4",
            //         "urlToImage": "https://i.insider.com/6219465caa07b20019fa1bc4?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-13T20:13:25Z",
            //         "content": "Brendan McDermid/Reuters\r\n<ul>\n<li>US stocks jumped on Thursday on more signs of falling inflation and a cooling labor market.</li>\n<li>Investors cheered data that showed a big drop in the Producer P… [+2316 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks trade mixed as traders wait for next wave of corporate earnings reports",
            //         "description": "Bank of America, Goldman Sachs, and Tesla are all expected to deliver quarterly results this week.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-markets-news-dow-nasdaq-corporate-quarterly-earnings-inflation-fed-2023-4",
            //         "urlToImage": "https://i.insider.com/643d429556f0dc0019895fcf?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-17T13:36:54Z",
            //         "content": "Stock tradersDrew Angerer/Getty Images\r\n<ul>\n<li>Moves in stock indexes were muted Monday on corporate earnings uncertainty.</li>\n<li>First-quarter earnings kicked off on Friday, with strong results … [+1847 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks trade mixed as Wall Street digests slew of earnings results",
            //         "description": "The S&P 500 and Dow Jones Industrial Average are headed for their worst trading week since March.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-pg-q1earnings-results-2023-4",
            //         "urlToImage": "https://i.insider.com/644286d277ecc80019e5b9de?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-21T13:41:47Z",
            //         "content": "Friday's inflation print shocked investors.Xinhua News Agency/Getty Images\r\n<ul>\n<li>US stocks were mixed Friday but largely flat amid more earnings reports.</li>\n<li>Over 75% of S&P 500 companies th… [+2020 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Morgan Chittum",
            //         "title": "US stocks rise but close lower for the week as investors mull mixed bag of corporate earnings",
            //         "description": "Mega-cap tech companies like Alphabet and Amazon are on deck to report quarterly results next week.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-dow-sp500-nasdaq-mixed-earnings-reports-2023-4",
            //         "urlToImage": "https://i.insider.com/6442e7c5e1a96300185aa30d?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-21T20:07:23Z",
            //         "content": "Traders work on the floor of the New York Stock ExchangeMichael M. Santiago/Getty Images\r\n<ul>\n<li>US stock indices rose Friday as investors digested mixed earnings reports.</li>\n<li>However, all thr… [+1907 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Matthew Fox",
            //         "title": "US stocks jump after big-tech earnings from Microsoft don't disappoint",
            //         "description": "Activision Blizzard fell 9% after a UK regulator said it would block the proposed merger between the video game company and Microsoft.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-big-tech-earnings-microsoft-alphabet-msft-2023-4",
            //         "urlToImage": "https://i.insider.com/60aff56ebee0fc0019d5a090?width=1200&format=jpeg",
            //         "publishedAt": "2023-04-26T13:34:42Z",
            //         "content": "Xinhua/Wang Ying/ Getty Images\r\n<ul><li>US stocks jumped on Wednesday after strong earnings from Microsoft and Alphabet.</li><li>Microsoft surged 8% after it reported solid growth in its cloud divisi… [+1971 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": "business-insider",
            //             "name": "Business Insider"
            //         },
            //         "author": "Jennifer Sor",
            //         "title": "US stocks tumble as investors fret over new bout of banking sector volatility",
            //         "description": "Banking fears piled up on Thursday, with shares of PacWest and Western Alliance plummeting throughout the trading session.",
            //         "url": "https://markets.businessinsider.com/news/stocks/stock-market-news-today-banking-crisis-volatility-pacwest-western-alliance-2023-5",
            //         "urlToImage": "https://i.insider.com/5d7faf892e22af1a0454061d?width=1200&format=jpeg",
            //         "publishedAt": "2023-05-04T20:22:32Z",
            //         "content": "Worried traderRichard Drew/Associated Press\r\n<ul>\n<li>US stocks slid on Thursday as investors dealt with fresh volatility in bank shares.</li>\n<li>All three indexes ended the day lower, with the Dow … [+1897 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "MakeUseOf"
            //         },
            //         "author": "Katie Rees",
            //         "title": "The 5 Best Bitcoin Ordinal Compatible Wallets",
            //         "description": "These wallets are the best choices to store your Bitcoin Ordinals.",
            //         "url": "https://www.makeuseof.com/best-bitcoin-ordinal-compatible-wallets/",
            //         "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/11/crypto-wallet-pic-1.jpg",
            //         "publishedAt": "2023-05-03T17:00:16Z",
            //         "content": "Bitcoin Ordinals have amassed quite a lot of hype since their launch, so it's no surprise that users are looking for wallets in which they can store them. So, what are the best Bitcoin Ordinal-compat… [+5938 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "MakeUseOf"
            //         },
            //         "author": "Temitope Olatunji",
            //         "title": "What Is Binance Auto-Invest and How Does It Work?",
            //         "description": "You can now regularly buy Bitcoin and other cryptos with Binance.",
            //         "url": "https://www.makeuseof.com/what-is-binance-auto-invest-how-does-it-work/",
            //         "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/a-picture-of-a-hand-carrying-a-phone-with-binance-chart.jpg",
            //         "publishedAt": "2023-04-18T15:00:16Z",
            //         "content": "Investing in cryptocurrencies requires studying price charts and spotting the right opportunities, which can sometimes be stressful depending on your strategy and what you want to achieve. But with B… [+5124 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "MakeUseOf"
            //         },
            //         "author": "Katie Rees",
            //         "title": "2 Reasons Bitcoin Transaction Fees Are So High Right Now",
            //         "description": "Bitcoin transaction fees are soaring once more, but what's behind the sudden rise?",
            //         "url": "https://www.makeuseof.com/reasons-bitcoin-transaction-fees-are-so-high-right-now/",
            //         "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/05/btc-graph-1.jpg",
            //         "publishedAt": "2023-05-05T17:06:17Z",
            //         "content": "If you conduct a Bitcoin transaction, chances are you'll have to pay a fee. But this fee does not stay at one figure. Bitcoin transaction fees vary all the time and are affected by several factors. A… [+4563 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "MakeUseOf"
            //         },
            //         "author": "Dmytro Spilka",
            //         "title": "What's the Difference Between a Litecoin Halving and a Bitcoin Halving?",
            //         "description": "Both Bitcoin and Litecoin have halving events. But what's the difference between the two?",
            //         "url": "https://www.makeuseof.com/litecoin-vs-bitcoin-halving/",
            //         "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/03/litecoin.jpg",
            //         "publishedAt": "2023-04-18T12:00:17Z",
            //         "content": "Often dubbed \"the silver to Bitcoin's gold,\" Litecoin shares many properties with the world's oldest and most famous cryptocurrency. Both assets have a fixed scarcity, a proof-of-work (PoW) mining sy… [+5466 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Phandroid - News for Android"
            //         },
            //         "author": "Phandroid Editors",
            //         "title": "The Rise of Bitcoin and Cryptocurrency Scams",
            //         "description": "The adoption of Bitcoin and other cryptocurrencies has significantly increased over the last few years. Unlike fiat currencies, whose usage comes with several restrictions, crypto facilitates autonomous, more secure, reliable, and low-cost transactions. While…",
            //         "url": "https://phandroid.com/2023/04/21/the-rise-of-bitcoin-and-cryptocurrency-scams/",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-21T08:07:54Z",
            //         "content": "The adoption of Bitcoin and other cryptocurrencies has significantly increased over the last few years. Unlike fiat currencies, whose usage comes with several restrictions, crypto facilitates autonom… [+3846 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "heise online"
            //         },
            //         "author": "Martin Weigel",
            //         "title": "heise+ | Krypto: Wann ein privater Investor Gewinne mit Bitcoin und Co. versteuern muss",
            //         "description": "Muss ein Privatmann, der Kryptowährungen verkauft oder tauscht, Gewinne versteuern? Ja, sagt der Bundesfinanzhof in einem Grundsatzurteil. Ein Überblick.",
            //         "url": "https://www.heise.de/hintergrund/Krypto-Wann-ein-privater-Investor-Gewinne-mit-Bitcoin-und-Co-versteuern-muss-8970440.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/4/9/5/7/ct1123besteueru_124556_tig_a_online-6b679af3e430cddb.jpg",
            //         "publishedAt": "2023-04-20T08:30:00Z",
            //         "content": "Inhaltsverzeichnis\r\nBei privaten Geschäften mit Kryptowährungen stellt sich die Frage, ob und gegebenenfalls wie Einkünfte daraus zu versteuern sind. Das Gesetz schreibt vor, was als welche Einkunfts… [+1375 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Presse-citron"
            //         },
            //         "author": "RPB",
            //         "title": "Voici où se cache la bible du Bitcoin dans votre Mac depuis 5 ans",
            //         "description": "Cette découverte risque de vous emboucher un Bitcoin !",
            //         "url": "https://www.presse-citron.net/?p=547530",
            //         "urlToImage": "https://www.presse-citron.net/app/uploads/2023/04/mac-bitcoin.jpg",
            //         "publishedAt": "2023-04-06T12:15:20Z",
            //         "content": "<ul><li>Surprise : le White Paper du Bitcoin se cache dans tous les Mac de la planète depuis 5 ans</li><li>Apple n’a pourtant jamais affiché de soutien clair aux cryptomonnaies – si bien qu’il s’agit… [+3266 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Genbeta.com"
            //         },
            //         "author": "Eva Rodriguez",
            //         "title": "El documento técnico del Bitcoin está oculto en todas las copias de las últimas versiones de macOS. Así puedes verlo en tu Mac",
            //         "description": "Con el terminal de un ordenador puedes ejecutar muchas acciones de forma directa entre el comando que tecleas y su consecuencia, lo que resulta muy útil tanto para el sistema como para otras máquinas en red. Pero también se esconden sorpresas ocultas tan incr…",
            //         "url": "https://www.genbeta.com/sistemas-operativos/documento-tecnico-bitcoin-esta-oculto-todas-copias-ultimas-versiones-macos-asi-puedes-verlo-tu-mac",
            //         "urlToImage": "https://i.blogs.es/899aa0/kanchanara-pcmwbd6ufyo-unsplash/840_560.jpeg",
            //         "publishedAt": "2023-04-06T12:00:42Z",
            //         "content": "Con el terminal de un ordenador puedes ejecutar muchas acciones de forma directa entre el comando que tecleas y su consecuencia, lo que resulta muy útil tanto para el sistema como para otras máquinas… [+3756 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Phandroid - News for Android"
            //         },
            //         "author": "Phandroid Editors",
            //         "title": "The Rise of Bitcoin and Cryptocurrency Scams",
            //         "description": "The adoption of Bitcoin and other cryptocurrencies has significantly increased over the last few years. Unlike fiat currencies, whose usage comes with several restrictions, crypto facilitates autonomous, more secure, reliable, and low-cost transactions. While…",
            //         "url": "https://phandroid.com/2023/04/21/the-rise-of-bitcoin-and-cryptocurrency-scams/",
            //         "urlToImage": null,
            //         "publishedAt": "2023-04-21T08:07:54Z",
            //         "content": "The adoption of Bitcoin and other cryptocurrencies has significantly increased over the last few years. Unlike fiat currencies, whose usage comes with several restrictions, crypto facilitates autonom… [+3846 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "heise online"
            //         },
            //         "author": "Martin Weigel",
            //         "title": "heise+ | Krypto: Wann ein privater Investor Gewinne mit Bitcoin und Co. versteuern muss",
            //         "description": "Muss ein Privatmann, der Kryptowährungen verkauft oder tauscht, Gewinne versteuern? Ja, sagt der Bundesfinanzhof in einem Grundsatzurteil. Ein Überblick.",
            //         "url": "https://www.heise.de/hintergrund/Krypto-Wann-ein-privater-Investor-Gewinne-mit-Bitcoin-und-Co-versteuern-muss-8970440.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
            //         "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/1/4/4/9/5/7/ct1123besteueru_124556_tig_a_online-6b679af3e430cddb.jpg",
            //         "publishedAt": "2023-04-20T08:30:00Z",
            //         "content": "Inhaltsverzeichnis\r\nBei privaten Geschäften mit Kryptowährungen stellt sich die Frage, ob und gegebenenfalls wie Einkünfte daraus zu versteuern sind. Das Gesetz schreibt vor, was als welche Einkunfts… [+1375 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Presse-citron"
            //         },
            //         "author": "RPB",
            //         "title": "Voici où se cache la bible du Bitcoin dans votre Mac depuis 5 ans",
            //         "description": "Cette découverte risque de vous emboucher un Bitcoin !",
            //         "url": "https://www.presse-citron.net/?p=547530",
            //         "urlToImage": "https://www.presse-citron.net/app/uploads/2023/04/mac-bitcoin.jpg",
            //         "publishedAt": "2023-04-06T12:15:20Z",
            //         "content": "<ul><li>Surprise : le White Paper du Bitcoin se cache dans tous les Mac de la planète depuis 5 ans</li><li>Apple n’a pourtant jamais affiché de soutien clair aux cryptomonnaies – si bien qu’il s’agit… [+3266 chars]"
            //     },
            //     {
            //         "source": {
            //             "id": null,
            //             "name": "Genbeta.com"
            //         },
            //         "author": "Eva Rodriguez",
            //         "title": "El documento técnico del Bitcoin está oculto en todas las copias de las últimas versiones de macOS. Así puedes verlo en tu Mac",
            //         "description": "Con el terminal de un ordenador puedes ejecutar muchas acciones de forma directa entre el comando que tecleas y su consecuencia, lo que resulta muy útil tanto para el sistema como para otras máquinas en red. Pero también se esconden sorpresas ocultas tan incr…",
            //         "url": "https://www.genbeta.com/sistemas-operativos/documento-tecnico-bitcoin-esta-oculto-todas-copias-ultimas-versiones-macos-asi-puedes-verlo-tu-mac",
            //         "urlToImage": "https://i.blogs.es/899aa0/kanchanara-pcmwbd6ufyo-unsplash/840_560.jpeg",
            //         "publishedAt": "2023-04-06T12:00:42Z",
            //         "content": "Con el terminal de un ordenador puedes ejecutar muchas acciones de forma directa entre el comando que tecleas y su consecuencia, lo que resulta muy útil tanto para el sistema como para otras máquinas… [+3756 chars]"
            //     }

            ]
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/everything?q=${this.props.keyWord}&apiKey=de9a18b54afe4f1daf3a044d7c2da93c`;
        let data = await fetch(url)
        let parsedData = await data.json();
        console.log(parsedData)
        this.setState({ articles: parsedData.articles })
    }
    handlePreviousClick = () => {

    }
    handleNextClick = () => {

    }

    render() {
        return (
            <>
                <div className="container my-4">
                    <h2>Top headlines</h2>
                    <div className="row">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-3" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} urlToImage={element.urlToImage} description={element.description ? element.description.slice(0, 88) : ""} url={element.url} />
                            </div>
                        })}

                    </div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr;previous</button>
                        <button disabled={1} type="button" className="btn btn-dark" onClick={this.handleNextClick}>next&rarr;</button>
                    </div>

                </div>
            </>
        )
    }
}

export default News