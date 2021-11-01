import "./theme/index.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BlankPage, DriverManagement, ComingSoon } from "./pages";
import { createBrowserHistory } from "history";

const App = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={BlankPage} />
        <Route exact path="/driver-management" component={DriverManagement} />
        <Route exact path="/pickup" component={ComingSoon} />
      </Switch>
    </Router>
  );
};

export default App;
