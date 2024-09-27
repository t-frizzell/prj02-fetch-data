import './App.css';
import { useEffect, useState } from 'react';
import Form from './Form';
import List from './List'; // Convert list to table
import Table from './Table';

// Mainly to practice useEffect and fetching json data, using fetch api.

function App() {
  // will be using /posts, /comments, /users
  const API_URL = 'https://jsonplaceholder.typicode.com';

  const [reqType, setReqType] = useState('users'); // users, posts, comments
  const [data, setData] = useState([]); // The data we get back will be a json array


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/${reqType}`); //using a template literal
        if(!response.ok) throw Error('Error');

        const _data = await response.json(); // convert json data
        console.log(_data); // debug
        setData(_data); // set the useState data
      } catch (error) {
        console.log(error);
      }
    };

    //no return type this time
    fetchData();
  }, [reqType])

  const print = () => {
    console.log("selected");
  }
  return (
    <div className="App">

      {/* Pass variables as "class" parameters */}
      <Form 
        reqType={reqType}
        setReqType={setReqType}
      />

      {/* Pass variables as "class" parameters */}
      {/* <List 
        data={data}
      />*/}

      {/* Change from list component to a table component */}
      <Table 
        data={data}
      />
    </div>
  );
}

export default App;
