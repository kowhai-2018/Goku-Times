import React from 'react'
import Chris from './Chris'
// import Chris2 from './Chris2'
import Allie from './Allie'
import Dani from './Dani'
import Carel from './Carel'



 export default class App extends React.Component {
  render() {
  return (
    <React.Fragment>
      <h1>React development has begun!</h1>
      <Chris />
      {/* <Chris2 /> */}
      <Carel />
      <Allie />
      <Dani />
    </React.Fragment>
  )}
}


