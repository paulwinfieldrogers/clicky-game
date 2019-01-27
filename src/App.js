import React, { Component } from 'react';
//import './App.css';
import CowCard from "./components/cowcard/cowcard";
import cows from "./cows.json"


class App extends Component {
  state = {
      message: "Click an image to begin!",
      topScore: 0,
      curScore: 0,
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

    if(findCow === undefined) {
        // failure to select a new dog
        this.setState({ 
            message: "You guessed incorrectly!",
            topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
            curScore: 0,
            cows: cows,
            unselectedCows: cows
        });
    }
    else {
        // success to select a new dog
        const newCows = this.state.unselectedCowss.filter(item => item.breed !== breed);
        
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
                            breed={cows.breed}
                            image={cows.image}
                        />
                    ))
                }
      </div>
    );
  }
}
console.log(CowCard)
export default App;

