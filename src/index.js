import React from "react";
import ReactDOM from "react-dom";
import style from './style.scss';
import classnames from 'classnames';
import { randomIntegerInRange } from './util.js'
import { toefl } from './words.js'
const App = () => {
  const list = toefl;
  const hard = [];
  const normal = [];
  const easy = [];
  const legend = [];
  const [word, setWord] = React.useState('valid');
  const [meaning, setMeaning] = React.useState('producing a desired result based on the truths or facts');
  const [show, setShow] = React.useState(false);
  const flush = (type) => {
    const random = randomIntegerInRange(0, list.length - 1)
    setShow(false);
    setWord(list[random][0]);
    setMeaning(list[random][1]);
  }
  return (
    <div className={style.container}>
      <h1 className={style.title}>{word}</h1>
      { show ? <h1 className={style.meaning}>{meaning}</h1> : null }
      <div className={style.controllersContainer}>
        {
          !show ?
          <button className={classnames(style.controllers, style.showMeaning)} onClick={() => setShow(true)}>Show Meaning</button> :
          <>
            <button className={classnames(style.controllers, style.easy)} onClick={() => flush(1)}>Easy</button>
            <button className={classnames(style.controllers,style.normal)} onClick={() => flush(2)}>Medium</button>
            <button className={classnames(style.controllers,style.hard)} onClick={() => flush(3)}>Hard</button>
            <button className={classnames(style.controllers,style.legend)} onClick={() => flush(4)}>Legend</button>
          </>
        }
      </div>
    </div>
  )
}
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
