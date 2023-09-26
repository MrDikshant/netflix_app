import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../Assets/Netflix-logo.png'
import Avatar from '../Assets/Netflix-avatar.png'
import '../Styles/nav.css'

function Nav() {
    //variable to store the state of the navbar
    const [showNav, setShowNav] = useState(false)

    //variable to store the history of the current page route
    const navigate = useNavigate();

    //function to handle the scroll event
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowNav(true)
        } else {
            setShowNav(false)
        }
    }

    //UseEffect to toggle the navbar
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`nav ${showNav && "nav_black"}`}>
            <img className="nav__logo" onClick={() => navigate('/')} src={Logo} alt="" />
            <img className="nav__avatar" onClick={() => navigate('/profile')} src={Avatar} alt="" />
        </div>
    )
}

export default Nav