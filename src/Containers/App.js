import { useEffect, useState } from 'react';
import Heading from '../Components/Heading';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll';
import CardList from '../Components/CardList';
import './App.css';
import Errorboundary from '../Components/Errorboundary';
import NoMoreRobot from '../Components/NoMoreRobot';

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
!robots.length ? <h1>Loading</h1> :
        ( 
  <div className='tc'>
  <Heading/>
  <SearchBar handleChange={handleChange}/>
  <Errorboundary>
  <Scroll>
 {!filteredRobot.length ? <NoMoreRobot/> : <CardList robots={filteredRobot}/>}
  </Scroll>
  </Errorboundary>
  </div>
       )
)

 }

export default App;
