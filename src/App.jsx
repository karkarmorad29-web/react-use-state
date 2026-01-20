import { useState } from 'react'
import languages from "./data/languages.js";
import './index.css'

function App() {
  const [selectedlang, setselectedlang] = useState(0)

  function onElementoCliccato(indice) {
    console.log("cliccato indice", indice);
    setselectedlang(indice)
    console.log("Descrizione:", languages[indice].description);

  }

  return <div className="container">
    <h1>Linguaggi</h1>



    <div className="buttons-container">
      {languages.map((language, indice,) =>
        <button className="lang-button active" key={indice} onClick={() => { onElementoCliccato(indice) }}>{language.title}</button>
      )}
    </div>




    <div className="content-card">
      <h2>{languages[selectedlang].title}</h2>
      <p>{languages[selectedlang].description}</p>
    </div>
  </div>
}










export default App
