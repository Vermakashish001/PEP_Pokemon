import React from "react";
import "./Pokee.css";
import { useState,useEffect } from "react";

export default function Pokee({ Name, img, height, 
weight,abilities,moves}) {

  const [show,setShow] = useState(false);

  return (
    <>
      <div className="card">
        <div className="img-container">
          <img src={img} alt="" onClick={()=>setShow(true)} />
        </div>
        <div className="details">
          <h2>{Name}</h2>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <dialog className="dialog" open={show}
      style={{
        border:"none",
        borderRadius:"10px",
        background:"white",
        zIndex:"100",
        position:"fixed",
        bottom:"10%",
        width:"80%",
        height:"80%",
        background: '#FFFFFF',
        background: "linear-gradient(to top right, #FF3333 50%, #FFFFFF 40%)",
      }}
      >
        <div className="dialog-container" 
        style={{
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"column",
          background:"transparent",
        }}
        >
          <div className="img-container"
                style={{
                  width:"600px",
                  height:"300px",
                }}>
            <img src={img} alt=""/>
          </div>
          <div className="details"
            style={{
              color:"#FFFFFF",
            }}
          >
            <h2
            style={{
              color:"#FFFFFF",
              marginTop:"20px",
              fontSize:"50px",
              fontWeight:"bold",
              textTransform:"uppercase",
            }}
            >{Name}</h2>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Abilities:{abilities} </p>
            <p>Moves:{moves} </p>
          </div>
        </div>
        <button className="close" onClick={()=>setShow(false)}
        style={{
          width:"100px",
          height:"50px",
          background:"red",
          borderRadius:"10px",
          color:"#FFFFFF",
          background: 'transparent',
          border:"2px solid #FFFFFF",
          cursor:"pointer",
          fontSize:"20px",
        }}>Close</button>
      </dialog>

    </>
  );
}
