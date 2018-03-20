import React from 'react';
import ReactDOM from 'react-dom';
import './render.css';
import Header from '../Header';
import Footer from '../Footer';
import Container from '../Container';

class Main extends React.Component {
  render() {
    return (
      <div className="Main-box">
        <Header />
        <Container />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
