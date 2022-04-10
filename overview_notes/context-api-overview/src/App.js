
import './App.css';
import WithPropsApp from './withprops/WithPropsApp';
import WithContextApp from "./withContext/withContextApp";
import MyApp from './MyApp';

// ProductContext i degiskenleri kullanacagimiz yerde cagiririz. Burada ise Provoder cagrilir

function App() {
  return (
    <div className="App">
      {/* <WithPropsApp /> */}

      <WithContextApp />

      {/* <MyApp value = "value">
          <div>test</div>
      </MyApp> */}
    </div>
  );
}

export default App;
