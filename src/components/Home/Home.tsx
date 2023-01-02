import React from "react";
import './Home.scss'
import { useAppSelector } from "src/hooks/stateHooks";
import { headLine, locationIcon, parrot, membersIcon, membersBg } from "src/assets";

const Home: React.FC = () => {

    const members: number = useAppSelector(state => state.home.members)

    const getMembersString = (): string => {
        return members.toString().split('').reverse().map((s, index) => {
            let res = ['']
            if ((index + 1) % 3 === 0) {
                res.push(' ')
            }
            res.push(s)
            return res.join('')
        }).reverse().join('')
    }

    return (
        <div className={'home'} id={'home'}>
            <div className={'home__search'}>
                <img className={'home__search-img'} src={headLine} alt="Nature needs you" />
                <p className={'home__search-description'}>The scale of the challenges facing our planet can seem daunting, but we can all do something.</p>
                <form className={'home__form'} onSubmit={(e) => e.preventDefault()}>
                    <img className={'home__form-icon'} src={locationIcon} alt="Location" />
                    <label htmlFor="search" className={'home__form-label'}>
                        <input id={'search'} name={'search'} className={'home__form-input'} type="text" placeholder={'Find the place to help'} />
                    </label>
                    <button type={"submit"} className={'home__form-btn'}>
                        <span>{'Search'.toUpperCase()}</span>
                    </button>
                </form>
            </div>
            <div className={'home__members'}>
                <img className={'home__members-img'} src={parrot} alt="Parrot" />
                <div className={'home__members-card'} style={{ backgroundImage: `url(${membersBg})` }}>
                    <img className={'home__members-card-icon'} src={membersIcon} alt="Head" />
                    <div className={'home__members-card-text'}>
                        <h6>Members</h6>
                        <span>{getMembersString()}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;