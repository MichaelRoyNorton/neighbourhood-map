import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';

class PubMarker extends Component {
  state= {
    infoDisplay: false,
  }

  showInfo = () => {
    this.setState((prevState) => ({
      infoDisplay: !prevState.infoDisplay,
    }))
  }

  render() {

    return (
      <Marker
        position={this.props.position}
        onClick={this.showInfo}
      >
        {this.state.infoDisplay &&
          <InfoWindow onCloseClick={this.showInfo} >
            <div>
              <h3>{this.props.name}</h3>
              {this.props.address.map((line) => {
                return (
                  <span key={line}>{line}, </span>
                )

              })}
            </div>
          </InfoWindow>}
      </Marker>
    )
  }
}

export default PubMarker
