import React, { Component } from 'react';
import './App.css';
import SideMenu from './components/SideMenu.js';
import * as PubsAPI from './PubsAPI.js';
import escapeRegExp from 'escape-string-regexp';
import MyMap from './components/MapTest.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true,
      pubs: [],
      query: '',
      selectedPub: ''
    };
    this.handleClick = this.handleClick.bind(this);
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


  handleClick() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  updateQuery = (query) => {
    this.setState({ query })
  }

  listClick = (e) => {
    this.setState({selectedPub: e.target.id})
    console.log(this.state.selectedPub);
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
        {!this.state.isHidden &&
          <SideMenu
            onChange={(event) => this.updateQuery(event.target.value)}
            pubs={showingPubs}
            onClick={this.handleClick.bind(this)}
            query={this.state.query}
            listClick={this.listClick.bind(this)}
          />}
        <header className="App-header">
          <i onClick={this.handleClick} className="burger-menu fas fa-bars"></i>
          <h1 className="App-title">Pubs in London</h1>
        </header>
        <MyMap
          isMarkerShown
          pubs={showingPubs}
        />
      </div>
    );
  }
}

export default App;
