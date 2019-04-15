import React from 'react'
import Horoscopes from './Horoscopes'

export default class Horoscpoe extends React.Component {
  state = {
    signs: [
      {
        id: 1,
        sign: 'Aries'
      },
      {
        id: 2,
        sign: 'Taurus'
      },
      {
        id: 3,
        sign: 'Gemini'
      },
      {
        id: 4,
        sign: 'Cancer'
      },
      {
        id: 5,
        sign: 'Leo'
      },
      {
        id: 6,
        sign: 'Virgo'
      },
      {
        id: 7,
        sign: 'Libra'
      },
      {
        id: 8,
        sign: 'Scorpio'
      },
      {
        id: 9,
        sign: 'Sagittarius'
      },
      {
        id: 10,
        sign: 'Capricorn'
      },
      {
        id: 11,
        sign: 'Aquarius'
      },
      {
        id: 12,
        sign: 'Pisces'
      }
    ]
  }

  render () {
    return (
      <React.Fragment>
        <hr/>
        <h3>Horoscopes </h3>
        {this.state.signs.map(s => {
          return <Horoscopes sign={s.sign} key={s.id} />
        })}
      </React.Fragment>
    )
  }
}
