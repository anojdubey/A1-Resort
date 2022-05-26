import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import FeaturedRooms from '../components/FeaturedRooms'
import Hero from '../components/Hero'
import Services from '../components/Services'

export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="Mehnge Rooms" subtitle="Rooms starting from 1500rs/Night" >
                <Link to="/rooms" className='btn-primary'>
                    Our Rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        </>
    )
}

