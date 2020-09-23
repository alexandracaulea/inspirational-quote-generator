import React, { Component } from 'react';
import Quote from './Quote';

const PROXI = 'https://polar-caverns-16644.herokuapp.com/';
const API_URL =
  'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&jsonp=?';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
    };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`${PROXI}${API_URL}`);
      const quote = await res.json();
      this.setState({
        quote,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { quote } = this.state;
    return (
      <header id="quote-box">
        <h1>Inspirational Quotes</h1>
        <Quote author={quote.quoteAuthor} text={quote.quoteText} />
      </header>
    );
  }
}

export default Header;
