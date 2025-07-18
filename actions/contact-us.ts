import { ApiResponse } from '@/types/general';
import api from '@/utils/axios';

//dashboard
//website
export const getContactUsPageData = async (): Promise<ApiResponse<unknown>> => {
  try {
    const res = await api.get('/contact-us');
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to fetch items' };
  }
};

//dashboard
export const createOrUpdateContactUsPageData = async ( data: unknown ) => {
  try {
    const res = await api.post('/contact-us', data);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to add Item' };
  }
};

