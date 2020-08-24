import React, { Component } from 'react';
import CardList from "../components/Cards/CardList"
import SearchBox from "../components/searchBox/search-box";
import Loading from "../components/Layout/Loading";

import './App.css';
import Nav from '../components/nav/Nav';
import Axios from 'axios';

class App extends Component {
  constructor (){
    super()
    this.state = {
      robots: [],
      searchField: "",
      loading: false,
      listOn: true
    }
  }

  // properties:
  searchChangeHandler = (event) => {
    this.setState({searchField: event.target.value})
  }

  async componentDidMount(){

    this.setState({ loading: true})
  // Fetching API data with Axios:
    try {
      
      const response = await Axios.get("https://gorest.co.in/public-api/users")
      this.setState({ robots: response.data.data});
      this.setState({ loading: false})
    } catch (error) {
      return console.log(error.message);
    }
  };

  render() {

    const { robots, searchField, loading } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })


    return ( 
      <div className="App"> 
      <Nav />                
      <SearchBox
        searchInput={this.searchChangeHandler}
      />  
      {
            loading
            ? 
            <Loading />
            :
            <CardList 
            robots={filteredRobots}

            />
          } 
                
      </div> 
  )
}
  
}

export default App;
