import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div data-aos="zoom-in" className=" px-10 py-5 mt-20 rounded-lg ">
        <h1 className=" text-3xl font-bold text-primary text-center my-10">My Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div data-aos="zoom-in">
          <div className="flex justify-between font-bold">
            <p>HTML</p>
            <p>99%</p>
          </div>
          <progress
            className="progress progress-error transition ease-in duration-1000 "
            value="99"
            max="100"
          ></progress>
        </div>
        <div data-aos="zoom-in">
          <div className="flex justify-between font-bold">
            <p>CSS</p>
            <p>95%</p>
          </div>
          <progress
            className="progress progress-secondary "
            value="95"
            max="100"
          ></progress>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div data-aos="zoom-in">
          <div className="flex justify-between font-bold">
            <p>Javascript</p>
            <p>85%</p>
          </div>
          <progress
            className="progress progress-success "
            value="85"
            max="100"
          ></progress>
        </div>
        <div data-aos="zoom-in">
          <div className="flex justify-between font-bold">
            <p>React Js</p>
            <p>95%</p>
          </div>
          <progress
            className="progress progress-secondary "
            value="95"
            max="100"
          ></progress>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div data-aos="zoom-in">
          <div className="flex justify-between font-bold">
            <p>Tailwind Css</p>
            <p>95%</p>
          </div>
          <progress
            className="progress progress-secondary "
            value="95"
            max="100"
          ></progress>
        </div>
        <div data-aos="zoom-in">
          <div className="flex justify-between font-bold">
            <p> Bootstrap</p>
            <p>95%</p>
          </div>
          <progress
            className="progress progress-secondary "
            value="95"
            max="100"
          ></progress>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div data-aos="zoom-in">
          <div className="flex justify-between font-bold">
            <p>Express Js</p>
            <p>80%</p>
          </div>
          <progress
            className="progress progress-accent "
            value="80"
            max="100"
          ></progress>
        </div>
        <div data-aos="zoom-in">
          <div className="flex justify-between font-bold">
            <p>MongoDb</p>
            <p>70%</p>
          </div>
          <progress
            className="progress progress-info "
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div data-aos="zoom-in">
          <div className="flex justify-between font-bold">
            <p>Node Js</p>
            <p>70%</p>
          </div>
          <progress
            className="progress progress-info "
            value="70"
            max="100"
          ></progress>
        </div>
        <div data-aos="zoom-in">
          <div className="flex justify-between font-bold">
            <p>Authentication</p>
            <p>80%</p>
          </div>
          <progress
            className="progress progress-accent "
            value="80"
            max="100"
          ></progress>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div data-aos="zoom-in">
          <div className="flex justify-between font-bold">
            <p>React Bootstrap</p>
            <p>90%</p>
          </div>
          <progress
            className="progress progress-warning "
            value="90"
            max="100"
          ></progress>
        </div>
        <div data-aos="zoom-in">
          <div className="flex justify-between font-bold">
            <p>JWT</p>
            <p>70%</p>
          </div>
          <progress
            className="progress progress-info "
            value="70"
            max="100"
          ></progress>
        </div>
      </div>
    </div>
  );
};

export default Skills;
