import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './dashboard.module.scss'


function Dashboard({emoji}) {
    console.log(emoji);
    return(
        <div className={style.dashboard}>
          {emoji !== undefined ? 
          <div className={style.dashboardItem}>
          <h3>{emoji.title}</h3> 
          <span>Includes</span>
          {<div className={style.smiles}>
              {emoji.emoji.map((item,index) =>{
              if(index > 2)
              {
                return;
              }
              else return <p>{item.char}</p>;;
            })
              }
            </div>
        }
          <button>{'Get ' + emoji.price+'$'}</button>
         </div>: 'loading'}
        </div>
    )
  }
  export default Dashboard;
