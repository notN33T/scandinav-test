import React                         from 'react'
import { connect }                   from 'react-redux'
import { Query }                     from 'react-apollo'
import { CATEGORY_PRODUCTS_ALL,
         CATEGORY_PRODUCTS_TECH,
         CATEGORY_PRODUCTS_CLOTHES } from '../../graph-querys/graph-querys'
import './css/category.css'
class Category extends React.Component {
    constructor(props) {
        super()
        this.state={query: ''}
    }

    render() {
        
        return(
            <div className='category-content-c'>
                
                <h1 className='category-name'>
                    {this.props.category}
                </h1>
                <div className='category-product-c'>
                    <Query query={
                           this.props.category === 'all' ? CATEGORY_PRODUCTS_ALL
                           :this.props.category === 'tech' ? CATEGORY_PRODUCTS_TECH
                           :this.props.category === 'clothes' ? CATEGORY_PRODUCTS_CLOTHES
                           :null}>

                            {({loading, data}) => {
                            if(loading) return 'Loading...'
                                const {products} = data.category
                                return products.map(product => {
                                    return (

                                    <div
                                    key={product.id}
                                    className='product-c'>
                                        {product.name}
                                    </div>

                                )

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