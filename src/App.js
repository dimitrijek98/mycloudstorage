import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
            <Router>
                <Navigation />
                <Route exact path="/" render={() => (
                    <LandingPage />
                )}/>
                <Route exact path="/search" render={() => (
                    <SearchPage />
                )}/>

                <Footer />
            </Router>
    </div>
  );
}

export default App;
