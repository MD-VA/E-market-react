import React, { Component, Fragment } from 'react'
import Product from './Product'
import Title from './Title'
import {storeProducts} from '../data'
import {ProductConsumer} from '../Context'

export default class ProductList extends Component {

    constructor(props){
        super(props)

        this.state = {
            product: storeProducts,
        }
        // console.log(this.state.product)

    }

    render() {
        return (
            <Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <Title name='the' title='products'/>
                        {/* Product row */}
                        <div className='row'>
                            <ProductConsumer>
                                {value =>{
                                  return value.product.map(product => {
                                    return <Product key={product.id} product={product}/>
                                  })
                                  }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </Fragment>
            // <Product/>
        )
    }
}
