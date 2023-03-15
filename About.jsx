import React from "react";
import AboutImg from "./src/assets/about.jpeg";

const About = () => {
  return (
    <section className="bg-secondery text-black px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My name is Zon Mee Mee Kyaw everyone calls me Noah. I am a
            Frontend Developer. I build beautifull websites with React and
            Tailwind CSS.
          </p>
          <p className="pb-5">
            I am proficient in Frontend skills like React.js, Redux, Redux Tool
            Kit, Axios, Tailwind CSS, and many more.
          </p>

          <p>In backend I know Node.js and MongoDB</p>

          <p>
            In my spare time I create UI design using figma and learn languages like japanese
            And I study about latest programming technology  and build various projects.
          </p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto w-28 h-28"
          />
        </div>
      </div>
    </section>
  );
};

export default About;