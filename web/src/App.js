import './App.css';
import { useState, useEffect } from 'react';
import Grid from './components/Grid/grid';

const apiUrl = "https://bla.production.ms.leya.ninja/api/posts/";

const App = () => {
  //Criação das variaveis de estado onde vou guardar as informações
  const [postData, setPostData] = useState([]);
  let log = console.log;


  // Função para chamar a API
  const getData = async () => {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    setPostData(jsonData);
  };

  // Hook para realizar a chamda a API cada vez que for aberta a
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='App'>
      <Grid props={postData}/>
    </div>
  );
}

export default App;
