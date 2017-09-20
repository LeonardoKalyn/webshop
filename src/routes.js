import React from 'react';
import {Route} from 'react-router-dom';

import {Products} from './pages/products';
import {Home} from './pages/home';
import {Company} from './pages/company';
import {ProductItem} from './pages/productItem';
import {Checkout} from './pages/checkout';
import {Receipt} from './pages/receipt';

import './firebase/loadProducts';



export class Routes extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            products:{}
        };
        this.updateProducts = this.updateProducts.bind(this);
    }
    
    updateProducts = (newProducts)=>{
        this.setState({
            products: newProducts
        });
    }
    
    render(){
        let WrappedProducts = <Products products={this.state.products} />;
        let WrappedProductItem = <ProductItem products={this.state.products}/>;
        return(
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/company" component={Company}/>
                <Route path="/products" component={WrappedProducts}/>
                <Route path="/productitem:id" component={WrappedProductItem}/>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/receipt" component={Receipt}/>
            </div>
        );
    }
}
