import React from 'react'
import './Home.css'
import background from '../assets/background.png'
import astronaut from '../assets/blob1astronaut.png'
import rocket from '../assets/blob1rocket.png'
import { BsFillTelephoneFill, BsDiscord, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { RiTwitterXFill } from 'react-icons/ri';

const Home = () => {
    return (
        <div>
            <div id="floating_call_button"><BsFillTelephoneFill id="call_icon" /></div>
            <div id="top">
                <div id="navbar">
                    <span id='japanese_symbol'>ホ</span>
                    <span className='span_navbar'>Home</span>
                    <span className='span_navbar'>About</span>
                    <span className='span_navbar'>Contact</span>
                </div>
                <div id="background_text">Let The Games Begin.</div>
                <div id="background_picture_container">
                    <img id='background_picture' src={background} />
                </div>
            </div>
            <div className='blobdiv'>
                <img src={rocket} className='blob_image' />
                <div className='blob_div_text_container'>
                    <span className='blob_div_title'>Rocket</span>
                    <span className='blob_div_text'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</span>
                </div>
            </div>
            <div className='blobdiv2'>
                <img src={astronaut} className='blob_image' />
                <div className='blob_div_text_container'>
                    <span className='blob_div_title'>Astronaut</span>
                    <span className='blob_div_text'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</span>
                </div>
            </div>
            <div id='footer'>
                <div id="footer_section">
                    <div id="footer_socials">
                        <div style={{color:"white",fontSize:"24px"}}>Uzafir Codes.</div>
                        <div style={{display:"flex",flexDirection:"row",marginTop:"10px"}}>
                            <div className='socials_buttons'><FaFacebookF className='socials_icons' /></div>
                            <div className='socials_buttons'><BsDiscord className='socials_icons' /></div>
                            <div className='socials_buttons'><RiTwitterXFill className='socials_icons' /></div>
                            <div className='socials_buttons'><BsInstagram className='socials_icons' /></div>
                        </div>
                    </div>
                    <div id="footer_buttons_container">
                        <div className='footer_buttons_div'>
                            <span className='footer_buttons_highlight'>Resources</span>
                            <span className='footer_buttons_simple'>Support</span>
                            <span className='footer_buttons_simple'>Creators</span>
                            <span className='footer_buttons_simple'>Community</span>
                            <span className='footer_buttons_simple'>Feedback</span>
                        </div>
                        <div className='footer_buttons_div'>
                            <span className='footer_buttons_highlight'>About</span>
                            <span className='footer_buttons_simple'>Careers</span>
                            <span className='footer_buttons_simple'>Values</span>
                            <span className='footer_buttons_simple'>Brand</span>
                            <span className='footer_buttons_simple'>News</span>
                        </div>
                        <div className='footer_buttons_div'>
                            <span className='footer_buttons_highlight'>Policies</span>
                            <span className='footer_buttons_simple'>Privacy Policy</span>
                            <span className='footer_buttons_simple'>Cookies</span>
                            <span className='footer_buttons_simple'>Lisences</span>
                            <span className='footer_buttons_simple'>Terms and Conditions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
