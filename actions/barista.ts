import api from '@/utils/axios';
import { Barista } from '@/types/barista';
import { ApiResponse } from '@/types/general';

//dashboard
//website
export const getAllBaristas = async (): Promise<ApiResponse<Barista[]>> => {
  try {
    const res = await api.get<Barista[]>('/baristas');
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to fetch baristas' };
  }
};

//dashboard
export const getBaristaById = async (id: string): Promise<ApiResponse<Barista>> => {
  try {
    const res = await api.get<Barista>(`/baristas/${id}`);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to fetch barista' };
  }
};

//dashboard
export const addBarista = async (
  data: Omit<Barista, 'id'>
): Promise<ApiResponse<Barista>> => {
  try {
    const res = await api.post<Barista>('/baristas', data);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to add barista' };
  }
};

//dashboard
export const updateBaristaById = async (
  id: string,
  data: Partial<Omit<Barista, 'id'>>
): Promise<ApiResponse<Barista>> => {
  try {
    const res = await api.put<Barista>(`/baristas/${id}`, data);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to update barista' };
  }
};

//dashboard
export const deleteBaristaById = async (id: string): Promise<ApiResponse<null>> => {
  try {
    await api.delete(`/baristas/${id}`);
    return { data: null };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to delete barista' };
  }
};
