import React, { Component } from 'react';
import { FormGroup, Label, Row, Col } from 'reactstrap';

export default class FormatType extends Component {

    constructor(props) {
        super(props);

        this.state = {selectedOption: 'short'};
        this.handleOptionChange = this.handleOptionChange.bind(this);
    }

    handleOptionChange = function (changeEvent) {
        this.props.loadData(changeEvent.target.value);
        this.setState({
            selectedOption: changeEvent.target.value
        });
    };

    render() {
        return (
            <FormGroup tag="fieldset">
                <legend>Набор данных:</legend>
                <Row>
                    <Col xs="12" sm="3">
                        <FormGroup check>
                            <Label check>
                                <input type="radio" name="radio1" value="short" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'short'} />{' '}
                                Маленький
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="3">
                        <FormGroup check>
                            <Label check>
                                <input type="radio" name="radio1"  value="long" onChange={this.handleOptionChange} checked={this.state.selectedOption === 'long'} />{' '}
                                Большой
                            </Label>
                        </FormGroup>
                    </Col>
                    <Col xs="12" sm="3">
                        <FormGroup check disabled>
                            <Label check>
                                <input type="radio" name="radio1" disabled />{' '}
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

