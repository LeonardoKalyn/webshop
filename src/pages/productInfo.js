import React from 'react';
import PropTypes from 'prop-types';
import {Col, Button} from 'react-bootstrap';
//import CartAction from '../actions/cart';

export class ProductInfo extends React.Component{
    render(){
        const title = Object.keys(this.props.productData);
        if(this.props.productData[title]){
            return (
                <Col xs={12}>
                    <Col md={3} sm={4}  xs={12}>
                        <p>
                            <img 
                              src={this.productData[title].image.replace("{size}", "200x150")}
                              alt={title}/>
                        </p>
                    </Col>
                    <Col md={9} sm={8}  xs={12}>
                        <h4>{title}</h4>
                        
                        <p>{/*possivel erro arui*/}
                            {this.props.productData[title].description}
                        </p>
                        
                        <p>
                            {this.props.productData[title].price}
                            {" "}
                            {this.props.productData[title].savings}
                        </p>
                        
                        <p>
                            <Button 
                              bsSize="large" >
                              {/*onClick={CartAction.AddToCart.bind(null, this.props.productData)} > */}
                                Add to cart
                            </Button>
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

ProductInfo.propTypes = {
    productData: PropTypes.Object
}