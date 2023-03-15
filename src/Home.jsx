import React from 'react';
import profile from '../src/assets/sweet.jpeg'
import './App.css'
const Home = () => {
    return (
        <section className="bg-primary px-5 text-black py-32">
        <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
          <div className="hero-info pb-5 md:pb-0">
            <h1 className="text-4xl lg:text-6xl">
              Hi, <br />I am <span className="text-accent"></span>Noah <br />
              Frontend Developer
            </h1>
  
            <p className="py-5">
              I am proficient in JavaScript, React.js and Tailwind CSS
            </p>
  
            <div className=' grid grid-cols-2 mt-5 justify-between'>
        <button className=" bg-black text-white hover:bg-black hover:text-white active:bg-black font-bold uppercase px-8 py-3 rounded-3xl mr-1 mb-1 ease-linear transition-all duration-150  mx-auto" type="button"
      > Hire Me</button>
        <button className="text-black border border-black hover:bg-black hover:text-white active:bg-black font-bold uppercase px-8 py-3 rounded-3xl  outline-none focus:outline-none  ease-linear transition-all duration-150  mx-auto ml-2"  type="button"
      >
        Know More
</button>
        </div>
 
  
           
          </div>
  
          <div className="hero-img">
            <img
              src={profile}
              alt="coding illustration"
              className=" rounded-full lgw-[80%] ml-auto"
            />
          </div>
        </div>
      </section>

    );
}

export default Home;


