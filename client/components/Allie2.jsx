import React from 'react'
import request from 'superagent'

 export default class Allie2 extends React.Component {
  state = {
    xkcd: {
      URL: 'https://xkcd.now.sh',
      title: '',
      subtitile: '',
      comic: '',
    }
  }
  componentDidMount(){
    this.getXkcd()
  }

  getXkcd(){
      var url = 'https://xkcd.now.sh'
    request.get(url)
    .then(res => {
      this.setState({
        xkcd: {
          title: res.body.safe_title,
          subtitle: res.body.alt,
          comic: res.body.img
        }
      })
    })
  }   

    render() {
      return (
        <React.Fragment>
          <h1>{this.state.xkcd.title}</h1>
          <h3>{this.state.xkcd.subtitle}</h3>
          <img src= {this.state.xkcd.comic}/>
        </React.Fragment>
      )}
    }
