import React from 'react'
import request from 'superagent'

  export default class Weather extends React.Component {
    state = {
      weather: {
        apiK: '6632adbe463749a3ad3221126181311',
        urlF: '',
        tempInC: null,
        temptomorrow: null,
        mintempTomorrow: null
        },
      network: {
        apiK: 'at_LGwxqmdmYjaoalUDESDzJZAcCEyjy',
        urlIP: 'https://api.ipify.org?format=json',
        urlLocation : '',
        ip: '',
        location: ''
        }
      }


  componentDidMount() {
    this.findIP()
   } 
   
   findIP() {
     request
       .get(this.state.network.urlIP)
       .then( res => {
         this.setState({
           network: {
             ip: res.body.ip,
             urlLocation: 'https://geo.ipify.org/api/v1?apiKey='+ this.state.network.apiK + '&ipAddress=' + res.body.ip
           }
         })
 
     request
       .get(this.state.network.urlLocation)
       .then( res => {
         this.setState({
           network:  {
             location: res.body.location.city,
             ip: this.state.network.ip
           },
           weather: {
             urlF: `http://api.apixu.com/v1/forecast.json?key=${this.state.weather.apiK}&q=${res.body.location.city}`,
           }
         })
         this.callWeather()
 
       })
     })
   }
 
   callWeather() {
     let weatherURL = this.state.weather.urlF
     request
     .get(weatherURL)
     .then(res => {
       this.setState({
         weather: { 
           tempInC: res.body.current.temp_c,
           temptomorrow: res.body.forecast.forecastday['0'].day.maxtemp_c,
           mintempTomorrow: res.body.forecast.forecastday['0'].day.mintemp_c,
           currentCondition: res.body.current.condition.text,
           currentIcon: res.body.current.condition.icon,
           }

       })
     })
   }
    render() {
        return (
          <React.Fragment>
            <h2>Weather</h2>
            <p>Today the weather in <strong>{this.state.network.location}</strong> is currently <strong>{this.state.weather.currentCondition}</strong> and the temperature is <strong>{this.state.weather.tempInC} °C</strong>
              <img src={this.state.weather.currentIcon} alt='weather icon'></img></p>
            <p>Tomorrow the temperature is going to be between <strong>{this.state.weather.mintempTomorrow} °C and {this.state.weather.temptomorrow} °C</strong></p>
          </React.Fragment>
          
        )}
}

