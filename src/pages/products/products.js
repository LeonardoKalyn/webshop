import React from 'react';
import {ProductDisplayer} from './productDisplayer/productDisplayer';
import {ProductLoader} from './productLoader';

export class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: {}
        }
        
        this.onNewProducts = this.onNewProducts.bind(this);
    }
    
    onNewProducts = (newState) => {
        this.setState(newState);
    }
    
    render() {
        if(Object.keys(this.state.products).length === 0 && this.state.products.constructor === Object ){
            return (
                <div>
                    <ProductLoader onNewProducts={this.onNewProducts} />
                </div>
            );
        }
        else {
            return (
                <div>
                    <ProductLoader onNewProducts={this.onNewProducts} />
                    <ProductDisplayer products={this.state.products} />
                </div>
            );
        }
    }
}

