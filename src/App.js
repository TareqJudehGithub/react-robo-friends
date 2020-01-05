import React, { Component } from 'react';
import { CardList }from "../src/components/card-list/CardList"
import { SearchBox } from "../src/components/searchBox/search-box";
import Button from 'react-bootstrap/Button';
import logo from "./logo.svg";





// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (){
    super()
    this.state = {
      monsters: [],
      searchField: "",
      listOn: true
    }
  }

  // properties:
  searchChangeHandler = (event) => {
    this.setState({searchField: event.target.value})
  }

  //show list on/off
  showList =() => {
  const showList = this.state.listOn;
  this.setState({listOn: !showList})
  } 

  //React Life Cycles
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users =>
    this.setState({monsters: users}))
    .catch(err => (console.log(err)))
  }
  
  render() {

    const { monsters, searchField } = this.state;
    const filteredMonststers = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    let monstersList = null;
    if(this.state.listOn){
      monstersList = (
        
        <div>
          <CardList
        monstersList={filteredMonststers}/>
        </div>  
      )
    }
     
    return ( 
           
      this.state.monsters.length===0?
      <h1 className="loading">Please wait ...</h1>:

      <div className="App">            
        <nav>
        <ul style={{marginTop:"5%"}}>      
          <li><h1 style={{ fontSize: "calc(30px + 3vmin)"}}>Robo Monsters</h1>
          </li>
          <li>
            <img src={logo} className="App-logo" alt="logo"/></li>
          </ul>
          </nav>
        
        <SearchBox
        searchInput={this.searchChangeHandler}
        />   
        <Button variant="outline-info"
        onClick={this.showList}
        className="btn-list"
        style={{
          color: "rgb(100, 220, 250)",
          fontSize: "1.15em",
          padding: "10px"
        }}
        >
        {this.state.listOn?         
         "Hide List":
          "Show List"}         
          </Button>          
        {monstersList} {/* the else statement */}
      </div> 
  )
}
  
}

export default App;
