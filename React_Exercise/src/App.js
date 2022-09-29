
import { useState } from 'react';
import { useEffect } from "react";
import { List } from 'semantic-ui-react';

import './App.css';
function App() {

  const [records, setRecords] = useState(0);

  useEffect(() => { //on render call for useEffect and fetch the data from api
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setRecords((data));  //insert the data in a state variable
      })


  }, [records]);

  return (
    <div className="App">
      <div className="Flex-box">
        <List style={{ display: "inline-grid" }}>
          {
            (records || []).map((item) => (
              <List.Item key={item.id}  >
                <br />
                {item.completed === true && (  //if its completed give it a backround color of green
                  <li className="completed">  <br /> id: {item.id} 
                  <br /> 
                  title: {item.title}</li>
                )}

                {item.completed === false && (
                 
                  <li className="non-completed" >  <br />id: {item.id} 
                  <br /> 
                  title: {item.title}</li>)}

              </List.Item>
            ))
          }
        </List>
      </div>
    </div>
  );
}

export default App;
