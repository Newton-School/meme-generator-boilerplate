import React, { useState } from "react";
import { useRef } from "react";
import "./Home.css"
export default function Upper() {
  
  return (
    <>
      <div className="children">
          <form >
            <h6>url</h6>
            <input data-tid="inputurl" type="text"  name="name" />
            <button type="submit" data-tid="submitbutton"> Submit </button>
          </form>
          <h5>upperText</h5>
          <input maxLength="50" data-tid="uppertext" ></input>
          <br/>
          <input type="range" min="1" max="20" class="slider" id="myRange"></input>
          <h5>bottomText</h5>
          <input data-tid="lowertext"maxLength="30"  ></input>
          <br/>
          <input type="range" min="1" max="20"  class="slider" id="myRange"></input>
          
        </div>
        <div>
          { (
            <div>
              <p data-tid="upperpara" className="upperText"></p>
              <img
                src=""
                alt ="image here"
                style={{
                  width: "300px",
                  height: "300px",
                  border: "2px gray solid",
                  marginTop:"5%"
                }}
              />
              <div className="divb">
                <p data-tid="lowerpara"className="bottomText"></p>
              </div>
            </div>
          )}
        </div>
    </>
  )
}