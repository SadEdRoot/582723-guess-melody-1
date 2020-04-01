import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';


it(`App correctly renders`, () => {
  const tree = renderer.create(<App
    gameTime={0}
    errorCount={0}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
