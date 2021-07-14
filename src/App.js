import Welcome from "./components/Welcome";
import { GlobalStyles } from "./styles/globalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="container">
        <Welcome />
      </div>
    </>
  );
}

export default App;
