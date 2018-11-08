import {Component} from "react";
import React from "react";
import './style.css';
import SwapiService from "../Services/swapi";

// All components UI
import Header from '../header';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import RandomPlanet from '../random-planet';
import StarShipDetails from '../star-ship-details';

class App extends Component {

    swapiService = new SwapiService();

    state = {
        toggledPlanet: true,
        selectedPerson: 5
    };

    handlerPlanet = ()=>{
      this.setState((state)=>{
          return {
              toggledPlanet: !state.toggledPlanet
          }
      })
    };

    onPersonSelected = (id)=>{
        this.setState({
            selectedPerson:id
        });
    };

    render() {
        const tooglePlanet = this.state.toggledPlanet ? <RandomPlanet/> : null;
        return (
            <div className='container'>
                <Header />
                {tooglePlanet}
                <button type="button" className="btn btn-info" onClick={this.handlerPlanet}>Toggle random planet</button>
                <div className='persons'>
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPeople}/>
                    <ItemList
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPlanets}/>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
                <StarShipDetails/>
            </div>

        );
    };
}

export default App;