/* import logo from './logo.svg'; */
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './views/home/home'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} /> 
      </Router>
    </div>
  )
}

export default App
