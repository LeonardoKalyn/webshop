import React from 'react';
import PropTypes from 'prop-types';
import {Row} from 'react-bootstrap';
import {MainOffering} from './mainOffering';
import {RibbonOffering} from './ribbonOffering';

export class Offerings extends React.Component {
    render() {
        let productData = this.props.productData.filter(
            (data, idx) => {
                return idx < this.props.maxProducts;
            });
            
        let data = productData.map((data, idx) =>{
            if(this.props.type ==='main'){
                return (
                    <MainOffering {...this.props} key={idx} productData={data} />
                );
            }
            else {
                return (
                    <RibbonOffering {...this.props} key={idx} productData={data} />
                );
            }
        });
        
        return <Row>{data}</Row>
        
    }
}

Offerings.propTypes = {
    type: PropTypes.oneOf(['main', 'ribbon']),
    maxProducts: PropTypes.number,
    productData: PropTypes.array
}

Offerings.defaultProps = {
    type: 'main',
    maxProducts: 3
}