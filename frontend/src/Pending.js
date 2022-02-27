import React , {useState , useEffect} from 'react'
import Header from './Header'
import Axios from "axios";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import "./pending.css";
import { useNavigate } from "react-router-dom";

function Pending() {

  function refreshPage() {
    window.location.reload(false);
  }

  const [record,setrecord] = useState([])

  const deletec = (Id) => {
    console.log(Id);
    Axios.delete(`http://localhost:3001/api/deletec/${Id}`);
    refreshPage()
  }


  useEffect(() => { 
    Axios.get("http://localhost:3001/api/pending").then((response) => {
      console.log(response);
      setrecord(response.data);
    })
  }, []);


  return (
      <>
      <br/>
    <br/>
    <br/>
    <tbody className="tbody">
    <th className="table_col">Customer Id</th>
    <th className="table_col">Customer Name</th>
    <th className="table_col">Book Id</th>
    <th className="table_col">Book Name</th>
    <th className="table_col">Date</th>
    <th className="table_col">Return Date</th>
    <th className="table_col">Return</th>

    {
      
      record.map((val) => {
        return(
          <tr className="table">
          <td className = "table_content">{val.custId}</td>
          <td className = "table_content">{val.custName}</td>
          <td className = "table_content">{val.id}</td>
          <td className = "table_content">{val.bookName}</td>
          <td className = "table_content">{val.Date}</td>
          <td className = "table_content">{val.retDate}</td>
          <td><button className = "table_return" onClick = {()=>deletec(val.custId)}>Returned</button></td>
          </tr>
          )
        })
    }
      </tbody>
      <Header/>
      
      </>
  )
}

export default Pending