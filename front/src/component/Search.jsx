import React, { useState, useEffect } from "react";
import EverythingCard from "./Card";
import "../index.css";

function Search() {
  const [newsData, setNewsData] = useState([]);
  const [search, setSearch] = useState("Ratan Tata");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=e51946dfe521461180f6e75a8546256f`);
    const data = await response.json();
    setNewsData(data.articles);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="app">
      <header className="app-header">
        <input
          type="text"
          placeholder="Search....."
          value={search}
          onChange={handleInputChange}
        />
        <button onClick={fetchData}>Search</button>
      </header>

      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="my-10 cards grid lg:place-content-center md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 xs:grid-cols-1 xs:gap-4 md:gap-10 lg:gap-14 md:px-16 xs:p-3 ">
          {newsData && newsData.length > 0 ? (
            newsData.map((element, index) => (
              <div key={index} className="news-article">
                <EverythingCard
                key={index}
                title={element.title}
                description={element.description}
                imgUrl={element.urlToImage}
                publishedAt={element.publishedAt}
                url={element.url}
                author={element.author}
                source={element.source.name}
              />
              </div>
            ))
          ) : (
            <p>No news found. Try searching for something else!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
