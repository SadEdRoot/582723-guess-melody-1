import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

class AudioPlayer extends PureComponent {
  constructor(props) {
    super(props);

    const isPlaying = props.isPlaying;

    this.state = {
      isPlay: false,
      isLoading: true,
      isPlaying,
    };

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  componentDidMount() {
    this._audio = new Audio(this.props.src);


    this._audio.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    this._audio.ontimeupdate = () => this.setState({
      progress: this._audio.currentTime
    });


  }

  componentDidUpdate() {
    if (this.props.isPlaying) {
      this._audio.play();
    } else {
      this._audio.pause();
    }
  }

  componentWillUnmount() {
    this._audio.pause();
    this._audio.oncanplaythrough = null;
    this._audio.ontimeupdate = null;
    this._audio.src = ``;
    this._audio = null;
  }

  render() {
    return (
    <>
      <button
        className="track__button track__button--play"
        type="button"
        disabled={this.state.isLoading}
        onClick={this._onPlayButtonClick}
      ></button>
      <div className="track__status">
        <audio></audio>
      </div>
    </>);
  }

  _onPlayButtonClick() {
    this.props.onPlayButtonClick();
    this.setState({isPlaying: !this.state.isPlaying});
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
};

export default AudioPlayer;
