import { useEffect } from 'react';
import './App.css';
import Header from '../src/components/Header/Header'
import {useTelegram} from './components/hooks/useTelegram'
const tg = window.Telegram.WebApp; 

export default function App() {

  const {onToggleButton} = useTelegram()

  useEffect(() => {
    tg.ready()
  }, [])

  return (

    <div className="App" >
      <Header />
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}
