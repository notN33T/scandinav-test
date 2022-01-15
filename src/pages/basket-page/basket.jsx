import React, {Component} from 'react'
import { Query }          from 'react-apollo'
import { connect }        from 'react-redux'

class Basket extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <div>

      </div>
    )
  }
}

export default connect(state => ({
  currency: state.currency,
  basket: state.basket,
}))(Basket)