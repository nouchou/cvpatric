import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import About from "./components/About";
import Contacts from "./components/Contacts";

import Skills from "./components/Skills";
import Education from "./components/Education";
import NotFound from './components/NotFound';
import FormationExperiance from './components/formationExperiance';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <About/> 
                <Skills/> 
                <Contacts/>
   

                <div>
                    <FormationExperiance />
                </div>
                <Education/>
                <NotFound />
            </div>
        );
    }
}

export default App;
