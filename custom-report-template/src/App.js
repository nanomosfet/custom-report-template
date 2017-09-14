import React, { Component } from 'react';
import './App.css';
import SectionList from './section-list.js'
import InputList from './input-list.js'

class App extends Component {
  render() {
    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">
                <SectionList />
            </div>
            <div className="col">
                <InputList />
            </div>
            <div className="col">
                <p>Report</p>
            </div>
        </div>
    </div>
      
    );
  }
}

export default App;
