import React, { Component } from 'react';
//import './App.css';
import CowCard from "./components/cowcard/CowCard";
import cows from "./cows.json"
import UserInfo from './components/UserInfo/UserInfo';
import Container from "./components/Container/Container"


class App extends Component {
  state = {
    message: "Click on a picture to begin |",
    yourScore: 0,
    highScore: 0,
    cows: cows,
    unselectedCows: cows
  }

  componentDidMount() {
  }

  //goes through the array of cows imported via the cows.json file and randomizes their order
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectCow = breed => {
    const findCow = this.state.unselectedCows.find(item => item.breed === breed);

    if (findCow === undefined) {
      // is your score higher than the current top score?  If yes set your score = top score
      this.setState({
        message: "You guessed incorrectly! |",
        highScore: (this.state.yourScore > this.state.highScore) ? this.state.yourScore : this.state.highScore,
        yourScore: 0,
        cows: cows,
        unselectedCows: cows
      });
    }
    else {
      // failure
      const newCows = this.state.unselectedCows.filter(type => type.breed !== breed);

      this.setState({
        message: "You guessed correctly! |",
        yourScore: this.state.yourScore + 1,
        cows: cows,
        unselectedCows: newCows
      });
    }

    this.shuffleArray(cows);
  };



  render() {
    return (
   <Container>
        <UserInfo
        message={this.state.message}
         yourScore={this.state.yourScore}
          highScore={this.state.highScore}
        />
   
        {
          this.state.cows.map(cows => (
            <CowCard
              breed={cows.breed}
              image={cows.image}
              selectCow={this.selectCow}
              yourScore={this.state.yourScore}
            />
          ))
        }
   </Container>
    );
  }
}



export default App;
