import React             from 'react'
import { Routes, Route } from 'react-router-dom'
import Category          from '../pages/category-page/category'
import Product           from '../pages/product-page/product'
import Basket            from '../pages/basket-page/basket'

class PagesRouter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Routes>
                <Route path='/' element={ <Category/> }/>
                <Route path='/product:id' element={ <Product/> }/>
                <Route path='/basket' element={ <Basket/> }/>
            </Routes>
        )
    }
}

export default PagesRouter
