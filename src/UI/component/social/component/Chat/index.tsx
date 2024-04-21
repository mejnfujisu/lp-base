/* eslint-disable camelcase */
import { FC, useEffect, useState } from 'react';
import styles from './self.module.css';
import { ModalProps, Col, Row, Button } from 'antd';
import ScrollBar from '../../../../common/scroll-bar';
import PopContent from '../../../../common/pop-content';
import PopImage from '../../../../common/pop-image';
import { useDispatch, useSelector } from 'react-redux';
import { IItem, ISelected } from '@interface/ISocial';
import SearchBar from '../../../../common/scroll-bar';

// let firstLoad = false

interface Props extends ModalProps {
   action?: boolean;
}

export const Chat: FC<Props> = (props) => {
   const { action } = props;
   const dispatch = useDispatch();
   const { active_binding, selected_item } = useSelector((state: any) => state.social);
   const [loading, setLoading] = useState<boolean>(true);
   const [selectedItem, setSelectedItem] = useState<ISelected>();

   useEffect(() => {
      setLoading(true)
   }, []);

   useEffect(() => {
      setSelectedItem(selected_item)
      setLoading(true)
         setTimeout(() => {
            setLoading(false)
         }, 1500);
   }, [active_binding]);

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


   // ACTIONS

   return (
      <>
         <Row className={styles['background']}>
            <Col span={24}>
               <Row style={{ position: 'absolute', top: 0, width: '100%' }}
               >
                  {(() => {
                     switch (selectedItem?.type) {
                        case undefined:
                           return (
                              <>
                                 <Col span={3} style={{ height: 'fit-content' }}>
                                    <PopImage
                                       type='medium'
                                       active={loading}
                                       height='66px'
                                       width='66px'
                                       loading={loading}
                                       src=''
                                    />
                                 </Col>
                                 <Col span={21} style={{ paddingLeft: 10, paddingTop: 5 }}>
                                    <PopContent
                                       active={loading}
                                       size='very-small'
                                       loading={loading}
                                       width={'50%'}
                                       content=''
                                    />
                                 </Col>
                              </>
                           )
                           
                        case 'group':
                           return (
                              <>
                                 <Col span={3} style={{ height: 'fit-content' }}>
                                    <PopImage
                                       type='medium'
                                       active={loading}
                                       height='66px'
                                       width='66px'
                                       loading={loading}
                                       src={require(`./img/tour/0${selectedItem.item?.image === 0 ? 1 : selectedItem.item?.image || 1}.png`)}
                                    />
                                 </Col>
                                 <Col span={21} style={{ paddingLeft: 10, paddingTop: 5 }}>
                                    <PopContent
                                       active={loading}
                                       size='very-small'
                                       loading={loading}
                                       width={'50%'}
                                       content={title(selectedItem.item?.from || '', selectedItem.item?.to || '')}
                                    />
                                 </Col>
                              </>
                           )

                        case 'friend':
                           return (
                              <>
                                 <Col span={2} style={{ height: 'fit-content' }}>
                                    <PopImage
                                       type='circle'
                                       active={loading}
                                       height='50px'
                                       width='50px'
                                       style={{ borderRadius: 30 }}
                                       loading={loading}
                                       src={require(`./img/tour/0${selectedItem.item?.image === 0 ? 1 : selectedItem.item?.image || 1}.png`)}
                                    />
                                 </Col>
                                 <Col span={22} style={{ paddingLeft: 10, paddingTop: 5 }}>
                                    <PopContent
                                       active={loading}
                                       size='very-small'
                                       loading={loading}
                                       width={'50%'}
                                       content={selectedItem.item?.last_up_message || ''}
                                    />
                                 </Col>
                              </>
                           )
                     }
                  })()}
               </Row>
               <Row>
                  <ScrollBar height='630px'>
                     {/* {list?.map((value: any, index: number) => {
                        return (
                           <Row key={index + 1}
                              onClick={() => onClickItem(index + 1)}
                              style={{
                                 marginBottom: '10px',
                                 padding: '3px 4px 2px 3px',
                                 borderRadius: '27px 12px 12px 27px'
                              }}
                              className={cssClassItem(index + 1)}
                           >
                           </Row>
                        )
                     })} */}
                  </ScrollBar>
                  <Row style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                     <SearchBar />
                  </Row>
               </Row>
            </Col>
         </Row>
      </>
   );
};
