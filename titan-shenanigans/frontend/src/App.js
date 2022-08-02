import { Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import updateHuman from "./pages/UpdateHuman";
import titans from "./pages/Titans";
import humans from "./pages/Humans";
import updateTitan from "./pages/UpdateTitan";
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
      <Route path="/createTitan" component={CreateTitan} exact />
      <Route path="/createHuman" component={CreateHuman} exact />
    </div>
  );
}

export default App;
