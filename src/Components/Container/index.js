import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import initstore from '../../redux/stores';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Provider store={initstore()}><Main /></Provider>, document.getElementById('root'));
