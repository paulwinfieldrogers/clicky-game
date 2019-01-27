import React, { Component } from 'react';
//import './App.css';
import CowCard from "./components/cowcard/CowCard";
import cows from "./cows.json"


class App extends Component {
  state = {
    instructions: "Click on a picture to begin",
    yourScore: 0,
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
        yourScore: (this.state.curScore > this.state.yourScore) ? this.state.curScore : this.state.yourScore,
        curScore: 0,
        cows: cows,
        unselectedCows: cows
      });
    }
    else {
      // failure
      const newCows = this.state.unselectedCows.filter(item => item.breed !== breed);

      this.setState({
        message: "You guessed correctly!",
        curScore: this.state.curScore + 1,
        cows: cows,
        unselectedCows: newCows
      });
    }

    this.shuffleArray(cows);
  };



  render() {
    return (
      <div className="All-cows">
        {

          this.state.cows.map(cows => (
            <CowCard
              instructions={this.state.instructions}
              key={cows.id}
              breed={cows.breed}
              image={cows.image}
              selectCow={this.selectCow}
            />
          ))
        }
      </div>
    );
  }
}


export default App;
