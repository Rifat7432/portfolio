import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const project = useLoaderData();

  const {
    img,
    img1,
    img2,
    LiveSite,
    ClintSite,
    ServerSite,
    Technology,
    name,
    _id,
    Detail,
    Overview,
  } = project;
  const view = Overview.split(",");
  console.log(view);

  return (
    <div className="mt-10">
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              style={{ height: "700px" }}
              src={img1}
              className="w-full "
              alt=""
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              style={{ height: "700px" }}
              src={img}
              className="w-full"
              alt=""
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              style={{ height: "700px" }}
              src={img2}
              className="w-full"
              alt=""
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <h2 className="card-title text-4xl py-8">{name}</h2>
        <p className="text-4xl">Technology</p>
        <div className="py-3">
          {Technology.map((T, i) => (
            <div key={i} className=" m-2 badge badge-outline">
              {T}
            </div>
          ))}
        </div>
        <h2 className="py-3 text-4xl">Short Description</h2>
        <h3 className="py-3 text-2xl">{Detail}</h3>
        <div className="py-3 ">
          <p className="py-3 text-4xl">Details</p>
          <div className="py-3 text-2xl">
            {view.map((T, i) => (
              <p key={i}>{T}</p>
            ))}
          </div>
        </div>
        <div  className="py-3 w-11/12 mx-auto flex flex-col sm:flex-row sm:justify-around text-center">
        <a href={LiveSite} className="btn my-5 btn-primary">
          Live site
        </a>
        <a href={ClintSite} className="btn my-5 btn-primary">
          Clint site
        </a>
        <a href={ServerSite} className="btn my-5  btn-primary">
          Server site
        </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
