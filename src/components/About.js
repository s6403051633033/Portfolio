import React from 'react';
import './About.css';
import Aos from 'aos';


function About() {
    Aos.init();
    return (
        <>
            <section id="about">
                <div className='about'>
                    <div className='about-info'>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">About me</p>
                        <h2 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400">Poodit Saracheep</h2>
                        <h3 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">Hi, I am <span>Web<span> Developer and Moblie Developer</span></span></h3>
                        <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">"An enthusiastic and dedicated web developer, committed to creating and developing functional websites. Proficient in HTML, CSS, and JavaScript, with strong teamwork and problem-solving skills. Eager to learn new technologies to continuously improve and stay updated in the field."</p><br></br>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;
