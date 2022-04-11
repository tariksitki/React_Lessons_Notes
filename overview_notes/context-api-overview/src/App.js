
import './App.css';
import WithPropsApp from './withprops/WithPropsApp';
import WithContextApp from "./withContext/withContextApp";
import MyApp from './MyApp';
import useFetch from "./hooks/useFetch";
import Iframe from './Iframe';

// ProductContext i degiskenleri kullanacagimiz yerde cagiririz. Burada ise Provoder cagrilir
/// props lari normal App({data, loading, error}) seklinde cekmiyoruz
// useFetch i kullanirken <UseFetch /> seklinde kullanmadigimiz icin bu bunun bir component olmadigini gösterir.
// 

function App() {
  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/todos");
  console.log(data);
  console.log(loading);
  console.log(error);

  return (
    <div className="App">
      {/* <WithPropsApp /> */}

      {/* <WithContextApp /> */}

      {/* <MyApp value = "value">
          <div>test</div>
      </MyApp> */}

        { 
        
        loading && <Iframe />
        }

      {
        data?.map((item) => (
          <p key={item.id} >{item.title} </p>
        ))
      }

        {error && <h1>{error}</h1> }
    </div>
  );
}

export default App;
