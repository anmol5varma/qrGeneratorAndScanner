import React, { Component } from 'react';
// import QrReader from 'react-qr-reader';
import './Qrcode.css';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result',
    };
  }
  render() {
    const qrcode = () => (
      <div id="root" className="Qrcode" />
    );
    return (
      <div>
        <div className="" />
        <button
          onClick={() => {
            $('#root').html5_qrcode(
              (data) => {
                alert(data);
              },
              (error) => {
                alert(error);
              }, (videoError) => {
                alert(videoError);
              },
            );
          }}
        />
      </div>
    );
  }
}
export default Test;
