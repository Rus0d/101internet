import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class AddButton extends Component {

    render() {
        return (
            <Button outline color="success" onClick={() => this.props.addButton()} >Добавить таблицу</Button>
        )
    }

}
