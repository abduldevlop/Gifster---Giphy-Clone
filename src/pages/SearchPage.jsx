import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/Context";
import FilterGIf from "../components/FilterGIf";
import GIf from "../components/GIf";

const SearchPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const { gf, filter } = GifState();

  const { query } = useParams();

  const featchingSearchResult = async () => {
    const { data } = await gf.search(query, {
      sort: "relevant",
      lang: "en",
      type: filter,
      limit: 20,
    });
    setSearchResult(data);
  };

  useEffect(() => {
    featchingSearchResult();
  }, [filter]);

  return (
    <div className="my-4">
      <h2 className="text-5xl pb-3 font-extrabold"> {query} </h2>
      <FilterGIf aligentLeft={true} />
      {searchResult.length > 0 ? (
        <div className="columns-2 md:columns-4 lg:columns-5 gap-3">
          {searchResult.map((gif) => (
            <GIf key={gif.id} gif={gif} />
          ))}
        </div>
      ) : (
        <span>
          {" "}
          No GIFs found for {query}. Try searching for Stickers instade{" "}
        </span>
      )}
    </div>
  );
};

export default SearchPage;
