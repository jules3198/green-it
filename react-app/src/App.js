import './App.css';
import Autocomplete from "./components/Search";
import data from "./data/data.json";
import React, {useState , useEffect} from "react";
import Data from './components/Data'

function App() {
  const [datas, setDatas] = useState([])
  const [word, setWord] = useState("")

  /*useEffect(() => {
    setDatas((data))
  }, [])*/
  const handleSearch = (value) => {
    const resp = data.filter( el => el.Ville.toLocaleLowerCase() === value.toLocaleLowerCase())
        console.log(resp)
      setDatas(resp)
  }

  return (
    <div className="App">
    <h1>Indice de fragilité numérique</h1>

        <div style={{
            border: '1px solid black',
            margin : '10px',
            padding : '10px'
        }}>
            <h2>Présentation</h2>

            <p>
                Le but de ce projet a pour base les recherches lancés par l'institut du numérique responsable sur la fragilité numérique <br/>
                La barre de recherche ci dessous permet de choisir la ville dont on souhaite conaitre l'indice de fragilité numérique. <br/>
                Cette indice est calculé à partir de 4 grands axes : <br/> <br/>
                1. <strong>L'accès à l'information </strong> d'un territoire  <br/>
                2. <strong>L'accès aux interfaces numériques </strong>  <br/>
                3. <strong>La capacité d'usage des interfaces numériques </strong>  <br/>
                4. <strong>Les compétences adminsitratives </strong>  <br/>
            </p>

        </div>
      <Autocomplete
          suggestions={[
            "Paris",
            "Bobigny",
            "Créteil",
            "Nanterre",
            "Versailles",
          ]}
          onSearch={(v) => handleSearch(v)}
      />
      <Data datas={datas} />
    </div>
  );
}

export default App;
