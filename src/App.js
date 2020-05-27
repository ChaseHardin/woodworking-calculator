import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CutDetailsForm } from './components/cut-details-form/cut-details-form';
import Container from 'react-bootstrap/Container';
import {TopNav} from './components/menu/top-nav';

function App() {
  return (
    <React.Fragment>
      <TopNav />
      <Container>
          <CutDetailsForm />
      </Container>
    </React.Fragment>
  );
}

export default App;
