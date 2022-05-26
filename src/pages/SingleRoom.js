import React, { Component } from 'react'
import defaultBcg from "../images/room-3.jpeg";
import { RoomContext } from '../context';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    static contextType= RoomContext;
    constructor(props) {
        super(props);
        // console.log(this.props);
        if(this.props.match && this.props.match.params.slug){
        this.state = {
          slug: this.props.match.params.slug,
          defaultBcg: defaultBcg
    };}
      }
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room){
            return <div className='error' >
                <h3>No Rooms Found...</h3>
                <Link to='/rooms' className='btn-primary'>
                    Return
                </Link>
            </div>
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images}= room;
        const [mainImg,...defaultImg]=images;
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg} >
                    <Banner title={`${name} room`}>
                        <Link to="/rooms" className='btn-primary'>
                            Back to room
                        </Link>
                    </Banner>
                </StyledHero>
                <section className='single-room'>
                    <div className='single-room-images'>
                        {defaultImg.map((item,index)=>{
                            return <img key={index} src={item} alt={name}/>
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                            <article className="info">
                                <h3>Info</h3>
                                <h6>Price : {price} Rs</h6>
                                <h6>Size : {size}SqFt</h6>
                                <h6>max capacity:{
                                    capacity>1?`${capacity} people`:`${capacity} person`
                                    }</h6>
                                    <h6>{pets? "pets are allowed":"Pets are not allowed"}</h6>
                                    <h6>{breakfast && "free breakfast included"}</h6>
                            </article>
                    </div>
                </section>
                <section className='room-extras'>
                    <h6>Extras</h6>
                    <ul className='extras'>
                        {extras.map((item,index)=>{
                            return <li key={index}>
                                - {item}
                            </li>
                        })}
                    </ul>
                </section>
            </>
        )
    }
}

