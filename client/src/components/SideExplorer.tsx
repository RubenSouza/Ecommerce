import { useEffect, useState } from "react";
import { Subtitle } from "./Subtitle";
import { useDispatch } from "react-redux";
import { setSort as setSortRedux } from "../redux/features/paginate";
import { useGetCategoriesQuery } from "../redux/services/games";
import { useLocation, useNavigate } from "react-router-dom";
import ScreenLoading from "./ScreenLoading";
import { setGenre } from "../redux/features/genre";

const SideExplorer = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const firstGenre = searchParams.get("genre");

  const { data: categories, isLoading, isError } = useGetCategoriesQuery("");
  const [sort, setSort] = useState("a-to-z");
  const [categoryFilter, setCategoryFilter] = useState<string>(
    firstGenre || ""
  );

  const navigate = useNavigate();

  const handleCategory = (category: string) => {
    if (categoryFilter === category) {
      setCategoryFilter("");
      navigate("/explorer");
    } else {
      setCategoryFilter(category);
      navigate(`/explorer?genre=${category}`);
    }
  };
  useEffect(() => {
    dispatch(setSortRedux(sort));
    dispatch(setGenre(categoryFilter));
  }, [sort, categoryFilter]);

  const handleSort = (sort: string) => {
    console.log(sort);
    setSort(sort);
  };

  if (isLoading) return <ScreenLoading />;

  return (
    <div className="space-y-4 w-[250px]">
      <ul className="flex flex-col space-y-2">
        <Subtitle title="Price" />
        <div className="text-sm space-y-2">
          <li className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
            />
            <label>From R$0,00 to R$10,00</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
            />

            <label>Under R$15</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
            />

            <label>Under R$25</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
            />

            <label>Under R$50</label>
          </li>
          <li className="flex space-x-2">
            <input
              type="checkbox"
              className="bg-transparent border-[1px] border-primary-400 text-[#F231A5] 
              checked:bg-[#F231A5] w-4 h-4 rounded-sm focus:ring-0 focus:ring-offset-0"
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
