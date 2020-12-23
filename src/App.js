import {useState, useEffect} from 'react';
import './App.css';


function App() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(['']);
  
  function fetchData () {
    fetch('https://my-json-server.typicode.com/ajd01/demo/memebers').then(function (response) {
    // The API call was successful!
      return response.json();
    }).then(function (data) {
      // This is the JSON from our response
      setData(data);
      console.log(data);
    }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
  }
  
  useEffect(() => {
      fetchData();
    },[]
    )

  return (
    <div className="App">
      <header className="App-header">
      <div>
        {counter}
        {data.map(i => (
          <li key={i.id}>
            <p className="nameRed">{i.name}</p>
            <p className="nameBlue">{i.title}</p>
          </li>
        ))}
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => setCounter(counter - 1)}>-</button>

      </div>
      </header>
    </div>
  );
}

//
export default App;
