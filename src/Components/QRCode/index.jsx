import React from 'react';
import './Qrcode.css';

const QRCode = require('qrcode');

// const QRScanner = require('qrcode');

class Footer extends React.Component {
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
          console.log(string, '!!!');
        });
      }
    };
    return (
      <div>
        <div className="Qrcode">
          <div dangerouslySetInnerHTML={{ __html: this.state.code }} />
        </div>
        <input
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
    //   QRScanner.initiate({
    //     match: /^[a-zA-Z0-9]{16,18}$/, // optional
    //     onResult(result) { console.info('DONE: ', result); },
    //     onError(err) { console.error('ERR :::: ', err); }, // optional
    //     onTimeout() { console.warn('TIMEDOUT'); }, // optional
    //   })
    );
  }
}

// Footer.propTypes = {
//   value: PropTypes.string.isRequired,
//   redirectBack: PropTypes.func,
// };

// Footer.defaultProps = {
//   redirectBack: '',
// };
export default Footer;
