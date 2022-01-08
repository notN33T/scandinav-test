import React             from 'react'
import { Routes, Route } from 'react-router-dom'
import Category          from '../pages/category-page/category'

class PagesRouter extends React.Component {
    constructor(props) {
        super()
        this.state = {}
    }
    render() {
        return (
            <Routes>
                <Route path='/' element={<Category/>}/>
            </Routes>
        )
    }
}

export default PagesRouter
