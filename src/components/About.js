import React from 'react';
import img2 from '../images/img2.jpeg';

const About = () => {
  return (
    <div className='container'>
      <div className="about-section">
        <h1>About Us</h1>
        <p>About who we are and what we do.</p>
      </div>

      <h2 className="text-center">Our Founder & Developer</h2>
      <div className="row justify-content-center"> {/* Use Bootstrap 'justify-content-center' class */}
        <div className="col-md-6"> {/* Use Bootstrap 'col-md-4' class to control the card width */}
          <div className="card">
            <img src={img2} alt="SAURABH" style={{ width: '100%' }} />
            <div className="container">
              <h2 className="text-center">SAURABH DWIVEDI</h2>
              <p className="title text-center">Founder - iNotebook</p>
              <p >As a passionate Full Stack Developer and avid learner, my focus lies in continuously expanding my skill set. It brings me great pride to have been recognized as a Google Developer Student Club Lead, Beta-Microsoft Learn Student Ambassador, and CII YI Yuva Chairman at LNCTE college. In these roles, I successfully led the college community towards personal growth and development.
                My ultimate aspiration is to contribute meaningfully to the field of Technology as a Software Developer. To achieve this, I have actively gained hands-on experience in diverse technologies and programming languages. To further enhance my knowledge, I regularly undertake personal projects that challenge me and foster growth. Additionally, I actively engage in hackathons, coding competitions, and open-source projects. Attending prominent tech events and conferences is also an integral part of my commitment to staying up-to-date with the latest industry trends.
                With my well-rounded skill set, natural leadership abilities, and unwavering passion for technology, I am confident in my capacity to make a significant impact as a Software Developer.</p>
              <p className="text-center">saurabhdwivedi2310@gmail.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
