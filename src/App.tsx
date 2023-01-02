import React, { useState } from 'react';
import './App.scss';
import Navigation from "src/components/Navigation/Navigation";
import Home from "src/components/Home/Home";
import OurTeam from "src/components/OurTeam/OurTeam";
import Registration from "src/components/Registration/Registration";
import FAQ from "src/components/FAQ/FAQ";
import Slider from "src/components/Slider/Slider";
import Footer from "src/components/Footer/Footer";
import MediaQuery from "react-responsive";

export const DESKTOP_WIDTH: string = (process.env["DESKTOP_WIDTH "]) || '1224px'

function App() {
    const [navigationHeight, setNavHeight] = useState<number>(0)

    return (
        <div className="App" style={{paddingTop: `${navigationHeight}px`}}>
            <Navigation setNavHeight={setNavHeight}/>
            <MediaQuery minWidth={DESKTOP_WIDTH}>
                <div className="container_desktop">
                    <Home/>
                </div>
                <div className="App_white">
                    <div className="container_desktop">
                        <OurTeam/>
                        <Registration/>
                        <FAQ/>
                    </div>
                </div>
                <Slider/>
                <div className="App_white">
                    <div className="container_desktop">
                        <Footer/>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={DESKTOP_WIDTH}>
                <div className={'container'} >
                    <Home/>
                </div>
                <div className="App_white">
                    <OurTeam/>
                    <Registration/>
                    <div className="container">
                        <FAQ/>
                    </div>
                </div>
                <Slider/>
                <Footer/>
            </MediaQuery>
        </div>
    );
}

export default App;
