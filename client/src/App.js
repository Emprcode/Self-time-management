import "./App.css";
import { Title } from "./components/Title";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchBar } from "./components/SearchBar";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        {/* title */}
        <Title />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
