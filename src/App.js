import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';

// We can convert the function to a Component. We must include a render() funtion
// Components must return a single element thats why wrap the whole return in a <div>
class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Header />

        <Main />

        <Footer />

      </div>
    );
  }

}

export default App;
