import api from '@/utils/axios';
import { ContactUsFormPayload as UserMessage } from '@/types/general';
import { ApiResponse } from '@/types/general';

//dashboard
export const getAllUserMessages = async (): Promise<ApiResponse<UserMessage[]>> => {
  try {
    const res = await api.get<UserMessage[]>('/mail-collector');
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to fetch mails' };
  }
};

//website
export const addUserMessage = async (
  data: Omit<UserMessage, 'id'>
): Promise<ApiResponse<UserMessage>> => {
  try {
    const res = await api.post<UserMessage>('/mail-collector', data);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to add mail' };
  }
};

//dashboard
export const deleteUserMessageById = async (id: string): Promise<ApiResponse<null>> => {
  try {
    await api.delete(`/mail-collector/${id}`);
    return { data: null };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to delete mail' };
  }
};
