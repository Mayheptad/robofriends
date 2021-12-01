import { useEffect, useState } from 'react';
import Heading from '../Components/Heading';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll';
import CardList from '../Components/CardList';
import './App.css';
import Errorboundary from '../Components/Errorboundary';

function App(){

  const [robots, setRobots] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect( _ => 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(robots => setRobots(robots))
    , []);

 const handleChange = evt => setSearchField(evt.target.value);

 const filteredRobot = robots.filter( eachRobot => 
  eachRobot.name.toLowerCase().includes(searchField.toLowerCase()));

return(
        <>
!robots.length ? <h1>Loading</h1> :
        ( 
  !filteredRobot.length ? 
  <h1> Seems there's no robot with the name you typed,
  Pls try another name </h1> :
  <div className='tc'>
  <Heading/>
  <SearchBar handleChange={handleChange}/>
  <Errorboundary>
  <Scroll>
  <CardList robots={filteredRobot}/>
  </Scroll>
  </Errorboundary>
  </div>
       )
       </>

)

}

export default App;
