import React, { useEffect, useState } from 'react';
import styles from './self.module.css';
import { Badge, Col, Row } from 'antd';
import PopContent from '../../common/pop-content';
import img01 from './img/01.png';
import img02 from './img/02.png';
import img03 from './img/03.png';
import img04 from './img/04.png';
import img05 from './img/05.png';
import { List } from './component/List';
import { Tool } from './component/Tool';
import { Chat } from './component/Chat';
import { LoadMore } from '../../../element/icons';

interface Props {
   active?: boolean;
   hidding?: boolean;
}

const Component: React.FC<Props> = (props) => {
   const { active, hidding } = props;
   const [isDisplay, setIsDisplay] = useState('');
   const [visisbleAnimation, setVisisbleAnimation] = useState<any>({ opacity: 0.2 });
   const demoList = [
      {
         id: 1,
         name: 'Natha...',
         avatar: img01,
         badge: 12
      },
      {
         id: 2,
         name: 'Jenne...',
         avatar: img03,
         badge: 7
      },
      {
         id: 3,
         name: 'Bob',
         avatar: img04,
         badge: 6
      },
      {
         id: 4,
         name: 'Thoma...',
         avatar: img05,
         badge: 3
      }
   ];

   useEffect(() => {
      if (hidding) {
         setTimeout(() => {
            setIsDisplay('none');
         }, 2000);
      } else setIsDisplay('')

      if (active) {
         setTimeout(() => {
            setVisisbleAnimation({
               transition: 'opacity 2s',
               opacity: 1,
            });
         }, 100);
      } else setVisisbleAnimation({ opacity: 0.2 });
   }, [hidding, active]);


   return (
      <>
         {!active ?
            (
               <div className={`${styles['section']} ${hidding ? styles['s-hidding'] : ''}`} style={{ display: isDisplay }}>
                  <div className={styles['h-content']}>
                     <Row style={{ padding: 15 }}>
                        <Col span={24}>
                           <Row style={{ background: '#FFFFFF', padding: '10px', marginBottom: 10, borderRadius: 25 }} className={styles['title']}>
                              <div style={{ height: 15 }}></div>
                           </Row>
                           <Row>
                              <PopContent
                                 size='large'
                                 content={
                                    <div>
                                       <img
                                          style={{ height: 60, borderRadius: 65, aspectRatio: '1 / 1' }}
                                          src={img02} alt=""
                                       />
                                       <h4 style={{margin: 0}}>New post from Pablo and other comments, New post from Pablo and other comments, New post from Pablo and other comments</h4>
                                    </div>
                                 }
                                 style={{ marginBottom: 10 }}
                              />
                           </Row>
                           <Row>
                              <Col span={3} />
                              {demoList?.map((value: any, index: number) => {
                                 return (
                                    <Col span={4} key={index} style={{ height: 'fit-content', padding: '10px 5px 0px 5px' }}>
                                       <Row>
                                          <Badge count={value.badge} color="#faad14" size='small'>
                                             <img
                                                style={{ borderRadius: 65, aspectRatio: '1 / 1' }}
                                                height='40'
                                                src={value.avatar} alt=""
                                             />
                                          </Badge>
                                       </Row>
                                       <Row className={styles['friend-name']}>
                                          <div>
                                             <span style={{ margin: 0 }}>{value.name}</span>
                                          </div>
                                       </Row>
                                    </Col>
                                 )
                              })}
                              <Col span={3}>
                              <div style={{width: '100%', position: 'absolute', bottom: 0}}>
                              <LoadMore fill='' height='' width=''/>
                           </div>
                              </Col>
                           </Row>
                        </Col>
                     </Row>
                  </div>
               </div>
            ) :
            (
               <div className={`${styles['section']} ${styles['s-filled']}`} style={visisbleAnimation}>
                  <div className={styles['s-content']}>
                  <Row>
                     <Col span={7}>
                        <List />
                     </Col>
                     <Col span={10} style={{ paddingTop: 32 }}>
                        <Chat />
                     </Col>
                     <Col span={7} style={{ paddingTop: 32, paddingLeft: 20 }}>
                        <Tool />
                     </Col>
                  </Row>
                  </div>
               </div>
            )
         }
      </>
   );
}

export default Component;
