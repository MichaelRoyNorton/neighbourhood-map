import React, { Component } from 'react';
import './App.css';
import * as PubsAPI from './PubsAPI.js';
import escapeRegExp from 'escape-string-regexp';
import MyMap from './components/Map.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pubs: [],
      query: '',
      selectedPub: ''
    };
  }

  async getPubs() {
    try {
      PubsAPI.getPubs('London', 'pub').then((pubs) => {
      this.setState({ pubs })
      console.log(this.state.pubs)
      })
    } catch (err) {
      console.error(err)
    }
  }

  componentDidMount() {
    this.getPubs()
  }


  updateQuery = (query) => {
    this.setState({ query })
  }

  hideList() {
    let list = document.getElementsByClassName('list-container')[0];
    list.style.display = 'none';
  }

  showList() {
    let list = document.getElementsByClassName('list-container')[0];
    list.style.display = 'block';
  }


  render() {

    let showingPubs
    if(this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
      showingPubs = this.state.pubs.filter((pub) => match.test(pub.name))
    } else {
      showingPubs = this.state.pubs
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pubs in London</h1>
            <div className="menu">
              <i className="fas fa-bars" onClick={this.showList}></i>
              <input
                aria-label="search for pubs"
                className="search"
                type="text"
                placeholder="Search for pubs"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
        </header>
        <MyMap
          handleClick={this.hideList}
          className="map"
          isMarkerShown
          pubs={showingPubs}
        />
      </div>
    );
  }
}

export default App;
