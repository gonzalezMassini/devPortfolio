import React from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className='container homeContainer' id='home'>
      <h1 className='homeTitle'>WELCOMEEE!!!</h1>
      <p>
        Hi, I'm Jose. I love coding, mathematics and riding my bike. I also like
        solving puzzles like the rubik's cube.
      </p>
      <p>
        As a kid i discovered coding and learned the basics of programing and
        programing languages on youtube.
      </p>
      <p>
        I was amazed about the fact that with code anything is possible, leading
        passion to persue a career in Tech.
      </p>
      <p>
        At the moment I'm a full-time Computer Engineering student at the
        University of Puerto Rico-Mayaguez Campus and I enjoy designing and
        building fast, beautiful and easy to use websites using React.js and
        CSS.
      </p>
      <p>Lets create together and make your vision a reality</p>
      <p>
        Feel free to contact me filling the form at the bottom of this page and
        I will get back to you as soon as possible
      </p>
      <div className='contactHomeLinkContainer'>
        <Link
          className='contactHomeLink'
          to='contact'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          Click Here To Contact <span className='arrow'>&#8595;</span>
        </Link>
      </div>
      {/* <Link to='/' className='btn'>
        Back Home
      </Link> */}
    </div>
  );
};

export default Home;
