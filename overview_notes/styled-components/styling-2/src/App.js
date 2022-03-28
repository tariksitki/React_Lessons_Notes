import logo from './logo.svg';
import './App.css';
import StyledComponent from './components/styledComponent/StyledComponent';
import MaterialUi from './components/materialUi/MaterialUi';

import {createTheme, ThemeProvider} from "@mui/material";
import {orange, green} from "@mui/material/colors";

import { AppBar } from './components/materialUi/appBar/AppBar';

function App() {

  const benimTemam = createTheme({
    palette : {
      primary : {
        main : orange[500]
      },
      secondary : {
        main : green[300]
      }
    }

  })


  return (
    
      

      <ThemeProvider> {/* <header className="App-header"> */}
        
        {/* <StyledComponent /> */}
      {/* </header> */}

      <MaterialUi />
      </ThemeProvider>

   
  );
}

export default App;


// kullanilmasinin en önemli sebebi bize otomatik 2 adet unique class ismi saglar ! Büyük projelerde farkli developerlarin ayni class ismine sahip componentleri olusturmasini engellemek maksadi ile..