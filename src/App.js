import dividerDesktop from './assets/imgs/pattern-divider-desktop.svg'
import dividerMobile from './assets/imgs/pattern-divider-mobile.svg'
import diceButton from './assets/imgs/icon-dice.svg'
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  let randomNumber = Math.floor(Math.random() * 200)
  const url = `https://api.adviceslip.com/advice/${randomNumber}`;
  
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false)

  const getData = async() => {
    const {data} = await axios.get(url);
    setLoaded(true)
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <div>
      {loaded ? (
        <div className='container'>
          <div className='card'>
            <span className='advice-id'>ADVICE #{data.slip.id}</span>
            <h2 className='advice-data'>"{data.slip.advice}"</h2>
            <div className='lines-container'>
              <img src={dividerDesktop} className='dividerDesktop' alt='divider'/>
              <img src={dividerMobile} className='dividerMobile' alt='divider'/>
            </div>
            <div className='dice' onClick={getData}>
              <img src={diceButton} className='casino-btn' alt='dice'/>
            </div>
          </div>
        </div>
      ) : (
        <h1>loading data</h1>
      )
    }
    </div>
  );
 
}

export default App;
