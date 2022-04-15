import Navigation from './Navigation';
import './App.css';
import Home from './Home';
import AddTask from './AddTask';
import Footer from './Footer';
import { Routes,Route } from 'react-router-dom';
   
               

function App() {
 
  
  return (
    <div className="App">
      <Navigation/>
      
      <Routes>
        <Route exact path="/" element= {<Home/>} />
        <Route exact path="/AddTask" element= {<AddTask/>} />      
      </Routes>

      <Footer/>
      
    </div>
  );
}

export default App;
