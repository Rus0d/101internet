import React, { Component } from 'react';
import FormatType from './components/formatType';
import Section from './components/section';
import AddButton from './components/addButton';
import '../public/styles/App.css';
import { Container, Row, Col } from 'reactstrap';
import jsonDataShort from './jsonShort.json';
import jsonDataLong from './jsonLong.json';


export default class App extends Component {

    constructor(props) {
        super(props);

        this.loadData = this.loadData.bind(this);
        this.addTable = this.addTable.bind(this);
        this.headArray = [];
        this.bodyArray = [];
        this.sectionArr = [];
        this.sectionNumber = 0;
        this.loadData('short');
    }

    loadData = function(e) {

        let value = e;

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

    addTable = function() {
        let sectionEx = <Section headArray={this.headArray} bodyArray={this.bodyArray} key={'section' + this.sectionNumber} />;
        this.sectionArr.push(sectionEx);
        this.sectionNumber++;
        this.setState({});
    };

    render() {
        return (

                <Container>
                    <Row className="controlPanel">
                        <Col sm="12">
                            <FormatType loadData={this.loadData}/>
                            <AddButton addButton={this.addTable} />
                        </Col>
                    </Row>
                    {this.sectionArr}
                </Container>
        )
    }
}

