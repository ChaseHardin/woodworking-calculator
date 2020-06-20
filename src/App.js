import React from 'react';
import { CutDetails } from './components/cut-details/cut-details';
import { TopNav } from './components/menu/top-nav';
import { CutDetailsProvider } from './contexts/cut-details-context';
import { MDBContainer} from 'mdbreact';

function App() {
  return (
    <CutDetailsProvider>
      <TopNav />
      <MDBContainer>
        <CutDetails />
      </MDBContainer>
    </CutDetailsProvider>
  );
}

export default App;
