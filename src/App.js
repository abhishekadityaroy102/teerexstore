import logo from "./logo.svg";
import "./App.css";
import Homepage from "./pages/Homepage";
import Navbarandroutes from "./pages/Navbarandroutes";
import { DataProviderwrapper } from "./Contextapi/DataProvider";

function App() {
  return (
    <DataProviderwrapper>
      <div className="App">
        <Navbarandroutes />
      </div>
    </DataProviderwrapper>
  );
}

export default App;
