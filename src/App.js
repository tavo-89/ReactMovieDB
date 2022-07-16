import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
