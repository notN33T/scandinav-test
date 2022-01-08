import { createStore, combineReducers }   from 'redux'
import currencyStore                      from './currency-store'
import basketStore                        from './basket-store'
import pageInfoStore                      from './page-info-store'

const combinedStore = combineReducers({
    currency: currencyStore,
    basket: basketStore,
    pageInfo: pageInfoStore
})

const store = createStore(combinedStore)

export default store