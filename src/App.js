import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HelloHeader from './HelloHeader';
// import TextInput from './TextInput';
import TextForm from './TextForm';

function App() {
  return (
    <div className="App">
      <HelloHeader />
      {/* <TextInput /> */}
      <TextForm />
    </div>
  );
}

export default App;
