import { useState } from 'react'
import languages from "./data/languages.js";
import './index.css'

function App() {
  const [selectedlang, setselectedlang] = useState(0)

  function onElementoCliccato(indice) {
    console.log("cliccato indice", indice);
    setselectedlang(indice)
    console.log("Descrizione:", languages[chi].descrizione);

  }

  return <div className="mega">

    <h1>Linguaggi</h1>

    {languages.map((language, indice) =>
      <button key={indice} onClick={() => { onElementoCliccato(indice) }}>{language.title} {language.descrezione}</button>
    )}

    <div>
      <h2>{languages[selectedlang].title}</h2>
      <p>{languages[selectedlang].descrizione}</p>
    </div>



  </div>


}

export default App
