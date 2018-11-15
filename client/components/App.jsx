import React from 'react'
import Chris from './Chris'
import Allie from './Allie'
import Dani from './Dani'
import Carel from './Carel'
import Finance from './Finance'



 export default class App extends React.Component {
  render() {
  return (
    <React.Fragment>
      <h1>React development has begun!</h1>
      <Chris />
      <Carel />
      <Finance />
            <Allie />
      <Dani />
    </React.Fragment>
  )}
}


