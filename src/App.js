import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CutDetailsForm } from './components/cut-details-form/cut-details-form';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container>
      <div className="App">
        <CutDetailsForm />
      </div>
    </Container>
  );
}

export default App;
