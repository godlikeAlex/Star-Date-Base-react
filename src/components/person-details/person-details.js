import {Component} from "react";
import React from "react";
import './style.css';

class PersonDetails extends Component {
    render() {
        return (
            <div className="card border-light mb-3 person-details">
                <div className="card-body flex">
                    <div className="img__details">

                    </div>
                    <div className='person-info'>
                        <h1>R2-D2</h1>
                        <ul>
                            <li className='list-item-info'>Gender: n/a</li>
                            <li className='list-item-info'>Birth year: 33BBY</li>
                            <li className='list-item-info'>Eye color: red</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
}

export default PersonDetails;