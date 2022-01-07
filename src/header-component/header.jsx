import React          from 'react'
import { Link }       from 'react-router-dom'
import './css/header.css'
class Header extends React.Component {
    constructor(props) {
        super()
        this.state = {}
    }
    render() {
        return (
            <nav className='main-header'>
                <div className='category-links'>
                    <Link>All</Link>
                    <Link>Clothes</Link>
                    <Link>Tech</Link>
                </div>
            </nav>
        )
    }
}

export default Header