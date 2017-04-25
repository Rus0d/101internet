import React, { Component } from 'react';
import { Input, FormGroup, Label } from 'reactstrap';

export default class InputFilter extends Component {

    constructor(props) {
        super(props);

        this.dataFilter = this.dataFilter.bind(this);
        this.dataFiltered = this.props.data;
    }

    componentWillReceiveProps = function() {
        this.dataFiltered = this.props.data;
    };

    dataFilter = function(e) {
        let value = e.target.value.trim().toLowerCase();

        if( value === '' ) {
            this.dataFiltered = this.props.data;
        }
        else {
            this.dataFiltered = this.props.data.filter((item) => {
                return item[1].toLowerCase().includes(value);
            });
        }

        console.log(this.dataFiltered);

        this.props.update(
            {
                pagesQty: {
                    qty: Math.ceil(this.dataFiltered.length / 50),
                    activePage: 1
                },
                data: this.dataFiltered
            }
        );

    };

    render() {
        return (
            <FormGroup>
                <Label for="examplePassword">Фильтрация по строке:</Label>
                <Input type="text" name="filterInput" onChange={this.dataFilter} placeholder="Введите текст" id="examplePassword" />
            </FormGroup>
        )
    }

}

