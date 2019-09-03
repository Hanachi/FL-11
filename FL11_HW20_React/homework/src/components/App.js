import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fetch from './fetch.component';
import Dashboard from './dashboard.component';
import { Basket } from './basket.component';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { Emoji: [] , cart: []};
    }
    componentDidMount() {
        fetch('http://localhost:1337/emoji-shop')
        .then(response => response.json())
        .then(text => {
            console.log(text.emoji);
            this.setState({ Emoji: text.emoji,title: text.emoji[0].title})
        })
    }
    addToCard = (emoji) => {
        this.setState(prevState => {
          return {
            ...prevState,
            cart: [...prevState.cart, emoji]
          }
        })
      }
    
      removeFromCard = (emoji) =>{
        this.setState(prevState => {
          return {
            ...prevState,
            cart: prevState.cart.filter(item => item !== emoji)
          }
        })
      }
    
      success = () => {
        alert('Your purchase is complete!');
        this.setState(prevState => {
          return {
            ...prevState,
            cart: []
          }
        })
      }
    render(){
        console.log(this.state.cart);
    return (
        <div>
        <Basket cart={this.state.cart} removeFromCard={this.removeFromCard} buy={this.success} />
        <Dashboard emoji={this.state.Emoji[0]} addToCard={this.addToCard}  />
        <Fetch emoji={this.state.Emoji} addToCard={this.addToCard} />
        </div>
    )
    }
}

export default App;