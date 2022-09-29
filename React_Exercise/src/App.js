
import { useState } from 'react';
import { useEffect } from "react";
import { List } from 'semantic-ui-react';
import { ListItemText } from '@mui/material';

function App() {

 const [records,setRecords] = useState(0);

  useEffect(() => { //on render call for useEffect and fetch the data from api
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.json())
        .then((data)=>{
          setRecords((data));  //insert the data in a state variable
        })

    
  }, [records]);

  return (
    <div className="App">
      <List style={{display: "inline-grid",textAlign: "center"}}>
        { 
          (records || [] ).map((item ) => ( 
           <List.Item key = { item.id }  >
            <br />
            {item.completed === true && (  //if its completed give it a backround color of green
              <ListItemText  style={{
                background: "green",
                color: "white",
              }}>id: { item.id } : title: { item.title }</ListItemText>  
            )}

          {item.completed === false && (
              <ListItemText  style={{
                background: "red", //if its not completed give it a backround color of red
                color: "white",
              }}>id: { item.id } : title: { item.title }</ListItemText>  
            )}  
             
              
              </List.Item>
          ))
        }
      </List>
    </div>
  );
}

export default App;
