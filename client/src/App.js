import "./App.css";
import { Title } from "./components/Title";
import { searchBar } from "./components/searchBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      {/* title */}
      <Title />
      <searchBar />
    </div>
  );
}

export default App;
