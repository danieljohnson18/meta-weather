import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import LeftAside from "./components/LeftAside/LeftAside";
import Search from "./components/LeftAside/Search";
import RightAside from "./components/RightAside/RightAside";
import axios from "axios";

function App() {
  const [toggle, setToggle] = useState(false);
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    axios
      .get(
        "'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/44418/"
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-6 h-screen p-10 bg-blue-100">
        <aside className="col-span-1 lg:col-span-2 bg-blue-300 h-full rounded-md">
          <LeftAside toggle={toggle} setToggle={setToggle} />
          <Search toggle={toggle} setToggle={setToggle} />
        </aside>
        {/*Right Aside*/}
        <aside className="col-span-1 lg:col-span-4 bg-blue-500 h-full rounded-md">
          <RightAside />
        </aside>
      </div>
    </Layout>
  );
}

export default App;
