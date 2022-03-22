<<<<<<< HEAD


import "./styleSheet.css"

const StyleSheet = (props) => {
  const isSecenek = props.secenek ? "once" : "sonra";
=======
import './styleSheet.css';
const StyleSheet = (props) => {
const isSecenek= props.secenek ? "once":"sonra"
  
>>>>>>> 57cdfed57daefb255f3340d4ebb052fd4b875efd
  return (
    <div>
      <img className="logo"
     src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
        alt="clarusway-logo"
      />
<<<<<<< HEAD
      <h1 className = "header"> Regular-style --- STYLESHEET </h1>
      <h1   >Regular-style --- STYLESHEET</h1>
    {/* <p className = {props.secenek ? "once" : "sonra"}> Welcome to Clarusway</p> */}
    <p className = {isSecenek}> Welcome to Clarusway</p>

  <p >Welcome to Clarusway</p>

        


=======
      <h1 className="header">Regular-style --- STYLESHEET </h1>
 
     <p className={isSecenek }>Welcome to Clarusway</p>
>>>>>>> 57cdfed57daefb255f3340d4ebb052fd4b875efd
      </div>
  );
};

export default StyleSheet;
