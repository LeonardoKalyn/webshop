import React from 'react';
import {Grid, Row, Col, Panel} from 'react-bootstrap';

export class Company extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col xl={12}>
                        <Panel>
                            <h1> The Webshop Company </h1>
                            
                            <p> Contract Information </p>
                            <p> Fone Number</p>
                            <p> History of The Webshop Company </p>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        );
    }
}