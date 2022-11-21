import React from 'react'
import '../styles/lawyerCard.css'

function lawyerCard(props) {
    return (
        <div className='container p-0 lawyerCard'>
        <div class="card ">
              <img src={props.lawyerImg} className="imgLayer " alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.cardLawyerName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{props.cardLawyerRole}</h6>
                <p class="card-text">{props.cardLawyerDescription}</p>

            </div>
            </div>
        </div>
    )
}
export default lawyerCard;