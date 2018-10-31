import {Component} from "react";
import React from "react";
import './style.css';
import swapiService from '../Services/swapi';

class RandomPlanet extends Component {

    swapiService = new swapiService();

    state = {
        id:null,
        name : null,
        population: null,
        rotationPeriod: null,
        diameter: null
    };

    constructor(){
      super();
      this.updatePlanet();
    };

    updatePlanet(){
        const id = Math.floor(Math.random()*20+2);
        this.swapiService
            .getPlanet(id)
            .then(planet=>{
                this.setState({
                    id,
                    name: planet.name,
                    population: planet.population,
                    rotationPeriod: planet.rotation_period,
                    diameter: planet.diameter
                })
            });
    };

    render() {

        const {id,name,population,rotationPeriod,diameter} = this.state;

        return (
                <div className="jumbotron random-planet">
                    <div className="planet-image">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
                    </div>
                    <div className="planet-info">
                        <h3>{name}</h3>
                        <ul className='planet-info__list-info'>
                            <li> Population : {population} </li>
                            <li> Rotation Period : {rotationPeriod} </li>
                            <li> Diameter : {diameter} </li>
                        </ul>
                    </div>
                </div>
        );
    };
}

export default RandomPlanet;