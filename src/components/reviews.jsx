import React from "react";

export const Reviews = (props) => {
  return (
    <div id="reviews">
      <div className="container">
        <div className="section-title text-center">
          <h2>Reviews</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  <div className="reviews">
                    <div className="reviews-image">
                      {" "}
                      <img src={d.img} alt="" />{" "}
                    </div>
                    <div className="reviews-content">
                      <p>"{d.text}"</p>
                      <div className="reviews-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
