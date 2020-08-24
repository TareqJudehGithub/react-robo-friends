import React, { Component } from 'react';
import CardList from "../components/Cards/CardList"

import Loading from "../components/Layout/Loading";
import Scroll from "../components/Layout/Scroll";

import './App.css';
import Header from '../components/Header/Header';
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

  // Search robots method:
  searchChangeHandler = (event) => {
    this.setState({searchField: event.target.value})
  }

  // Fetching API data with Axios:
  async componentDidMount(){
    this.setState({ loading: true});
    try {
      const response = await Axios.get("https://gorest.co.in/public-api/users")
      this.setState({ robots: response.data.data});
      this.setState({ loading: false});
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
      <Header searchInput={this.searchChangeHandler}/>                
      <Scroll>
        {
          loading
          ? 
          <Loading />
          :
          <CardList 
          robots={filteredRobots}

          />
        } 
      </Scroll>  
      </div> 
  )
};
  
};
export default App;
