import React from 'react'
import request from 'superagent'

 export default class Finance extends React.Component {
  state = {
    AT: '044cdf6ea4ae4a1d8cbdd309903569c1',
    url: 'https://newsapi.org/v2/top-headlines?sources=financial-times&apiKey=',
    news:{
      article1: '',
      article2: '',
      article3: '',
      article4: '',
      article5: ''
    }
    
  }
  componentDidMount(){
    this.callFinance()
  }

  callFinance(){
    request
    .get(`${this.state.url}${this.state.AT}`)
    .then( res => {
      this.setState({
        news: {
          article1: res.body.articles[0].title,
          article2: res.body.articles[1].title,
          article3: res.body.articles[2].title,
          article4: res.body.articles[3].title,
          article5: res.body.articles[4].title
        }
      })
    })
  }
    render() {
        return (
          <React.Fragment>
            <h1>Finance Times</h1>
            <h2>{this.state.news.article1}</h2>
            <h2>{this.state.news.article2}</h2>
            <h2>{this.state.news.article3}</h2>
            <h2>{this.state.news.article4}</h2>
            <h2>{this.state.news.article5}</h2>
          </React.Fragment>
        )}
}

// "articles": [
//   {
//       "source": {
//           "id": "financial-times",
//           "name": "Financial Times"
//       },
//       "author": null,
//       "title": "Brexit leaves Conservatives no longer looking like a party of government",
//       "description": "Comparisons with Major era’s internal conflicts miss the far higher stakes",
//       "url": "https://www.ft.com/content/55f523ee-e8c5-11e8-885c-e64da4c0f981",
//       "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2Fb2f06d56-e843-11e8-8827-ff56e7163c11?source=next-opengraph&fit=scale-down&width=900",
//       "publishedAt": "2018-11-15T21:08:17.4292121Z",
//       "content": "The Conservative party is entering a long dark night of the soul and it is taking the country with it. With nearly five months until the UK is due to leave the EU the political force that likes to style itself as the natural party of government is looking mor… [+4465 chars]"
//   },

