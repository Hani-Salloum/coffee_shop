import { ApiResponse } from '@/types/general';
import api from '@/utils/axios';

//dashboard
//website
export const getContactUsPageData = async (): Promise<ApiResponse<unknown>> => {
  try {
    // const res = await api.get('/contact-us');
    return { data: {
      location: '123 Coffee Lane, Brew City, CA 90210 United States',
      phone: '+1 (555) 123-4567',
      email: 'info@thekoffeeroom.com',
      map_url: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0199999999996!2d144.9630576!3d-37.814107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b9782e2c05%3A0x5045675218ce7e0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1678888888888!5m2!1sen!2sau',
      title: 'A Warm Welcome Awaits',
      description: "Step into The Koffee Room and experience a haven where rich aromas meet cozy ambiance. Whether you're starting your day, catching up with friends, or finding a quiet spot to work, we're here to make your visit special.",
      our_hours: [
        { day: 'Monday - Friday', hours: '7:00 AM - 6:00 PM' },
        { day: 'Saturday', hours: '8:00 AM - 5:00 PM' },
        { day: 'Sunday', hours: '9:00 AM - 4:00 PM' },
      ]
    } };
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

