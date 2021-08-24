import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyles } from "./styles/globalStyles";
import Login from "./components/routes/Login";
import SignUp from "./components/routes/SignUp";
import PrivateRoute from "./components/routes/PrivateRoute";
import Welcome from "./components/landing/Welcome";
import { AuthProvider } from "./context/AuthContext";
import MoodSpace from "./components/homepage/MoodSpace";

function App() {
  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={Welcome} />
              <PrivateRoute path="/moodspace" component={MoodSpace} />
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
