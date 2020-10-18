import React, { Component } from "react";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: {},
    };
  }

  tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${this.state.quotes.content} - ${this.state.quotes.author}`;
    window.open(twitterUrl, "_blank");
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          quotes: data,
        });
      });
  }

  getNewQuote = () => {
    this.getQuote();
  };

  render() {
    return (
      <div className="box-centerside">
        <div id="text">
          <p style={{ textAlign: "center" }}>{this.state.quotes.content}</p>
        </div>
        <div id="author">
          <h5 style={{ textAlign: "center" }}>{this.state.quotes.author}</h5>
          <div className="button-container">
            <button
              className="twitter-button"
              onClick={() => this.tweetQuote()}
            >
              <i className="fab fa-twitter"></i>
            </button>

            <button onClick={this.getNewQuote}>New Quote</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
