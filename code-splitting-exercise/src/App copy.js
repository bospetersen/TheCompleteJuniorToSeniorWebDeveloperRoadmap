import React, { Component, Suspense } from 'react';
import './App.css';
//Adding React.lazy to the 3 pages
const Page1 = React.lazy(() => import('./Components/Page1'));
const Page2 = React.lazy(() => import('./Components/Page2'));
const Page3 = React.lazy(() => import('./Components/Page3'));

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'page1',
    }
  }
  onRouteChange = (route) => {
    this.setState({ route: route });
  }
  render() {
    // Returning all pages and wrapping them in to a single Suspense component 
    // After that I use the ternary operator to only load one page at the time. 
    return (
      <Suspense fallback={<div>Loading...</div>}>
        {this.state.route === 'page1' ?
          <Page1 onRouteChange={this.onRouteChange} /> : null
        }
        {this.state.route === 'page2' ?
          <Page2 onRouteChange={this.onRouteChange} /> : null
        }
        {this.state.route === 'page3' ?
          <Page3 onRouteChange={this.onRouteChange} /> : null
        }
      </Suspense>
    )

  }
}

export default App;
