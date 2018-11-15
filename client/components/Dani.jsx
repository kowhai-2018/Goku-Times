import React from 'react'
import request from 'superagent'

 export default class Dani extends React.Component {
  state = {
    signs: ['aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces'],
    horoscope: {
      URL: 'https://aztro.sameerkumar.website',
      sign:'',
      date: '',
      description: ''
    }
  }
  
  componentDidMount(){
    //this.getHoroscope()
  }

  getHoroscope(sign){
    const {URL} = this.state.horoscope
    const url = URL + '?sign=' + sign + '&day=today'
    request.post(url)
    .then(res => {
      //console.log(res.body)
      this.setState({
        horoscope: {
        sign: sign,
          date: res.body.date_range,
          description: res.body.description
        }
      })
      console.log(this.state.horoscope)
    })
  }   

    render() {
      return (
        <React.Fragment>
          
          {this.state.signs.map(sign => {
            <div>
              {this.getHoroscope(sign)}
              <h3>Horoscope for {sign} 
              </h3>
            </div>
          })}
          
          {/* <h3>Horoscope for {this.state.horoscope.sign} ({this.state.horoscope.date})</h3>
          <p>{this.state.horoscope.description}</p> */}
        </React.Fragment>
      )}
}

