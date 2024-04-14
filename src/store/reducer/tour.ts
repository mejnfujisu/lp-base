/* eslint-disable camelcase */
import { STATETOUR } from '@interface/ITour';
import {
  SET_TOUR_DETAIL,
  SET_TOUR_LIST
} from '../alias'


export const initialState: STATETOUR = {
  list: [],
  detail: {
    images: [],
    from: '',
    to: '',
    content: '',
    leader: '',
    group: '',
    start: '',
    end: '',
    max_numb_of_member: 0,
    current_numb_of_member: 0,
    status: '',
    schedule: []
  },
  filter: {
    from: '',
    to: '',
    month: '',
    number_of_day: 0,
    number_of_slot: 0
  },
  loading_detail: false,
  loading_list: false,
  loading_select_item: false,
  active_handle_height_schedule: false
};

export function directAction (state = initialState, action: any) {
  switch (action.type) {
    case SET_TOUR_DETAIL: {
      const data = action.payload;
      state.detail = action.payload;
      return {
        ...state,
        ...data
      };
    }

    case SET_TOUR_LIST: {
      const data = action.payload;
      state.list = action.payload;
      return {
        ...state,
        ...data
      };
    }
  
    default:
      return state;
  }
}
