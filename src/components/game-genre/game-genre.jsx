import React from 'react';
import PropTypes from 'prop-types';

const GameGenre = (props) => {
  const {gameTime, errorCount, question, onSubmit} = props;

  const _onSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(evt);
  };

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
        {errorArray.map((index) => {
          return (<div className="wrong" key={index}></div>);
        })}
      </div>
    </header>

    <section className="game__screen">
      <h2 className="game__title">Выберите {question.genre} треки</h2>
      <form className="game__tracks" onSubmit={_onSubmit}>
        {question.answers.map((item, index) => {
          return (<div className="track" key={index}>
            <button className="track__button track__button--play" type="button"></button>
            <div className="track__status">
              <audio src={item.src}></audio>
            </div>
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
};

GameGenre.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  question: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default GameGenre;
