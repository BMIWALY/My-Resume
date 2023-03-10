/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";


import socialMediaIcons from "../data/socialMediaIcons"
import BulletPoints from "../../public/image/element/Bullet Points.png"
import profileImage from "../../public/image/profile-image/profile-image-7.png"


function Header() {


    return (
        <div className='header'>

            <div className='header-bar' >
                <h1 className='header-title'>My Profile</h1>
            </div>

            <div className='header-box'>

                <div className='header-introduction'>
                    <p>Hi!</p>
                    <p className="introduction-name">I’m Sasimaporn Saeliang <br /> a Frontend developer.</p>
                    <p className="introduction-detail">Frontend developer based in Thailand, <br /> I am coding with a clean and beautiful problem solving in mind. </p>
                    <div className="social-media-icons-box">
                        <p className="introduction-detail">Follow me</p>
                        {socialMediaIcons.map((item, index) => {
                            return (
                                <a href={item.url}>
                                    <div className="social-media-icons" key={index}
                                        css={css`background-color: ${item.bgColor} ;`} >

                                        <img className="social-media-icons-img" src={item.icon} alt={item.name} />

                                    </div>
                                </a>

                            )
                        })}
                    </div>
                    <div className="introduction-button">
                        <div className="button-1"> Send Request</div>
                        <div className="button-2" > Download CV</div>
                    </div>

                </div>


                <div className='header-profile-image' >
                    <img className='bullet-points-image-1' src={BulletPoints} />
                    <img className='bullet-points-image-2' src={BulletPoints} />
                    <img className='profile-image' src={profileImage} alt="Profile Image" />

                </div>

            </div>

        </div>
    )

}

export default Header;