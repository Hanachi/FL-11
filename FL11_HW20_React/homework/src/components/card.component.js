import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './card.module.scss'

function Card(props) {
  return(
      <div className = {style.card}>
        <span>{	props.obj.emoji[0].char}</span>
        <h5>{props.obj.title}</h5>
        <button onClick={()=>{props.addToCard();}}>{'Get ' + props.obj.price +'$'}</button>
      </div>
  )
}
export default Card;