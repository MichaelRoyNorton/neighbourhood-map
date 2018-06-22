import React, { Component } from 'react';
import ListPubs from './ListPubs.js';


class SideMenu extends Component {

  render() {
    return (
      <div>
        <div className='Side-menu'>
          <i className="close-menu fas fa-times" onClick={this.props.onClick}></i>
          <ListPubs
            pubs={this.props.pubs}
            onChange={this.props.onChange}
            query={this.props.query}
            listClick={this.props.listClick}
           />
        </div>
      </div>

    );
  }
}

export default SideMenu;
