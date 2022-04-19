import { useProduct } from "../../context";
import "./Filters.css";
const Filters = () => {
  const [
    {
      filters: {
        sortBy,
        categories: { tool, veg, utensil },
        price,
        rating,
      },
    },
    productDispatch,
  ] = useProduct();
  const filterChangeHandler = value => {
    switch (value) {
      case "low-to-high":
        productDispatch({ type: "SORT", payload: "LOW_TO_HIGH" });
        break;
      case "high-to-low":
        productDispatch({ type: "SORT", payload: "HIGH_TO_LOW" });
        break;
      case "toolCategory":
        productDispatch({ type: "INCLUDE_TOOL", payload: !tool });
        break;
      case "vegCategory":
        productDispatch({ type: "INCLUDE_VEG", payload: !veg });
        break;
      case "utensilCategory":
        productDispatch({ type: "INCLUDE_UTENSIL", payload: !utensil });
        break;
      default:
        break;
    }
  };
  const priceChangeHandler = value => {
    productDispatch({ type: "PRICE_RANGE_CHANGE", payload: parseInt(value) });
  };
  const clearFilters = () => {
    productDispatch({ type: "CLEAR" });
  };
  const ratingChangeHandler = value => {
    productDispatch({ type: "RATING", payload: parseInt(value) });
  };
  return (
    <section
      id="filters"
      className="mt-8 mx-6 py-8 px-4 box-shadow-md p-sticky"
    >
      <div className="filter-wrapper p-4">
        <div className="d-flex align-center">
          <h2 className="headline-md">Filters</h2>
          <button
            type="button"
            className="btn btn-clear rounded-sm p-3 ml-auto"
            onClick={clearFilters}
          >
            Clear All
          </button>
        </div>
        {/* Price range filter */}
        <input
          type="range"
          list="price-range"
          min={0}
          max={30000}
          step={2500}
          value={price}
          className="price-input mt-8"
          onChange={e => priceChangeHandler(e.target.value)}
        />
        <datalist id="price-range">
          <option value="0" label="₹0"></option>
          <option value="2500"></option>
          <option value="5000" label="₹5k"></option>
          <option value="7500"></option>
          <option value="10000"></option>
          <option value="12500"></option>
          <option value="15000" label="₹15k"></option>
          <option value="17500"></option>
          <option value="20000"></option>
          <option value="22500"></option>
          <option value="25000"></option>
          <option value="27500"></option>
          <option value="30000" label="₹30k"></option>
        </datalist>
        <div className="d-flex">
          <span className="price-range-txt">₹0</span>
          <span className="price-range-txt">₹5k</span>
          <span className="price-range-txt">₹10k</span>
          <span className="price-range-txt">₹15k</span>
          <span className="price-range-txt">₹20k</span>
          <span className="price-range-txt">₹25k</span>
          <span className="price-range-txt">₹30k</span>
        </div>
        {/* category filter  */}
        <fieldset className="mt-8 border-none">
          <legend className="headline-sm mt-8 font-wt-semibold">
            Category
          </legend>

          <ul className="d-flex flex-col text-sm">
            <li className="pt-2">
              <label htmlFor="tool" className="cursor-pointer">
                <input
                  type="checkbox"
                  id="tool"
                  name="tool"
                  value={"toolCategory"}
                  checked={tool}
                  onChange={e => filterChangeHandler(e.target.value)}
                />
                <span className="ml-4">Farming Tools</span>
              </label>
            </li>

            <li className="pt-2">
              <label htmlFor="veg" className="cursor-pointer">
                <input
                  type="checkbox"
                  id="veg"
                  name="veg"
                  value={"vegCategory"}
                  checked={veg}
                  onChange={e => filterChangeHandler(e.target.value)}
                />
                <span className="ml-4">Vegetables</span>
              </label>
            </li>

            <li className="pt-2">
              <label htmlFor="utensil" className="cursor-pointer">
                <input
                  type="checkbox"
                  id="utensil"
                  name="utensil"
                  value={"utensilCategory"}
                  checked={utensil}
                  onChange={e => filterChangeHandler(e.target.value)}
                />
                <span className="ml-4">Mud Utensils</span>
              </label>
            </li>
          </ul>
        </fieldset>
        {/* sort by Rating */}
        <fieldset className="mt-4 border-none">
          <legend className="headline-sm mt-8 font-wt-semibold">Rating</legend>
          <ul className="d-flex flex-col text-sm">
            <li className="pt-2">
              <label htmlFor="fourStar" className="cursor-pointer">
                <input
                  type="radio"
                  id="fourStar"
                  name="rating"
                  value="4"
                  checked={rating === 4}
                  onChange={e => ratingChangeHandler(e.target.value)}
                />
                <span className="ml-4">4 stars and above</span>
              </label>
            </li>
            <li className="pt-2">
              <label htmlFor="threeStar" className="cursor-pointer">
                <input
                  type="radio"
                  id="threeStar"
                  name="rating"
                  value="3"
                  checked={rating === 3}
                  onChange={e => ratingChangeHandler(e.target.value)}
                />
                <span className="ml-4">3 stars and above</span>
              </label>
            </li>
            <li className="pt-2">
              <label htmlFor="twoStar" className="cursor-pointer">
                <input
                  type="radio"
                  id="twoStar"
                  name="rating"
                  value="2"
                  checked={rating === 2}
                  onChange={e => ratingChangeHandler(e.target.value)}
                />
                <span className="ml-4">2 stars and above</span>
              </label>
            </li>
            <li className="pt-2">
              <label htmlFor="oneStar" className="cursor-pointer">
                <input
                  type="radio"
                  id="oneStar"
                  name="rating"
                  value="1"
                  checked={rating === 1}
                  onChange={e => ratingChangeHandler(e.target.value)}
                />
                <span className="ml-4">1 star and above</span>
              </label>
            </li>
          </ul>
        </fieldset>
        {/* sort by price */}
        <fieldset className="mt-4 border-none">
          <legend className="headline-sm mt-8 font-wt-semibold">
            Sort By Price
          </legend>
          <ul className="d-flex flex-col text-sm">
            <li className="pt-2">
              <label htmlFor="high-to-low" className="cursor-pointer">
                <input
                  type="radio"
                  id="high-to-low"
                  name="sort"
                  value="high-to-low"
                  checked={sortBy === "HIGH_TO_LOW"}
                  onChange={e => filterChangeHandler(e.target.value)}
                />
                <span className="ml-4">High to Low</span>
              </label>
            </li>
            <li className="pt-2">
              <label htmlFor="low-to-high" className="cursor-pointer">
                <input
                  type="radio"
                  id="low-to-high"
                  name="sort"
                  value="low-to-high"
                  checked={sortBy === "LOW_TO_HIGH"}
                  onChange={e => filterChangeHandler(e.target.value)}
                />
                <span className="ml-4"> Low to High </span>
              </label>
            </li>
          </ul>
        </fieldset>
      </div>
    </section>
  );
};

export { Filters };
