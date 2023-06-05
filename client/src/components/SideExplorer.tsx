import { useEffect, useState } from "react";
import { Subtitle } from "./Subtitle";
import { useDispatch, useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../redux/services/games";
import { useLocation, useNavigate } from "react-router-dom";
import ScreenLoading from "./ScreenLoading";
import {
  setGenre,
  setPrice,
  setSort as setSortRedux,
} from "../redux/features/querys";

const SideExplorer = () => {
  const dispatch = useDispatch();
  const isSearching = useSelector((state: any) => state.querys.isSearching);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const firstGenre = searchParams.get("genre");
  const firstPrice = searchParams.get("price");

  const { data: categories, isLoading, isError } = useGetCategoriesQuery("");
  const [sort, setSort] = useState("a-to-z");
  const [categoryFilter, setCategoryFilter] = useState<string>(
    firstGenre || ""
  );
  const [priceFilter, setPriceFilter] = useState<string>(firstPrice || "");

  const navigate = useNavigate();

  const handleCategory = (category: string) => {
    if (categoryFilter === category) {
      setCategoryFilter("");
      searchParams.delete("genre");
      navigate({ search: searchParams.toString() });
    } else {
      setCategoryFilter(category);
      searchParams.set("genre", category.toString());
      navigate({ search: searchParams.toString() });
    }
  };

  const handlePrice = (price: string) => {
    if (priceFilter === price) {
      setPriceFilter("");
      searchParams.delete("price");
      navigate({ search: searchParams.toString() });
    } else {
      setPriceFilter(price);
      searchParams.set("price", price.toString());
      navigate({ search: searchParams.toString() });
    }
  };

  const handleSearching = () => {
    if (isSearching) {
      setCategoryFilter("");
      searchParams.delete("genre");
      setPriceFilter("");
      searchParams.delete("price");
      navigate({ search: searchParams.toString() });
    }
  };

  useEffect(() => {
    dispatch(setSortRedux(sort));
    dispatch(setGenre(categoryFilter));
    dispatch(setPrice(priceFilter));
    handleSearching();
  }, [sort, categoryFilter, priceFilter, isSearching]);

  const handleSort = (sort: string) => {
    setSort(sort);
  };

  if (isLoading) return <ScreenLoading />;

  return (
    <div className="space-y-4 w-[200px]">
      <ul className="flex flex-col space-y-2">
        <Subtitle title="Price" />
        <div className="text-sm space-y-2">
          <li className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
              onChange={() => handlePrice("11")}
              checked={priceFilter === "11"}
            />
            <label>From R$0,00 to R$10,00</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
              onChange={() => handlePrice("16")}
              checked={priceFilter === "16"}
            />

            <label>Under R$15</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
              onChange={() => handlePrice("26")}
              checked={priceFilter === "26"}
            />

            <label>Under R$25</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
              onChange={() => handlePrice("51")}
              checked={priceFilter === "51"}
            />

            <label>Under R$50</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
              onChange={() => handlePrice("76")}
              checked={priceFilter === "76"}
            />

            <label>Under R$75</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
              onChange={() => handlePrice("101")}
              checked={priceFilter === "101"}
            />

            <label>Under R$100</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
            />

            <label>With discount</label>
          </li>
        </div>
      </ul>
      <div className="w-[200px] h-[2px] bg-primary-460 my-16" />
      <ul className="flex flex-col space-y-2">
        <Subtitle title="Order" />
        <div className="text-sm space-y-2">
          <li className="flex items-center space-x-2">
            <input
              type="radio"
              name="order"
              defaultChecked
              onChange={() => handleSort("a-to-z")}
              className="bg-transparent border-[2px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-full focus:ring-0 focus:ring-offset-0"
            />
            <label>A to Z</label>
          </li>
          <li className="flex items-center space-x-2">
            <input
              type="radio"
              name="order"
              onChange={() => handleSort("biggest-price")}
              className="bg-transparent border-[2px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-full focus:ring-0 focus:ring-offset-0"
            />
            <label>Biggest price</label>
          </li>
          <li className="flex items-center space-x-2">
            <input
              type="radio"
              name="order"
              onChange={() => handleSort("lowest-price")}
              className="bg-transparent border-[2px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-full focus:ring-0 focus:ring-offset-0"
            />
            <label>Lowest price</label>
          </li>
        </div>
      </ul>
      <div className="w-[200px] h-[2px] bg-primary-460 my-16" />
      <ul className="flex flex-col space-y-2">
        <Subtitle title="Genres" />
        <div className="text-xs sm:text-sm space-y-2">
          {categories?.category?.map((category: any, i: number) => (
            <li className="flex items-center space-x-2" key={i}>
              <input
                type="checkbox"
                name="category"
                checked={categoryFilter === category?.slug}
                className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0 form-checkbox"
                onChange={() => handleCategory(category?.slug)}
              />
              <label>{category?.name}</label>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default SideExplorer;
