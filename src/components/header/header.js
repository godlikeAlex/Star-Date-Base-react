import {Component} from "react";
import React from "react";
import './style.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="logotype">
                    Star data base
                </div>
                <ul className="menu-items">
                    <li className="menu-items__item">
                        <a href='/#'>People</a>
                    </li>
                    <li className="menu-items__item">
                        <a href='/#'>Planets</a>
                    </li>
                    <li className="menu-items__item">
                        <a href='/#'>Stars</a>
                    </li>
                </ul>
            </header>
        );
    };
}

export default Header;