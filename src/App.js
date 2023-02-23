import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './Home/home';
import Login from './Login/login';

function App() {
  const navigate = useNavigate();

    function handleClick(){
        navigate("/Login")
    }
  return (
    <div className="App" >
      <nav className="navbar">
         <button onClick={handleClick} className="logout-button">Logout</button>
       </nav>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      
    </div>
  );
}

export default App;
