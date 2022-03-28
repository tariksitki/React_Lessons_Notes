import { useState } from "react";
import "./styles.css";

const MouseEvents = () => {
  
  const [coordX, setCoordX] = useState(0);
  const [coordY, setCoordY] = useState(0);
    // react da js de oldugu gibi bir degiskene degerleri atadigimizda
    // kullanici bu degerleri göremez. bu nedenle state kullaniriz
  
  // click event
  const handleClick = (e) => {
    // console.log(e);
    // console.log(e.type);
    console.log("target", e.target);
    console.log("currentTarget", e.currentTarget);
    e.target.tagName === "SPAN" && e.currentTarget.remove();
    console.log(e.target.tagName);
  };
  // doubleClick event
  const handleDoubleClick = (e) => {
    return (
      alert("DoubleClick"),
      console.log(e.target.innerText)
    )} ;

  // mouseMove event
  const handleMouseMove = (e) => {
    // console.log(e.pageX);
    // console.log(e);
      // offset ler nativeEvent altinda pagex ve y ise direkt event altinda
    console.log(e.nativeEvent.offsetX)
      // eger span e tiklarsam, span li nin en saginda olmasina ragmen
      // offset de span in kendisine göre konumunu alir. 
    
    setCoordX(e.pageX);
    setCoordY(e.pageY);
  };
  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>X = {coordX}  </span> and Y = {coordY} 
      </p>
      <p>
        <span></span>
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <li id="todo-1" onClick={handleClick}>
            todo item 1 <span>X</span>
          </li>

          <li id="todo-2 " onDoubleClick={handleDoubleClick}>
            todo item 2 <span>X</span>
          </li>

          <li onMouseMove={handleMouseMove}>
            todo item 3 <span>X</span>
          </li>
            {/* elementin üzerinde hareket ettiginde aksiyon olsun */}

          <li>
            todo item 4 <span>X</span>
          </li>
          <li>
            todo item 5 <span>X</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;
