import React from 'react';

const Card = (props) => {

    return (
            <div className={`card-wrap ${props.name}`} key={props.i}>
                <div className='card'>
                    <div className='account'>
                        <img src={props.image}  alt="" />
                        <div className='username'>{props.username} </div>
                    </div>
                    <div className="subs">
                        <div className="number">{props.number} </div>
                        <div className="followers">{props.fans} </div>
                    </div>
                    <div className={ `statistics ${props.statistics < 0 ? "negative" : ""}` }>
                        <svg id="icon-up" xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                        <div className="growth_stats">{props.statistics < 0 ? (props.statistics * -1) : props.statistics } Today</div>
                    </div>
                </div>
            </div>
        );
};

export default Card;