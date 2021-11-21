import logo from './logo.svg';
import './App.css';

import { recordAudio } from './record'

function App() {
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
          recordAudio(5000).then(audioChunks => {
            const audioBlob = new Blob(audioChunks);
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play()

            audioBlob.arrayBuffer().then(arrayBuffer => {
              baseAudioContext.decodeAudioData(arrayBuffer, (...data) => {
                console.log()
              }, (err) => console.error(err));
            })

          })
        }}>Record Audio Clip</button> 
      </header>
    </div>
  );
}

export default App;
