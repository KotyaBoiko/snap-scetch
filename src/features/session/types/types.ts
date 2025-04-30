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

export interface IImages {
  id: string,
  created_at: string,
  url: string,
  orientation: string,
  filters: string,
  category: string,
}