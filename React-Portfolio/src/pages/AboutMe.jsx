import React from 'react';
import profilePhoto from '../assets/profilePic.png';

const AboutMe = () => {
  return (
    <section>
      <h2>About Me</h2>
      <div className="clearfix">
      <img src={profilePhoto} alt="My Profile" className="profile-photo" />
      <p>I was born in the Cleveland area and have always had a passion for technology and adventure. 
        When I'm not at work, you can find me enjoying a ride on my motorcycle, hitting the gym, or coding in my free time. 
        Currently, I work as a Claims Adjuster at Progressive, where I apply my analytical skills daily. 
        My journey with programming began in high school, and since then, I’ve been honing my skills in Java, JavaScript, Express, Mongo, SQL, React, Handlebars and Python. 
        I’m excited to be on the cusp of graduating from Case Western with a bootcamp certificate in Full Stack Development, where I’ll further enhance my skills and continue my journey in tech.</p>
        </div>
    </section>
  );
};

export default AboutMe;