import React from 'react';
import {Route} from 'react-router-dom';

import {Products} from './pages/products/products';
import {Home} from './pages/home';
import {Company} from './pages/company';
import {ProductItem} from './pages/productItem';
import {Checkout} from './pages/checkout';
import {Receipt} from './pages/receipt';

export class Routes extends React.Component{
    render(){
        return(
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/company" component={Company}/>
                <Route path="/products" component={Products}/>
                <Route path="/productitem:id" component={ProductItem}/>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/receipt" component={Receipt}/>
            </div>
        );
    }
}
