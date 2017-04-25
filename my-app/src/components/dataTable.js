import React, { Component } from 'react';
import TableHead from './tableHead';
import TableBody from './tableBody';
import { Table } from 'reactstrap';

export default class DataTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortedBy: 0
        };

        this.sort = this.sort.bind(this);
    }

    sort = function(columnNumb) {

        if( columnNumb === this.state.sortedBy ) {
            this.props.tBody.reverse();
        } else {

            this.props.tBody.sort(function (a, b) {

                if (a[columnNumb] > b[columnNumb]) {
                    return 1;
                }
                if (a[columnNumb] < b[columnNumb]) {
                    return -1;
                }
                return 0;
            });

        }

        this.setState({
            sortedBy: columnNumb
        });
    };

    render() {
        return (
            <Table>
                <TableHead data={this.props.tHead} sort={this.sort} />
                <TableBody data={this.props.tBody} paginationData={this.props.paginationData} dataOutput={this.props.dataOutput} />
            </Table>
        )
    }

}

