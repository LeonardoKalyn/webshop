import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'react-bootstrap';
import {ProductListUnit} from './productListUnit';

export class ProductList extends React.Component {
    render() {
        let productData = this.props.listOfProducts.filter(
            (data, idx) => {
                return idx < 3;
            });
            
        let data = productData.map((data, idx) =>{
            return (
                <ProductListUnit product={data} />
            );
        });
        
        return <Row>{data}</Row>
        
    }
}

ProductList.propTypes = {
    listOfProducts: PropTypes.Object
}
