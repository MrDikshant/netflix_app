import React from 'react'
import Nav from '../Components/Nav'
import '../Styles/profilePage.css'
import Avatar from '../Assets/Netflix-avatar.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/UserSlice'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

function ProfilePage() {

    const user = useSelector(selectUser);
    const navigate = useNavigate();
    return (
        <div className='profilePage'>
            <Nav />
            <div className="profilePage__body">
                <h1>Edit Profile</h1>
                <div className="profilePage__info">
                    <img src={Avatar} alt="" />
                    <div className="profilePage__details">
                        <h2>{user.email}</h2>
                        <div className="profilePage__plans">
                            <h4>Plans (Current Plan: premium)</h4>
                            <div className="profilePage__renewaldate">
                                <p>Renewal Date: 04/03/2021</p>
                            </div>
                            <div className="profilePage__plan">
                                <div className="profilePage__planDetails">
                                    <h5>Netflix Standard</h5>
                                    <p>1080p</p>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className="profilePage__plan">
                                <div className="profilePage__planDetails">
                                    <h5>Netflix Basic</h5>
                                    <p>480p</p>
                                </div>
                                <button>Subscribe</button>
                            </div>
                            <div className="profilePage__plan">
                                <div className="profilePage__planDetails">
                                    <h5>Netflix Premium</h5>
                                    <p>4K+HDR</p>
                                </div>
                                <button style={{ backgroundColor: "gray" }}>Current Package</button>
                            </div>
                            <button className="profilePage__signOut" onClick={() => {
                                auth.signOut();
                                navigate('/');
                            }}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage

