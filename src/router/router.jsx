import React             from 'react'
import { Routes, Route } from 'react-router-dom'
import Category          from '../pages/category-page/category'
import Product           from '../pages/product-page/product'

class PagesRouter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <Routes>
                <Route path='/' element={<Category/>}/>
                <Route path='/product:id' element={<Product/>}/>
            </Routes>
        )
    }
}

export default PagesRouter
