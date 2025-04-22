export interface ICategory {
  id: string;
  name: string;
  description: string;
  img: string;
  createdAt: Date;
  filters: ICategoryFilters[];
}

export interface ICategoryFilters {
  name: string;
  options: string[];
}
