import { Category } from "./category";

export interface Item {
    id:  number;
    name: string;
    image: string;
    price: number;
    ingredients?:  Array<string>;
    rate: number;
    sizes?: Array<string>;
    categories: Array<string> ;
    related_items?:  Array<Item>;
    description?: string;
    origin_story?: string;
}