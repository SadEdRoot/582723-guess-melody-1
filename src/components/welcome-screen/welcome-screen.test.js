import React from 'react';
import WelcomeScreen from './welcome-screen.jsx';
import renderer from 'react-test-renderer';


it(`renders correctly`, () => {
  const tree = renderer
  .create(<WelcomeScreen
    gameTime={0}
    errorCount={0}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
