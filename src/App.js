import axios from "axios";
import { useEffect, useState } from "react";
import TableRow from "./TableRow";
import "./Style.css"

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try{
        const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
        // console.log(response.data)
        setData(response.data)
      } catch (error) {
        console.log("Error feiching data: ", error)
      }  
    }
    fetchdata();
  }, [])

  return (
    <div>
      <h1> Coin Data</h1>
      <table className="coinTable">
        <thead>
          <tr>
            <th> Name </th>
            <th> ID </th>
            <th> Image </th>
            <th> Symbol </th>
            <th> Current Price </th>
            <th> Total Volume </th>
          </tr>
        </thead>

        <tbody>
          {
            data.map((coin) => (
              <TableRow key={coin.id} coin={coin}/>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;