import React from 'react';
import PropTypes from 'prop-types';
import {Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class ProductListUnit extends React.Component {
    render(){
        let title = Object.keys(this.props.product);
        let product = this.props.product[title];
        if(product){
            return (
                <Col md={4} sm={4} xs={12}>
                    <Col xs={12}>
                        <p>
                            <img
                              src={product.image.replace("{size}", "200x200")}
                              alt={title}/>
                        </p>
                    </Col>
                    <Col xs={12}>
                        <Link to={"/productitem/" + product.SKU}>
                            <h3>{title}</h3>
                        </Link>
                        
                        <p>{/*possivel erro arui*/}
                            {product.description}
                        </p>
                        
                        <p>
                            {product.price}
                            {" - "}
                            {product.savings}
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

ProductListUnit.propTypes = {
    product: PropTypes.Object
}