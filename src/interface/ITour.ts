export interface ISchedule {
   is_active_edit: boolean;
   height: string;
   id: number;
   date: string;
   content: string;
 
 }

 export interface ITourDetail {
   images: number[];
   from: string;
   to: string;
   content: string;
   leader: string;
   group: string;
   start: string;
   end: string;
   max_numb_of_member: number;
   current_numb_of_member: number;
   schedule: ISchedule[];
   status: string;
 }

 export interface ITour {
   image: number;
   from: string;
   to: string;
   leader: string;
   group: string;
   start: string;
   end: string;
   max_numb_of_member: number;
   current_numb_of_member: number;
   status: string;
 }

 export interface IFilterTour {
  from: string;
  to: string;
  month: string;
  number_of_day: number;
  number_of_slot: number;
}
 
 export interface STATETOUR {
   list: ITour[];
   detail: ITourDetail;
   filter: IFilterTour;
   loading_list: boolean;
   loading_detail: boolean;
   loading_select_item: boolean;
   active_handle_height_schedule: boolean;
 }