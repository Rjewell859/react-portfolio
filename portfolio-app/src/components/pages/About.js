import React from "react";

export default function Home() {
  return (
    <div>
      <div className="card bg-light mb-3">
        <h1 className="card-header">About me</h1>
        <p className="card-body">
          Hello, my name is Ryan Jewell. I am an aspiring computer programmer
          currently studying web design. When it comes to wokrking with
          computers, I always tend to have a very methodical approach, however
          determined I may be to get something done as soon as possible. Through
          college and self teaching I have recently accumulated experience
          working with Linux, Java, Python, SQL, C++, and now the fundamental
          languages of website design: HTML, CSS and JavaScript. My favorite
          hobby will always be torn between playing guitar and snowboarding.
          During the summer months I find myself keeping busy outdoors
          gardening, landscaping and taking pictures on hikes.
        </p>
        <div className="card-footer" id="images">
          <img
            className="photos"
            src={require("../../img/photos/Katahdin.JPG")}
            alt="Mt. Katahdin"
          ></img>
          <img
            className="photos"
            src={require("../../img/photos/plateau.JPG")}
            alt="Plateau from Baxter peak"
          ></img>
          <img
            className="photos"
            src={require("../../img/photos/cairns.JPG")}
            alt="Snowy man made rock formations"
          ></img>
          <img
            className="photos"
            src={require("../../img/photos/snowyMountain.JPG")}
            alt="Snow drifts"
          ></img>
          <img
            className="photos"
            src={require("../../img/photos/sunbeam.JPG")}
            alt="Sunny waterfall"
          ></img>
        </div>
      </div>
      <img
        id="self"
        src={require("../../img/photos/selfPicture.JPG")}
        alt="Personal hike"
      ></img>
    </div>
  );
}
