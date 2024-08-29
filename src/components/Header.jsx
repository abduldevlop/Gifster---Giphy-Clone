import React, { useEffect, useState } from "react";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { GifState } from "../context/Context";
import Search from "./Search";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [show, setShow] = useState(false);
  const { gf, favorites } = GifState();

  const fetchingGifCategories = async () => {
    const { data } = await gf.categories();
    setCategories(data);
  };

  useEffect(() => {
    fetchingGifCategories();
  }, []);
  return (
    <nav>
      <div className="relative flex gap-4 justify-between items-center mb-5">
        <Link to={"/"} className="flex gap-2 items-center">
          <img src="/logo.svg" alt="logo" className="w-15" />
          <h1 className="text-5xl font-bold trat cursor-pointer">Gifster</h1>
        </Link>

        {/* categories  */}

        <div className="flex items-center gap-5">
          {categories?.slice(0, 5).map((categorie) => (
            <Link
              key={categorie.name}
              to={`/${categorie.name_encoded}`}
              className="px-2 py-1 hover:gradient border-b-4 hidden lg:block"
            >
              {categorie.name}
            </Link>
          ))}

          <button onClick={() => setShow(!show)}>
            <HiEllipsisVertical
              className={`py-0.5 hover:gradient ${
                show ? "gradient" : ""
              } border-b-4 hidden lg:block`}
              size={35}
            />
          </button>
          {favorites.length > 0 && (
            <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded">
              <Link to={"/favorites"}>Favorites GIF</Link>
            </div>
          )}
          <button>
            <HiMiniBars3BottomRight
              className="text-sky-400 block lg:hidden"
              size={30}
              onClick={() => setShow(!show)}
            />
          </button>
          {show && (
            <div className="absolute right-0 top-14 px-10 pt-6 pb-9 w-full gradient z-20">
              <span className="text-3xl font-extrabold ">Categories</span>
              <hr className="bg-gray-100 opacity-50 my-5" />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
                {categories.map((categorie) => (
                  <Link
                    className="font-bold cursor-pointer"
                    key={categorie.name}
                    to={`/$${categorie.name_encoded}`}
                  >
                    {" "}
                    {categorie.name}{" "}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Search />
    </nav>
  );
};

export default Header;
