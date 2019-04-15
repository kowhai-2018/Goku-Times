import React from 'react'
import request from 'superagent'

export default class Xkcd extends React.Component {
  state = {
    xkcd: {
      URL: 'https://xkcd.now.sh',
      title: '',
      subtitile: '',
      comic: ''
    }
  }
  componentDidMount () {
    this.getXkcd()
  }

  getXkcd () {
    const url = 'https://xkcd.now.sh'
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

  render () {
    return (
      <React.Fragment>
        <hr/>
        <h3>{this.state.xkcd.title}</h3>
        <h5>{this.state.xkcd.subtitle}</h5>
        <img src= {this.state.xkcd.comic}/>
      </React.Fragment>
    )
  }
}
