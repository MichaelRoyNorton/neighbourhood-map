import React, { Component } from 'react';

class ListPubs extends Component {

  render() {
    return (
      <div className='list-pubs'>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search for pubs"
            value={this.props.query}
            onChange={this.props.onChange}
          />
        </div>
        <ul className="pubs-list">
          {this.props.pubs.map((pub) => (
            <li key={pub.id} id={pub.id} onClick={this.props.listClick}>
              {pub.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListPubs;
