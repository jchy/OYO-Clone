import "./styles.css";
import Search from './Components/SearchBar/Search'
import { PaymentMain } from './Components/Payment/PaymentMain'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomeSearch from "./Components/SearchBar/HomeSearch";



export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/" exact component={HomeSearch} />
          <Route path="/payment/:id" component={PaymentMain} />
        </Switch>
      </Router>
    </div>
  );
}
