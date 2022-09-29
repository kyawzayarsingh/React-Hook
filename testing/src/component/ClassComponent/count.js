import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Hello World',
      count: 0,
    }
  }

  increment() {
    //we are using current state, we don't get the previous value
    // this.setState({
    //   count: this.state.count + 1,
    // })

    //for previous value
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))

    //setState has CallBack value, you can set callback function
    // this.setState({
    //     count: this.state.count + 1
    // },()=> {
    //     console.log('CallBack Value', this.state.count);
    // });
  }

  incrementByValue(number) {
    this.setState((prevState, props) => ({
      count: prevState.count + number,
    }))
  }

  render() {
    return (
      <div>
        <div> Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementByValue(5)}>
          IncrementByValue
        </button>
      </div>
    )
  }
}

export default Counter
