import React from 'react'
import request from 'superagent'

export default class Horoscopes extends React.Component {
  state = {
    horoscope: {
      URL: 'https://aztro.sameerkumar.website',
      sign: '',
      date: '',
      description: ''
    }
  }
  componentDidMount() {
    this.getHoroscope()
  }

  getHoroscope() {
    const url =
      'https://aztro.sameerkumar.website' +
      '?sign=' +
      this.props.sign +
      '&day=today'
    request.post(url).then(res => {
      this.setState({
        horoscope: {
          sign: this.state.horoscope.sign,
          date: res.body.date_range,
          description: res.body.description
        }
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <h6>{this.props.sign} - ({this.state.horoscope.date})</h6> 
        <p>{this.state.horoscope.description}</p>
      </React.Fragment>
    )
  }
}
