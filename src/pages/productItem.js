import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {ProductInfo} from './productInfo';

export class ProductItem extends React.Component {
    render(){
        if(!this.props.products){
            return null;
        }
        else{
            let products = this.props.products.main_offering.concat(this.props.products.sale_offering);
            let data = products.filter( (item)=> {
                return item[Object.keys(item)].SKU === this.props.routParams.id;
            });
            if(!data.length){
                return (
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <h1>Product missing</h1>
                                
                                <p>I'm sorry, but the product could not be found.</p>
                            </Col>
                        </Row>
                    </Grid>
                );
            }
            else {
                return (
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <ProductInfo productData={data[0]} />
                            </Col>
                        </Row>
                    </Grid>
                );
            }
        }
    }
}