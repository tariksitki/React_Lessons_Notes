
import './App.css';
import ReactMemo from './reactMemo/ReactMemo';
import UseMemoCallback from './useMemoCallback/UseMemoCallback';
import UseRefComponent from './useRef/UseRef';
import UseRefSecondUsage from './useRef/UseRefSecondUsage';

function App() {
  return (
    <div className="App">
      {/* <UseRefComponent /> */}
      {/* <UseRefSecondUsage /> */}
      {/* <ReactMemo /> */}
      <UseMemoCallback />
    </div>
  );
}

export default App;
