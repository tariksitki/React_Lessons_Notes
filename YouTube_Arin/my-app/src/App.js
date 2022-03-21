
import Card from "./components/Card";

const myArray = ["John", "Kennedy", "Bush"];

function App () {
  const myButton = "MyButton";
  return (
    // <h1>Hello World</h1>
      
    <div>
        {/* {myArray.map(name => (<h2>{name}</h2> ))}

        <button tabIndex={2} className = "button" style={{color : "white", backgroundColor : "red", border : "none"}}>Jsx Button</button>
        <br /> <br />

        <button>{myButton}</button> <br /> <br />
        <br /> <br />
        <button>{10 + 20} </button> */}


    <div class="card-group">

      <Card number = "1" />
      <Card number = "2" />
      <Card number = "3" />
    </div>
  </div>
  )
};

export default App;


