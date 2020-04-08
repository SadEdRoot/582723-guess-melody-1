import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`Press on button`, () => {
  const clickHandler = jest.fn();
  const app = shallow(<WelcomeScreen
    gameTime={0}
    errorCount={0}
    onStartButtonClick={clickHandler}
  />);

  const startButton = app.find(`.welcome__button`);
  startButton.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
