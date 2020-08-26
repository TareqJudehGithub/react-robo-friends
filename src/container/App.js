import React, { Component } from 'react';
// import Axios from 'axios';
import { connect  } from "react-redux";

import Header from '../components/Header/Header';
import CardList from "../components/Cards/CardList"

import Loading from "../components/Layout/Loading";
import Scroll from "../components/Layout/Scroll";
import ErrorBoundry from "../components/ErrorBoundry/ErrorBoundry";

import { setSearchField, requestRobots } from "../redux/SearchField/actions";

import './App.css';

class App extends Component {
  // Fetching API data with Axios:
  async componentDidMount(){
  
    this.props.onFetchRobots();
  };

  render() {
    // const { robots, loading } = this.state;
    const { robots, searchField, onSearchChange, isPending } = this.props;
    console.log(robots)

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return ( 
      <div className="App"> 
         <ErrorBoundry>
        <Header searchInput={onSearchChange}/>                
        <Scroll>     
          {
            // loading
            isPending
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
  searchField: state.searchRobotsReducer.searchField,
  robots: state.searchRobotsReducer.robots,
  isPending: state.searchRobotsReducer.isPending,
  error: state.searchRobotsReducer.error
});
const mapDispatchToProps = dispatch => ({
  onSearchChange: event => dispatch(setSearchField(event.target.value)),
  onFetchRobots: () => dispatch(requestRobots())
});

export default connect(mapStateToProps, mapDispatchToProps)(App) ;
