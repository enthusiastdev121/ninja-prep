import React from 'react'
import './featured.css'

const FeaturedCard = (props) => {
    return (
        <div className="card mr-5">
            <img className="card-img-top img-fluid" src={props.discoverCardImgPath} alt="Card cap" />
            <div className="card-body">
                <p className="card-title lead text-dark">{props.discoverCardTitle}</p>
            </div>
        </div>
    )
}

export default FeaturedCard
export { default as FeaturedCard } from './FeaturedCard'
