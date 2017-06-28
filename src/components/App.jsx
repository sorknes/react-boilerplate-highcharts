/*  ------------------------------------------------
./src/components/App.jsx
---------------------------------------------------- */


import React, {Component} from 'react';

// components
import Header from './Header/Header';
import Charts from './Charts/Charts';

class App extends Component {
  render() {
    return (
      <main className="main" role="main">
        <div className="container">
          { /* main header */ }
          <Header headline="Highcharts" />

          {/* main charts */}
          <Charts />
        </div>
      </main>
    );
  }
}

export default App;
