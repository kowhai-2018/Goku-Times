import React from 'react'
import GeekJokes from './GeekJokes'
import News from './News'
import Xkcd from './Xkcd'
import Horoscopes from './Horoscope'
import Weather from './Weather'
import Finance from './Finance'

export default class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <center>
              <div className="col l12">
                <h1 className="title">The Goku Times</h1>
              </div>
            </center>
          </div>
          <div className="row">
            <hr/>
            <strong>Issue 9,001</strong> - Friday, 16 November 2018
            <hr/>
          </div>
          <div className="row">
            <div className="col l8">
              <div className="row">
                <div className="col s6">
                  <News />
                </div>
                <div className="col s6">
                  <Finance />
                </div>
              </div>
              <div className="row">
                <div className="col l12">
                  <Xkcd />
                </div>
              </div>
            </div>
            <div className="col l4">
              <div className="col s12">
                <Weather />
              </div>
              <div className="col s12">
                <GeekJokes />
              </div>
              <div className="col s12">
                <Horoscopes />
              </div>
            </div>

          </div>
        </div>

      </React.Fragment>
    )
  }
}
