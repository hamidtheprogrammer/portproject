import React, { useEffect, useState } from "react";
import { filterArray, Filters } from "..";
import { useContext } from "react";
import { ProductContext } from "../ProductContext";
import { productsSeed } from "..";

const Filter = () => {
  const [filterOptions, setFilterOptions] = useState(filterArray);
  const { setProduct } = useContext(ProductContext);
  const [price, setPrice] = useState<{
    minPrice: number | undefined;
    maxPrice: number | undefined;
  }>({ minPrice: undefined, maxPrice: undefined });

  const [filters, setFilters] = useState<Filters>({
    availability: [],
    stores: [],
    category: [],
    minPrice: undefined,
    maxPrice: undefined,
    rating: [],
    age: [],
    color: [],
    delivery: [],
    manufacturer: [],
    warranty: [],
    year: [],
  });

  useEffect(() => {
    let addedFilters: Filters = {};
    for (let [key, value] of Object.entries(filters) as [
      keyof Filters,
      any
    ][]) {
      if (value === undefined || value.length === 0) continue;

      addedFilters[key] = value;
    }

    const newProduct = productsSeed.filter((prod) => {
      if (Object.entries(addedFilters).length === 0) {
        return true;
      }
      for (let [productkey, productValue] of Object.entries(prod)) {
        for (let [filterKey, filterValue] of Object.entries(addedFilters)) {
          if (Array.isArray(filterValue)) {
            if (
              productkey === filterKey &&
              !filterValue.includes(productValue.toLowerCase())
            ) {
              return false;
            }
          } else if (typeof filterValue === "number") {
            if (filterKey === "minPrice" && productkey === "price") {
              if (
                filters["maxPrice"] &&
                productValue >= filterValue &&
                productValue <= filters["maxPrice"]
              ) {
                continue;
              } else if (!filters["maxPrice"] && productValue >= filterValue) {
                continue;
              } else {
                return false;
              }
            } else if (filterKey === "maxPrice" && productkey === "price") {
              if (
                filters["minPrice"] &&
                productValue >= filters["minPrice"] &&
                productValue <= filterValue
              ) {
                continue;
              } else if (!filters["minPrice"] && productValue <= filterValue) {
                continue;
              } else {
                return false;
              }
            }
          }
        }
      }
      return true;
    });

    setProduct(newProduct);
  }, [filters]);

  return (
    <div className="bg-white rounded-lg shadow-[0_0_5px_rgba(0,0,0,0.1)] ">
      <h1 className="border-b-[1px] py-3 pl-5 font-semibold">Filters</h1>
      <ul className="h-[85vh] overflow-y-auto scrollBar">
        {filterOptions.map((filter) => (
          <li className="border-b-[1px] px-3 mt-6 pb-6" key={filter.name}>
            <h1 className="text-sm font-semibold mb-2 capitalize">
              {filter.name}
            </h1>
            <ul
              className={` ${
                filter.name.toLowerCase() === "price"
                  ? "flex gap-3 items-center"
                  : "space-y-3"
              }`}
            >
              {filter.options.map((option, idx) => (
                <li
                  key={
                    Array.isArray(option) && typeof option === "string"
                      ? option
                      : typeof option === "object"
                      ? option.name
                      : ""
                  }
                  className="text-sm secondaryText dark:darkSecondaryText"
                >
                  {filter.name.toLowerCase() === "price" ? (
                    <span className="">
                      <input
                        min={0}
                        onChange={(e) => {
                          typeof option === "string" &&
                            setPrice((prev) => ({
                              ...prev,
                              [option]:
                                e.target.value === "0"
                                  ? undefined
                                  : e.target.value,
                            }));
                        }}
                        className="border-[1px] outline-[#8884d8] h-10 w-16 mr-2 rounded-md pl-4"
                        placeholder={typeof option === "string" ? option : ""}
                        type="number"
                      />
                      {idx === 0 && "to"}
                      {idx === 1 && (
                        <button
                          onClick={() => {
                            setFilters((prev) => ({
                              ...prev,
                              minPrice: Number(price.minPrice)
                                ? Number(price.minPrice)
                                : undefined,
                              maxPrice: Number(price.maxPrice)
                                ? Number(price.maxPrice)
                                : undefined,
                            }));
                          }}
                          disabled={
                            price.minPrice === undefined &&
                            price.maxPrice === undefined
                          }
                          className={` ${
                            price.minPrice === undefined &&
                            price.maxPrice === undefined
                              ? "bg-gray-100 cursor-not-allowed"
                              : "bg-[#4039be]"
                          } text-sm h-10 rounded-full w-20  text-white hover:opacity-70`}
                        >
                          Apply
                        </button>
                      )}
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <input
                        value={
                          typeof option === "object"
                            ? option.name.toLowerCase()
                            : ""
                        }
                        checked={typeof option === "object" && option.checked}
                        onChange={(e) => {
                          if (typeof option !== "object") return;
                          const newFilterOptions = filterOptions.map((itm) => {
                            if (itm.name === filter.name) {
                              itm.options.forEach((i) => {
                                if (
                                  typeof i === "object" &&
                                  i.name === option.name
                                ) {
                                  if (!i.checked) {
                                    i.checked = true;
                                    for (let [key, value] of Object.entries(
                                      filters
                                    ) as [keyof Filters, any][]) {
                                      if (key === filter.name) {
                                        setFilters((prev) => ({
                                          ...prev,
                                          [key]: Array.isArray(prev[key]) && [
                                            ...prev[key],
                                            i.name.toLowerCase(),
                                          ],
                                        }));
                                      }
                                    }
                                  } else {
                                    i.checked = false;
                                    for (let [key, value] of Object.entries(
                                      filters
                                    ) as [keyof Filters, any[] | any][]) {
                                      if (key === filter.name) {
                                        setFilters((prev) => ({
                                          ...prev,
                                          [key]:
                                            Array.isArray(prev[key]) &&
                                            prev[key].filter(
                                              (k: string) =>
                                                k !== i.name.toLowerCase()
                                            ),
                                        }));
                                      }
                                    }
                                  }
                                }
                              });
                              return itm;
                            } else {
                              return itm;
                            }
                          });

                          setFilterOptions(newFilterOptions as any);
                        }}
                        className="outline-[#8884d8] h-4 aspect-square"
                        type="checkbox"
                      />
                      {typeof option === "object" ? option.name : ""}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
