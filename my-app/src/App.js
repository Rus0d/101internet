import React, { Component } from 'react';
import FormatType from './components/formatType';
import Section from './components/section';
import '../public/styles/App.css';
import { Container, Row, Col } from 'reactstrap';
import jsonDataShort from './jsonShort.json';
import jsonDataLong from './jsonLong.json';

export default class App extends Component {

    constructor(props) {
        super(props);

        this.headArray = [];
        this.bodyArray = [];

        this.loadData = this.loadData.bind(this);
    }

    loadData = function(e) {

        let value = e.target.value;

        if (value === 'short') {
            this.headArray = [];
            for (let prop in jsonDataShort[0]) {
                this.headArray.push(jsonDataShort[0][prop]);
            }

            this.bodyArray = jsonDataShort.filter(function(item,i) {
                return i;
            });
        }
        else if (value === 'long') {
            this.headArray = [];
            for (let prop in jsonDataLong[0]) {
                this.headArray.push(jsonDataLong[0][prop]);
            }

            this.bodyArray = jsonDataLong.filter(function(item,i) {
                return i;
            });
        }
        else {
            this.headArray = [];
            this.bodyArray = [];
        }

        this.setState({});
    };

    render() {
        return (

            <Container>
                <Row>
                    <Col sm="12">
                        <FormatType loadData={this.loadData}/>
                    </Col>
                </Row>
                <Section headArray={this.headArray} bodyArray={this.bodyArray} />
            </Container>

        )
    }

}

