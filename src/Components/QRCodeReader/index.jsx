import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import './Qrcodereader.css';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result',
    };
  }

  render() {
    const handleScan = (data) => {
      if (data) {
        this.setState({
          result: data,
        });
        alert(data);
      }
    };
    const handleError = (err) => {
      console.error(err);
    };
    return (
      <div className="Qrcode-reader">
        <p className="Gen-Heading">QR code scanner</p>
        <div className="Qrcode-camera">
          <QrReader
            delay={this.state.delay}
            onError={handleError}
            onScan={handleScan}
            style={{ width: '100%' }}
          />
        </div>
        <p className="Scanned-qr">{this.state.result}</p>
      </div>
    );
  }
}
export default Test;
