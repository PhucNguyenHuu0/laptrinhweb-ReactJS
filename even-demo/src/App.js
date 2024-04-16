import React, { Component } from 'react';
import NHP_EventForm1 from './components/NHP_EventForm1';
import NHP_EventForm2 from './components/NHP_EventForm2';
import NHP_EventForm3 from './components/NHP_EventForm3';
import NHP_EventForm4 from './components/NHP_EventForm4';

class App extends Component {
  render() {
    return (
      <div className='container'>
          <h1>Event Form Demo</h1>
          <NHP_EventForm1 />
          <NHP_EventForm2 />
          <NHP_EventForm3 />
          <NHP_EventForm4 name="Nguyễn Hữu Phúc" />
      </div>
    );
  }
}

export default App;