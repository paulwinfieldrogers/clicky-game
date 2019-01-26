import React, { Component } from 'react';
import './App.css';
import CowCard from "./components/cowcard/cowcard";
import cows from "./cows.json"


class App extends Component {
  state = {
    message: "Click a cow to start!",
    cows,
  }

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
