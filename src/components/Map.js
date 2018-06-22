import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 51.507769,
      lng:  -0.128327
    },
    zoom: 14,
  };



  handleClick = (e, newLat, newLng) => {
    e.target.childNodes[0].style.display = 'block';
    e.target.removeEventListener('click', this.handleClick);
    return;
  }

  closeModal = (e) => {
    e.target.style.display = 'none';
  }

  render() {
    const PubPin = ({ text }) => <div>{text}</div>;
    return (
      <div className='map' style={{height: 'calc(100vh - 110px)', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyA47PFgoG6SynkYt-VPid3XIcUhpuhcwWk'}}
          center={this.props.center}
          defaultZoom={this.props.zoom}>
            {this.props.pubs.map((pub) => (
              <PubPin
                className="pub-pin"
                key={pub.id}
                lat={pub.location.lat}
                lng={pub.location.lng}
                text={
                  <div>
                    <i onClick={((e) => this.handleClick(e, pub.location.lat, pub.location.lng))} className="fas fa-beer">
                      <div className="display-modal">
                        <i className="close-modal fas fa-times" onClick={((e) => this.closeModal(e))}></i>
                        <h4>{pub.name}</h4>
                        <p>{pub.location.formattedAddress}</p>
                      </div>
                    </i>
                  </div>
                  }
              />
            ))}

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
