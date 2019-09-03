import React from 'react';
// import styles from './basket.module.scss';

export function Basket(props) {
  return (
    <div >
        <h3>Basket</h3> 
        {props.cart.length > 0 &&
          (
            <div>
              <div >
                {props.cart.map(emoji =>
                    <div key={emoji.title}>{emoji.title} - {emoji.price}$
                      <a onClick={()=> props.removeFromCard(emoji)} href='/#'>clear</a>
                    </div>
                )}
              </div>
              <button onClick={() => props.buy()}>Purchase</button>
            </div>
          )
        }
        {props.cart.length === 0 &&
          (
            <div>Nothing</div>
          )
        }
    </div>
)
}