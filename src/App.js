import './App.css';
import {Home} from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import React from "react";
import {BrowserRouter as Router,Switch , Route} from "react-router-dom";
import Notestate from './context/notes/NoteState';
import { Alert } from './components/Alert';


function App() {
    return (
        <>
<Notestate>
     < Router > 
       <Navbar/>
       <Alert message={"This is amazing app !"}/>
       <div className="container">
            <Switch>
            <Route exact path="/"> <Home /></Route>
            <Route exact path="/about"> <About/> </Route>
            </Switch>
       </div>
    </Router>
</Notestate>  
    </>
    );
  }
  
  export default App;
  