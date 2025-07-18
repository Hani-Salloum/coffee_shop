import { ApiResponse } from '@/types/general';
import api from '@/utils/axios';

//dashboard
//website
export const getAboutPageData = async (): Promise<ApiResponse<unknown>> => {
  try {
    const res = await api.get('/about');
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to fetch items' };
  }
};

//dashboard
export const createOrUpdateAboutPageData = async ( data: unknown ) => {
  try {
    const res = await api.post('/about', data);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to add Item' };
  }
};

