import { Component } from 'react';
import Heading from '../Components/Heading';
import SearchBar from '../Components/SearchBar';
import Scroll from '../Components/Scroll';
import CardList from '../Components/CardList';
import './App.css';
import Errorboundary from '../Components/Errorboundary';

class App extends Component{
constructor(){
  super();
  this.state = {
    robots:[],
     searchField:''
    }
}

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(robots => this.setState({robots}))
}

 handleChange = (evt) => {
 this.setState({searchField: evt.target.value})
}

render(){
const {robots, searchField} = this.state;

  const filteredRobot = robots
 .filter( eachRobot => eachRobot.name.toLowerCase()
 .includes(searchField.toLowerCase()));

 return !robots.length ? <h1>Loading</h1> : 

        (
  <div className='tc'>
  <Heading/>
  <SearchBar handleChange={this.handleChange}/>
  <Errorboundary>
  <Scroll>
  <CardList robots={filteredRobot}/>
  </Scroll>
  </Errorboundary>
 
    </div>
  );
}

}

export default App;
