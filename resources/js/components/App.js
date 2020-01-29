import React,{Component, Fragment} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import Cart from './comp/Cart';
import Default from './comp/Default';
import Details from './comp/Details';
import Navbar from './comp/Navbar';
import ProductList from './comp/ProductList';
import Index from './comp/product/Index'
import Modal from './comp/Modal';
// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css';

export default class App extends Component {
    render(){
  return (
    <Fragment>

        <Navbar/>

        <Switch>

            <Route exact path="/" component={ProductList}/>

            <Route path="/details" component={Details}/>

            <Route path="/cart" component={Cart}/>

            <Route path="/add" component={Index}/>

            <Route component={Default}/>

        </Switch>

        <Modal/>

    </Fragment>
  );
}
}


