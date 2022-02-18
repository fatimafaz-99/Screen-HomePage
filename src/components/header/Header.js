import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function Header() {

    return (

        <div className='headercontainer'>
            <section>

                <img className='logomyworld' src="file:logomyworld2.jpg" ></img>

                <div className='title'>
                    <h3 className='titletext'>MyWorld</h3>
                </div>
                <div className='icons'>




                    <a href='https://www.twitter.com/' className='twitterIcon'>
                        <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href='https://www.linkedin.com/' className='LinkedinIcon'>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href='https://www.facebook.com/' className='planeIcon'>
                        <FontAwesomeIcon icon={faPaperPlane} size="2x" />
                    </a>
                </div>


            </section>
        </div >

    )
}

export default Header;