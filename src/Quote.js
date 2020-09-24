import React, { Component } from 'react';

const PROXI = 'https://polar-caverns-16644.herokuapp.com/';
const API_URL =
  'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&jsonp=?';
const TWITTER_URL = 'https://twitter.com/intent/tweet/';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteText: '',
      quoteAuthor: '',
      isLoading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async fetchQuote() {
    try {
      const res = await fetch(`${PROXI}${API_URL}`);
      const data = await res.json();
      this.setState({
        quoteText: data.quoteText,
        quoteAuthor: data.quoteAuthor,
        isLoading: false,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async componentDidMount() {
    this.fetchQuote();
  }

  handleClick() {
    this.fetchQuote();
  }

  render() {
    const { isLoading, quoteText, quoteAuthor } = this.state;
    return (
      <section id="quote-box">
        <blockquote>
          <h2 id="text">{isLoading ? 'Loading data' : quoteText}</h2>
          <footer>
            <p id="author">{quoteAuthor}</p>
          </footer>
        </blockquote>
        <div>
          <a
            id="tweet-quote"
            href={`${TWITTER_URL}?text="${quoteText}" - ${quoteAuthor}&hashtags=inspirationalquotes`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <button id="new-quote" onClick={this.handleClick}>
            New Quote
          </button>
        </div>
      </section>
    );
  }
}

export default Quote;
