import React, { useEffect, useState } from 'react';
import styles from './self.module.css';
import { Col, Row } from 'antd';
import img09 from './img/09.jpg';

interface Props {
   active?: boolean;
   hidding?: boolean;
}

const Component: React.FC<Props> = (props) => {
   const { active, hidding } = props;
   const [isDisplay, setIsDisplay] = useState('');
   const [visisbleAnimation, setVisisbleAnimation] = useState<any>({ opacity: 0.2 });

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
   }, [hidding]);



   return (
      <>
         {!active ?
            (
               <div className={`${styles['section']} ${hidding ? styles['s-hidding'] : ''}`} style={{ display: isDisplay }}>
                  <div className={styles['h-content']}>
                     <Row style={{ padding: 10 }}>
                        <Col span={24} style={{paddingTop: '15%'}}>
                           <img
                              style={{ borderRadius: 100, aspectRatio: '1 / 1', border: 'solid 5px #ffffff' }}
                              width='80%'
                              src={img09} alt=""
                           />
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
