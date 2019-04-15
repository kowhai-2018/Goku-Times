import React from 'react'
import request from 'superagent'

 export default class News extends React.Component {
  state = {
      newsURL: 'https://newsapi.org/v2/top-headlines',
      news:{
        article1: '',
        article2: '',
        article3: ''
      }
    }
  
  componentDidMount(){
    this.getNews()
  }

  getNews(){
    var newsUrl1 = 'https://newsapi.org/v2/top-headlines?' +
          'country=nz&' +
          'apiKey=855e439c689c484b9818556631826045'
    request.get(newsUrl1)
    .then(res => {
      this.setState({
        news: {
          article1: {
            title: res.body.articles[0].title,
            description: res.body.articles[0].description,
            agent: res.body.articles[0].source.name,
            content: res.body.articles[0].content
          },
          article2: {
            title: res.body.articles[1].title,
            description: res.body.articles[1].description,
            agent: res.body.articles[1].source.name,
            content: res.body.articles[1].content
          },
          article3: {
            title: res.body.articles[2].title,
            description: res.body.articles[2].description,
            agent: res.body.articles[2].source.name,
            content: res.body.articles[2].content
          }
        }
      })
    })
  }   

    render() {
      return (
        <React.Fragment>
          <h2>Local News</h2>
          <div>
          <h5>{this.state.news.article1.title}</h5>
          <em>{this.state.news.article1.description}</em>
          <p>{this.state.news.article1.content}</p>
          <p>- News sourced from {this.state.news.article1.agent}</p>
          </div>
          <div>
          <h5>{this.state.news.article2.title}</h5>
          <em>{this.state.news.article2.description}</em>
          <p>{this.state.news.article2.content}</p>
          <p>- News sourced from {this.state.news.article2.agent}</p>
          </div>
          <div>
          <h5>{this.state.news.article3.title}</h5>
          <em>{this.state.news.article3.description}</em>
          <p>{this.state.news.article3.content}</p>
          <p>- News sourced from {this.state.news.article3.agent}</p>
          </div>
        </React.Fragment>
      )}
    }
