import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const {item, value} = this.props
        const {id, title, img, price, total, count} = item
        const {increment, decrement, removeItem} = value
        // console.log(item)
        return (
            <div className='row my-2 text-capitalize text-center'>
                {/* start */}
                <div className='col-10 mx-auto col-lg-2'>
                    <img src={img} style={{widows:'5rem',height:'5rem'}} className='img-fluid' alt='product image'/>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                     <span className='d-lg-none'>product : </span>
                     {title}
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                     <span className='d-lg-none'>price : </span>
                     {price}
                </div>
                <div className='col-10 mx-auto col-lg-2 my-2 my-lg-0'>
                    <div className='d-flex justify-content-center'>
                        <div>
                            <span className='btn btn-black mx-1' onClick={()=>decrement(id)}>-</span>
                            <span className='btn btn-black mx-1'>{count}</span>
                            <span className='btn btn-black mx-1' onClick={()=>increment(id)}>+</span>

                        </div>
                    </div>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                     <div className='cart-icon' onClick={()=>removeItem(id)}>
                        <i className='fa fa-trash'></i>
                     </div>
                </div>
                <div className='col-10 mx-auto col-lg-2'>
                     <strong>item total : {total} Dhs</strong>
                </div>
            {/* end */}
            </div>
        )
    }
}
