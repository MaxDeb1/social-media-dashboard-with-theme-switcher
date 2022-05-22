import React from 'react';

const OverviewCards = (props) => {
    return (
        <div className='overviewCard'>
            <div className='platform'>
                <div className='metric'>{props.metric}</div>
                <img src={props.image} alt="" />
            </div>
            <div className='performance'>
                <div className='engagement'>{props.engagement}</div>
                <div className={ `rate ${props.rate < 0 ? "negative" : ""}` }>
                    <svg id="icon-up" xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                    <div className=''>{props.rate < 0 ? (props.rate * -1) : props.rate }%</div>
                </div>
            </div>
        </div>
    );
};

export default OverviewCards;