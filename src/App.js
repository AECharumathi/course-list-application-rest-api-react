import logo from './logo.svg';
import './App.css';
import './App.scss';

import {
  BrowserRouter as Router,
  Route, Redirect
} from "react-router-dom";

import Header from './components/Header';
import Courses from "./components/Courses";
import UserEnquired from "./components/UserEnquired";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <body>
        <Router>
          <Route path="/courses" children={<Courses/>} />
          <Route path="/userEnquired" children={<UserEnquired/>} />
          <Route path="/" render={() => <Redirect to="/courses" /> } />
        </Router>
      </body>
      <footer className="App-footer">
      </footer>
    </div>
  );
}

export default App;
