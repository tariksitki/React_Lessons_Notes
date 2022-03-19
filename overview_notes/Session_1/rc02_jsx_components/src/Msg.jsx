

// import React from 'react'
// yeni degisiklik ile gerek yok 

import "./Msg.css";

import foto1 from "./images/foto1.webp";

const Msg = () => {
  return (
    <div>
        <h1 className="msg-img">
    
            Welcome to our Courses
            <img src="https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584__340.jpg" alt="" />

            <img src={foto1} alt="" />
        </h1>
    </div>
  )
}

export default Msg