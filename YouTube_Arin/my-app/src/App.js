import Card from "./components/Card";
import Collapse from "./components/collapse";

const myArray = ["John", "Kennedy", "Bush"];

function App() {
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

      <Collapse>
        <div className="card-group">
          <Card
            number="1"
            // cardText = "Lorem Ipsum 1"
            cardTime="Last 1 Minute Updated"
            image="https://picsum.photos/id/1/600/400"
          />

          <Card
            number="2"
            cardText="Lorem Ipsum 2"
            cardTime="Last 2 Minute Updated"
            image="https://picsum.photos/id/10/600/400"
          />

          <Card
            number="3"
            cardText="Lorem Ipsum 3"
            cardTime="Last 3 Minute Updated"
            image="https://picsum.photos/id/1/600/400"
          />
        </div>
      </Collapse>
    </div>
  );
}

export default App;
