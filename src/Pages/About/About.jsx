import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div data-aos="zoom-in">
        <p className="text-primary text-3xl text-center">ABOUT Me</p>
      <p className="text-xl my-5">
        
        I have a well-rounded skill set in HTML, CSS, and JavaScript,
        as well as some of the powerful frameworks and libraries that can bring
        a user-focused website. I can properly use technologies like React JS,
        Bootstrap, DOM  and coding libraries like Node JS to
        help site user’s save time.
      </p>
    </div>
  );
};

export default About;
