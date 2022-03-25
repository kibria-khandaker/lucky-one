import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {

  const [items, setItems] = useState([]);

  useEffect(()=>{
    const url = `https://raw.githubusercontent.com/kibria-khandaker/my-api-data/main/fakeData.json`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setItems(data))
  },[])
  console.log(items);

  return (
    <div>
      <Header/>
      <Shop items={items}></Shop>
    </div>
  );
}

export default App;