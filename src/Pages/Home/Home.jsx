import React from "react";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  const [contact, setContact] = useState(false);

  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-around h-full px-10 mt-48">
      <div className="sm:px-16">
        <h2 className="text-primary font-bold py-2 text-3xl">
          Hi, I am MD RIFAT
        </h2>
        <p className="text-2xl py-2">Front End Developer</p>
        {contact ? (
          <div>
            <p className="text-xl py-3 underline">Contact Info.</p>
            <p className="flex text-xl ">
              <span className="mx-2">
                <FaPhoneAlt></FaPhoneAlt>
              </span>{" "}
              <span className="font-bold">Phone : +880-1755-481526</span>
             
            </p>
            <p className="flex md:text-xl md:text-base ">
              <span className="mx-2">
                <FaEnvelope></FaEnvelope>
              </span>{" "}
              <span className="font-bold">Email : <span className="font-normal">md.rifat.taluckdar@gmail.com</span></span>
              
            </p>
            <p className="flex text-xl ">
              <span className="mx-2">
                <FaLinkedin></FaLinkedin>
              </span>{" "}
              <span className="font-bold">Linkedin : </span>
              <a
                className="hover:underline"
                href=" https://www.linkedin.com/in/md-rifat-taluckdar/"
              >
                {" "}
                
                <span className="hidden xl:inline"> https://www.linkedin.com/in/md-rifat-taluckdar/</span><span className="inline xl:hidden">Link</span>
              </a>
            </p>
            <p className="flex text-xl ">
              <span className="mx-2">
                <FaGithub></FaGithub>
              </span>{" "}
              <span className="font-bold">Github : </span>
              <a
                className="hover:underline"
                href="https://github.com/Rifat7432"
              >
               <span className="hidden lg:inline"> https://github.com/Rifat7432</span><span className="inline lg:hidden">Link</span>
              </a>
            </p>
          </div>
        ) : (
          <p className="text-2xl">
            A self-motivated and enthusiastic web developer with a deep interest
            in JavaScript. To work in the Software industry with modern web
            technologies of different local & multinational Software/ IT
            agencies of Bangladesh and grow rapidly with increasing
            responsibilities.
          </p>
        )}
        <div className="py-5">
          <button onClick={() => setContact(!contact)} className="btn mr-5 mt-5 btn-primary">
            {contact? 'Short Description' : 'Contact'}
          </button>
          <a href="https://drive.google.com/file/d/1qrPXorWja9EEMmkSZ4aReANtShegYXgb/view?usp=share_link" className="btn btn-primary btn-outline mt-5 ">
            View Resume
          </a>
        </div>
      </div>
      <div>
      <div className="avatar md:mr-10">
  <div className="md:w-72 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://i.ibb.co/kJMRk36/IMG20220503174950-01-2.jpg" />
  </div>
</div>
       
      </div>
    </div>
  );
};

export default Home;
