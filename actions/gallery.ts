import api from '@/utils/axios';
import { GalleryImage } from '@/types/gallery';
import { ApiResponse } from '@/types/general';

//dashboard
//website
export const getAllGalleryImages = async (): Promise<ApiResponse<GalleryImage[]>> => {
  try {
    const res = await api.get<GalleryImage[]>('/gallery-images');
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to fetch gallery images' };
  }
};

//dashboard
export const addGalleryImage = async (
  data: Omit<GalleryImage, 'id'>
): Promise<ApiResponse<GalleryImage>> => {
  try {
    const res = await api.post<GalleryImage>('/gallery-images', data);
    return { data: res.data };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to add gallery image' };
  }
};

//dashboard
export const deleteGalleryImageById = async (id: string): Promise<ApiResponse<null>> => {
  try {
    await api.delete(`/gallery-images/${id}`);
    return { data: null };
  } catch (error: any) {
    return { error: error?.response?.data?.message || 'Failed to delete gallery image' };
  }
};
