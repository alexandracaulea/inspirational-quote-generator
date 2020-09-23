import React from 'react';

function Quote(props) {
  return (
    <>
      <h2 id="author">{props.author}</h2>
      <p id="text">{props.text}</p>
    </>
  );
}

export default Quote;
