import React from 'react';
import QRCode from '../QRCode';
import QRCodeReader from '../QRCodeReader';

class Container extends React.Component {
  render() {
    return (
      <div className="Container">
        <QRCode />
        <QRCodeReader />
      </div>
    );
  }
}

export default Container;
