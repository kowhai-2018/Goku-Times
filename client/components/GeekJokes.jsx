import React from 'react'
import request from 'superagent'

export default class GeekJokes extends React.Component {
  state = {
    geekJokes: ''
  }

  componentDidMount() {
    request
      .get('https://geek-jokes.sameerkumar.website/api')
      .then(res => {
        this.setState({ geekJokes: res.body })
      })
      .catch(err => {
        this.setState({ message: err.message })
      })
  }

  render() {
    return (
      <div>
        <hr/>
        <h3>Joke of the day</h3>
        <p>{this.state.geekJokes}</p>
      </div>
    )
  }
}
