import React from 'react';
import Header from '../components/Header';
const About = () => {
  return (
    <div>
      <Header />
      <main id="bi0">
        <div style={{ marginTop: '50px', display: 'flex', alignItems: 'flex-start' }}>
          <img 
            src="../assets/image/about.jpg" 
            alt="about" 
            style={{ width: '500px', height: '300px', marginLeft: '50px',border:'1px solid black' ,marginTop:'50px'}} 
          />
          <div>
            <span className="word" style={{ fontSize: '30px', textDecoration: 'underline' }}><span style={{fontSize:'50px'}}>M</span>alshi <span style={{fontSize:'50px'}}>S</span>athsarani</span>
            <p style={{marginTop:'50px'}}> 
              Hi, I'm Malshi Sathsarani — a passionate Full Stack Developer and Associate Software Engineer
              with a love for building meaningful digital experiences. I specialize in creating dynamic, 
              responsive applications and am always exploring new technologies to sharpen my craft.
            </p>
            <p style={{marginTop:'20px'}}> 
              Whether it's front-end finesse or back-end logic, I enjoy working across the stack to 
              bring ideas to life. I'm a strong believer in continuous learning and enjoy tackling 
              challenges that push me to grow.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;