import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPleyer from '../audio-player/audio-player.jsx';

class GameGenre extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: -1,
    };

    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit(evt);
  }

  render() {
    const {gameTime, errorCount, question} = this.props;
    const errorArray = new Array(errorCount);

    return <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 780">
          <circle cx="390" cy="390" r="370" style={{WebkitTransformOrigin: `center`, MsTransformOrigin: `center`, transformOrigin: `center`}} filter="url(#blur)"/>
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">{gameTime}</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          {errorArray.map((it, index) => {
            return (<div className="wrong" key={index}></div>);
          })}
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите {question.genre} треки</h2>
        <form className="game__tracks" onSubmit={this._onSubmit}>
          {question.answers.map((item, index) => {
            return (<div className="track" key={index}>
              <AudioPleyer
                src={item.src}
                isPlaying={this.state.isPlaying === index ? true : false}
                onPlayButtonClick={() => {

                  this.setState((state)=>{
                    return state.isPlaying === index ? {isPlaying: -1} : {isPlaying: index};
                  });
                }
                }
              />
              <div className="game__answer">
                <input className="game__input visually-hidden" type="checkbox" name="answer" value={`artist-` + index} id={`artist-` + index}/>
                <label className="game__check" htmlFor={`artist-` + index}>Отметить</label>
              </div>
            </div>);
          })
          }
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }
}


GameGenre.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  question: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default GameGenre;
