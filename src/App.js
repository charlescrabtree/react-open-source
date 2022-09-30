import { Link, Route, Switch } from 'react-router-dom';
// import './App.css';
import { DataTable } from './components/Table/DataTable';
import { DataChart } from './components/Chart/DataChart';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="main">
      <nav className="navbar">
        <Link to="/table" className="navbar-item">Table</Link>
        <Link to="/charts" className="navbar-item">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1 className="title is-1">Table Libary</h1>
          <DataTable />
        </Route>
        <Route path="/charts">
          <h1 className="title is-1">Chart Library</h1>
          <DataChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
