import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="main-body">
      <div className="main-container">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>

            <Route path="/revieworder">
              <OrderReview></OrderReview>
            </Route>

            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
