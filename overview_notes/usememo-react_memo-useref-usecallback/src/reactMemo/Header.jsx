
import cw from "../assets/cw_logo.png";
import { useState } from "react";
// import React from "react";
import React, {memo} from "react";

        // 1. Kullanim:
// const Header = React.memo(({img}) => {
//     console.log("Header rendered");
    
//   return (
//     <div>
//         <div className='header' >
//         <img src={img ? img : cw} alt="cw_logo" style={{margin : "1rem", maxHeight : "200px"}} />
//     </div>
//     </div>
//   )
// })

    // ikinci kullanim
// const Header = memo(({img}) => {
//     console.log("Header rendered");
    
//   return (
//     <div>
//         <div className='header' >
//         <img src={img ? img : cw} alt="cw_logo" style={{margin : "1rem", maxHeight : "200px"}} />
//     </div>
//     </div>
//   )
// })


        // 3. Kullanim (export kisminda)
const Header = memo(({img}) => {
    console.log("Header rendered");
    
  return (
    <div>
        <div className='header' >
        <img src={img ? img : cw} alt="cw_logo" style={{margin : "1rem", maxHeight : "200px"}} />
    </div>
    </div>
  )
})

export default memo(Header);