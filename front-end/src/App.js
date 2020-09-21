import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import { Navigation } from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Signin from './components/Signin/Signin';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ImageWithPrediction from './components/ImageWithPrediction/ImageWithPrediction';
import Clarifai from 'clarifai';

const app = new Clarifai.App({apiKey: 'd74859640db547e3bc82428d03ed5908'});

const particlesParam = {
   "particles": {
      "number": {
         "value": 150
      },
      "size": {
         "value": 4
      }
   }
}
class App extends Component {
   constructor(){
      super();
      this.state = {
         input: '',
         imgUrl: '',
         box: {},
         concepts: {},
         route: 'signin',
      }
   }

   processPredictedData = (data) => {
      const clarifiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      const clarifiConcepts = data.outputs[0].data.regions[0].data.concepts
      const image= document.getElementById('img-id');
      const width = Number(image.width);
      const height = Number(image.height);

      const boundingBox = {
         leftCol: clarifiFace.left_col * width,
         topRow:  clarifiFace.top_row * height,
         rightCol: width - (clarifiFace.right_col * width),
         bottomRow: height - (clarifiFace.bottom_row * height)
      }

      const conceptsGender = clarifiConcepts[20].name === 'masculine' ? 'male' : 'female';
      const concepts = {
         age: clarifiConcepts[0].name,
         // gender: conceptsGender.toUpperCase(),
         gender: conceptsGender,
         race: clarifiConcepts[22].name
      }

      this.setState({box: boundingBox, concepts: concepts});
   }
   onChangeInput = (event) => {
      this.setState({input: event.target.value});
   }

   onClickEvent = () => {
      this.setState({ imgUrl: this.state.input });
      app.models.predict(Clarifai.DEMOGRAPHICS_MODEL, this.state.input)
      .then(response => {
      this.processPredictedData(response);
      })
      .catch(err => {
        console.log(err);
      });
   }

   onRouteChange = (route) => {
      this.setState({route: route})
   }

   render() {
      return (
         <div className="App">
            <Particles className="particles" params={particlesParam}/>
            { this.state.route === 'signin'
            ? <Signin onRouteChange={this.onRouteChange} />
            : <div>
                  <Navigation onRouteChange={this.onRouteChange}/>
                  <Logo />
                  <Rank />
                  <ImageLinkForm 
                     onChangeInput = {this.onChangeInput}
                     onClickEvent = {this.onClickEvent}
                  />
                  <ImageWithPrediction
                     imgSrc={this.state.imgUrl}
                     box={this.state.box}
                     concepts={this.state.concepts}
                  />
               </div>
            }
         </div>
      );
   }
}

export default App;
