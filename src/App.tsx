import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './component/card';
import Chart from './component/chart';

function App() {

  const [data, setData] = useState<any[]>([]);

  useEffect(()=>{
    fetData();
  },[])

  const fetData = async()=>{
    try{
      const res = await fetch('https://api.jikan.moe/v4/top/anime');
      if(res.ok){
      const Alldata = await res.json();
      setData(Alldata.data);
      }
    }
    catch(error){
      console.log(error, "Error in fetching data");
    }
  }

  return (
    <div className="App">
      <div className='cards'>
      {data.map((data) =>(
      <Card key={data} CardData={data} />
      ))}
      </div>
      <Chart ChartData={data}/>
    </div>
  );
}

export default App;
