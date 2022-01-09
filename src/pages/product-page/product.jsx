import React             from 'react'
import { withRouter }    from '../../withRouter/withRouter'
import { connect }       from 'react-redux'
import { Query }         from 'react-apollo'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    render() {
        let id = (this.props.params.id).replace(':','')
        console.log(id)
        return (
            <div className='product-c'>
                <div className='product-pdp-imgs-c'></div>
                <div className='main-pdp-img-c'></div>
                <div></div>
            </div>
        )
    }
}
export default withRouter(Product)