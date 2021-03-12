import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Counter from "./components/Counter";
import Login from "./components/Login";
import FormikLogin from "./components/FormikLogin";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>React testing workshop</h3>
        <Router>
          <div>
            <nav style={{ marginBottom: "64px" }}>
              <ul style={{ listStyle: "none", display: "inline" }}>
                <li>
                  <Link className="App-link" to="/counter">
                    Counter
                  </Link>
                </li>
                <li>
                  <Link className="App-link" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="App-link" to="/formik">
                    Formik Form
                  </Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/counter">
                <Counter />
              </Route>
              <Route path="/login">
                <Login onSubmit={(data) => console.log(data)} />
              </Route>
              <Route path="/formik">
                <FormikLogin onSubmit={(data) => console.log(data)} />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
