import React                  from 'react'
import { ApolloProvider }     from 'react-apollo'
import ApolloClient           from 'apollo-boost'
import { BrowserRouter }      from 'react-router-dom'
import store                  from './store/stores'
import { Provider }           from 'react-redux'
import Header                 from './header-component/header'
import PagesRouter            from './router/router'
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
                <PagesRouter/>
              </div>
            </BrowserRouter>
          </Provider>
      </ApolloProvider>
    )
  }
}

export default App;
