import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store/index";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Provider store = {store} >
        <App />
    </Provider> 
    );

// redux icin tüm uygulamayi sarmalamak gerekir. app.js de de yapilabilir ama eger app icinde de state ler var ise bunun da index de sarmalanmasi gerekir. bu nedenle en mantiklisi index.js dir.