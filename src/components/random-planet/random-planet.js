import {Component} from "react";
import React from "react";
import './style.css';
import swapiService from '../Services/swapi';
import Spiner from '../spiner';
import ErrorIndicator from '../error';

class RandomPlanet extends Component {

    swapiService = new swapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 10000);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet)=>{
      this.setState({
          planet,
          loading:false,
          error: false
      });
    };

    onError = (err)=>{this.setState({error:true,loading:false,})};

    updatePlanet = ()=>{
        const id = Math.floor(Math.random() * 25);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    };

    render() {

        const { planet,loading, error } = this.state;

        const hasData = !(error || loading);

        const errorMessage = error  ? <ErrorIndicator/> : null;
        const spiner =  loading ? <Spiner/> : null;
        const planetView = hasData  ? <PlanetVie planet={planet} /> : null;

        return (
                <div className="jumbotron random-planet">
                    {errorMessage}
                    {spiner}
                    {planetView}
                </div>
        );

    };

}

const PlanetVie = ({planet})=>{
    const {id,name,population,rotationPeriod,diameter} = planet;
    return (
        <React.Fragment>
            <div className="planet-image">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='planet'/>
            </div>
            <div className="planet-info">
                <h3>{name}</h3>
                <ul className='planet-info__list-info'>
                    <li> Population : {population} </li>
                    <li> Rotation Period : {rotationPeriod} </li>
                    <li> Diameter : {diameter} </li>
                </ul>
            </div>
        </React.Fragment>
    )
};





export default RandomPlanet;