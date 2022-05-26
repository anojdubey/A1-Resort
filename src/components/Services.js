import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"Free Cocktails for you",
                info:"Fresh beverages from different countries and fresh wines"
            },
            {
                icon:<FaHiking/>,
                title:"Exciting Hiking places",
                info:"Big moubtains And exciting hiking loacations"
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Van Service",
                info:"You can get free personal van service For the stay"
            },
            {
                icon:<FaBeer/>,
                title:"Fresh Beers",
                info:"Fresh and Strong Beers to make your stay amazing"
            },
        ]
    }
    render() {
        return (
            <section className='services' >
                <Title title="Services"/>
                <div className='services-center'>
                    {this.state.services.map((item,index)=>{
                        return <article key={index} className='service'>
                            <h6>{item.icon}</h6>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
