import React                  from 'react'
import { ApolloProvider }     from 'react-apollo'
import ApolloClient           from 'apollo-boost'
import Header                 from './header-component/header'
import { BrowserRouter }      from 'react-router-dom'
import { Provider}            from 'react-redux'
import store                  from './store/stores'
import './public/index.css'

class App extends React.Component {
  constructor(props) {
    super()
    this.state = {}
  }

  client = new ApolloClient({
    uri: 'http://localhost:4000',
  });

  render()
  {
    return (
      <ApolloProvider client={this.client}>
        <Provider store={store}>
          <BrowserRouter>
            <div className='content-c'>
              <Header/>
            </div>
          </BrowserRouter>
        </Provider>
      </ApolloProvider>
    )
  }
}

export default App;
