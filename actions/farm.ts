import api from '@/utils/axios';
import { Farm } from '@/types/farm';
import { ApiResponse } from '@/types/general';

//dashboard
//website
export const getAllFarms = async (): Promise<ApiResponse<Farm[]>> => {
  try {
    const res = await api.get<Farm[]>('/farms');
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to fetch farms' };
  }
};

//dashboard
//website
export const getFarmById = async (id: string): Promise<ApiResponse<Farm>> => {
  try {
    const res = await api.get<Farm>(`/farms/${id}`);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to fetch farm' };
  }
};

//dashboard
export const addFarm = async (
  data: Omit<Farm, 'id'>
): Promise<ApiResponse<Farm>> => {
  try {
    const res = await api.post<Farm>('/farms', data);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to add farm' };
  }
};

//dashboard
export const updateFarmById = async (
  id: string,
  data: Partial<Omit<Farm, 'id'>>
): Promise<ApiResponse<Farm>> => {
  try {
    const res = await api.put<Farm>(`/farms/${id}`, data);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to update farm' };
  }
};

//dashboard
export const deleteFarmById = async (id: string): Promise<ApiResponse<null>> => {
  try {
    await api.delete(`/farms/${id}`);
    return { data: null };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to delete farm' };
  }
};
