import React from "react";
import ReactDOM from "react-dom";
import style from './style.scss';
import { randomIntegerInRange } from './util.js'
import { toefl } from './words.js'
const App = () => {
  const list = toefl;
  const hard = [];
  const normal = [];
  const easy = [];
  const legend = [];
  const [word, setWord] = React.useState('Impression');
  const [meaning, setMeaning] = React.useState('تحسین برانگیز');
  const [show, setShow] = React.useState(false);
  const flush = () => {
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
          <button className={style.controllers} onClick={() => setShow(true)}>Show Meaning</button> :
          <>
            <button className={style.controllers} onClick={() => flush()}>Easy</button>
            <button className={style.controllers} onClick={() => flush()}>Medium</button>
            <button className={style.controllers} onClick={() => flush()}>Hard</button>
          </>
        }
      </div>
    </div>
  )
}
const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
