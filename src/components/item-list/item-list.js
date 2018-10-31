import {Component} from "react";
import React from "react";
import './style.css';

class ItemList extends Component {
    render() {
        return (
            <div className="list-group item-list">
                <a href='#/' className="list-group-item list-group-item-action">
                    Cras justo odio
                </a>
                <a  href='#/' className="list-group-item list-group-item-action">Dapibus ac facilisis in
                </a>
                <a  href='#/'  className="list-group-item list-group-item-action disabled">Morbi leo risus
                </a>
            </div>
        );
    };
}

export default ItemList;