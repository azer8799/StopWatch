// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    changeTime: 0,
  }

  componentWillUnmount() {
    clearInterval(this.uniqueId)
  }

  updateTime = () => {
    this.setState(prevState => ({
      changeTime: prevState.changeTime + 1,
    }))
  }

  onStartTimer = () => {
    this.uniqueId = setInterval(this.updateTime, 1000)
  }

  onResetTimer = () => {
    this.setState({changeTime: 0})
    clearInterval(this.uniqueId)
  }

  onStopTimer = () => {
    clearInterval(this.uniqueId)
  }

  renderSeconds = () => {
    const {changeTime} = this.state
    const seconds = Math.floor(changeTime % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {changeTime} = this.state
    const minutes = Math.floor(changeTime / 60)
    console.log(minutes)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div className="stopwatch-container">
          <h1 className="stopwatch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="timer"
              />
              <p className="heading">Timer</p>
            </div>
            <h1 testid="timer" className="stopwatch-timer">
              {time}
            </h1>
            <div className="timer-buttons">
              <button
                type="button"
                className="start-button button"
                onClick={this.onStartTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.onStopTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.onResetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
