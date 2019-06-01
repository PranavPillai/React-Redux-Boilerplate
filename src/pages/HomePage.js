import React from 'react';
import logo from '../assets/logo.svg';
import './homepage.css';

import { connect } from 'react-redux';
import { getAccount } from '../store/user/actions';

class HomePage extends React.Component {

  componentDidMount() {
    this.props.getAccount();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.user.loggedIn
  };
}

export default connect(
  mapStateToProps, 
  {
    getAccount,
  }
)(HomePage);
