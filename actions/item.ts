import api from '@/utils/axios';
import { Item } from '@/types/item';
import { ApiResponse } from '@/types/general';

interface AllItemsParams {
    search: string, category: string, min_price: number, max_price: number  
}

//dashboard
//website
export const getAllItems = async (params : AllItemsParams) => {
  console.log(params)
  // try {
  //   const res = await api.get<Item[]>('/items', { params });
  //   return { data: res.data };
  // } catch (error: any) {
  //   return { error: error?.response?.data?.message || 'Failed to fetch items' };
  // }
};

//website
export const getTodayPicks = async (): Promise<ApiResponse<Item[]>> => {
  try {
    const res = await api.get<Item[]>('/today-picks');
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to fetch items' };
  }
};

//dashboard
//website
export const getItemById = async (id: string): Promise<ApiResponse<Item>> => {
  try {
    const res = await api.get<Item>(`/items/${id}`);
    return { data: res.data };
  } catch (error: any) {
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
