import React from 'react'
import request from 'superagent'

 export default class Carel extends React.Component {
  state = {
    key: 'property'
  }
  componentDidMount(){
    // this.callfunction
  }

  callfunction(){
    request
    .get(this.state.network.urlIP)
    .then( res => {
      this.setState({
        network: {
          ip: res.body.ip,
          urlLocation: 'https://geo.ipify.org/api/v1?apiKey='+ this.state.network.apiK + '&ipAddress=' + res.body.ip
        }
      })
    })
  }
    render() {
        return (
          <h1>this is Carel's component</h1>
        )}
}

