import React, { Component } from 'react';
import '../css/Nav.css';
import '../css/Home.css';
import '../css/Contact.css';
import '../css/Projects.css';
import Nav from '../components/Nav/Nav.js';
import Home from '../components/Home/Home.js';
import Projects from '../components/Projects/Projects.js';
import Contact from '../components/Contact/Contact.js';

class App extends Component {
    constructor() {
        super();

        this.state = {
            route: 'home',
        };
    }

    //page routing method
    onRouteChange = (route) => {
        this.setState({route: route});
    }

    render() {
        //states destructor
        const  { route } = this.state;

        //switching between pages
        if(route === 'home') {
            return (
                <section>
                    <Nav onRouteChange={this.onRouteChange}/>
                    <Home/>
                </section>
            )
        }
        else if(route === 'projects') {
            return (
                <section>
                    <Nav onRouteChange={this.onRouteChange}/>
                    <Projects/>
                </section>
            )
        }
        else if(route === 'contact') {
            return (
                <section>
                    <Nav onRouteChange={this.onRouteChange}/>
                    <Contact/>
                </section>
            )
        }
    }
}

export default App;