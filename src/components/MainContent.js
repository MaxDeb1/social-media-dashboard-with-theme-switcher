import React, { Component } from 'react';
import Card from './Card';
import data from '../data.json';
import OverviewCards from './OverviewCards';

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <section className='main'>
                    <div className='dashboard'>
                        {data.socialMedias.map((socialMedia, i) => {
                            return (
                                <Card 
                                    key={i}
                                    name={socialMedia.name}
                                    image={socialMedia.image}
                                    username={socialMedia.username} 
                                    number={socialMedia.number}
                                    fans={socialMedia.fans} 
                                    statistics={socialMedia.statistics}
                                />
                            )
                        })}
                    </div>
                    <h2>Overview - Today</h2>
                    <div className='overview'>
                        {data.overviews.map((overview, i) => {
                            return (
                                <OverviewCards 
                                    key={i}
                                    metric={overview.metric}
                                    image={overview.image} 
                                    engagement={overview.engagement}
                                    rate={overview.rate}
                                />
                            )
                        })}
                    </div>
                </section>
            </React.Fragment>
        );
    }
};