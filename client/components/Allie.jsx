import React from 'react'
import request from 'superagent'

 export default class Allie extends React.Component {
  state = {
    news: {
      newsURL: 'https://newsapi.org/v2/top-headlines',
      title: '',
      description: '',
      author: '',
      agent: '',
      content: ''
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
          title: res.body.articles[0].title,
          description: res.body.articles[0].description,
          agent: res.body.articles[0].source.name,
          content: res.body.articles[0].content
          
        }
      })
    })
  }   

    render() {
      return (
        <React.Fragment>
          <h1>NZ News: </h1>
          <h2>{this.state.news.title}</h2>
          <h4>{this.state.news.description}</h4>
          <p>News sourced from {this.state.news.agent}</p>
          <p>{this.state.news.content}</p>
        </React.Fragment>
      )}
    }
