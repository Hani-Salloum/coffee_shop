import api from '@/utils/axios';
import { Item } from '@/types/item';
import { ApiResponse } from '@/types/general';

interface AllItemsParams {
    search: string, category: string, min_price: number, max_price: number  
}

//dashboard
//website
// export const getAllItems = async (params : AllItemsParams) => {
export const getAllItems = async (): Promise<ApiResponse<Item[]>> => {
  // console.log(params)
  // https://tatianatay.pythonanywhere.com/coffeeshop/item/
  try {
    // const res = await api.get<Item[]>('/item', { params });
    const res = await api.get<Item[]>('/item/');
    console.log(res.data)
    return { data: res.data };
  } catch (error: any) {
    console.log(error?.response?.data?.message)
    return { error: error?.response?.data?.message || 'Failed to fetch items' };
  }
};

//website
// export const getTodayPicks = async (): Promise<ApiResponse<Item[]>> => {
export const getTodayPicks = async () => {
  try {
    // const res = await api.get<Item[]>('/today-picks');
    return { data: [
      {
        id: 1,
        name: "Premium Espresso Blend",
        price: 24.99,
        rate: 4.8,
        categories: ["Premium", "Espresso", "Organic"],
        image: '/hero_img.jpeg'
      },
      {
        id: 1,
        name: "Premium Espresso Blend",
        price: 24.99,
        rate: 4.8,
        categories: ["Premium", "Espresso", "Organic"],
        image: '/hero_img.jpeg'
      },
      {
        id: 1,
        name: "Premium Espresso Blend",
        price: 24.99,
        rate: 4.8,
        categories: ["Premium", "Espresso", "Organic"],
        image: '/hero_img.jpeg'
      }
    ]};
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to fetch items' };
  }
};

//dashboard
//website
export const getItemById = async (id: string): Promise<ApiResponse<Item>> => {
  try {
    const res = await api.get<Item>(`/item/${id}/`);
    console.log(res.data)
    return { data: res.data };
  } catch (error: any) {
    console.log(error?.response?.data?.message)
    return { error: error?.response?.data?.message || 'Failed to fetch item' };
  }
};

//dashboard
export const addItem = async (
  data: Omit<Item, 'id'>
): Promise<ApiResponse<Item>> => {
  try {
    const res = await api.post<Item>('/items', data);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to add Item' };
  }
};

//dashboard
export const updateItemById = async (
  id: string,
  data: Partial<Omit<Item, 'id'>>
): Promise<ApiResponse<Item>> => {
  try {
    const res = await api.put<Item>(`/items/${id}`, data);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to update Item' };
  }
};

//dashboard
export const deleteItemById = async (id: string): Promise<ApiResponse<null>> => {
  try {
    await api.delete(`/items/${id}`);
    return { data: null };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to delete Item' };
  }
};
