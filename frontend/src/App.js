import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';
import { recordAudio } from './record'
import SelectCryReason from './selectCryReason'
import BigBrain from './bigBrain'

const pages = {
  home: "home",
  cryReason: "cryReason"
}

const brain = new BigBrain();
const trainingData = [];
function App() {
  const [page, setPage] = useState(pages.home);
  const [recordState, setRecordState] = useState(false);
  const audioRef = useRef(undefined);

  const trainBrain = (output) => {
    audioRef.current.arrayBuffer().then(arrayBuffer => {
      const baseAudioContext = new (window.AudioContext || window.webkitAudioContext)();
      baseAudioContext.decodeAudioData(
        arrayBuffer, 
        (audioBuffer) => {
          const audioArray = [...audioBuffer.getChannelData(0)];
          trainingData.push({input: audioArray, output: "something"});
          brain.trainingData(trainingData, () => {
            const output = brain.run('input');
            console.log(output);
          })
        }, 
        (err) => console.error(err)
      );
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => {
          setRecordState(!recordState);
          recordAudio(5000).then(audioChunks => {
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audioRef.current = audioBlob;
            setPage(page.cryReason);
          })
        }}>{ recordState === false ? "Record Audio Clip" : "Stop Recording" }</button> 
  
        { page === pages.cryReason && <SelectCryReason trainBrain = {trainBrain}/>}
      </header>
    </div>
  );
}

export default App;
