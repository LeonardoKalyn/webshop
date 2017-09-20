import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Col, Button} from 'react-bootstrap'

export class MainOffering extends React.Component{
    render() {
        const title = Object.keys(this.props.productData);
        if(this.props.productData[title]){
            return (
                <Col xs={12}>
                    <Col md={3} sm={4} xs={12}>
                        <p>
                            <img 
                              src={this.productData[title].image.replace("{size}", "200x150")}
                              alt={title}/>
                        </p>
                    </Col>
                    <Col md={9} sm={8} xs={12}>
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

MainOffering.propTypes = {
    productData: PropTypes.Object
}