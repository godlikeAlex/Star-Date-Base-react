import {Component} from "react";
import React from "react";
import './style.css';

class ItemList extends Component {

    state = {
        itemList: null
    };

    componentDidMount (){
        const { getData } = this.props;

        getData()
            .then(itemList=>{
                this.setState({
                    itemList
                });
            });
    };

    renderItems(arr){
        return arr.map(({id,name})=>{
            return (
                <a href='#/' key={id}
                   className="list-group-item list-group-item-action"
                   onClick={()=> this.props.onItemSelected(id)}>
                    {name}
                </a>
            )
        })
    }

    render() {

        const {itemList} = this.state;
        if(!itemList){
            return (
                <div className="list-group item-list">
                    <a href='#/' className="list-group-item list-group-item-action">
                        Loading persons
                    </a>
                </div>
            )
        }

        return (
            <div className="list-group item-list">
                {this.renderItems(itemList)}
            </div>
        );
    };
}

export default ItemList;