import React, { Component } from 'react';
import { FormGroup, Label, Input, Row, Col } from 'reactstrap';

export default class FormatType extends Component {

    render() {
        return (
            <FormGroup tag="fieldset">
                <legend>Набор данных:</legend>
                <Row>
                    <Col xs="12" sm="3">
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1" value="short" onChange={this.props.loadData} />{' '}
                                Маленький
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="3">
                        <FormGroup check>
                            <Label check>
                                <Input type="radio" name="radio1"  value="long" onChange={this.props.loadData} />{' '}
                                Большой
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="3">
                        <FormGroup check disabled>
                            <Label check>
                                <Input type="radio" name="radio1" disabled />{' '}
                                Свой
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="3"></Col>
                </Row>
            </FormGroup>
        )
    }

}

