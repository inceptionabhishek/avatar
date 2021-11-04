
import React, { useState } from "react";


function Explore() {
    const api = "https://avatars.dicebear.com/api/";
    const [image,setImage] = useState('');
    const [variable, setVarible] = useState("");
    const [secondvariable, setsecondVarible] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('submit');  
    }
    const selectHandler = (e) => {
        setVarible(e.target.value);
        console.log(e.target.value);
    }
    const [color,setColor] = useState("");
    const colorHandler = () => { 
        var color_string = Math.floor(Math.random()*16777215).toString(16);
        setColor(color_string);
        console.log(color_string);
    }
    const selectHandler2 = (e) => {
        setsecondVarible(e.target.value);
        console.log(e.target.value);
}

const buttonClicked = () => {
    console.log('button clicked');
    if(color != ""){
        if (variable != "") {
          setImage(
            api + variable + "/" + secondvariable + ".svg?background=" + color
          );
        } else {
          alert("Please select One Cateogry :) ");
        }
    }else{
if (variable != "") {
  setImage(api + variable + "/" + secondvariable + ".svg");
} else {
  alert("Please select One Cateogry :) ");
}
    }
    
   
}
    
    return (
      <div className="Explore_div">
        <h3 className="Select_style">Select One of the following : </h3>
        <form onSubmit={handleSubmit}>
          <div className="Explore_form">
            <label className="Explore_label">
              <input
                onChange={selectHandler}
                type="radio"
                name="Explore"
                value="male"
              />
              <span className="Explore_span">male 👺</span>
            </label>
            <label className="Explore_label">
              <input
                onChange={selectHandler}
                type="radio"
                name="Explore"
                value="female"
              />
              <span className="Explore_span">female 🙎</span>
            </label>
            <label className="Explore_label">
              <input
                onChange={selectHandler}
                type="radio"
                name="Explore"
                value="human"
              />
              <span className="Explore_span">human 😳</span>
            </label>
            <label className="Explore_label">
              <input
                onChange={selectHandler}
                type="radio"
                name="Explore"
                value="identicon"
              />
              <span className="Explore_span">identicon 😱</span>
            </label>
            <label className="Explore_label">
              <input
                onChange={selectHandler}
                type="radio"
                name="Explore"
                value="initials"
              />
              <span className="Explore_span">initials😴 </span>
            </label>
            <label className="Explore_label">
              <input
                onChange={selectHandler}
                type="radio"
                name="Explore"
                value="bottts"
              />
              <span className="Explore_span">bottts 💩</span>
            </label>
            <label className="Explore_label">
              <input
                onChange={selectHandler}
                type="radio"
                name="Explore"
                value="avataaars"
              />
              <span className="Explore_span">avataaars🙈 </span>
            </label>
            <label className="Explore_label">
              <input
                onChange={selectHandler}
                type="radio"
                name="Explore"
                value="jdenticon"
              />
              <span className="Explore_span">jdenticon 😢</span>
            </label>
            <label className="Explore_label">
              <input
                onChange={selectHandler}
                type="radio"
                name="Explore"
                value="gridy"
              />
              <span className="Explore_span">gridy 😘</span>
            </label>
            <label className="Explore_label">
              <input
                onChange={selectHandler}
                type="radio"
                name="Explore"
                value="micah"
              />
              <span className="Explore_span">micah 😍</span>
            </label>
          </div>
          <div className="InputTextField">
            <label className="random_text_label">
              Enter any Keywords :
              <input
                className="random_text"
                type="text"
                name="random_text"
                value={secondvariable.random_text}
                onChange={selectHandler2}
              />
            </label>
          </div>
          <div className="Colors_select">
            <h3 className="Select_style">Select BackGround Color: </h3>
            <button className="button_color" onClick={colorHandler}>
              Select Random Color 🎁
            </button>
          </div>

          <button onClick={buttonClicked} className="TopButton">
            Find avatar 🙈
          </button>
        </form>
        {image ? <img src={image} className="apiImage" alt="avatar" /> : null}
        {image ? (
          <a href={image} download>
            Download svg
          </a>
        ) : null}
      </div>
    );
}

export default Explore
