import React from 'react';
import GameArtist from './game-artist.jsx';
import renderer from 'react-test-renderer';

const mocks = {
  "type": `artist`,
  "song": {
    "artist": `Quincas Moreira`,
    "src": `https://es31-server.appspot.com/guess-melody/static/music/Blue_Whale.mp3`
  },
  "answers": [
    {
      "picture": `https://es31-server.appspot.com/guess-melody/static/artist/Quincas_Moreira.jpg`,
      "artist": `Quincas Moreira`
    },
    {
      "picture": `https://es31-server.appspot.com/guess-melody/static/artist/Density_n_Time.jpg`,
      "artist": `Density & Time`
    },
    {
      "picture": `https://es31-server.appspot.com/guess-melody/static/artist/Endless_Love.jpg`,
      "artist": `Endless Love`
    }
  ]
};

it(`GameArtist correctly renders`, () => {
  const tree = renderer.create(<GameArtist
    gameTime={0}
    errorCount={0}
    question={mocks}
    onSubmit={()=>{}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
