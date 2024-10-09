import './App.css';
import { useState, useEffect } from 'react';

function App() {
  
  const [fact, setFact] = useState("null");
  const [id, setID] = useState(-1);
  const [source, setSource] = useState("");

  function openSource() {
    window.open(source, '_blank').focus();
  }

  function copyToClipboard() {
    var URL = 'https://gwndzxifjb.execute-api.us-east-1.amazonaws.com/dev/api/getfact';
    navigator.clipboard.writeText(URL);
    window.alert("Copied API endpoint to clipboard!");
  }

  function getFact() {
    fetch('https://gwndzxifjb.execute-api.us-east-1.amazonaws.com/dev/api/getfact')
    .then((response) => response.json())
    .then((data) => {
      setID(data[0])
      setSource(data[1])
      setFact(data[2])
    })
    .catch((error) => console.log(error));
  }

  useEffect(()=> {
    getFact();
  }, []);

  return (
    <div className="App">
      <div className="Title">Space Facts API</div>
      <div className="Clipboard">
        <svg onClick={copyToClipboard}xmlns="http://www.w3.org/2000/svg" width="16" height="19" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
          <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
          <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
        </svg>
        <div className="Link">https://gwndzxifjb.execute-api.us-east-1.amazonaws.com/dev/api/getfact</div>
      </div>
      <img src="pillars.webp" alt="Pillars of Creation"></img>
      <div className="Container" onClick={getFact}>
        <div className="Fact-Holder">{id !== -1 && fact}</div>
      </div>
      <div className="Source-Button" target="_blank" onClick={openSource}>Source→</div>
    </div>
  );
}

export default App;
