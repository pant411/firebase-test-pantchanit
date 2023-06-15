import { useEffect, useState } from 'react';
import './App.css'
import TableSchool from './components/Table';
import axios from 'axios';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const {data: response} = await axios.get('http://127.0.0.1:8080/api/schools');
        setData(response);
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
    }
    getData();
    //console.log(data[0]["name"]["thai"]);

  },[]);

  if(loading) {
    return <Loading />;
  }

  return (
    <div>
      <header className='header-content'>
        <h1>รายชื่อโรงเรียนทั้งหมด</h1>
      </header>
      <main className='main-content'>
        <TableSchool data={data}/>
      </main>
      
    </div>
  );
}

export default App
