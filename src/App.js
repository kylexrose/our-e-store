import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import { CartContextProvider } from './Contexts/cartContext';
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home';

function App() {

  return (
    <CartContextProvider>
      <Router>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </CartContextProvider>
  );
}

export default App;