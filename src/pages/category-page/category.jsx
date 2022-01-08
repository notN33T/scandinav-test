import React                     from 'react'
import { connect }               from 'react-redux'
import { Query }                 from 'react-apollo'
import { CATEGORY_PRODUCTS_ALL } from '../../graph-querys/graph-querys'
import './css/category.css'
class Category extends React.Component {
    constructor(props) {
        super()
        this.state={}
    }
    render() {
        return(
            <div className='category-content-c'>
                <h1 className='category-name'>
                    {this.props.category}
                </h1>
                <div className='category-product-c'>
                    <Query query={CATEGORY_PRODUCTS_ALL}>
                            {({loading, data}) => {
                                if(loading) return 'Loading...'
                                const {products} = data.category
                                return products.map(product => {
                                    return <p
                                    key={product.id}>{product.id}</p>
                                })
                            }}
                    </Query>
                </div>
            </div>
        )
    }
}

export default connect(state => ({
    category: state.pageInfo.category,
    currency: state.currency.currency,
}))(Category)