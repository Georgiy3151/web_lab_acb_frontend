import { Routes, Route, Link } from 'react-router-dom'
import Main from './Components/Main'
import About from './Components/About'
import NotFound from './Components/NotFound'


function App() {
  return (
    <>
      <header>
        <Link to="/">main</Link>
        <br/>
        <Link to="/about">about</Link>
      </header>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;