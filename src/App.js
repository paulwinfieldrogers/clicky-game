import React, { Component } from 'react';
//import './App.css';
import CowCard from "./components/cowcard/CowCard";
import cows from "./cows.json"
import UserInfo from './components/UserInfo/UserInfo';
import Container from "./components/Container/Container"


class App extends Component {
  state = {
    instructions: "Click on a picture to begin",
    yourScore: 0,
    cows: cows,
    unselectedCows: cows
  }

  componentDidMount() {
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectCow = breed => {
    const findCow = this.state.unselectedCows.find(item => item.breed === breed);

    if (findCow === undefined) {
      // success
      this.setState({
        message: "You guessed incorrectly!",
        yourScore: (this.state.yourScore > this.state.yourScore) ? this.state.curScore : this.state.yourScore,
        yourScore: 0,
        cows: cows,
        unselectedCows: cows
      });
    }
    else {
      // failure
      const newCows = this.state.unselectedCows.filter(item => item.breed !== breed);

      this.setState({
        message: "You guessed correctly!",
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
          message={this.state.instructions}
          yourScore={this.state.yourScore}
          topScore={this.state.topScore}
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
