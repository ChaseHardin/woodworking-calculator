import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CutDetailsForm } from './components/cut-details-form/cut-details-form';
import Container from 'react-bootstrap/Container';
import { TopNav } from './components/menu/top-nav';
import { CutDetailsProvider } from './contexts/cut-details-context';

function App() {
  return (
    <CutDetailsProvider>
      <TopNav />
      <Container>
        <CutDetailsForm />
      </Container>
    </CutDetailsProvider>
  );
}

export default App;
