import "./App.css";
import { Title } from "./components/Title";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "./components/form";

function App() {
  return (
    <div className="App">
      {/* title */}
      <Title />
      <Form />
    </div>
  );
}

export default App;
