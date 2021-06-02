import React from 'react';

function Card(props){
    return(
      <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="mypic" className="card__img" />
          <div className="card_info">
          <span className="card_category">{props.title}</span>
          <h3 className="card_title">{props.name}</h3>
          <a href={props.link} target="_blank">
          <button>watch now</button>
            </a>
          </div>
  
      </div>
  
      </div>
  
  </>
    );
  }

export default Card;

