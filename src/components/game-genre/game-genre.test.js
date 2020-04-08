import React from 'react';
import GameGenre from './game-genre.jsx';
import renderer from 'react-test-renderer';

const mocks = {
  "type": `genre`,
  "genre": `reggae`,
  "answers": [
    {
      "src": `https://es31-server.appspot.com/guess-melody/static/music/Addis_Ababa.mp3`,
      "genre": `reggae`
    },
    {
      "src": `https://es31-server.appspot.com/guess-melody/static/music/Azure.mp3`,
      "genre": `electronic`
    },
    {
      "src": `https://es31-server.appspot.com/guess-melody/static/music/Whaling_City.mp3`,
      "genre": `country`
    },
    {
      "src": `https://es31-server.appspot.com/guess-melody/static/music/Skanada.mp3`,
      "genre": `reggae`
    }
  ]
};

it(`GameGenre correctly renders`, () => {
  const tree = renderer.create(<GameGenre
    gameTime={0}
    errorCount={0}
    question={mocks}
    onSubmit={()=>{}}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
