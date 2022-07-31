import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Bruh";
import updateHuman from "./pages/updateHuman";
import titans from "./pages/titans";
import humans from "./pages/humans";
import updateTitan from "./pages/updateTitan";
import CreateTitan from "./pages/CreateTitan";
import CreateHuman from "./pages/CreateHuman";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} exact />
      <Route path="/humans" component={humans} exact />
      <Route path="/humans/:id" component={updateHuman} />
      <Route path="/titans" component={titans} exact />
      <Route path="/titans/:id" component={updateTitan} />
      <Route path="/createTitan" component={CreateTitan} />
      <Route path="/createHuman" component={CreateHuman} />
    </div>
  );
}

export default App;
