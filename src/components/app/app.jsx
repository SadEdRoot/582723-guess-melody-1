import React from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount} = props;
  const onClick = ()=>{

  };

  return <WelcomeScreen
    gameTime={gameTime}
    errorCount={errorCount}
    onClick={onClick()}
  />;
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number
};

export default App;
