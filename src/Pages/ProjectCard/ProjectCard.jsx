import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ProjectCard = ({ project }) => {
  const { LiveSite, ClintSite, ServerSite, Technology, name, img ,_id} = project;
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <div data-aos="zoom-in" className="card relative  sutterCard rounded-lg card-compact border-slate-600 bg-slate-700 shadow-xl ">
      <div className="absolute top-0  w-full  px-6 pt-16 card-actions justify-around  rounded sutter">
        <div >
        <a href={LiveSite} className="btn mx-2  btn-primary">
          Live site
        </a>
        <a href={ClintSite} className="btn mx-2 btn-primary">
          Clint site
        </a>
        <a href={ServerSite} className="btn mx-2 btn-primary">
          Server site
        </a>
        </div>
      </div>
    
      <figure>
        <img src={img} className="h-56 w-full rounded-lg " alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-lg">Technology</p>
        <div>
          {Technology.map((T,i) => (
            <div key={i} className=" m-2 badge badge-outline">{T}</div>
          ))}
        </div>
        <div className="p-5">
          <Link to={`/Detail/${_id}`} className="btn btn-primary w-full">Detail</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
