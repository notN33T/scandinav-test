import { createStore, combineReducers }   from 'redux'
import currencyStore                      from './currency-store'
import basketStore                        from './basket-store'

const combinedStore = combineReducers({
    currency: currencyStore,
    basket: basketStore,
})

const store = createStore(combinedStore)

export default store