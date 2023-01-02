import React, { useEffect, useRef, useState } from "react";
import './Navigation.scss'
import { DESKTOP_WIDTH } from "src/App";
import MediaQuery from 'react-responsive'
import { logo } from "src/assets";
import { useAppDispatch, useAppSelector } from "src/hooks/stateHooks";
import { Position, setCurrentPosition } from "src/state/slices/navigationSlice";

interface IProps {
    setNavHeight: (value: number) => void
}


const Navigation: React.FC<IProps> = ({ setNavHeight }) => {

    const currentPosition = useAppSelector(state => state.navigation.currentPosition)
    const dispatch = useAppDispatch()

    const [isBurgerOpen, setBurgerOpen] = useState<boolean>(false)
    const [navHeight, setLocalNavHeight] = useState<number>(0)
    const navRef = useRef<HTMLDivElement>(null)


    useEffect(() => {
        console.log(Position[currentPosition])
    }, [currentPosition])

    useEffect(() => {
        if (navRef && navRef.current) {
            setNavHeight(navRef.current.offsetHeight)
            setLocalNavHeight(navRef.current.offsetHeight)
        }
    }, [])


    const getNavLink = (type: Position): JSX.Element => {

        let link: string = ''

        switch (type) {
            case Position.Home:
                link = 'home';
                break
            case Position["Our mission"]:
                link = 'faq';
                break
            case Position.Places:
                link = 'slider';
                break
            case Position.Team:
                link = 'ourTeam';
                break
        }

        return (
            <a
                onClick={(e) => navLinkHandler(e, type)}
                className={currentPosition === type ? 'navigation__nav-link navigation__nav-link_active' : 'navigation__nav-link'}
                href={`#${link}`}
            >{Position[type]}</a>
        )
    }

    const burgerHandler = (): void => {
        setBurgerOpen(prev => {
            return !prev
        })
    }
    const navLinkHandler = (e: any, position: Position): void => {
        dispatch(setCurrentPosition(position))
        setBurgerOpen(false)
    }

    return (
        <div className={
            isBurgerOpen
                ? 'navigation navigation_open'
                : 'navigation'
        }>
            <div ref={navRef} className={'navigation__menu container'}>
                <a className={'navigation__logo-link'} href="#">
                    <img className={'navigation__logo'} src={logo} alt="Rootz" />
                </a>
                <MediaQuery minWidth={DESKTOP_WIDTH}>
                    <div className={'navigation__nav-links'}>
                        {getNavLink(Position.Home)}
                        {getNavLink(Position["Our mission"])}
                        {getNavLink(Position.Places)}
                        {getNavLink(Position.Team)}
                    </div>
                    <button className={'navigation__nav-btn'}>Apply</button>
                </MediaQuery>
                <MediaQuery maxWidth={DESKTOP_WIDTH}>
                    <div onClick={burgerHandler} className={'navigation__burger'}>
                        <div className="navigation__burger-btn"></div>
                    </div>
                </MediaQuery>
            </div>
            <MediaQuery maxWidth={DESKTOP_WIDTH}>
                <div className={'navigation__nav'} style={{
                    height: `calc(100vh - ${navHeight - 5}px)`,
                    top: `${navHeight}px`,
                    transform: `translateY(${isBurgerOpen ? 0 + 'px' : `-100vh`})`
                }}>
                    {getNavLink(Position.Home)}
                    {getNavLink(Position["Our mission"])}
                    {getNavLink(Position.Places)}
                    {getNavLink(Position.Team)}
                    <button className={'navigation__nav-btn'}>Apply</button>
                </div>
            </MediaQuery>
        </div>
    )
}

export default Navigation;