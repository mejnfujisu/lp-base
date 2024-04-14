import { FC, MouseEventHandler, useEffect, useState } from 'react';
import { Button, Col, ModalProps, Row } from 'antd';
import styles from './self.module.css';
import PopContent from '../../../../common/pop-content';
import { FilterFrom, FilterDash, FilterTo, FilterDays, FilterMonth, FilterSlots, FilterCustom } from '../../../../../element/icons';
import { ModalFilter } from './component/ModalFilter';
import { useSelector } from 'react-redux';
import { MONTH } from '../../../../common/constant/object';
import Time from '../../../../common/function/time';

let activeInterval = false;
let opacity = 1

const componentModelList=[
   { key: 1, name: 'place' }, 
   { key: 2, name: 'month' }, 
   { key: 3, name: 'day' }, 
   { key: 4, name: 'slot' }
]


interface Props extends ModalProps {
   action?: boolean;
}

export const Filter: FC<Props> = (props) => {
   const { action } = props;
   const [loading, setLoading] = useState<boolean>(false);
   const [isOpenFilter, setIsOpenFilter] = useState<boolean>(true);
   const [componentList, setComponentList] = useState<any>(componentModelList);
   const [activePosition, setActivePosition] = useState({});

   // STORE
   const { filter } = useSelector((state: any) => state.tour);

   useEffect(() => {
      if(loading) opacity = 1
   }, [loading]);

   useEffect(() => {
      setComponentList(componentModelList)
      setHeight(componentList)
   }, [filter]);

   // COMPONENTS
   function localtion(from: string, to: string) {
      return (
         <div style={{ display: 'flex', alignItems: 'center' }}>
            <FilterFrom width={''} height={''} fill={''} style={{ marginRight: 10 }} />
            <h4 style={{ margin: 0, textAlign: 'center' }}>{from}</h4>
            <FilterDash width={''} height={''} fill={''} style={{ margin: '0px 14px' }} />
            <h4 style={{ margin: 0, textAlign: 'center' }}>{to}</h4>
            <FilterTo width={''} height={''} fill={''} style={{ marginLeft: 10 }} />
         </div>
      )
   }

   function month(value: string) {
      return (
         <div style={{ display: 'flex', alignItems: 'center' }}>
            <FilterMonth width={'17px'} height={'17px'} fill={''} style={{ marginRight: 10 }} />
            <h4 style={{ margin: 0, textAlign: 'center' }}>{value}</h4>
         </div>
      )
   }

   function days(value: number) {
      return (
         <div style={{ display: 'flex', alignItems: 'center' }}>
            <FilterDays width={''} height={''} fill={''} style={{ marginRight: 10 }} />
            <h4 style={{ margin: 0, textAlign: 'center' }}>{value} day</h4>
            <h6 style={{ margin: '1px 0px 0px 1px' }}>(s)</h6>
         </div>
      )
   }

   function slots(value: number) {
      return (
         <div style={{ display: 'flex', alignItems: 'center' }}>
            <FilterSlots width={''} height={''} fill={''} style={{ marginRight: 10 }} />
            <h4 style={{ margin: 0, textAlign: 'center' }}>{value} slot</h4>
            <h6 style={{ margin: '1px 0px 0px 1px' }}>(s)</h6>
         </div>
      )
   }

   function setHeight(list: any) {
      const intervalCheckheight = setInterval(() => {
         if (!activeInterval) {
            const element = document.getElementById(`pop-content-${list.length}`);
            const rect = element?.getBoundingClientRect();
            if (rect?.width && !activeInterval) {
               activeInterval = true;
               clearInterval(intervalCheckheight);
               const newList: any = [];
               for (const [index, value] of list.entries()) {
                  const item: any = JSON.parse(JSON.stringify(value))
                  const element = document.getElementById(`pop-content-${index + 1}`);
                  const rect = element?.getBoundingClientRect();
                  item.width = `${rect?.width}px` || '0px'
                  newList.push(item);
                  if (index + 1 === list.length) {
                     setComponentList(newList)
                     activeInterval = false;
                     setLoading(true)
                     setTimeout(() => {
                        setLoading(false)
                     }, 1500);
                  }
               }
            }
         }
      }, 1);
   }


   // ACTIONS
   function openFilter(e: React.MouseEvent<HTMLElement, MouseEvent>) {
      const elementBtn = document.getElementById('custom-filter-btn');
      const rect = elementBtn?.getBoundingClientRect();
      setActivePosition({
         x: rect?.x,
         y: rect?.y
      })
      // const elementModal = document.getElementsByClassName('custom-filter-modal')[0];
      // const elementModal = document.querySelector<HTMLElement>('.custom-filter-modal')
      setIsOpenFilter(true)
      // console.log(elementModal?.offsetWidth)
   }

   return (
      <>
         <Row
            className={styles.background}
         // style={{ display: 'flex' }}
         >
            <Col span={22}>
               <Row>
                  <PopContent
                     id={1}
                     isBlock={false}
                     active
                     opacity={opacity}
                     loading={loading}
                     size='filter'
                     width={componentList[1-1]?.width}
                     content={localtion(filter.from, filter.to)}
                     style={{ marginRight: 8 }}
                  />
                  <PopContent
                     id={2}
                     isBlock={false}
                     active
                     opacity={opacity}
                     loading={loading}
                     size='filter'
                     width={componentList[2-1]?.width}
                     content={month(MONTH[filter?.month]?.label || Time.getCurrentMonth())}
                     style={{ marginRight: 8 }}
                  />
                  <PopContent
                     id={3}
                     isBlock={false}
                     active
                     opacity={opacity}
                     loading={loading}
                     size='filter'
                     width={componentList[3-1]?.width}
                     content={days(filter.number_of_day)}
                     style={{ marginRight: 8 }}
                  />
                  <PopContent
                     id={4}
                     isBlock={false}
                     active
                     opacity={opacity}
                     loading={loading}
                     size='filter'
                     width={componentList[4-1]?.width}
                     content={slots(filter.number_of_slot)}
                     style={{ marginRight: 8 }}
                  />
               </Row>
            </Col>
            <Col span={2}>
               <Row>
                  <Button
                     onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => { openFilter(e) }}
                     id='custom-filter-btn'
                     type="primary"
                     style={{
                        height: 'fit-content',
                        position: 'absolute',
                        boxShadow: '0px 3px 4px 0px #00000026',
                        background: '#ffffff',
                        borderRadius: 12,
                        top: 0,
                        right: 0,
                        padding: '5px 12px'
                     }}
                  >
                     <FilterCustom width={''} height={''} fill={''} />
                  </Button>
               </Row>
            </Col>
         </Row>
         <ModalFilter
            isOpen={isOpenFilter}
            setIsOpen={setIsOpenFilter}
            activePosition={activePosition}
         />
      </>
   );
};
