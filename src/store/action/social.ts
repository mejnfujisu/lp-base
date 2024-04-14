/* eslint-disable camelcase */
import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import { initialState, directAction } from '../reducer/social'
import axios from 'axios';


import {
  SET_CHAT_GROUP_LIST,
  SET_CHAT_FRIEND_LIST
} from '../alias'
import { STATESOCIAL } from '@interface/ISocial';

export const getGroupList = createAsyncThunk('get-groups', async () => {
  try {
    const response = await axios.get('https://mock.apidog.com/m1/428737-0-default/get-groups');
    return response.data;
  } catch (error: any) {
    return isRejectedWithValue(error.response);
  }
});

export const getFriendList = createAsyncThunk('get-friends', async () => {
  try {
    const response = await axios.get('https://mock.apidog.com/m1/428737-0-default/get-friends');
    return response.data;
  } catch (error: any) {
    return isRejectedWithValue(error.response);
  }
});

// export const getTourDetail = createAsyncThunk('get-tour', async (id: number) => {
//   try {
//     const response = await axios.get(`https://mock.apidog.com/m1/428737-0-default/get-tour?id=${id}`);
//     return response.data;
//   } catch (error: any) {
//     return isRejectedWithValue(error.response);
//   }
// });

const SocialSlice = createSlice({
  name: 'social',
  initialState,
  reducers: {
    setSelectGroupItem: (state, action) => {
      state.selected_item = { item: action.payload, type: 'group'};
    },
    setSelectFriendItem: (state, action) => {
      state.selected_item = { item: action.payload, type: 'friend'};
    },
    setActiveBinding: (state) => {
      state.active_binding++ 
    },
  },

  extraReducers: (builder) => {
    // GET GROUP LIST
    builder.addCase(getGroupList.pending, (state: STATESOCIAL) => {
      state.loading_group_list = true;
    });
    builder.addCase(getGroupList.rejected, (state: STATESOCIAL) => {
      state.loading_group_list = false;
    });
    builder.addCase(getGroupList.fulfilled, (state: STATESOCIAL, result: any) => {
      const { payload } = result;
      directAction(state, {type: SET_CHAT_GROUP_LIST, payload: payload.data})
      state.loading_group_list = false;
    });

    // GET FRIEND LIST
    builder.addCase(getFriendList.pending, (state: STATESOCIAL) => {
      state.loading_friend_list = true;
    });
    builder.addCase(getFriendList.rejected, (state: STATESOCIAL) => {
      state.loading_friend_list = false;
    });
    builder.addCase(getFriendList.fulfilled, (state: STATESOCIAL, result: any) => {
      const { payload } = result;
      directAction(state, {type: SET_CHAT_FRIEND_LIST, payload: payload.data})
      state.loading_friend_list = false;
    });

    // GET TOUR DETAIL
    // builder.addCase(getTourDetail.pending, (state: STATETOUR) => {
    //   state.loading_select_item = true;
    // });
    // builder.addCase(getTourDetail.rejected, (state: STATETOUR) => {
    //   state.loading_select_item = false;
    // });
    // builder.addCase(getTourDetail.fulfilled, (state: STATETOUR, result: any) => {
    //   const { payload } = result;
    //   directAction(state, {type: SET_DETAIL, payload: payload.data})
    // });
  },
});

export const {
  setSelectGroupItem,
  setSelectFriendItem,
  setActiveBinding
} = SocialSlice.actions;
export default SocialSlice.reducer;
