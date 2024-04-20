import React, { useEffect, useState } from 'react';
import styles from './self.module.css';
import { Badge, Col, Row } from 'antd';
import PopContent from '../../common/pop-content';
import img09 from './img/09.jpg';

interface Props {
   active?: boolean;
   hidding?: boolean;
}

const Component: React.FC<Props> = (props) => {
   const { active, hidding } = props;
   const [isDisplay, setIsDisplay] = useState('');
   const [visisbleAnimation, setVisisbleAnimation] = useState<any>({ opacity: 0.2 });
   const demoList = [1, 2, 3, 4];

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
                              <div style={{ width: '100%', height: 30 }}></div>
                           </Row>
                           <Row>
                              <PopContent
                                 size='large'
                                 content={
                                    <div>
                                       <img
                                          style={{ height: 60, borderRadius: 65, aspectRatio: '1 / 1' }}
                                          src={img09} alt=""
                                       />
                                       <h4>New post from Pablo and other comments, New post from Pablo and other comments, New post from Pablo and other comments, New post from Pablo and other comments, New post from Pablo and other comments</h4>
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
                                       <Badge count={4} color="#faad14">
                                       <img
                                             style={{ borderRadius: 65, aspectRatio: '1 / 1' }}
                                             height='40'
                                             src={img09} alt=""
                                          />
                                       </Badge>
                                       </Row>
                                       <Row className={styles['friend-name']}>
                                          <div style={{ display: 'flex' }}>
                                             <h5 style={{ margin: 0 }}>{'Jenne...'}</h5>
                                          </div>
                                       </Row>
                                    </Col>
                                 )
                              })}
                              <Col span={3}>...</Col>
                           </Row>
                        </Col>
                     </Row>
                  </div>
               </div>
            ) :
            (
               <div className={`${styles['section']} ${styles['s-filled']}`} style={visisbleAnimation}>
                  <div className={styles['s-content']}></div>
               </div>
            )
         }
      </>
   );
}

export default Component;
