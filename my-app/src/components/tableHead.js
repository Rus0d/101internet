import React, { Component } from 'react';


export default class TableHead extends Component {

    tableHeadTemplate = function() {
        return this.props.data.map((row, i) => {
            return <td key={'tdHead' + i} onClick={() => this.props.sort(i)}>{row}</td>
        });
    };

    render() {
        return (
            <thead><tr key={'trHead' + 0}>{this.tableHeadTemplate()}</tr></thead>
        )
    }

}
