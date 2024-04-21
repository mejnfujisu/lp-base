/* eslint-disable camelcase */
import { FC, useEffect, useState } from 'react';
import styles from './self.module.css';
import { ModalProps, Col, Row, Button } from 'antd';
import ScrollBar from '../../../../../../common/scroll-bar';
import PopContent from '../../../../../../common/pop-content';
import PopImage from '../../../../../../common/pop-image';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendList, setActiveBinding, setSelectFriendItem } from '../../../../../../../store/action/social';
import { IItem } from '@interface/ISocial';

let opacity = 0.01
let activeInterval = false;

interface Props extends ModalProps {
   action?: boolean;
}

export const Friend: FC<Props> = (props) => {
   const { action } = props;
   const dispatch = useDispatch();
   const { friend_list, selected_item, loading_friend_list } = useSelector((state: any) => state.social);
   const [loading, setLoading] = useState<boolean>(false);
   const [loadingItem, setLoadingItem] = useState<boolean>(true);
   const [selectedItem, setSelectedItem] = useState<number>(-1);
   const [list, setList] = useState<any[]>([]);

   useEffect(() => {
      dispatch(getFriendList());
   }, []);

   useEffect(() => {
      if(loading) opacity = 1
      // console.log('--------------------', loading , select_type)
   }, [loading]);

   useEffect(() => {
      setLoading(loading_friend_list)
      if(!loading_friend_list) dispatch(setActiveBinding())
      if(!activeInterval) setList(friend_list)
      setHeight(friend_list)
   }, [loading_friend_list]);

   // COMPONENTS

   function replaceLongMessage(value: string) {
      if(value.length < 98) return value
      return `${value.substring(0, 97)} ...`
   }

   function setHeight(list: any) {
      const intervalCheckheight = setInterval(()=>{
         if (list?.length > 0 && !activeInterval) {
            const element = document.getElementById(`pop-content-friend-${list.length}`);
            const rect = element?.getBoundingClientRect();
            // console.log('------------CL--------', element)
            if (rect?.height && !activeInterval) {

               activeInterval = true;
               clearInterval(intervalCheckheight);
               const newList: IItem[] = []
               for (const [index, value] of list.entries()) {
                  const item: any = JSON.parse(JSON.stringify(value))
                  const element = document.getElementById(`pop-content-friend-${value.id}`);
                  const rect = element?.getBoundingClientRect();
                  item.height = `${rect?.height}px` || '0px'
                  item.width = `${rect?.width}px` || '0px'
                  // eslint-disable-next-line camelcase
                  item.is_active_edit = false
                  newList.push(item);
                  if(index+1 === list.length){
                     setList(newList)
                     activeInterval = false;
                     setLoading(true)
                     setTimeout(() => {
                        console.log('....', newList)
                        setLoading(false)
                     }, 1500);
                  }
               }
            }
         }
      }, 1);
   }


   // CSS CHANGE
   function cssClassItem(id: number) {
      if (selectedItem === id && selected_item.type === 'friend') return styles['selected-item']
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
      const obj = friend_list.find((e: any) => e.id === id)
      dispatch(setSelectFriendItem(obj))
      setLoadingItem(true)
      setTimeout(() => {
         setLoadingItem(false)
         dispatch(setActiveBinding())
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
               content={'Friends'}
            />
         </Row>
         <Row className={styles['background']} style={{ padding: 0 }}>
            <Col span={24}>
               {/* <Row style={{ marginBottom: '40px', paddingLeft: 10 }}>
                  <SearchBar />
               </Row> */}
               <Row style={{ paddingRight: 15 }}>
                  <ScrollBar type='small' height='343.5px'>
                     {list?.map((value: any, index: number) => {
                        return (
                           <Row key={value.id}
                              onClick={() => onClickItem(value.id)}
                              style={{
                                 marginBottom: '10px',
                                 padding: '5px 10px',
                                 borderRadius: 20
                              }}
                              className={cssClassItem(value.id)}
                           >
                              <Col span={3} style={{ height: 'fit-content' }}>
                                 {/* <img
                                    style={{ borderRadius: 30, borderColor: '#ffffff', borderStyle: 'solid', marginRight: 10 }}
                                    height='50px'
                                    width='50px'
                                    src={require(`./img/tour/0${value.image}.png`)} alt=""
                                 /> */}
                                 <PopImage
                                    type='circle'
                                    active={loading || selected_item.type === 'friend' && loadingItem}
                                    loading={loading || (selected_item.type === 'friend' && selectedItem === value.id)}
                                    height='50px'
                                    width='50px'
                                    style={{ borderRadius: 30, borderColor: '#ffffff', borderStyle: 'solid' }}
                                    src={require(`./img/tour/0${value.image}.png`)}
                                 />
                              </Col>
                              <Col span={21} style={{ paddingLeft: 15, paddingTop: 5 }}>
                                 <PopContent
                                    opacity={opacity}
                                    id={`friend-${value.id}`}
                                    active={loading || selected_item.type === 'friend' && loadingItem}
                                    loading={loading || (selected_item.type === 'friend' && selectedItem === value.id)}
                                    size='very-small'
                                    width={value?.width}
                                    height={value?.height}
                                    content={replaceLongMessage(value.last_up_message)}
                                 />
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
