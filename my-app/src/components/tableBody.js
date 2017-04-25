import React, { Component } from 'react';


export default class TableBody extends Component {

    makeColumns = function (row) {
        return row.map((col, i) => {
            return <td key={'tdBody' + i}>{col}</td>
        });
    };

    tableTemplate = function() {
        return this.props.data.map((row, i) => {
            if ( i >= this.props.paginationData.start && i <= this.props.paginationData.end ) {
                return <tr onClick={() => this.props.dataOutput(row)} key={'trBody' + i}>{this.makeColumns(row)}</tr>
            }
            else {
                return false
            }
        });
    };

    render() {
        return (
            <tbody>
                {this.tableTemplate()}
            </tbody>
        )
    }

}
