import React from 'react'
import Chris from './Chris'
import Allie from './Allie'
import Dani from './Dani'

import Allie2 from './Allie2'
import Allie3 from './Allie3'
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
      <Allie2 />
      <Allie3 />
      <Dani />
    </React.Fragment>
  )}
}


