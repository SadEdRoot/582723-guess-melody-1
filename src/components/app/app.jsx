import React, {PureComponent} from 'react';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GamesArtist from '../game-artist/game-artist.jsx';
import GameGenre from '../game-genre/game-genre.jsx';
import PropTypes from 'prop-types';
import questions from '../../mocks/questions.js';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    return this._getScreen(this.state.question);
  }

  _getScreen(question) {
    if (question === -1) {
      return this._getWelcomeScreen();
    } else if (question >= questions.length) {
      return this._getWelcomeScreen();
    } else {
      return questions[question].type === `genre` ? this._getGameGenreScreen(questions[question]) : this._getGameArtistScreen(questions[question]);
    }
  }

  _getWelcomeScreen() {
    const {gameTime, errorCount} = this.props;
    return <WelcomeScreen
      gameTime={gameTime}
      errorCount={errorCount}
      onStartButtonClick={() => {
        this.setState({question: 0});
      }}
    />;
  }

  _getGameGenreScreen(question) {
    const {gameTime, errorCount} = this.props;
    return <GameGenre
      gameTime={gameTime}
      errorCount={errorCount}
      question={question}
      onSubmit={()=>{
        this.setState((state) => {
          return {question: state.question + 1};
        });
      }}
    />;
  }

  _getGameArtistScreen(question) {
    const {gameTime, errorCount} = this.props;
    return <GamesArtist
      gameTime={gameTime}
      errorCount={errorCount}
      question={question}
      onSubmit={()=>{
        this.setState((state) => {
          return {question: state.question + 1};
        });
      }}
    />;
  }

}

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number
};

export default App;
