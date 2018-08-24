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
      <div>
        <li className="pub-name" onClick={this.showInfo}>{this.props.name}</li>
        <Marker
          position={this.props.position}
          onClick={this.showInfo}
        >
          {this.state.infoDisplay &&
            <InfoWindow onCloseClick={this.showInfo}>
              <div >
                <h3>{this.props.name}</h3>
                {this.props.address.map((line) => {
                  return (
                    <span key={line}>{line}, </span>

                  )

                })}
                <br />
                <a href="https://foursquare.com/">Informarion provided by Foursquare.com</a>
              </div>
            </InfoWindow>}
        </Marker>
      </div>

    )
  }
}

export default PubMarker
