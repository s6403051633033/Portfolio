import React, { useRef } from 'react';
import './Contact.css';
import Aos from 'aos';


function Contact() {
  Aos.init();
  return (
    <>
      <section id="contact">
                <div className='contact'>
                    <div>
                        <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="400">Contact Me</h2>
                        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">For more information contact me</p>
                        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">Email : Poodit555@gmail.com </p>
                        <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="800">Number : +66 986642055 </p>

                    </div>
                </div>
           </section>
    </>
  );
}
export default Contact;
