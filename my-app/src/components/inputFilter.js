import React, { Component } from 'react';
import { Input, FormGroup, Label } from 'reactstrap';

export default class InputFilter extends Component {

    render() {
        return (
            <FormGroup>
                <Label for="examplePassword">Фильтрация по строке:</Label>
                <Input type="text" name="filterInput" onChange={this.props.dataFilter} placeholder="Введите текст" id="examplePassword" />
            </FormGroup>
        )
    }

}

