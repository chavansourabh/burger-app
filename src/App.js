import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [burgers, setBurgers] = useState(null);

  const fetchData = async () => {
    const burgerData = await axios.get("http://localhost:8000/burgers");
    const data = Object.keys(burgerData.data.data).map(
      (burger) => burgerData.data.data[burger]
    );
    setBurgers(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log(burgers);
  return (
    <div className="app">
      <h1>
        My Favourite burgers
        <div className="burger-feed">
          {burgers?.map((burger) => (
            <Card burger={burger} key={burger.id} />
          ))}
        </div>
      </h1>
    </div>
  );
}

export default App;
