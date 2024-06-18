import "./App.css";
import { useState } from "react";

function App() {
  const [news, setNews] = useState();
  const url = "https://news-app-api-pearl.vercel.app/fetch";

  function fetchData() {
    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setNews(data));
  }

  return (
    <>
      <button onClick={fetchData} className="bg-amber-500 px-4 py-2">
        click
      </button>
      <h1>{news ? news.articles[0].authore : "Fetching..."}</h1>
    </>
  );
}

export default App;
