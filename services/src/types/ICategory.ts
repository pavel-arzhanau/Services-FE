export interface ICategory {
  id: string;
  name: string;
  subcategories: ISubcategory[];
}

export interface ISubcategory {
  id: string;
  name: string;
  categoryId: string;
}
