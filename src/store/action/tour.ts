/* eslint-disable camelcase */
import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import { initialState, directAction } from '../reducer/tour'
import axios from 'axios';


import {
  SET_TOUR_DETAIL,
  SET_TOUR_LIST
} from '../alias'
import { STATETOUR } from '@interface/ITour';

export const getTourList = createAsyncThunk('get-tours', async () => {
  try {
    const response = await axios.get('https://mock.apidog.com/m2/428737-0-default/5045521');
    return response.data;
  } catch (error: any) {
    return isRejectedWithValue(error.response);
  }
});

export const getTourDetail = createAsyncThunk('get-tour', async (id: number) => {
  try {
    const response = await axios.get(`https://mock.apidog.com/m1/428737-0-default/get-tour?id=${id}`);
    return response.data;
  } catch (error: any) {
    return isRejectedWithValue(error.response);
  }
});

const TourSlice = createSlice({
  name: 'tour',
  initialState,
  reducers: {
    setLoadingSelectItem: (state, action) => {
      state.loading_select_item = action.payload;
    },
    setLoadingDetail: (state, action) => {
      // eslint-disable-next-line camelcase
      state.loading_detail = action.payload;
    },
    setActiveHandleHeightSchedule: (state) => {
      state.active_handle_height_schedule = !state.active_handle_height_schedule;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) => {
    // GET TOUR LIST
    builder.addCase(getTourList.pending, (state: STATETOUR) => {
      // state.loading = true;
    });
    builder.addCase(getTourList.rejected, (state: STATETOUR) => {
      // state.loading = false;
    });
    builder.addCase(getTourList.fulfilled, (state: STATETOUR, result: any) => {
      const { payload } = result;
      directAction(state, {type: SET_TOUR_LIST, payload: payload.data})
      // state.loading = false;
    });

    // GET TOUR DETAIL
    builder.addCase(getTourDetail.pending, (state: STATETOUR) => {
      state.loading_select_item = true;
    });
    builder.addCase(getTourDetail.rejected, (state: STATETOUR) => {
      state.loading_select_item = false;
    });
    builder.addCase(getTourDetail.fulfilled, (state: STATETOUR, result: any) => {
      const { payload } = result;
      directAction(state, {type: SET_TOUR_DETAIL, payload: payload.data})
    });
  },
});

export const {
  setLoadingSelectItem,
  setLoadingDetail,
  setActiveHandleHeightSchedule,
  setFilter
} = TourSlice.actions;
export default TourSlice.reducer;
