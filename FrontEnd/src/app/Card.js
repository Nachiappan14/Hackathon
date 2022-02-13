import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

// import "react-datepicker/dist/react-datepicker.css";


const Card = (props) => {
  const history = useHistory();
  const routeChange = (path) =>{ 
    // let path = `newPath`; 
    console.log("clicked",path);
    history.push(path);
  }
  const {img,imgPath, altImage,Title,bgGradient,symbol,subTitle,content,rPath} = props;
  // const img = require(imgPath);
  return <div onClick={()=>{routeChange(rPath)}} className="col-md-4 stretch-card grid-margin">
  <div className={"card card-img-holder text-white " + bgGradient} >
    <div className="card-body">
      <img src={img} className="card-img-absolute" alt={altImage} />
      <h4 className="font-weight-normal mb-3">{Title} <i className={"mdi mdi-24px float-right " + symbol}></i>
      </h4>
      <h2 className="mb-5">{subTitle}</h2>
      {/* <h6 className="card-text">Closing in 2:05 hrs</h6> */}
      <h6 className="card-text">{content}</h6>
    </div>
  </div>
</div>
};

export default Card;