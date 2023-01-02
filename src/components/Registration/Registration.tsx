import React, { useState } from "react";
import './Registration.scss'
import { logInVectorOne, logInVectorTwo } from "src/assets";

const Registration: React.FC = () => {

    const [userName, setUserName] = useState<string>('')
    const [userPassword, setUserPassword] = useState<string>('')

    return (
        <div className={'registration'} id={'registration'}>
            <div className={'registration__text'}>
                <h2 className={'registration__title'}>Get started today!</h2>
                <p className={'registration__description'}>Learn more about how you can save our planet's nature. From smart consumption to switching to renewable energy, each of us can do our part to save the planet. </p>
            </div>
            <form className={'registration__log-in'} onSubmit={e => e.preventDefault()}>
                <h3 className={'registration__log-in-title'}>Log In</h3>
                <label className={'registration__log-in-label'} htmlFor="userName">
                    <input
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        className={'registration__log-in-input'} id={'userName'} type="text" placeholder={'Name'}
                    />
                </label>
                <label className={'registration__log-in-label'} htmlFor="userEmail">
                    <input
                        onChange={(e) => setUserPassword(e.target.value)}
                        value={userPassword}
                        className={'registration__log-in-input'} id={'userEmail'} type="text" placeholder={'Email'}
                    />
                </label>
                <button className={'registration__log-in-btn'} type={'submit'}><span>Book a demo</span></button>
                <img className={'registration__log-in-vector registration__log-in-vector_first'} src={logInVectorOne} alt="Log In vector 1" />
                <img className={'registration__log-in-vector registration__log-in-vector_second'} src={logInVectorTwo} alt="Log In vector 2" />
            </form>
        </div>
    )
}

export default Registration;