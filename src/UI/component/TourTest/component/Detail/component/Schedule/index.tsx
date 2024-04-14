/* eslint-disable camelcase */
import { FC, useEffect, useState } from 'react';
// import styles from './self.module.css';
import { ModalProps } from 'antd';
import ScrollBar from '../../../../../../common/scroll-bar';
import ScheduleTree from '../../../../../../common/schedule-tree';

import { ISchedule } from '../../../../../../../interface/ITour';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingDetail } from '../../../../../../../store/action/tour';

let activeInterval = false;

interface Props extends ModalProps {
   action?: boolean;
}

export const Schedule: FC<Props> = () => {
   const dispatch = useDispatch();
   const { detail, loading_detail } = useSelector((state: any) => state.tour);
   const [schedule, setSchedule] = useState<any>([]);

   useEffect(() => {
      if(!activeInterval) setSchedule(detail.schedule)
      setHeight(detail.schedule)
   }, [detail]);
   
   function setHeight(list: any) {
      const intervalCheckheight = setInterval(()=>{
         if (list.length > 0 && !activeInterval) {
            const element = document.getElementById(`pop-input-${list.length}`);
            const rect = element?.getBoundingClientRect();
            if (rect?.height && !activeInterval) {

               activeInterval = true;
               clearInterval(intervalCheckheight);
               const newList: ISchedule[] = []
               for (const [index, value] of list.entries()) {
                  const item: any = JSON.parse(JSON.stringify(value))
                  const element = document.getElementById(`pop-input-${index + 1}`);
                  const rect = element?.getBoundingClientRect();
                  item.height = `${rect?.height}px` || '0px'
                  // eslint-disable-next-line camelcase
                  item.is_active_edit = false
                  newList.push(item);
                  if(index+1 === list.length){
                     setSchedule(newList)
                     activeInterval = false;
                     dispatch(setLoadingDetail(true))
                     setTimeout(() => {
                        dispatch(setLoadingDetail(false))
                     }, 1500);
                  }
               }
            }
         }
      }, 1);
   }

   return (
      <>
         <ScrollBar height='700px'>
            <ScheduleTree schedule={schedule} loading={loading_detail} />
         </ScrollBar>
      </>
   );
};
