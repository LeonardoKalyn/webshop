import React from 'react';
import PropTypes from 'prop-types';
import {MainOffer} from './mainOffer';
import {ProductList} from './productList';

export class ProductDisplayer extends React.Component {
    render() {
        return (
            <div>
                <MainOffer productOffer={this.props.products.main_offering[0]} />
                <ProductList listOfProducts={this.props.products.sale_offerings} />
            </div>
        );
    }
}

ProductDisplayer.propTypes = {
    products: PropTypes.Object
}