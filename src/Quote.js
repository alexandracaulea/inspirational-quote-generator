import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Loader from './Loader';
import screenReaderTextStyle from './mixins';

const Blockquote = styled.blockquote`
  margin: 0;
  min-height: 15.625rem;
`;

const Header = styled.h2`
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 -0.15em 0 hsla(331, 37%, 54%, 0.144);
  color: #b55d88;
  display: inline;
  font-family: 'Crimson Text', serif;
  font-size: 2.3em;
  font-style: italic;
  font-weight: normal;
  letter-spacing: 1px;
  line-height: 1.4;
`;

const Author = styled.p`
  color: #9b5074;
  font-family: 'Lato', sans-serif;
  font-weight: bold;
  text-align: right;
  text-transform: uppercase;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const TweetLink = styled.a`
  text-decoration: none;
  width: 3.75em;
  height: 3.75em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  border-radius: 50%;

  &:hover {
    background-color: rgba(29, 161, 242, 0.1);
  }
`;

const ScreenReaderText = styled.span`
  ${screenReaderTextStyle};
`;

const QuoteButton = styled.button`
  background-color: #726a95;
  border-radius: 3px;
  border: none;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  color: #fff;
  cursor: pointer;
  font-size: 1.1em;
  padding: 0.7em 1em;
  transition: all 0.175s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    background-color: #585274;
  }

  &:active {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    background-color: #605a7d;
  }
`;

const PROXI = 'https://polar-caverns-16644.herokuapp.com/';
// eslint-disable-next-line operator-linebreak
const API_URL =
  'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
const TWITTER_URL = 'https://twitter.com/intent/tweet/';

class Quote extends Component {
  constructor() {
    super();
    this.state = {
      quoteText: '',
      quoteAuthor: '',
      isLoading: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    this.fetchQuote();
  }

  async fetchQuote() {
    try {
      const response = await axios.get(`${PROXI}${API_URL}`);
      const data = await response.data;
      // If the response received from the API is a string
      if (typeof data === 'string') {
        // Replace all backslash characters with an empty string
        const stripped = data.replace(/[\\W_]+/g, '');
        // Convert the resulted string to an object
        const convertToObject = JSON.parse(stripped);
        this.setState({
          quoteText: convertToObject.quoteText,
          quoteAuthor: convertToObject.quoteAuthor || 'unknown',
          isLoading: false,
        });
      } else {
        this.setState({
          quoteText: data.quoteText,
          quoteAuthor: data.quoteAuthor || 'unknown',
          isLoading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleClick() {
    this.setState({ isLoading: true });
    this.fetchQuote();
  }

  render() {
    const { isLoading, quoteText, quoteAuthor } = this.state;
    return (
      <section id="quote-box" aria-live="polite">
        <Blockquote>
          <Header id="text">{isLoading ? <Loader /> : quoteText}</Header>
          <footer>
            {!isLoading && (
              <Author id="author">
                {quoteAuthor === '' ? 'unknown' : quoteAuthor}
              </Author>
            )}
          </footer>
        </Blockquote>
        <Container>
          <TweetLink
            id="tweet-quote"
            title="Tweet this quote!"
            href={`${TWITTER_URL}?text="${quoteText}" - ${quoteAuthor}&hashtags=inspirationalquotes`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="44"
              height="35"
              fill="none"
              viewBox="0 0 44 35"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.067 4.143a17.671 17.671 0 01-5.075 1.392A8.86 8.86 0 0041.879.646a17.696 17.696 0 01-5.611 2.144A8.825 8.825 0 0029.817 0a8.836 8.836 0 00-8.836 8.836c0 .692.078 1.366.229 2.013-7.343-.368-13.854-3.886-18.212-9.232A8.796 8.796 0 001.802 6.06c0 3.066 1.56 5.77 3.93 7.355a8.8 8.8 0 01-4.002-1.105v.11c0 4.282 3.046 7.853 7.088 8.665a8.85 8.85 0 01-3.99.151 8.845 8.845 0 008.253 6.136 17.73 17.73 0 01-10.973 3.783c-.714 0-1.417-.042-2.108-.124A25.009 25.009 0 0013.544 35c16.253 0 25.14-13.464 25.14-25.14 0-.383-.008-.764-.026-1.143 1.73-1.25 3.223-2.8 4.41-4.574"
                fill="#1DA1F2"
              />
            </svg>
            <ScreenReaderText>Tweet this quote!</ScreenReaderText>
          </TweetLink>
          <QuoteButton id="new-quote" onClick={this.handleClick}>
            Get New Quote
          </QuoteButton>
        </Container>
      </section>
    );
  }
}

export default Quote;
