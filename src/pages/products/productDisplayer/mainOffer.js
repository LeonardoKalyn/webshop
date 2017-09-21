import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Col, Button} from 'react-bootstrap'

export class MainOffer extends React.Component{
    render() {
        let title = Object.keys(this.props.productOffer);
        let productOffer = this.props.productOffer[title];
        if(productOffer){
            return (
                <Col xs={12}>
                    <Col md={6} sm={7} xs={12}>
                        <p>
                            <img 
                              src={productOffer.image.replace("{size}", "400x400")}
                              alt={title}/>
                        </p>
                    </Col>
                    <Col md={6} sm={5} xs={12}>
                        <Link to={"/productitem/" + productOffer.SKU}>
                            <h4>{title}</h4>
                        </Link>
                        
                        <p>{/*possivel erro arui*/}
                            {this.props.productOffer.description}
                        </p>
                        
                        <p>
                            {productOffer.price}
                            {" - "}
                            {productOffer.savings}
                        </p>
                        
                        <p>
                            <Button bsSize="large">Add to cart</Button>
                        </p>
                    </Col>
                </Col>
                    
            )
        }
        else{
            return null;
        }
    }
}

MainOffer.propTypes = {
    productOffer: PropTypes.Object
}