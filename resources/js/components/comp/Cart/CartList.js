import React, { Component } from 'react'
import CartItem from './CartItem'

export default class CartList extends Component {
    render() {
        const {value} = this.props
        const {cart} = value
        // console.log('the cart',cart)
        // console.log('the value',value)

        return (
            <div className='container-fluid'>
                {cart.map(item=>{
                    return <CartItem key={item.id} item={item} value={value}/>
                })}
            </div>
        )
    }
}
