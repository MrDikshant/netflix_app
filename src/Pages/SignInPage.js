import React from 'react'
import { useRef } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import '../Styles/signInPage.css'

function SignInPage() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        })

    }
    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        })

    }

    return (
        <>
            <div className='signInPage'>
                <form action="">
                    <h1>Sign In</h1>
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <button className='signInPage__signInButton' onClick={handleSignIn} type='submit'>Sign In</button>
                    <h4>
                        <span className='signInPage--gray'>New to Netflix? </span>
                        <span className='signInPage--link' onClick={handleSignUp}>Sign up now.</span>
                    </h4>
                </form>

            </div>
        </>
    )
}

export default SignInPage