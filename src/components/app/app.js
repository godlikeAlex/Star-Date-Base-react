import {Component} from "react";
import React from "react";
import './style.css';

// All components UI
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';
import StarShipDetails from '../star-ship-details';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <RandomPlanet/>
                <div className='persons'>
                    <ItemList/>
                    <PersonDetails/>
                </div>
                <StarShipDetails/>
            </div>

        );
    };
}

export default App;