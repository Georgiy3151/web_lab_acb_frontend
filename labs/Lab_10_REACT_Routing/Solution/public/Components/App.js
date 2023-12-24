import { Routes, Route } from 'react-router-dom'
import Main from './Components/Main'
import About from './Components/About'
import NotFound from './Components/NotFound'
import { useState } from 'react'


function App() {
  const [users, setUsers]=useState([]);
  const Fetch = ()=>{
    fetch('https://swapi.dev/api/people/')
    .then(response => {
      if (response.ok) {
          return response.json();
      } else {
          throw new Error('Ошибка при получении данных: ' + response.status);
      }
    })
    .then(data => {
      setUsers(data.results.map(person => {
        return {
            name: person.name,
            birth_year: person.birth_year,
            id: person.created
        };
      }));
      console.log(data.results)
    })
    .catch(error => {
        console.log(error);
    });
  }


  return (
    <>
      <button onClick={Fetch}>Загрузить данные</button>
      <Routes>
        <Route path='/' element={<Main users={users}/>}/>
        <Route path='/about/:id' element={<About users={users}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;