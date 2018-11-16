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
          article1: {
            title: res.body.articles[0].title,
            img: res.body.articles[0].urlToImage,
            content: res.body.articles[0].content,
            url: res.body.articles[0].url
          }, 
          article2: {
            title: res.body.articles[1].title,
            img: res.body.articles[1].urlToImage,
            content: res.body.articles[1].content,
            url: res.body.articles[1].url
          },
          article3: {
            title: res.body.articles[2].title,
            img: res.body.articles[2].urlToImage,
            content: res.body.articles[2].content,
            url: res.body.articles[2].url
          },
          article4: {
            title: res.body.articles[3].title,
            img: res.body.articles[3].urlToImage,
            content: res.body.articles[3].content,
            url: res.body.articles[3].url
          }, 
          article5: {
            title: res.body.articles[4].title,
            img: res.body.articles[4].urlToImage, 
            content: res.body.articles[4].content,
            url: res.body.articles[4].url
          }
        }
      })
    })
  }
    render() {
        return (
          <React.Fragment>
            <h2>Finance Times</h2>
            <div>
              <h5>{this.state.news.article1.title}</h5>
                <p>{this.state.news.article1.content}</p>
            </div>
            <div>
              <h5>{this.state.news.article2.title}</h5>
                <p>{this.state.news.article2.content}</p>
            </div>
            <div>
              <h5>{this.state.news.article3.title}</h5>
                <p>{this.state.news.article3.content}</p>
            </div>
            <div>
              <h5>{this.state.news.article4.title}</h5>
                <p>{this.state.news.article4.content}</p>
            </div>
            <div>
              <h5>{this.state.news.article5.title}</h5>
                <p>{this.state.news.article5.content}</p>
            </div>
            
          </React.Fragment>
        )}
}
