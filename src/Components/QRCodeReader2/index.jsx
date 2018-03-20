import React, { Component } from 'react';
// import QrReader from 'react-qr-reader';
import './Qrcodereader2.css';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result',
    };
    this.handleScan = this.handleScan.bind(this);
  }
  render() {
    const qrcode = () => (
      <div className="Qrcode" />
    );
    return (
      qrcode.html5_qrcode(
        (data) => {
          alert(data);
        },
        (error) => {
          alert(error);
        }, (videoError) => {
          alert(videoError);
        },
      )
    );
  }
}
export default Test;
