import React from 'react';
import PropTypes from 'prop-types';


const GameArtist = (props) => {
  const {gameTime, errorCount, question, onSubmit} = props;

  const _onChange = (evt)=>{
    evt.preventDefault();
    onSubmit(evt);
  };

  const errorArray = new Array(errorCount);

  return <section className="game game--artist">
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
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <button className="track__button track__button--play" type="button"></button>
        <audio></audio>
      </div>
      <form className="game__artist" onChange={_onChange}>
        {question.answers.map((item, index) => {
          return (
            <div className="artist" key={index}>
              <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-` + index} id={`artist-` + index}/>
              <label className="artist__name" htmlFor={`artist-` + index}>
                <img className="artist__picture" src={item.picture} alt={item.artist}/>
                {item.artist}
              </label>
            </div>
          );
        })}
      </form>
    </section>
  </section>;
};

GameArtist.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
  question: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default GameArtist;


