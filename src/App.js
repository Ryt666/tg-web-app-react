import { useEffect } from 'react';
import './App.css';


export default function App() {

  useEffect(() => {
    tg.ready()
  }, [])

  return (

    <div className="App" >
      work
      <button onClick={onClose}>Close</button>
    </div>
  );
}
