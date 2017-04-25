import React, { Component } from 'react';
import DataTable from './dataTable';
import InputFilter from './inputFilter';
import TablePagination from './tablePagination';
import { Row, Col } from 'reactstrap';


export default class Section extends Component {

    constructor(props) {
        super(props);

        this.bodyArrayFiltered = this.props.bodyArray;

        this.pagesQty = {
            'qty': Math.ceil(this.props.bodyArray.length / 50),
            'activePage': 1
        };
        this.paginationData = {
            'start': 0,
            'end': 49
        };

        this.dataFilter = this.dataFilter.bind(this);
        this.pagination = this.pagination.bind(this);
    }

    componentWillReceiveProps = function() {
        this.bodyArrayFiltered = this.props.bodyArray;
        this.pagesQty.qty = Math.ceil(this.bodyArrayFiltered.length / 50);
    };

    dataFilter = function(e) {
        let value = e.target.value.trim().toLowerCase();

        if( value === '' ) {
            this.bodyArrayFiltered = this.props.bodyArray;
        }
        else {
            this.bodyArrayFiltered = this.props.bodyArray.filter((item) => {
                return item[1].toLowerCase().includes(value);
            });
        }

        this.pagination(1);
    };

    pagination = function(e) {

        this.pagesQty.activePage = e;
        let start = (e-1)*50, end = start+49;

        this.paginationData = {
            'start': start,
            'end': end
        };

        this.setState({});
    };

    render() {

        return (
            <Row>
                <Col sm="4">
                    <InputFilter dataFilter={this.dataFilter} />

                    <TablePagination pagesQty={this.pagesQty} pagination={this.pagination} />
                </Col>
                <Col sm="12" md="8">
                    <DataTable tBody={this.bodyArrayFiltered} tHead={this.props.headArray} paginationData={this.paginationData} />
                </Col>
            </Row>
        )
    }

}

