import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import './Qrcode.css';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      result: 'No result',
    };
    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(data) {
    if (data) {
      this.setState({
        result: data,
      });
      alert(data);
    }
  }
  handleError(err) {
    console.error(err);
  }

  render() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      return (
        <div className="Qrcode">
          <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: '100%' }}
          />
          <p>{this.state.result}</p>
        </div>
      );
    }
    return (<div>Erro</div>);
  }
}
export default Test;
