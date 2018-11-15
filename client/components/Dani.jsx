import React from 'react'
import request from 'superagent'

 export default class Dani extends React.Component {
  state = {
    json: {}
  }
  componentDidMount(){
    this.setState({json:{color:'blue'}})
    this.getHoroscope()
  }

  getHoroscope(){
    const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today'
       
    request
    .post(URL)
    .then(res => {
      console.log(res)
      res.json()
    })
    .then(json => {
      console.log(json)
      this.setState({json}) 
    })
  }
    render() {
        return (
          <React.Fragment>
          Current Date: {this.state.json.current_date} <br />
          Compatibility: {this.state.json.compatibility} <br />
          Lucky Number: {this.state.json.lucky_number} <br />
          Lucky Time: {this.state.json.lucky_time} <br />
          Color: {this.state.json.color} <br />
          Date Range: {this.state.json.date_range} <br />
          Mood: {this.state.json.mood} <br />
          Description: {this.state.json.description} <br />
      </React.Fragment>
        )}
}

