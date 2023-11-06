import React from 'react'

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 4
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <butto onClick={() => this.setState({ counter: this.state.counter + 1 })}>counter</butto>
      </div>
    )
  }
}

export default Counter