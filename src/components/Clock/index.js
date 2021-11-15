import {Component} from 'react'

import ClockDetails from '../ClockDetails'

import './index.css'

class Clock extends Component {
  state = {
    showClock: false,
  }

  onToggleClock = () => {
    this.setState(prevState => {
      const {showClock} = prevState
      return {
        showClock: !showClock,
      }
    })
  }

  render() {
    const {showClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.onToggleClock}
        >
          {showClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {showClock && <ClockDetails />}
      </div>
    )
  }
}

export default Clock
