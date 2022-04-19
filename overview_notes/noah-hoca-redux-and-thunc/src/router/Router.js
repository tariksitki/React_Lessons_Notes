import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import News from "../pages/News";

import PrivateRouter from "./PrivateRouter";

// burada private router su sekilde calisir:
// "/" gelirse private router i return et. private router ise bir func dir. 
// eger user login oldu ise outlet return eder. outlet dedigimiz sey child element döndürür.burada child element ise news dir. user login olmadi ise login sayfasina private router ile göndeririz.

const AppRouter = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default AppRouter;

