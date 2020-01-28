import React, { Component } from 'react'
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext()
//Provider
//Consumer

class ProductProvider extends Component {
    constructor(props){
        super(props)

        this.state = {
            product: [],
            detailProduct: detailProduct,
            cart:[],
            modalOpen: false,
            modalProduct:detailProduct,
            cartSubTotal: 0,
            cartTax: 0,
            cartTotal: 0,
        }
        this.getItem = this.getItem.bind(this)
        this.handelDetail = this.handelDetail.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.clearCart = this.clearCart.bind(this)
        this.addTotal = this.addTotal.bind(this)


    }

    componentDidMount(){
        this.setProducts()
        // console.log(this.state.product)
    }

    setProducts(){
        let temProduct = []
        storeProducts.forEach(item => {
            const singleItem = {...item};
            temProduct = [...temProduct, singleItem]
        })

        this.setState(()=>{
        return {product: temProduct}
        })


    }

    getItem (id){
        const pro = this.state.product.find(item =>item.id === id);
        return pro;
    }

    handelDetail(id){
        const product = this.getItem(id);
        // console.log(product);
        this.setState(() => {
          return  {detailProduct: product}
        })
    }

    addToCart(id){
        let temProduct = [...this.state.product]
        const index = temProduct.indexOf(this.getItem(id))
        const product = temProduct[index]
        product.inCart = true
        product.count = 1
        const price = product.price
        product.total = price
        this.setState({
            product:temProduct,
            cart:[...this.state.cart, product],
        },()=>{
                this.addTotal()
        })
    }
    openModal(id){
        // console.log('openModal')
        const product =this.getItem(id)
        this.setState({
            modalProduct:product,
            modalOpen:true
        })
    }
    closeModal(){
        this.setState({
            modalOpen:false
        })
    }

    increment(id){
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count + 1
        product.total = product.count * product.price

        this.setState({
            cart: [...tempCart]
        },()=>{
            this.addTotal()
        })

    }

    decrement(id){
        let tempCart = [...this.state.cart]
        const selectedProduct = tempCart.find(item => item.id === id)
        const index = tempCart.indexOf(selectedProduct)
        const product = tempCart[index]
        product.count = product.count - 1

        if(product.count === 0){
            this.removeItem(id)
            // product.count=1
        }
        else{
            product.total = product.count * product.price

            this.setState({
                cart: [...tempCart]
            },()=>{
                this.addTotal()
            })
        }


    }

    removeItem(id){
        let tempProduct =[...this.state.product]
        let tempCart =[...this.state.cart]

        tempCart = tempCart.filter(item => item.id !== id)

        const index = tempProduct.indexOf(this.getItem(id))
        let removedProduct = tempProduct[index]
        removedProduct.inCart = false
        removedProduct.count = 0
        removedProduct.total = 0
        this.setState({
            cart: [...tempCart],
            product: [...tempProduct]
        },()=>{
            this.addTotal()
        })
    }

    clearCart(){
        this.setState({
            cart: []
        },()=>{
            this.setProducts()
            this.addTotal()
        })
    }

    addTotal(){
        let subTotal = 0
        this.state.cart.map(item =>{subTotal += item.total})
        const tempTax = subTotal * 0.1
        const tax = parseFloat(tempTax.toFixed(2))
        const total = subTotal + tax
        this,this.setState({
            cartSubTotal: subTotal,
            cartTax: tax,
            cartTotal: total
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handelDetail:this.handelDetail,
                addToCart:this.addToCart,
                getItem:this.getItem,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart:this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer

export {ProductProvider, ProductConsumer}


