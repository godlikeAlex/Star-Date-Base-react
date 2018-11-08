import React, {Component} from 'react';
import './app.css';
import icon from './Double Ring-1s-200px.svg';

export default class Spiner extends Component {
    render(){
        return(
            <div className='spiner'>
                <img src={icon} alt="error icon"/>
                <br/>
                Loading...
            </div>
        )

   }
}