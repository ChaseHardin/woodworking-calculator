import React from 'react';
import { CutDetails } from './components/cut-details/cut-details';
import { TopNav } from './components/menu/top-nav';
import { CutDetailsProvider } from './contexts/cut-details-context';
import { MDBContainer } from 'mdbreact';
import { ViewProvider } from './contexts/view-context';

function App() {
  return (
    <ViewProvider>
      <CutDetailsProvider>
        <TopNav />
        <MDBContainer>
          <CutDetails />
        </MDBContainer>
      </CutDetailsProvider>
    </ViewProvider>
  );
}

export default App;
