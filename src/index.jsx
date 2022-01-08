import React                from 'react'
import ReactDOM             from 'react-dom'
import App                  from './App'
import reportWebVitals      from './CRAstuff/reportWebVitals'
import store                from './store/stores'
import { Provider }         from 'react-redux'
import './public/reset.css'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()