import React, { Component } from 'react';

export default class OutputData extends Component {

    outputMarkup = function() {
        return this.props.data.map((row, i) => {
            return  <div className="dataOutput_wrapper" key={'outputData' + i}><p className="dataOutput_title">{row.title}:</p><p className="dataOutput_value">{row.value}</p></div>
        });
    };

    render() {
        return (
            <div className="dataOutput">
                {this.outputMarkup()}
            </div>
        )
    }

}