// Group should be the same Friend
export interface IItem {
  id: number;
  image: number;
  from: string;
  to: string;
  last_up_message: string;
}

export interface ISelected {
  item: IItem;
  type: string;
}

// export interface IFriend {
//   id: number;
//   image: number;
//   from: string;
//   to: string;
//   last_up_message: string;
// }

export interface STATESOCIAL {
  group_list: IItem[];
  friend_list: IItem[];
  loading_group_list: boolean;
  loading_friend_list: boolean;
  loading_select_item: boolean;
  active_binding: number;
  selected_item: ISelected;
}