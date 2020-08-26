import React, { Component } from 'react';
import Axios from 'axios';
import { connect,  } from "react-redux";

import Header from '../components/Header/Header';
import CardList from "../components/Cards/CardList"

import Loading from "../components/Layout/Loading";
import Scroll from "../components/Layout/Scroll";
import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry";

import { setSearchField } from "../redux/SearchField/actions";

import './App.css';

class App extends Component {
  constructor (){
    super()
    this.state = {
      robots: [],
      // searchField: "",
      loading: false,
      listOn: true
    }
  }

  // Search robots method:
  // searchChangeHandler = (event) => {
  //   this.setState({searchField: event.target.value})
  // }

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
    const { robots, loading } = this.state;
    const { searchField, onSearchChange } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return ( 
      <div className="App"> 
         <ErrorBoundry>
        <Header searchInput={onSearchChange}/>                
        <Scroll>     
          {
            loading
            ? 
            <Loading />
            :
            <CardList robots={filteredRobots}/>
          }   
        </Scroll>
        </ErrorBoundry> 
      </div> 
  )
};
  
};
const mapStateToProps = state => ({
  searchField: state.searchField
});
const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App) ;
