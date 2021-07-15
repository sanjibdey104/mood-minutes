import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import { GlobalStyles } from "./styles/globalStyles";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
            </Switch>
          </Router>
        </div>
      </AuthProvider>
    </>
  );
}

export default App;
