import React from 'react'
import Chris from './Chris'
import Allie from './Allie'
import Dani from './Dani'
import Allie2 from './Allie2'
import Carel from './Carel'



 export default class App extends React.Component {
  render() {
  return (
    <React.Fragment>
      <h1>React development has begun!</h1>
      <Chris />
      <Carel />
      <Allie />
      <Allie2 />
      <Dani />
    </React.Fragment>
  )}
}


