/* eslint-disable camelcase */
import { STATESOCIAL } from '@interface/ISocial';
import {
  SET_CHAT_GROUP_LIST,
  SET_CHAT_FRIEND_LIST
} from '../alias'


export const initialState: STATESOCIAL = {
  group_list: [],
  friend_list: [],
  loading_group_list: false,
  loading_friend_list: false,
  active_binding: 0,
  loading_select_item: false,
  selected_item: {
    item: {
      id: 0,
      image: 0,
      from: '',
      to: '',
      last_up_message: ''
    },
    type: 'group'
  }
};

export function directAction (state = initialState, action: any) {
  switch (action.type) {
    // case SET_DETAIL: {
    //   const data = action.payload;
    //   state.detail = action.payload;
    //   return {
    //     ...state,
    //     ...data
    //   };
    // }

    case SET_CHAT_GROUP_LIST: {
      const data = action.payload;
      state.group_list = action.payload;
      return {
        ...state,
        ...data
      };
    }

    case SET_CHAT_FRIEND_LIST: {
      const data = action.payload;
      state.friend_list = action.payload;
      return {
        ...state,
        ...data
      };
    }
  
    default:
      return state;
  }
}
