import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import history from './history';


class App extends React.Component {
  constructor(props){
      super(props);
      this.state={
      };
      this.gotoLogin = this.gotoLogin.bind(this);
  }

  gotoLogin() {
    history.push("/login");
  }
  render() {
    return(
      <div className="App">
      <h1>Appiness</h1>
      <button onClick={this.gotoLogin} style={{
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '20px',
    }}
    >Login</button>
    </div>
    )
  }
}

export default App;
