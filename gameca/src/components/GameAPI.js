import React, { Component } from "react";
import { Button } from "react-bootstrap";

class GameAPI extends Component {
  state = {
    loading: true,
    game: null,
  };

  async componentDidMount() {
    const url = "https://api.rawg.io/api/games";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ game: data.results[1], loading: false });

    for (let i = 0; i < data.results.length; i++) {
      const element = data.results[i].name;
      console.log(element);
      const img = data.results[i].background_image;
      console.log(img);
      const rating = data.results[i].rating;
      console.log(rating);
      const release = data.results[i].released;
      console.log(release);
    }
    // console.log(data.results);
    console.log(data.results[0].background_image);
    console.log(data.results[0].rating);
    console.log(data.results[0].released);
  }

  moreInfo = () => {
    const url = "https://api.rawg.io/api/games";
    const response = fetch(url);
    const data = response.json();
    this.setState({ game: data.results[2], loading: false });

    // {
    //   Math.floor(Math.random() * 10);
    // }

    for (let i = 0; i < data.results.length; i++) {
      const element = data.results[i].name;
      console.log(element);
      const img = data.results[i].background_image;
      console.log(img);
      const rating = data.results[i].rating;
      console.log(rating);
      const release = data.results[i].released;
      console.log(release);
    }
  };

  render() {
    return (
      <div>
        {this.state.loading || !this.state.game ? (
          <div>loading...</div>
        ) : (
          <div>
            <div>{this.state.game.name} </div>
            <img src={this.state.game.img} alt="picturee" />
            <div>{this.state.game.rating} </div>
            <div>{this.state.game.release} </div>
            <Button variant="secondary" onClick={this.moreInfo}>
              More Info
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default GameAPI;
