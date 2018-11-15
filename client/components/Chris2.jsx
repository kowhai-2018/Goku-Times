import React from 'react'
import request from 'superagent'

const username = 'geeknews'
const password = 'rx2r49d7n6kb'

export default class App extends React.Component {
  state = {
    events: ''
  }

  componentDidMount() {
    request
      .get('http://api.eventfinda.co.nz/v2/events.json')
      .set('Authorization', 'Basic ' + btoa(username + ":" + password))
      .then(res => {
        this.setState({ events: res.body })
        console.log(res.body)
      })
      .catch(err => {
        this.setState({ message: err.message })
      })
  }

  render() {
    return (
      <div>
        <p>{this.state.events}</p>
      </div>
    )
  }
}
