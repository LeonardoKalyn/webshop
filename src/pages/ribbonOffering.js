import React from 'react';
import PropTypes from 'prop-types';
import {Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class RibbonOffering extends React.Component {
    render(){
        const title = Object.keys(this.props.productData);
        if(this.props.productData[title]){
            return (
                <Col md={4} sm={4} xs={12}>
                    <Col xs={12}>
                        <p>
                            <img
                              src={this.productData[title].image.replace("{size}", "200x80")}
                              alt={title}/>
                        </p>
                    </Col>
                    <Col xs={12}>
                        <Link to={"/productitem/" + this.props.productData[title].SKU}>
                            <h4>{title}</h4>
                        </Link>
                        
                        <p>{/*possivel erro arui*/}
                            {this.props.productData[title].description}
                        </p>
                        
                        <p>
                            {this.props.productData[title].price}
                            {" "}
                            {this.props.productData[title].savings}
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

RibbonOffering.propTypes = {
    productData: PropTypes.Object
}
