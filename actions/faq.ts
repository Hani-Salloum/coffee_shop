import api from '@/utils/axios';
import { Faq } from '@/types/faq';
import { ApiResponse } from '@/types/general';

//dashboard
//website
export const getAllFaqs = async (): Promise<ApiResponse<Faq[]>> => {
  try {
    const res = await api.get<Faq[]>('/faqs');
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to fetch faqs' };
  }
};

//dashboard
export const getFaqById = async (id: string): Promise<ApiResponse<Faq>> => {
  try {
    const res = await api.get<Faq>(`/faqs/${id}`);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to fetch faq' };
  }
};

//dashboard
export const addFaq = async (
  data: Omit<Faq, 'id'>
): Promise<ApiResponse<Faq>> => {
  try {
    const res = await api.post<Faq>('/faqs', data);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to add Faq' };
  }
};

//dashboard
export const updateFaqById = async (
  id: string,
  data: Partial<Omit<Faq, 'id'>>
): Promise<ApiResponse<Faq>> => {
  try {
    const res = await api.put<Faq>(`/faqs/${id}`, data);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to update Faq' };
  }
};

//dashboard
export const deleteFaqById = async (id: string): Promise<ApiResponse<null>> => {
  try {
    await api.delete(`/faqs/${id}`);
    return { data: null };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to delete Faq' };
  }
};
