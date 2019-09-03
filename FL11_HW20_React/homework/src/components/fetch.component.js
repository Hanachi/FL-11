import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { card } from '@material-ui/core';
import Card from '../components/card.component';
import  style from './fetch.module.scss';
function Fetch({emoji,addToCard}) {
    console.log(emoji);
    
        return (
            <div className = {style.container}>
                <div className = {style.cardView} >
                    {emoji.map(item =>  <Card key={item.title} obj={item} addToCard={addToCard} /> )}
                </div>
            </div>
        )
}

export default Fetch;