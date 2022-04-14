
  // burada uzanti yazilmaz ise olmaz
  // external css bir js kodu olmadigi icin export a ihtiyac olmadan import edilebilir

import "./Msg.css";
import foto2 from "./images/foto1.webp";

let Msg = () => {
  return ( 
    <div >
        <div>
          <h1 className="msg-h1">Welcome to our Course</h1>
          <img className="msg-img" src="https://cdn.pixabay.com/photo/2020/03/09/17/51/narcis-4916584__340.jpg" alt="" />
              {/* Bu bir degisken oluyor artik {} ile kullanilir */}
          <img src={foto2} alt="" style={{width : "100px"}}/>
        </div>
    </div>
  )
};











  ////  Homework: 


  function currentTimeFunc() {
    const currentTime = new Date();
    const currentYear = currentTime.getFullYear();
    const currentMonth = currentTime.getMonth();
    const currentDay = currentTime.getDate();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentSecond = currentTime.getSeconds();

    return (
      <div>
        <h3>
          {currentDay}.{currentMonth}.{currentYear}
        </h3>
        <h3>
          {currentHour}:{currentMinute}:{currentSecond}
        </h3>
      </div>
    )
  };

export default (Msg, currentTimeFunc);
