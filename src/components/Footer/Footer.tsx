import React from "react";
import './Footer.scss'
import { twitterIcon, facebookIcon, linkedInIcon } from "src/assets";
import MediaQuery from "react-responsive";
import { DESKTOP_WIDTH } from "src/App";

const Footer: React.FC = () => {
    return (
        <div className={'footer'} id={'footer'}>
            <div className={'footer__intro'}>
                <h2 className={'footer__title'}>Contacts</h2>
                <p className={'footer__description'}>2019 Rootz Foundation. All rights reserved</p>
            </div>
            <div className={'footer__info'}>
                <h3 className={'footer__info-title'}>Headquarters</h3>
                <MediaQuery maxWidth={DESKTOP_WIDTH}>
                    <p className={'footer__info-address'}>1234 Taliban <br /> Los Angeles, La <br /> 1234567</p>
                </MediaQuery>
                <MediaQuery minWidth={DESKTOP_WIDTH}>
                    <p className={'footer__info-address'}>1234 Taliban <br /> Los Angeles, La 1234567</p>
                </MediaQuery>
                <p className={'footer__info-phone'}>(123) 456-7890</p>
            </div>
            <div className={'footer__social-media'}>
                <h3 className={'footer__social-media-title'}>Social media</h3>
                <div className={'footer__social-media-icons'}>
                    <a className={'footer__social-media-link'} target={'_blank'} href="https://twitter.com/">
                        <img className={'footer__social-media-icon'} src={twitterIcon} alt="Twitter" />
                    </a>
                    <a className={'footer__social-media-link'} target={'_blank'} href="https://www.facebook.com/">
                        <img className={'footer__social-media-icon'} src={facebookIcon} alt="Facebook" />
                    </a>
                    <a className={'footer__social-media-link'} target={'_blank'} href="https://www.linkedin.com/">
                        <img className={'footer__social-media-icon'} src={linkedInIcon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;