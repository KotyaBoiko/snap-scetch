import SelectButton from "@/components/ui/Buttons/SelectButton";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { categoriesApi } from "../API";
import { ICategoryFilters } from "../types/types";
import { useCategoryFilterStore } from "../store/categoryFiltersStore";

const CategoryFiltersList = () => {
  const { categoryName } = useParams();
  const setFilters = useCategoryFilterStore(state => state.setFilters)
  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["category", categoryName],
    queryFn: () => categoriesApi.getCategoryByName(categoryName as string),
  });

  const [selectedFilters, setSelectedFilters] = useState<ICategoryFilters[]>(
    []
  );

  useEffect(() => {
    setFilters(selectedFilters);
  }, [selectedFilters]);

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

  const handleToggleFilter = (filterName: string, option: string) => {
    const isFilterSelected = selectedFilters.findIndex(
      (filter) => filter.name === filterName
    );

    if (isFilterSelected !== -1) {
      const isOptionSelected =
        selectedFilters[isFilterSelected].options.findIndex(
          (opt) => opt === option
        ) !== -1;

      if (isOptionSelected) {
        //delete filter if last options
        if(selectedFilters[isFilterSelected].options.length === 1) {
          handleClearFilter(filterName);
          return
        }
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
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {data.filters.map((filter) => {
        return (
          <div key={filter.name}>
            <h2 className="text-2xl">{filter.name}</h2>
            <div className="flex gap-4">
              <SelectButton
                onClick={() => handleClearFilter(filter.name)}
                active={!selectedFilters.find((f) => f.name === filter.name)}
              >
                All
              </SelectButton>
              {filter.options.map((option, index) => {
                return (
                  <SelectButton
                    key={index}
                    onClick={() => handleToggleFilter(filter.name, option)}
                    active={
                      !!selectedFilters.find(
                        (f) =>
                          f.name === filter.name && f.options.includes(option)
                      )
                    }
                  >
                    {option}
                  </SelectButton>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryFiltersList;