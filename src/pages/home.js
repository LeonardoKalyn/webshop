import React from 'react';
import {Grid, Row, Col, Jumbotron, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export class Home extends React.Component {
    render(){
        return (
            <Grid >
                <Row>
                    <Col xs={12}>
                        <Jumbotron>
                            <h1> The Webshop </h1>
                            
                            <p>
                                Welcome to The Webshop.
                                <br/>
                                This site is a project created in the intention of practicing a React.js. 
                                And I ended up learning a little about React Router and React Bootsrap. 
                                Feel free to explore the code. 
                            </p>
                            
                            <p>
                                <Link to="/products">
                                    <Button bsStyle="primary" to="/products">
                                        View products
                                    </Button>
                                </Link>
                            </p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
