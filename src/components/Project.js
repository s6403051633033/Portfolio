import React from 'react';
import './Project.css';
import Aos from 'aos';


function Project(){
    Aos.init();
    return(
        <>
            <section id="project">
                <div className='project'>
                    <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">Projects</h2>
                    <div className='project-cards'>
                        <div className='project-card' data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500">
                            <img src="./Images/Github.jpg" alt="project-img" />
                            <div>
                                <h4>Portfolio Website</h4>
                                <a href="https://github.com/s6403051633033">Github<i className='fa-solid fa-arrow-right-long'></i></a>
                            </div>
                        </div>
                        <div className='project-card' data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">
                            <img src="./Images/Github.jpg" alt="project-img" />
                            <div>
                                <h4>Flutter Application</h4>
                                <a href="https://github.com/s6403051633033">Github<i className='fa-solid fa-arrow-right-long'></i></a>
                            </div>
                        </div>
    
                    </div>
                </div>
            </section>
        </>
    )
}
export default Project;
