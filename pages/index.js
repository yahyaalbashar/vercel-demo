import styles from '../styles/Home.module.css';
import Main from './components/Main';
import { useState } from 'react';
import axios from 'axios';

const tokenAPIUrl = `${process.env.NEXT_PUBLIC_API}api/token/`;
const refreshAPITokenUrl = `${process.env.NEXT_PUBLIC_API}api/token/refresh`;

const Home = () => {

  const getToken = async () => {
    const config = {
      username: 'admin',
      password: 'abcd1234'
    };
    console.log(tokenAPIUrl);
    const token = await axios.post(tokenAPIUrl, config);
    setToken(token.data.access);
    setRefresh(token.data.refresh);
  }
  const getRefreshToken = async () => {
    const config = {
      username: 'admin',
      password: 'abcd1234',
      refresh: refreshToken
    };
    console.log(refreshAPITokenUrl);
    const token = await axios.post(refreshAPITokenUrl, config);
    setToken(token.data.access);
  }
  const [token, setToken] = useState('');
  const [refreshToken, setRefresh] = useState('');
  if (!token) {
    return (
      <>
        <button onClick={getToken}>Request Token</button>
      </>
    )
  }
  return (
    <>
      <button onClick={getRefreshToken}>refresh Token</button>
      <Main token={token}/>
    </>)
    
}
export default Home