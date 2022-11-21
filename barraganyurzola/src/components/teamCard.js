import React from 'react'
import '../styles/team.css';

function TeamCard(props) {
    return (
<div class="equipob-container">
      <div class="equipob-item">
        <img src={props.img} alt=""/>
        <div class="equipob-text">
        <h2>{props.role}</h2>
          <h2>{props.name}</h2>
        </div>
      </div>
      </div>
    )
}

export default TeamCard;