import PointerTitle from "@/components/ui/PointerTitle";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams } from "react-router";
import { categoriesApi } from "../API";
import { ICategoryFilters } from "../types/types";

const CategoryFiltersList = () => {
  const { categoryName } = useParams();
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["category", categoryName],
    queryFn: () => categoriesApi.getCategoryByName(categoryName as string),
  });
  const [selectedFilters, setSelectedFilters] = useState<ICategoryFilters[]>(
    []
  );

  if (isLoading) {
    return (
      <div className="h-96 w-full flex justify-center items-center">
        Loading...
      </div>
    );
  }
  if (!isSuccess) {
    return (
      <div className="h-96 w-full flex justify-center items-center">
        Something went wrong...
      </div>
    );
  }

  const handleClearFilter = (filterName: string) => {
    setSelectedFilters((prev) => {
      return prev.filter((filter) => filter.name !== filterName);
    });
  };

  const handleSelectFilter = (filterName: string, option: string) => {
    const isFilterSelected = selectedFilters.findIndex(
      (filter) => filter.name === filterName
    );

    if (isFilterSelected !== -1) {
      const isOptionSelected =
        selectedFilters[isFilterSelected].options.findIndex(
          (opt) => opt === option
        ) !== -1;

      if (isOptionSelected) {
        //Delete option
        setSelectedFilters((prev) => {
          return prev.map((filter) => {
            if (filter.name === filterName) {
              return {
                ...filter,
                options: filter.options.filter((opt) => opt !== option),
              };
            } else {
              return filter;
            }
          });
        });
        return;
      }

      if (!isOptionSelected) {
        //delete filter if all options are selected
        if (
          selectedFilters[isFilterSelected].options.length + 1 ===
          data.filters.find((f) => f.name === filterName)?.options.length
        ) {
          handleClearFilter(filterName);
          return;
        }

        //Add option
        setSelectedFilters((prev) => {
          return prev.map((filter) =>
            filter.name === filterName
              ? { ...filter, options: [...filter.options, option] }
              : filter
          );
        });
        return;
      }
    }

    if (isFilterSelected === -1) {
      //Add option to new filter
      setSelectedFilters((prev) => {
        return [...prev, { name: filterName, options: [option] }];
      });
      return;
    }
    console.log(selectedFilters);
  };

  return (
    <div className="py-10">
      <PointerTitle title="CUSTOMIZE FILTERS" />
      <div className="p-5 shadow-main rounded-xl">
        <div className="flex flex-col gap-4">
          {data.filters.map((filter) => {
            return (
              <div key={filter.name}>
                <h2 className="text-2xl">{filter.name}</h2>
                <ul className="flex gap-4">
                  <li
                    onClick={() => handleClearFilter(filter.name)}
                    className={
                      `px-4 py-2 border rounded-2xl cursor-pointer hover:text-main-beige hover:bg-main-red hover:scale-105 transition-all ` +
                      (!selectedFilters.find((f) => f.name === filter.name)
                        ? ` bg-main-red text-main-beige`
                        : "")
                    }
                  >
                    All
                  </li>
                  {filter.options.map((option, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => handleSelectFilter(filter.name, option)}
                        className={
                          "px-4 py-2 border rounded-2xl cursor-pointer hover:text-main-beige hover:bg-main-red hover:scale-105 transition-all" +
                          (selectedFilters.find(
                            (f) =>
                              f.name === filter.name &&
                              f.options.includes(option)
                          )
                            ? ` bg-main-red text-main-beige`
                            : "")
                        }
                      >
                        {option}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFiltersList;
