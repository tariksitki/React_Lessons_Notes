import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppRouter from "./router/Router";
import { auth } from "./utils/firebaseUtil";
import {setCurrentUser} from "./redux/actions/AuthActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    const userInfo = auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user))
    });
    return userInfo;
    // buradaki return normal bir return degildir. clean-up-function dir.
    // userInfo yu kullandiktan sonra hafizada yer kaplamasin diye öldürüyor.
    // yani class lardaki componentWillUnmount yerine calisiyor.
  }, [dispatch]);

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;

// simdi burada diyecegiz ki; app js okunmaya basladigi andan itibaren elde edilen currentUser bilgisindeki degisiklikleri state e ata diyecegiz. 
// bu islemi neden app de yaptik. cünkü burasi tepe oldugu icin her halükarda render edilir. ve ilk tepe component render edilir edilmez google firebase den kullanicinin login olup olmadigi bilgisini al ve bunu state e ata. ve biz bunu her yerde kullanalim

// burasi bir component oldugu icin dispatch kullanabiliriz.