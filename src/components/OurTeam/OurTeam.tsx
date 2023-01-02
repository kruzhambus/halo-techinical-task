import React from "react";
import './OurTeam.scss'
import { teamOne, teamTwo, teamTree, teamLine, teamLineDesktop } from "src/assets";
import { DESKTOP_WIDTH } from "src/App";

const OurTeam: React.FC = () => {
    return (
        <div className={'our-team'} id={'ourTeam'}>
            <div className={"container"}>
                <div className={'our-team__text'}>
                    <h2 className={'our-team__title'}>Our Top Team</h2>
                    <p className={'our-team__description'}>Learn more about how you can save our planet's nature. </p>
                </div>
                <div className={'our-team__team'}>
                    <img className={'our-team__team-person our-team__team-person_one'} src={teamOne} alt="Team 1" />
                    <img className={'our-team__team-line our-team__team-line_first'} src={Number.parseInt(DESKTOP_WIDTH) < document.body.offsetWidth ? teamLineDesktop : teamLine} alt="Team line" />
                    <img className={'our-team__team-person our-team__team-person_two'} src={teamTwo} alt="Team 2" />
                    <img className={'our-team__team-line our-team__team-line_second'} src={Number.parseInt(DESKTOP_WIDTH) < document.body.offsetWidth ? teamLineDesktop : teamLine} alt="Team line" />
                    <img className={'our-team__team-person our-team__team-person_tree'} src={teamTree} alt="Team 3" />
                </div>
            </div>
        </div>
    )
}

export default OurTeam;