import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Home from "./Pages/home";
import "./App.css";

import About from "./Pages/about";

import Contactus from "./Pages/contactus";

import Services from "../src/Pages/services";
import Physician from "./Pages/Physician";
import 'animate.css';
class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Routes>
                        <Route
                            path="/"
                            element={<Home />}
                        ></Route>
                        <Route
                            path="/about"
                            element={<About />}
                        ></Route>
                        <Route
                            path="/contact-us"
                            element={<Contactus />}
                        ></Route>
                        <Route
                            path="/services"
                            element={<Services />}
                        ></Route>
                                                <Route
                            path="/physician"
                            element={<Physician/>}
                        ></Route>
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default App;