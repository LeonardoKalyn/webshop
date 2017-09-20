import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'react-bootstrap';
import {Offerings} from './offerings';

export class Products extends React.Component {
    render () {
        return(
            <Grid>
                <Offerings 
                  productData={this.props.products.main_offering}
                  type='main' 
                  maxProducts={1}/>
                <Offerings
                  productData={this.props.products.sale_offerings}
                  type='ribbon'
                  maxProducts={3}/>
            </Grid>
        );
    }
}

Products.propTypes = {
    products: PropTypes.object
}

Products.defaultProps = {
    products: {
        main_offering: [],
        sale_offerings: []
    },
    type: 'main',
    maxProducts: 3
}
