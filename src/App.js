/* import logo from './logo.svg'; */
import './App.scss'
import 'antd/dist/antd.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './views/home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
