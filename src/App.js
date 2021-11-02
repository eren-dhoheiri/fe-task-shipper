import "./theme/index.scss";
import { Router, Switch, Route } from "react-router-dom";
import { BlankPage, DriverManagement } from "./pages";
import { createBrowserHistory } from "history";

const App = () => {
  const history = createBrowserHistory();
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={BlankPage} />
        <Route exact path="/driver-management" component={DriverManagement} />
        <Route exact path="/pickup" component={BlankPage} />
      </Switch>
    </Router>
  );
};

export default App;
