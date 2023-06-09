import { useState } from "react";
import "./works.scss"

export default function Works() {
const [currentSlide,setCurrentSlide] = useState(0)

const data= [
  {
    id: "1",
    icon: "./assets/mobile.png",
    title: "About the Author",
    desc:
      "Lena Diaz is a Publisher’s Weekly bestselling author of 24+romantic suspense novels. Her books have been translated into German, Turkish, Japanese, and Norwegian and have been sold in over a dozen countries.She has garnered many award finals and wins, including the Romance Writers of America Golden Heart®, the Daphne du Maurier Award of Excellence in Mystery and Suspense (four time winner), and the Bookseller’s Best Award. A native Kentuckian, she has also lived in California and Louisiana, but currently resides in northeast Florida, a stone’s throw from the Georgia border. Her two favorite places to visit are Savannah and Gatlinburg, because of her love for historic old buildings and the gorgeous Smoky Mountains. Many of her books are set in those locations.Lena loves to read, watch everything on the Investigation Discovery channel, binge on HGTV home-improvement shows and resulting projects, and occasionally tackle weeds in her garden. When not being bitten or scratched by her newest kitten (aka Satan) and longing for a dog instead, she can be reached through the contact page of her website",
    img:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
  },
  {
    id: "2",
    icon: "./assets/globe.png",
    title: "Fun Facts",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img:
      "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
  },
  {
    id: "3",
    icon: "./assets/writing.png",
    title: "Branding",
    desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    img:
      "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
  },
];

const handleClick=(way)=>{
  way=== "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 :2)
  : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
}
  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}
      >
        {data.map((d)=> (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}
                </h2>
                <p>{d.desc}
                </p>
                <span>Books</span>
              </div>
            </div>
            <div className="right">
              <img src ="https://lenadiaz.com/images/purplelongshot192x300.jpg" alt="author"
              />
            </div>
          </div>
        </div>
        ))}
      </div>
      <img src ={require("../../assets/arrow.png")} className="arrow left" alt="arrow" onClick={()=>handleClick("left")}></img>
      <img src ={require("../../assets/arrow.png")} className="arrow right "alt="arrow" onClick={()=>handleClick("right")}></img>

    </div>
  )
}
