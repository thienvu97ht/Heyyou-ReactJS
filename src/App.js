import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewLetter from "./components/NewLetter";
import AboutsPage from "./pages/Abouts";
import HomePage from "./pages/Home";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/abouts" component={AboutsPage} />

        <Route component={NotFound} />
      </Switch>

      <NewLetter />
      <Footer />
    </div>
  );
}

export default App;
