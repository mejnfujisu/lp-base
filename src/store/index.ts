import { configureStore } from '@reduxjs/toolkit';
import tour from './action/tour';
import social from './action/social';

export const store = configureStore({
  reducer: {
    tour: tour,
    social: social
  },
});
