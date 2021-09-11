import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HomeFeature from "./features/Home";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" component={HomeFeature} exact />
      </Switch>
    </div>
  );
}

export default App;
