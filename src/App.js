import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import logo from './logo.svg';
import './App.css';


const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 25px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Dev = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: red;
  color: white;
  box-shadow: 0 0 9px rgba(0,0,0,0.25);
  border-radius: 7px;
  margin: 0 7px;
`;

function App() {
  const [profiles, setProfile] = useState([]);

  useEffect(() => {
    async function getDevs() {
      const req = await fetch('/api/devs');
      const devs = await req.json();
      console.log('===>', devs);
      setProfile(devs.data);
    }
    getDevs();
  }, []);

  console.log('le profil', profiles);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Allo devhaiti & tichaiti
        </p>

        <Container>
          {profiles.map((dev, i) => {
            return (
              <Dev key={i}>
                <img src={dev.avatar_url}  height="80" alt="prof"/>
                <p>{dev.name}</p>
                <p>{dev.email}</p>
              </Dev>
            )
          })}
        </Container>

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

export default App;
