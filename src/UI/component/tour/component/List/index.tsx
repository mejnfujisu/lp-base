/* eslint-disable camelcase */
import { FC, useEffect, useState } from 'react';
import styles from './self.module.css';
import { ModalProps, Col, Row, Button } from 'antd';
import ScrollBar from '../../../../common/scroll-bar';
import SearchBar from '../../../../common/search-bar';
import PopContent from '../../../../common/pop-content';
import PopImage from '../../../../common/pop-image';
import { getTourList, getTourDetail, setLoadingSelectItem } from '../../../../../store/action/tour';
import { useDispatch, useSelector } from 'react-redux';

interface Props extends ModalProps {
   action?: boolean;
}

export const List: FC<Props> = (props) => {
   const { action } = props;
   const dispatch = useDispatch();
   const { list, loading_select_item } = useSelector((state: any) => state.tour);
   const [loading, setLoading] = useState<boolean>(true);
   const [selectedItem, setSelectedItem] = useState<number>(-1);

   useEffect(() => {
      dispatch(getTourList())
   }, []);

   useEffect(() => {
      setLoading(true)
      setTimeout(() => {
         setLoading(false)
      }, 1500);
   }, [list]);

   // COMPONENTS
   function title(from: string, to: string) {
      return (
         <div style={{ display: 'flex' }}>
            <h4 style={{ margin: 0 }}>{from}</h4>
            <h5 style={{ margin: '0px 5px' }}>-</h5>
            <h4 style={{ margin: 0 }}>{to}</h4>
         </div>
      )
   }
   function leader(value: string) {
      return (
         <div style={{ display: 'flex' }}>
            <h6 style={{ margin: '0px 2px 0px 0px', color: 'rgba(41, 45, 50, 0.5)' }}>{'Leader.'}</h6>
            <h5 style={{ margin: 0 }}>{value}</h5>
         </div>
      )
   }
   function group(value: string) {
      return (
         <div style={{ display: 'flex' }}>
            <h6 style={{ margin: '0px 2px 0px 0px', color: 'rgba(41, 45, 50, 0.5)' }}>{'Grp.'}</h6>
            <h5 style={{ margin: 0 }}>{value}</h5>
         </div>
      )
   }
   function member(value: number, max: number) {
      return (
         <div style={{ display: 'flex' }}>
            <h6 style={{ margin: '0px 2px 0px 0px', color: 'rgba(41, 45, 50, 0.5)' }}>{'Membs.'}</h6>
            <h5 style={{ margin: 0 }}>{value}</h5>
            <h5 style={{ margin: 0 }}>/</h5>
            <h5 style={{ margin: 0 }}>{max}</h5>
         </div>
      )
   }
   function time(start: string, end: string) {
      return (
         <div style={{ display: 'flex' }}>
            <h5 style={{ margin: 0 }}>{start}</h5>
            <h6 style={{ margin: '0px 5px', color: 'rgba(41, 45, 50, 0.5)' }}>to</h6>
            <h5 style={{ margin: 0 }}>{end}</h5>
         </div>
      )
   }


   // CSS CHANGE
   function cssClassItem(id: number) {
      if (selectedItem === id) return styles['selected-item']
      return styles['tour-item']
   }


   // ACTIONS
   function onClickItem(id: number) {
      setSelectedItem(id)
      dispatch(getTourDetail(id))
      setTimeout(() => {
         dispatch(setLoadingSelectItem(false))
      }, 1500);
   }

   return (
      <>
         <Row>
            <Col span={24}>
               <Row style={{ marginBottom: '40px', paddingLeft: 10 }}>
                  <SearchBar />
               </Row>
               <Row>
                  <ScrollBar height='630px'>
                     {list?.map((value: any, index: number) => {
                        return (
                           <Row key={index+1}
                              onClick={() => onClickItem(index+1)}
                              style={{
                                 marginBottom: '10px',
                                 padding: '3px 4px 2px 3px',
                                 borderRadius: '27px 12px 12px 27px'
                              }}
                              className={cssClassItem(index+1)}
                           >
                              <Col span={7}>
                                 <PopImage
                                    type='large'
                                    active={loading || loading_select_item}
                                    height='94px'
                                    width='150px'
                                    loading={loading || selectedItem === index+1}
                                    src={require(`./img/tour/0${value.image}.png`)}
                                 />
                              </Col>
                              <Col span={17} style={{ paddingLeft: 25 }}>
                                 <Row style={{ marginBottom: 2.5 }}>
                                    <Col span={24}>
                                       <PopContent
                                          active={loading || loading_select_item}
                                          size='small'
                                          loading={loading || selectedItem === index+1}
                                          width={'100%'}
                                          content={title(value.from, value.to)}
                                       />
                                    </Col>
                                 </Row>
                                 <Row style={{ marginBottom: 2.5 }} >
                                    <Col span={11} style={{ paddingRight: 2.5 }}>
                                       <PopContent
                                          active={loading || loading_select_item}
                                          size='very-small'
                                          loading={loading || selectedItem === index+1}
                                          width={'100%'}
                                          content={leader(value.leader)}
                                       />
                                    </Col>
                                    <Col span={13}>
                                       <PopContent
                                          active={loading || loading_select_item}
                                          size='very-small'
                                          loading={loading || selectedItem === index+1}
                                          width={'100%'}
                                          content={group(value.group)}
                                       />
                                    </Col>
                                 </Row>
                                 <Row>
                                    <Col span={8} style={{ paddingRight: 2.5 }}>
                                       <PopContent
                                          active={loading || loading_select_item}
                                          size='very-small'
                                          loading={loading || selectedItem === index+1}
                                          width={'100%'}
                                          content={member(16, 20)}
                                       />

                                    </Col>
                                    <Col span={11} style={{ paddingRight: 2.5 }}>
                                       <PopContent
                                          active={loading || loading_select_item}
                                          size='very-small'
                                          style={{ paddingRight: 2.5 }}
                                          loading={loading || selectedItem === index+1}
                                          width={'100%'}
                                          content={time(value.start, value.end)}
                                       />
                                    </Col>
                                    <Col span={5}>
                                       <PopContent
                                          active={loading || loading_select_item}
                                          loading={loading || selectedItem === index+1}
                                          size='very-small'
                                          width={'100%'}
                                          padding='6px 12px'
                                          background={loading_select_item && selectedItem === index+1 ? '#FFFFFF' : (value.status === 'opening' ? '#8BC34A' : '#FF6F00')}
                                          content={
                                             <h6 style={{ margin: 0, color: '#FFFFFF', textAlign: 'center' }}>
                                                {
                                                   value.status === 'opening'
                                                   ? 'Opening'
                                                   : 'Closed'
                                                }
                                             </h6>
                                          }
                                       />
                                    </Col>
                                 </Row>
                              </Col>
                           </Row>
                        )
                     })}
                  </ScrollBar>
               </Row>
            </Col>
         </Row>
      </>
   );
};
