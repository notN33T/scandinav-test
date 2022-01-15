import React, { Component } from 'react'
import { Query }            from 'react-apollo'
import { connect }          from 'react-redux'
import { PRODUCT_INFO }     from '../../graph-querys/graph-querys'
import { addAmountAction, 
  takeAmountAction }        from '../../store/action-creators/action-creators'
import './css/basket.css'

class Basket extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  render() {
    const basket = this.props.basket

    return(
      <div className='basket-c'>
        
        <div className='basket-page-title-c'>
          <h1 className='basket-page-title'>cart</h1>
        </div>

        <div className='basket-products-c'>
        { basket.amountOfProducts === 0 ? null :
              
              basket.items.map(item => {
                return <Query key={item.id} query={PRODUCT_INFO(item.id)}>
                {({ loading, error, data }) => {

                  if (loading) return 'Loading..'
                  if (error) console.log(error)
                  
                  const { product } = data
                  const { id } = item
                  const indexInBasket = basket.items.findIndex(object => object.id === id)

                  return <div className='product-basket-c' key={id}>

                  <div className='basket-info-price-c'>
                    <div className='product-basket-info-c'>
                        <p className='product-basket-name'>
                          {product.name}
                        </p>
                        <p className='product-basket-brand'>
                          {product.brand}
                        </p>
                      </div>
                      
                    <div className='basket-price-c'>
                      <p>{this.props.currency.symbol}{product.prices[product.prices.findIndex(obj=>obj.currency.label===this.props.currency.label)].amount}</p>
                    </div>
                    
                    <div className='basket-attributes-c'>
                      {product.attributes[0].items.map(attribute => {
                        return <div 
                        key={attribute.value}
                        className={'basket-attribute-c' + (
                          basket.items[indexInBasket].attributes.findIndex(object => JSON.stringify(object) === JSON.stringify(Object.fromEntries([[product.attributes[0].name, attribute.value]]))) > -1 ? ' basket-attribute-active' : 
                          '')}>
                        {attribute.value}
                      </div>
                      })}
                      
                    </div>
                  </div>

                  <div className='basket-amount-img-c'>
                    <div className='basket-amount-btns-c'>
                      <button className='basket-amount-btn'
                      onClick={ ()=> { addAmountAction({ id }, this.props) } }>+</button>
                      <p className='basket-amount'>{ this.props.basket.items[indexInBasket].amount } </p>
                      <button className='basket-amount-btn'
                      onClick={ ()=> { takeAmountAction({ id }, this.props) } }>-</button>
                    </div>
                      
                      <div className='basket-img-c'>
                        <img src={[product.gallery[0]]} alt="Product" />
                      </div>
                  </div>

                  </div>
                  
                }}
              </Query>
              })}

        </div>

      </div>
    )
  }
}

export default connect(state => ({
  currency: state.currency,
  basket: state.basket,
}))(Basket)