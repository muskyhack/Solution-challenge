import React from 'react'
import Logo from '../assets/Logo.svg'
import Search from '../assets/Search.svg'
import Location from '../assets/Location.svg'
import './Css/Navbar.css'
import LoginPage from './LoginPage'
import { useState } from 'react'
const Navbar = () => {
    const [login, setLogin] = useState(false)
    const handelLogin = () =>{
        setLogin(!login)
    }
  return (
    <>
    <div className='Navbar_contanier'>   
        <nav>
            <div className="logo">
                <img src={Logo} alt="Logo" />  
                <span>Jobility</span>  
            </div>
            <div className='Search_box'>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <button>
                        <img src={Search} alt='search'/>
                    </button>
                </div>
            <div className='Location_contanier'>
                <img src={Location} alt='location'/>
                <span>Location</span>
            </div>
            </div>
            <div className='Menu'>
                <ul>
                    <li><a href="#">Chat</a></li>
                    <li><a href="#">Add Job</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
            <div className='LoginBtn'>
                <button onClick={handelLogin}>Sign Up / Log In</button>
            </div>
        </nav>
    </div>
    {
        login ? 
    <div className='LoginContainer' onClick={handelLogin}>
        <LoginPage/>
    </div>
         : 
         null
    }
    </>
  )
}

export default Navbar
