import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CutDetails } from './components/cut-details/cut-details';
import Container from 'react-bootstrap/Container';
import { TopNav } from './components/menu/top-nav';
import { CutDetailsProvider } from './contexts/cut-details-context';

function App() {
  return (
    <CutDetailsProvider>
      <TopNav />
      <Container>
        <CutDetails />
      </Container>
    </CutDetailsProvider>
  );
}

export default App;
