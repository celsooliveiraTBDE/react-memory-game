import React, { Component } from "react";
import Title from "./components/BoozeCard/Title"
import Wrapper from "./components/BoozeCard/Wrapper"
import drinks from "./drinks.json"
import Counter from "./components/Counter"
import BoozeCard from "./components/BoozeCard"
import Navbar from "./components/Navbar"
import Panel from "./components/Panel"

class App extends Component {

  state = {
    drinks,
    score: 0,
    control: []

  };

  scrambleDrinks = id => {
    // Filter this.state.drinks for drinks with an id not equal to the id being removed
    let drinks = this.state.drinks;
    let control = this.state.control;
    if (control.length<1) {
      this.setState({ score: 1 });
    }

    drinks.sort(() => Math.random() - 0.5);
    this.setState({ drinks });

    if (control.includes(id)) {
      console.log("this is true!")
      this.setState({ score: 0,control:[] });
      console.log("this is the score ", this.state.score)

    }

    else {

      console.log("this is false!")
      control.push(id)
      this.setState({ score: this.state.score + 1 });

      console.log("this is the control id array", id, "and ", control)
      console.log("this is the score ", this.state.score)

    }
    console.log("this is the score ", this.state.score)

    // Set this.state.drinks equal to the new drinks array
  };

  //set the score to 0


  // pass an id in on the click
  // assign it to the variable
  // check against the array of chosen indexes
  // test if already contains in the array
  // reset score to zero if so, 
  // else add that value to the array, raise score by 1



  render() {
    return (
      <div>
        <h1>HELLO{this.score}</h1>

        <Navbar />

        <Panel>
        </Panel>

        <Wrapper>
          <Title>Memory Game</Title>
          {this.state.drinks.map(drink => (
            <BoozeCard
              scrambleDrinks={this.scrambleDrinks}
              id={drink.id}
              key={drink.id}
              name={drink.name}
              image={drink.image}
              spirit={drink.spirit}
              character={drink.character}
              score={this.score}
            />
          ))}
        </Wrapper>

      </div>


    );
  }
}
export default App;