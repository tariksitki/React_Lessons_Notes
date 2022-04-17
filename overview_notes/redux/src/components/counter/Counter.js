import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase, resetFunc } from "../../redux/actions.jsx/CounterActions";

// nerede bir state e ihtiyacimiz varsa bunu useSelector ile cagirabiliriz
// ve nerede degisiklige ihtiyac varsa, bunu useDispatch ile trigger edebiliriiz

// reducer da tanimladigimiz state leri cagirabilmek icin useSelector kullaniriz.
// yani burada artik consuming islemine basladik

// react da redux i iki türlü kullaniyoruz. 
// 1: state leri  cagirmak icin useSelector
// 2: func lari cagirmak icin useDispatch

// burada state ve counterReducer import etmedik. bunu react arka planda yapar.

const Counter = () => {
  const {counter} = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1
        // className={
        //   counter > 0
        //     ? "counter-pos"
        //     : counter < 0
        //     ? "counter-neg"
        //     : "counter-zero"
        // }
      >
        {counter}
      </h1>
      <div>
        <button className="counter-button positive" onClick={() => dispatch(increase())} >increase</button>
        <button className="counter-button zero" onClick={() => dispatch(resetFunc())} >reset</button>
        <button className="counter-button negative" onClick={() => dispatch(decrease())} >decrease</button>
        {/* Burada reset gibi func lari yazmadan da kodumuz calisir. ama biz bircok yerde bu func lari tanimlamaktansa bir sefer func lari hazirliyoruz. her yerde kullaniyoruz. */}
      </div>
    </div>
  );
};

export default Counter;

// redux kullanma maksadi karmasik projeleri basitlestirmek
// bu nedenle redux diye bir klasör olusturulur

// counter artirma islemi bir built in func ile yapilmali
// bu nedenle dispatch kullaniyoruz
// diypatch icine action object i alir. action object olmali
// bu nedenle direkt olatak action object inin type ini verdik.
// type zorunlu kelime degil. ali dersek, action.ali diye bakariz


