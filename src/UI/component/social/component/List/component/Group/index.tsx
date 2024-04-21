/* eslint-disable camelcase */
import { FC, useEffect, useState } from 'react';
import styles from './self.module.css';
import { ModalProps, Col, Row, Button } from 'antd';
import ScrollBar from '../../../../../../common/scroll-bar';
import PopContent from '../../../../../../common/pop-content';
import PopImage from '../../../../../../common/pop-image';
import { getGroupList, setActiveBinding, setSelectGroupItem } from '../../../../../../../store/action/social';
import { useDispatch, useSelector } from 'react-redux';

interface Props extends ModalProps {
   action?: boolean;
}

export const Group: FC<Props> = (props) => {
   const { action } = props;
   const dispatch = useDispatch();
   const { group_list, loading_group_list, selected_item } = useSelector((state: any) => state.social);
   const [loading, setLoading] = useState<boolean>(true);
   const [loadingItem, setLoadingItem] = useState<boolean>(false);
   const [selectedItem, setSelectedItem] = useState<number>(1);

   useEffect(() => {
      dispatch(getGroupList());
   }, []);

   useEffect(() => {
      setLoading(loading_group_list)
      if(!loading_group_list) dispatch(setActiveBinding())
   }, [loading_group_list]);

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


   // CSS CHANGE
   function cssClassItem(id: number) {
      if (selected_item.type === 'group' && selectedItem === id) return styles['selected-item']
      return styles['tour-item']
   }

   const styleText: any = {
      fontFamily: 'Arial, Helvetica, sans-serif',
      color: 'rgba(41, 45, 50, 0.6)',
      letterSpacing: '0.01em',
      fontWeight: 300,
      fontSize: '12px',
      lineHeight: '15px',
      textAlign: 'left'
   }


   // ACTIONS
   function onClickItem(id: number) {
      setSelectedItem(id)
      const obj = group_list.find((e: any) => e.id === id)
      dispatch(setSelectGroupItem(obj))
      setLoadingItem(true)
      // dispatch(setLoadingSelectItem({
      //    loading_select_item: true
      // }))
      setTimeout(() => {
         setLoadingItem(false)
         dispatch(setActiveBinding())
         // dispatch(setLoadingSelectItem({
         //    loading_select_item: false
         // }))
      }, 1500);
   }

   return (
      <>
         <Row style={{ marginBottom: 5, marginLeft: 15 }}>
            <PopContent
               active
               style={{ borderRadius: 10 }}
               size='very-small'
               loading={false}
               width={'fit-content'}
               content={'Groups'}
            />
         </Row>
         <Row className={styles['background']} style={{ padding: 0 }}>
            <Col span={24}>
               {/* <Row style={{ marginBottom: '40px', paddingLeft: 10 }}>
                  <SearchBar />
               </Row> */}
               <Row style={{ paddingRight: 15 }}>
                  <ScrollBar type='small' height='343.5px'>
                     {group_list?.map((value: any, index: number) => {
                        return (
                           <Row key={value.id}
                              onClick={() => onClickItem(value.id)}
                              style={{
                                 marginBottom: '10px',
                                 padding: '3px 4px 2px 3px',
                                 borderRadius: 20
                              }}
                              className={cssClassItem(value.id)}
                           >
                              <Col span={4} style={{ height: 'fit-content' }}>
                                 <PopImage
                                    type='medium'
                                    active={loading || (selected_item.type === 'group' && loadingItem)}
                                    loading={loading || (selected_item.type === 'group' && selectedItem === value.id)}
                                    height='66px'
                                    width='66px'
                                    src={require(`./img/tour/0${value.image}.png`)}
                                 />
                              </Col>
                              <Col span={20} style={{ padding: '5px 10px 0px 10px' }}>
                                 <Row style={{ marginBottom: 2.5 }}>
                                    <Col span={24}>
                                       <PopContent
                                          active={loading || (selected_item.type === 'group' && loadingItem)}
                                          loading={loading || (selected_item.type === 'group' && selectedItem === value.id)}
                                          size='very-small'
                                          width={'80%'}
                                          content={title(value.from, value.to)}
                                       />
                                    </Col>
                                 </Row>
                                 <Row style={{ marginBottom: 2.5 }} >
                                    <Col span={24} style={styleText}>
                                       <PopContent
                                          active={loading || (selected_item.type === 'group' && loadingItem)}
                                          loading={loading || (selected_item.type === 'group' && selectedItem === value.id)}
                                          size='very-small'
                                          width={'100%'}
                                          content={value.last_up_message}
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
