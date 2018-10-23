import React, { Component } from 'react';

class swapiApi {
    _baseApi = 'https://swapi.co/api';

    async getResource(url) {
            const res = await fetch(`${this._baseApi}${url}`);

            if(!res.ok){
              throw new Error(`Cloud not fetch ${url}, received ${res.status}`);
            }

            return await res.json();
    }

    async getAllPeople(){
      const res = await this.getResource('/people/');
      return res.results;
    }

    getPerson(id){
      return this.getResource(`/people/${id}/`)
    }

    async getAllPlanets(){
        const res = await this.getResource('/planets/');
        return res.results;
    }

    getPlanet(id){
        return this.getResource(`/planets/${id}/`)
    }

    async getAllStarships(){
        const res = await this.getResource('/starships/');
        return res.results;
    }

    getStarship(id){
        return this.getResource(`/starships/${id}/`)
    }



}

const api = new swapiApi();

api.getAllPeople()
    .then(body=>{
      console.log(body)
    });

console.log()

class App extends Component {
  render() {
      return (
          <h1>Hello world</h1>
      );
    };
}

export default App;
