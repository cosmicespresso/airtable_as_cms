import React, {useState, useEffect} from 'react';
import dotenv from 'dotenv'; 

import './App.css';

dotenv.config()

const process_api_key = process.env.REACT_APP_AIRTABLE_API_KEY;
const airtable_api_url = process.env.REACT_APP_AIRTABLE_API_URL;
const airtable_table = process.env.REACT_APP_AIRTABLE_TABLE;
const airtable_base = process.env.REACT_APP_AIRTABLE_BASE; 

function App() {
  
  const [airtableData, setAirtableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [headers, setHeaders] = useState([])

  useEffect(()=>{
    fetch(`${airtable_api_url}/${airtable_base}/${airtable_table}`, {
       "headers": {"Authorization": `Bearer ${process_api_key}`}
    })
    .then(res => res.json())
    .then((data) => {
      setAirtableData(data.records)
    })
    setIsLoading(false);
  },[])

  useEffect(()=>{
    // read headers
    if (airtableData.length > 0) {
      let headers = Object.keys(airtableData[0].fields)
      setHeaders(headers);
    }
  },[airtableData])


  return (
    <div className="App">
      
      <div className="headers">
        {headers !== undefined && headers.map( (header, i) => {
          return (
              <header key={i}>{header}</header>
            )
         })
        }  
      </div>

      <div className="entries">
        {isLoading && <div>Loading....</div>}

        {airtableData !== undefined && airtableData.map( (entry, i) => {
          const fields = entry.fields;
          return (
            <div className='entry' key={i}>
              {Object.keys(fields).map( (fieldKey, j) => {
                return (
                  <div className='field left' key={j}>{fields[fieldKey]}</div>
                )
              })}
            </div>
          )
         })
        }  
      </div>
    </div>
  );
}

export default App;
