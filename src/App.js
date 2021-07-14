import SignUp from "./components/SignUp";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <h2>Welcome to Mood Minutes</h2>
        <SignUp />
      </div>
    </>
  );
}

export default App;
