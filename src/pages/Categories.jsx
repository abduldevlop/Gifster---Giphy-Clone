import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/Context";
import GIf from "../components/GIf";
import FollowOn from "../components/FollowOn";

const Categories = () => {
  const [results, setResults] = useState([]);
  const { category } = useParams();
  const { gf } = GifState();
  const featchingCategorieResult = async () => {
    const { data } = await gf.gifs(category, category);
    setResults(data);
  };

  useEffect(() => {
    featchingCategorieResult();
  }, [category]);
  return (
    <div className="flex flex-col sm:flex-row gap-5 my-4">
      <div className="w-full sm:w-72">
        {results.length > 0 && <GIf gif={results[2]} hover={false} />}
        <span className="text-gray-400 text-sm pt-2">
          Don&apos;t tell it to me, GIF it to me!
        </span>
        <FollowOn />
        <div className="divider"></div>
      </div>
      <div>
        <h2 className="capitalize text-4xl p-1 font-extrabold">
          {" "}
          {category.split("-").join(" & ")} GIFs
        </h2>
        <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
          @{category}
        </h2>

        {results.length > 0 && (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-5">
            {results.slice(1).map((gif) => (
              <GIf gif={gif} key={gif.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
