import React from 'react'
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'

class App extends React.Component {
  constructor(props) {
    super()
    this.state= {}
  }

  client = new ApolloClient({
    uri: 'http://localhost:4000',
  });

  render()
  {
    return (
      <ApolloProvider client={this.client}>
        <>
        
        </>
      </ApolloProvider>
    )
  }
}

export default App;
