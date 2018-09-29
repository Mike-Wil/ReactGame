import React from "react";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    wasClicked:[],
    imgs: friends,
    count: 0,
    bestCount: 0,
    message: '',
    
  }
  componentDidMount() {
    this.setState()
    this.setState({message: 'Start Clicking!'});
  }

  shuffle =() => {
    let array = this.state.imgs
    let currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    };
  
    this.setState({imgs:array});
  }

  handleClick=event=> {
    if (this.state.wasClicked.includes(event.target.getAttribute('id'))) {
      let message = 'Game Over. Try to Improve!'
      if (this.state.count>this.state.bestCount) {
        this.setState({bestCount: this.state.count})
        message = 'Wow, a new high score!'
      } 
      this.setState({count:0,message:message,wasClicked:[]});
    }
    else {
      this.state.wasClicked.push(event.target.getAttribute('id'));
      this.setState({count: this.state.count+1});
      this.shuffle();
    }
    // this.setState({friends: this.state.friends.filter(friend => friend.id!==id)})
  }
  render() {
    return (
      <Wrapper>
      <Jumbotron
      count={this.state.count}
      bestCount={this.state.bestCount}
      message={this.state.message}
      >
      </Jumbotron>
      <Wrapper>
        {this.state.imgs.map(friend => (
          <FriendCard
          {...friend}
          key={friend.id}
          onClick={this.handleClick}
        />
        ))}
      </Wrapper>
      </Wrapper>

    );
  }
}

export default App;
