import * as React from 'react';
import './App.css';

import { Login } from './login/login';

class App extends React.Component {
  public constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

export default App;
