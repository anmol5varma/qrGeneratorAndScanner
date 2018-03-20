import React from 'react';
import './Qrcode.css';

const QRCode = require('qrcode');

// const QRScanner = require('qrcode');

class QRCodeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      code: '',
      string: '',
    };
  }

  render() {
    const getQrcode = () => {
      if (this.state.string !== '') {
        QRCode.toString(this.state.string, (err, string) => {
          if (err) throw err;
          this.setState({
            code: string,
          });
        });
      } else {
        this.setState({
          code: '<div/>',
        });
      }
    };
    return (
      <div className="Qrcode-generator">
        <p className="Gen-Heading">QR code generator</p>
        <div className="Qrcode">
          <div
            className="NewQRCode"
            dangerouslySetInnerHTML={{ __html: this.state.code }}
          />
        </div>
        <input
          className="Inputtext"
          type="text"
          onChange={(event) => {
            this.setState({
                string: event.target.value,
            }, () => {
                getQrcode();
            });
        }}
        />
      </div>
    );
  }
}

export default QRCodeGenerator;
