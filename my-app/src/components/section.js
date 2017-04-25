import React, { Component } from 'react';
import DataTable from './dataTable';
import InputFilter from './inputFilter';
import TablePagination from './tablePagination';
import { Row, Col } from 'reactstrap';


export default class Section extends Component {

    constructor(props) {
        super(props);

        this.dataFiltered = this.props.bodyArray;

        this.state = {
            pagesQty: {
                qty: 1,
                activePage: 1
            },
            paginationData: {
                start: 0,
                end: 49
            },
            data: this.props.bodyArray
        };

        /*this.pagesQty = {
            'qty': Math.ceil(this.dataFiltered.length / 50),
            'activePage': 1
        };
        this.paginationData = {
            'start': 0,
            'end': 49
        };*/

        this.pagination = this.pagination.bind(this);
    }

    componentWillReceiveProps = function() {
        //this.dataFiltered = this.props.bodyArray;
        //this.state.pagesQty.qty = Math.ceil(this.dataFiltered.length / 50);

    };

    update = function(data) {
        //this.dataFiltered = data;

        console.log(data);

        this.setState(data);
        this.pagination(this.state.pagesQty.activePage);
    };

    pagination = function(e) {

        /*this.pagesQty.activePage = e;
        let start = (e-1)*50, end = start+49;

        this.paginationData = {
            'start': start,
            'end': end
        };*/

        this.setState(
            {
                pagesQty: {
                    activePage: e
                },
                paginationData: {
                    start: (e-1)*50,
                    end: (e-1)*50+49
                }
            }
        );
    };

    render() {

        return (
            <Row>
                <Col sm="4">
                    <InputFilter data={this.props.bodyArray} update={this.update} />
                    <TablePagination pagesQty={this.state.pagesQty} pagination={this.pagination} />
                </Col>
                <Col sm="12" md="8">
                    <DataTable tBody={this.state.data} tHead={this.props.headArray} paginationData={this.state.paginationData} />
                </Col>
            </Row>
        )
    }

}

