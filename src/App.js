import AccountPage from "pages/Account";
import ProductPage from "pages/Products";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewLetter from "./components/NewLetter";
import NotFound from "./components/NotFound";
import AboutsPage from "./pages/Abouts";
import AuthPage from "./pages/Auth";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/abouts" component={AboutsPage} />
        <Route path="/auth" component={AuthPage} />
        <Route path="/account" component={AccountPage} />
        <Route path="/products" component={ProductPage} />

        <Route component={NotFound} />
      </Switch>

      <NewLetter />
      <Footer />
    </div>
  );
}

export default App;
