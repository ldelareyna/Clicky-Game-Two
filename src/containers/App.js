import React, { Component } from 'react';
import classes from './App.css';
import Logo from '../components/Logo/Logo'
import Console from '../components/Console/Console'
import Scoreboard from '../components/Scoreboard/Scoreboard'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import GameScreen from '../components/GameScreen/GameScreen'
import Footer from '../components/Footer/Footer'

class App extends Component {

  state = this.initialState()

  initialState(highscore) {
    if (!highscore) {
      highscore = 0;
    }
    return {
    hiScore: highscore,
    score: 0,
    consoleMessage: "Click an image to start!",
    images: [
      {
        id: 1,
        name: 'tile1.jpg',
        clicked: false
      },
      {
        id: 2,
        name: 'tile2.jpg',
        clicked: false
      },
      {
        id: 3,
        name: 'tile3.jpg',
        clicked: false
      },
      {
        id: 4,
        name: 'tile4.jpg',
        clicked: false
      },
      {
        id: 5,
        name: 'tile5.jpg',
        clicked: false
      },
      {
        id: 6,
        name: 'tile6.jpg',
        clicked: false
      },
      {
        id: 7,
        name: 'tile7.jpg',
        clicked: false
      },
      {
        id: 8,
        name: 'tile8.jpg',
        clicked: false
      },
      {
        id: 9,
        name: 'tile9.jpg',
        clicked: false
      },
      {
        id: 10,
        name: 'tile10.jpg',
        clicked: false
      },
      {
        id: 11,
        name: 'tile11.jpg',
        clicked: false
      },
      {
        id: 12,
        name: 'tile12.jpg',
        clicked: false
      }
    ]
  }
}


  sortArray = (images) => {
    
    for (let i = images.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [images[i], images[j]] = [images[j], images[i]];
    }
    return images
   }
   
   checkIfClickedBefore = (id) => {
    let images = [...this.state.images]
    let hiScore = this.state.hiScore
    let consoleMessage = this.state.consoleMessage
    let score = this.state.score
    console.log(images[id].clicked)

      if (images[id].clicked === false) {
        consoleMessage = "You guessed correctly!"
        score += 1
        if (score > hiScore) {
          hiScore = score
        }
        images[id].clicked = true;
        this.setState({images: images, score:score, hiScore:hiScore, consoleMessage:consoleMessage})
    
    } else {
      consoleMessage = "You guessed incorrectly!"      
      console.log("game over");      
      this.setState(this.initialState(hiScore))
    }
      
   }
   
   

   clickImageHandler = (id) => {
     const imageIndex = this.state.images.findIndex(img => {
       return img.id === id;
     });
     this.checkIfClickedBefore(imageIndex)

     console.log(imageIndex);

   }

   

  render() {
    return (
      <div className="App">
        <Logo />
        <Console 
          consoleMessage={this.state.consoleMessage}
        />
        <Scoreboard score={this.state.score} hiScore={this.state.hiScore}/>
        <Jumbotron />
        <GameScreen 
          images={this.sortArray(this.state.images)} 
          clicked={this.clickImageHandler}/>
        <Footer />
      </div>
    );
  }
}

export default App;
