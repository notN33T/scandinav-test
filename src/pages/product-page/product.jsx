import React, { Component } from 'react'
import { withRouter }       from '../../myLibrary/withRouter'
import { Navigate }         from 'react-router-dom'
import toObject             from '../../myLibrary/convertToObject'
import parse                from '../../myLibrary/parceHtml'
import { addProductAction } from '../../store/action-creators/action-creators'
import { connect }          from 'react-redux'
import { Query }            from 'react-apollo'
import { PRODUCT_PDP_INFO } from '../../graph-querys/graph-querys'

import './css/product.css'

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mainImg: '', 
            stateForm:[], 
            selectedOptions:[],
            redirect: false,
        }
    }
    render() {
        let id = (this.props.params.id).replace(':','')
        const basket = this.props.basket
        const indexOnBasket = basket.items.findIndex(obj=>obj.id ===id)

        if (this.state.redirect) return <Navigate to='/'/>
        return (
            <div className='product-content-c' key={id}>
                <Query key={id} query={PRODUCT_PDP_INFO(id)}>
                    {({ loading, error, data })=> {

                        if (loading) return 'Loading..'
                        if (error) console.log(error)

                        const { product } = data
                        const mainImgChangeHandler = (newImg) => {
                            this.setState({ mainImg:newImg })
                        }
                        
                        const keys = []
                        const values = []
                        const massiveObjects = this.state.stateForm
                        const selectedOptions = this.state.selectedOptions

                        const productAttributesLength = product.attributes.length
                        const selectedAttributesLength = this.state.stateForm.length

                        const sendFormHandler = () => {
                            let value = { id: id, attributes: this.state.stateForm, amount: 1 }
                            addProductAction(value, this.props)
                            this.setState({redirect: true})
                        }

                        const stateFormChangeHandler = (data) => {

                            const key = data.attribute 
                            const value = data.value

                            // change values algorithm

                            for(let objNum in massiveObjects) {
                                if (massiveObjects[objNum].hasOwnProperty(key)) {

                                    keys.push(key)
                                    values.push(value)

                                    const object = toObject(keys, values)
                                    massiveObjects[objNum] = object
                                    selectedOptions[objNum] = (key + value)

                                    this.setState({ selectedOptions: selectedOptions })
                                    return this.setState({ stateForm: massiveObjects })
                                }
                            }

                            // add values algorithm

                            keys.push(key)
                            values.push(value)

                            const object = toObject(keys, values)
                            massiveObjects.push(object)
                            selectedOptions.push(key + value)

                            this.setState({ selectedOptions: selectedOptions })
                            this.setState({ stateForm: massiveObjects })
                        }   

                        const parsedDescription = parse(product.description)

                        return(   
                        <>


                        <div className='product-pdp-imgs-c'>
                            {product.gallery.map(photo => {
                            return <div className='product-pdp-img-c' key={photo}>
                                <img 
                                onClick={ () => mainImgChangeHandler(photo) }
                                src={photo}
                                alt='Product'
                                key={photo}/>
                            </div>})}
                        </div>


                        <div className='main-pdp-img-c'>
                            <img src={this.state.mainImg === '' ? product.gallery[0] : this.state.mainImg} alt='Product'/>
                        </div>
                        <div className='product-pdp-info-c'>
                            <div className='name-brand-pdp-c'>
                                <p className='name-pdp'>{product.name}</p>
                                <p className='brand-pdp'>{product.brand}</p>
                            </div>
                            <div className='all-atr-inf-pdp-c'>


                                {product.attributes.map(attribute => {
                                    return (
                                    <div className='atr-and-inf-pdp-c' key={attribute.name}>
                                        <p key={attribute.name} className='atr-pdp-name'>{attribute.name}:</p>
                                        <div className='atr-pdp-c' key={attribute.name + attribute.name}>

                                            {attribute.items.map(item => {
                                                return (
                                                    <div 
                                                        className='atr-pdp' 
                                                        key={item.value}
                                                        onClick={() => stateFormChangeHandler({ attribute: attribute.name,value: item.value })}>
                                                        {item.value[0]==='#'? 

                                                            <div
                                                            className={`atr-pdp-color` + ( this.state.selectedOptions.findIndex(value => value === (attribute.name + item.value)) !== -1 ? ' active-pdp-attr' : '') } 
                                                            style={{backgroundColor: item.value}}
                                                            key={item.value}></div>:

                                                            <p className={`atr-pdp-txt` + (this.state.selectedOptions.findIndex(value => value === (attribute.name + item.value)) !== -1 ? ' active-pdp-attr' : '')}
                                                            key={item.value}>
                                                                {item.value}
                                                            </p>}
                                                    </div>
                                                )})}
                                        </div>
                                    </div>)})}

                            <div className='price-pdp-c'>
                                <p className='price-pdp-txt'>Price:</p>
                                <p>
                                    <span className='product-symbol-pdp'>
                                        {this.props.currency.symbol}
                                    </span> 
                                    <span className='product-amount-pdp'>
                                        {product.prices[product.prices.findIndex(obj=>obj.currency.label===this.props.currency.label)].amount}
                                    </span>
                                </p>
                            </div>

                            <div className='btnbuy-pdp-c'>
                                <button className='btnbuy-pdp'
                                onClick={() => sendFormHandler() } 
                                style={indexOnBasket > -1 || productAttributesLength !== selectedAttributesLength ? {opacity: 0.6} : {opacity: 1}} 
                                disabled={indexOnBasket === -1 && productAttributesLength === selectedAttributesLength ? false : true }>add to cart</button>
                            </div>
                            <div className='descr-pdp-c'>
                                {parsedDescription}
                            </div>    
                                
                            </div>
                        </div>
                        </>)
                    }}
                </Query>
            </div>
        )
    }
}


let WithUrlComponent = withRouter(Product)

export default connect((state) => ({
    currency: state.currency,
    basket: state.basket,
}))(WithUrlComponent)