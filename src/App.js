import './App.css';
import {Home} from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import React from "react";
import {BrowserRouter as Router,Switch , Route} from "react-router-dom";
import Notestate from './context/notes/NoteState';


function App() {
    return (
        <>
<Notestate>
     < Router > 
       <Navbar/>
            <Switch>
            <Route exact path="/"> <Home /></Route>
            <Route exact path="/about"> <About/> </Route>
            </Switch>
    </Router>
</Notestate>  
    </>
    );
  }
  
  export default App;
  