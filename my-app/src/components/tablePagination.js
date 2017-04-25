import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export default class TablePagination extends Component {

    pags = function() {

        let pages = [];

        for( let i=1; i <= this.props.pagesQty.qty; i++ ) {

            if( i === this.props.pagesQty.activePage ) {
                pages.push(<PaginationItem key={'pag' + i} active><PaginationLink>{i}</PaginationLink></PaginationItem>);
            }else {
                pages.push(<PaginationItem key={'pag' + i} onClick={() => this.props.pagination(i)}><PaginationLink>{i}</PaginationLink></PaginationItem>);
            }
        }

        return pages
    };

    render() {
        return (
            <Pagination>
                {this.pags()}
            </Pagination>
        )
    }

}

