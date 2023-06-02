import "./intro.scss";
import {init} from 'ityped';
import {useEffect, useRef } from "react"

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: true,
      backDelay:1500,
      backSpeed:60,
       strings: ["Tennessee Cold Case", "The Justice Seekers", "The Mighty McKenzies","EXIT Inc Series", "Deadly Games Series", "Marshland Justice Series","Tennessee SWAT series", "Morgan Brothers Series" ], 
  });
  },[])
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imageContainer">
          <img src={require("../../assets/LenaDiaz.png")} alt="author"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2> Romance Author</h2>
          <h1> Lena Diaz </h1>
          <h3> Presents -<span ref={textRef}></span></h3>
        </div>
        <a href="#books">
          <img src={require("../../assets/down.png")} alt="down arrow">

          </img>
        </a>
      </div>
    </div>
  )
}
