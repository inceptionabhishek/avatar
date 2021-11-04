import React from 'react';
import "../App.css";
import Explore from '../Components/Explore';
import { Link } from "react-scroll";

function Base() {
    return (
      <div>
        <div className="App">
          <h1 className="TopHeading"> Avatar Generator 🙈 </h1>
          <img
            src="https://img.icons8.com/external-linector-lineal-color-linector/64/000000/external-avatar-man-avatar-linector-lineal-color-linector-3.png"
            className="RandomImage2"
            alt="Avatar"
          />
          <br />
          <br />
          <br />
          <Link
            className="TopButton"
            activeClass="active"
            to="Explore"
            spy={true}
            smooth={true}
          >
            {" "}
            Explore
          </Link>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=inceptionabhishek&repo=AvatarGenerator&type=star&count=true&size=large"
            frameborder="0"
            scrolling="0"
            width="170"
            height="30"
            title="GitHub"
          ></iframe>
        </div>
        <div className="AvatarLists">
          <img
            src="https://img.icons8.com/color/48/000000/avatar.png"
            className="RandomImage"
            alt="Avatar"
          />
          <img
            src="https://img.icons8.com/external-linector-lineal-color-linector/64/000000/external-avatar-man-avatar-linector-lineal-color-linector-5.png"
            className="RandomImage"
            alt="Avatar"
          />
          <img
            src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/000000/external-avatar-professions-avatar-wanicon-lineal-color-wanicon-6.png"
            className="RandomImage"
            alt="Avatar"
          />
          <img
            src="https://img.icons8.com/external-linector-lineal-color-linector/64/000000/external-avatar-man-avatar-linector-lineal-color-linector-4.png"
            className="RandomImage"
            alt="Avatar"
          />
        </div>
        <div id="Explore">
          <Explore />
        </div>
      </div>
    );
}

export default Base
