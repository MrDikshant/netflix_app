import React, { useState } from 'react'
import '../Styles/loginPage.css'
import SignInPage from './SignInPage'
import Logo from '../Assets/Netflix-logo.png'

function LoginPage() {
    const [signIn, setSignIn] = useState(false)

    return (
        <>
            <div className='loginPage'>
                <div className="loginPage__background">
                    <img className="nav__logo" src={Logo} alt="Netflix" />
                    <button className='loginPage__button' onClick={() => setSignIn(true)}>Sign In</button>
                    <div className="loginPage__gradient"></div>
                    {
                        signIn ? (
                            <SignInPage />
                        ) : (
                            <>
                                <div className="loginPage__body">
                                    <h1>Unlimited movies, TV shows, and more.</h1>
                                    <p>Watch anywhere. Cancel anytime.</p>
                                    <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                                    <div className="loginPage__input">
                                        <form>
                                            <input type="email" placeholder="Email Address" />
                                            <button className='loginPage__getStarted' onClick={() => setSignIn(true)} type='submit'>GET STARTED</button>
                                        </form>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default LoginPage;