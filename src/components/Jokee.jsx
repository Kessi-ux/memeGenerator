import React from 'react';
import JokesData from './JokesData';
import { Joke } from "./Joke"

export const Jokee = () => {
  const JokesElements = JokesData.map((joke, index) => {
    return (
      <Joke
        key={index} // Use index or a unique id from the joke object
        setup={joke.setup}
        punchline={joke.punchline}
      />
    );
  });

  return (
    <div>
      {JokesElements}
    </div>
  );
};
