import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Question from '../components/Question';
import Timer from '../components/Timer';
import styles from '../styles/Game.module.css';

class Game extends Component {
  render() {
    const { answered } = this.props;
    return (
      <div className={ `${styles['game-container']}` }>
        <Header />
        {answered === 'respondido' ? '' : <Timer />}
        <h1>Jogo</h1>
        <Question />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  answered: state.game.answered,
});

Game.propTypes = {
  results: PropTypes.arrayOf(PropTypes.any),
}.isRequired;

export default connect(mapStateToProps)(Game);
