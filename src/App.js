// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Homepage } from "./Layout/Homepage";
import { Navbar } from "./components/Navbar";
import { CartContaxtProvider } from "./Layout/context/CartContaxtProvider";
import { CartPage } from "./Layout/CartPage";

function App() {
  return (
    <div className="font-press-start ">
      <Router>
        <CartContaxtProvider>
          <Navbar />

          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/cart" exact component={CartPage} />
          </Switch>
        </CartContaxtProvider>
      </Router>
    </div>
  );
}

export default App;
