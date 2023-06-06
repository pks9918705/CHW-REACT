import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    //array holding articles
    articles=[  
        {
          "source": {
            "id": "bbc-news",
            "name": "BBC News"
          },
          "author": "https://www.facebook.com/bbcnews",
          "title": "IPL 2023: Who are India's next cricketing stars?",
          "description": "These players and their dazzling performances at the IPL make a case for their inclusion in India's national side.",
          "url": "https://www.bbc.co.uk/news/world-asia-india-65692539",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/5D8B/production/_129874932_gettyimages-1253790493-594x594.jpg",
          "publishedAt": "2023-05-26T23:49:58Z",
          "content": "The Indian Premier League (IPL), apart from being lucrative, has been an excellent platform for uncapped players to fast-track their careers into the international arena. Like past editions, this yea… [+5820 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "England fast bowler Sciver-Brunt retires from international cricket - Reuters",
          "description": "England fast bowler Sciver-Brunt retires from international cricket  Reuters",
          "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L2VuZ2xhbmQtZmFzdC1ib3dsZXItc2NpdmVyLWJydW50LXJldGlyZXMtaW50ZXJuYXRpb25hbC1jcmlja2V0LTIwMjMtMDUtMDUv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
          "urlToImage": null,
          "publishedAt": "2023-05-05T12:14:00Z",
          "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
          "source": {
            "id": "google-news",
            "name": "Google News"
          },
          "author": null,
          "title": "Kohli says playing his best T20 cricket - Reuters",
          "description": "Kohli says playing his best T20 cricket  Reuters",
          "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiWmh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L2tvaGxpLXNheXMtcGxheWluZy1oaXMtYmVzdC10MjAtY3JpY2tldC0yMDIzLTA1LTIyL9IBAA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
          "urlToImage": null,
          "publishedAt": "2023-05-22T04:27:00Z",
          "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Simon Burnton",
          "title": "England ‘legend’ Katherine Sciver-Brunt retires from international cricket",
          "description": "<ul><li>‘Cricket has given me a purpose and many golden memories’</li><li>ECB’s Clare Connor: ‘She has been an unbelievable role model’</li></ul>After 267 games, 335 wickets, 1,864 runs, 19 years, four Ashes victories and three in World Cups, Katherine Sciver…",
          "url": "https://www.theguardian.com/sport/2023/may/05/england-legend-katherine-sciver-brunt-retires-from-international-cricket",
          "urlToImage": "https://i.guim.co.uk/img/media/0aa9057291d9e239c1bde68d1664123118faad71/0_101_2772_1663/master/2772.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b0720409335fa6ac1a3270bb08f52486",
          "publishedAt": "2023-05-05T14:34:28Z",
          "content": "After 267 games, 335 wickets, 1,864 runs, 19 years, four Ashes victories and three in World Cups, Katherine Sciver-Brunt has announced her retirement from international cricket. The decision continue… [+8232 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Simon Burnton",
          "title": "Michael Vaughan returns to BBC cricket coverage for Ashes summer",
          "description": "<ul><li>Charge against former captain was found not proven by CDC</li><li>Vaughan was dropped from BBC coverage in autumn 2021</li></ul>Michael Vaughan is to return to the BBC and play a key part in their cricket coverage this summer after being cleared of ma…",
          "url": "https://www.theguardian.com/sport/2023/may/19/michael-vaughan-returns-to-bbc-cricket-coverage-for-ashes-summer",
          "urlToImage": "https://i.guim.co.uk/img/media/3bf8982c6519474533b38c1be03424519d8dfa99/0_130_5568_3341/master/5568.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9bfbda837cb58de1ecbc88663f16b98d",
          "publishedAt": "2023-05-19T12:08:29Z",
          "content": "Michael Vaughan is to return to the BBC and play a key part in its cricket coverage this summer after being earlier this year cleared of making a racist remark during his time as a player at Yorkshir… [+7110 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": null,
          "title": "Hot air balloon stops play: U10s cricket match in Sussex gets unusual delay – video",
          "description": "A hot air balloon landed on the field during a cricket match between Chiddingfold U10s and U10s at Lurgashall, West Sussex Continue reading...",
          "url": "https://www.theguardian.com/sport/video/2023/may/19/hot-air-balloon-stops-play-u10s-cricket-match-in-sussex-gets-unusual-delay-video",
          "urlToImage": "https://i.guim.co.uk/img/media/1c63f633014584578f1d821e7c82d74d514e8db6/0_298_2048_1229/master/2048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=42c1751b5a53fb6f724b20d5b33492c0",
          "publishedAt": "2023-05-19T16:00:56Z",
          "content": "A hot air balloon landed on the field during a cricket match between Chiddingfold U10s and U10s at Lurgashall, West Sussex"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Simon Burnton",
          "title": "The Spin | Ireland’s Lorcan Tucker: ‘We’re learning Test cricket on the job’",
          "description": "Ireland play England at Lord’s and their keeper-batter is in fine form as they look for the first Test win in their historyThis has already been a big year for Irish Test cricket: having qualified to compete in the format by becoming full members of the ICC i…",
          "url": "https://www.theguardian.com/sport/2023/may/31/irelands-lorcan-tucker-were-learning-test-cricket-on-the-job",
          "urlToImage": "https://i.guim.co.uk/img/media/4d83590d7d2b5bbeeb5ed4681c3598b846c6953f/859_191_2081_1249/master/2081.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=18bffe74369930072c89d3850e943e67",
          "publishedAt": "2023-05-31T10:49:24Z",
          "content": "This has already been a big year for Irish Test cricket: having qualified to compete in the format by becoming full members of the ICC in June 2017 they played five Tests in the following five-and-a-… [+10630 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "The Guardian"
          },
          "author": "Tanya Aldred",
          "title": "County cricket: Lancashire v Somerset, Kent v Hampshire and more – live",
          "description": "<ul><li>Latest updates from around the grounds on day four</li><li>Jimmy Anderson unable to bat or bowl for Lancashire</li><li>Get in touch: email Tanya, tweet or comment BTL</li></ul>Ali on a fraught standoff between Pakistan and India over the Asia Cup.For …",
          "url": "https://www.theguardian.com/sport/live/2023/may/14/county-cricket-lancashire-v-somerset-kent-v-hampshire-and-more-live",
          "urlToImage": "https://i.guim.co.uk/img/media/445aeaf9ab67fb4217ee5fe1136ca71c2c32d87c/148_214_1769_1061/master/1769.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=99e4e57506c0348f6dcf61dfede59418",
          "publishedAt": "2023-05-14T09:00:56Z",
          "content": "For any Blur fans out there, there was a fabulous few minutes with Radcliffe and Maconie on Radio 6 music this morning about Modern Life is Rubbish. A perfect Sunday morning vignette (around 845am if… [+5596 chars]"
        }]
    constructor(){
        super()
        console.log('this is News constructor');
        //state are changable but props are read only
        this.state={
            articles:this.articles,
            loading: false
        }
        
    }
    render() {
        return (
            <div className='container my-3'>
                <h1>Today's Top News</h1>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title="News1" description="this is news 1" />

                    </div>
                    <div className="col-md-4">
                        <NewsItem title="News1" description="this is news 1" />

                    </div>
                    <div className="col-md-4">
                        <NewsItem title="News1" description="this is news 1" />

                    </div>
                </div>


            </div>
        )
    }
}
