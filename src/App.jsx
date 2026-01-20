import { useState } from 'react'
import languages from "./data/languages.js";
import './index.css'

function App() {
  const [selectedlang, setselectedlang] = useState(0)

  function onElementoCliccato(chi) {
    console.log("cliccato", chi);
    setselectedlang(chi)

  }

  return <div className="mega-wrappr">

    <h1>Linguaggi</h1>

    {languages.map((language, indice) =>
      <button onClick={() => { onElementoCliccato(indice) }}>{language.title}</button>
    )}

    <div>
      <h2>{languages[0].title}</h2>
      <p>{languages[0].descrizione}</p>


    </div>



  </div>


}

export default App
