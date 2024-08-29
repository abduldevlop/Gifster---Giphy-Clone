import React, { useEffect } from "react";
import { GifState } from "../context/Context";
import GIf from "../components/GIf";
import FilterGIf from "../components/FilterGIf";

const Home = () => {
  const { gf, gifs, filter, setGifs } = GifState();
  const fetchTredingGifs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setGifs(data);
  };

  useEffect(() => {
    fetchTredingGifs();
  }, [filter]);
  return (
    <div>
      <img src="/banner.gif" alt="banner" className="mt-10 rounded w-full " />
      <FilterGIf />
      <div className="columns-3 mt-10">
        {gifs.map((gif) => {
          return <GIf key={gif.name} gif={gif} />;
        })}
      </div>
    </div>
  );
};

export default Home;
