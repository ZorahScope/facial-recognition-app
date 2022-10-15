import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import "./App.css";

// prettier-ignore
class App extends Component {
    render() {
        return (
            <div className="App">
                <ParticlesBg type="cobweb" bg={true} num={400} />
                <Navigation />
                <Logo />
                <Rank /> 

                <ImageLinkForm />
                {/* 
                <FaceRecognition /> */}
            </div>
        );
    }
}

export default App;
