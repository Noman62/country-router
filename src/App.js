import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import NotMatch from './components/NotMatch/NotMatch';
import CountryDetail from './components/CountryDetail/CountryDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header/Header';


function App() {
  return (
  <Router>
    <Header></Header>
    <Switch>
      <Route path="/home">
        <Home/>
      </Route>
      <Route path="/country/:alpha3Code">
        <CountryDetail/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="*">
        <NotMatch />
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
