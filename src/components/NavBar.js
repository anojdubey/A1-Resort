import React, { Component } from 'react'
import resort from "../images/resort.png";
import {FaAlignRight} from "react-icons/fa";
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    state={
        isOpen:false
    }
    handeleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar" >
                <div className='nav-center' >
                    <div className='nav-header' >
                        <Link to="/">
                            <img style={{
                                height:"4rem"
                            }} src={resort} alt='Resorts'/>
                        </Link>
                        <button type='button' className='nav-btn'
                        onClick={this.handeleToggle}
                        >
                            <FaAlignRight className='nav-icon'/>
                        </button>
                    </div>
                    <ul style={{alignSelf:"center"}} className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
