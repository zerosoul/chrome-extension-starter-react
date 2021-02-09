import React from 'react';
import styled from 'styled-components';
import logo from './assets/icon-128.png';
const StyledWrapper = styled.div`
  width: 500px;
  height: 600px;
  text-align: center;
  padding: 10px;
  background-color: #282c34;

  .App-header {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    .App-logo {
      height: 30vmin;
      pointer-events: none;
    }
  }

  .App-link {
    color: #61dafb;
  }
`;

const Popup = () => {
  return (
    <StyledWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logeo" />
        <p>
          Edit <code>src/pages/Popup/Popup.js</code> and save to reload.
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
    </StyledWrapper>
  );
};

export default Popup;
