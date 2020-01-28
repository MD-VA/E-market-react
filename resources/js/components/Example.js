import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import {ProductProvider} from './Context'
import * as serviceWorker from './serviceWorker';



export default class Example extends Component {
    render() {
    return (
        <ProductProvider>
            <Router>
                <App/>
            </Router>
        </ProductProvider>
  );
}
}



if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
serviceWorker.unregister();
