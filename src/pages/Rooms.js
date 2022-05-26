import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import Hero from '../components/Hero'
import RoomContainer from '../components/RoomContainer'

export default function Rooms() {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Best Rooms For You" >
                <Link to="/" className='btn-primary' >
                    Back to Home
                </Link>
            </Banner>
        </Hero>
        <RoomContainer/>
        </>
    )
}
