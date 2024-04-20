import React, { useEffect, useState } from 'react';
import styles from './self.module.css';
import { Col, Row } from 'antd';
import { HomeSetting } from '../../../element/icons';

interface Props {
   active?: boolean;
   hidding?: boolean;
}

const Component: React.FC<Props> = (props) => {
   const { active, hidding } = props;
   const [isDisplay, setIsDisplay] = useState('');
   const [visisbleAnimation, setVisisbleAnimation] = useState<any>({ opacity: 0 });

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
      } else setVisisbleAnimation({ opacity: 0 });
   }, [hidding, active]);

   return (
      <>
         {!active ?
            (
               <div className={`${styles['section']} ${hidding ? styles['s-hidding'] : ''}`} style={{ display: isDisplay }}>
                  <div className={styles['h-content']}>
                        <Row style={{ padding: 10 }}>
                           <Col span={24}>
                              <HomeSetting width={''} height={''} fill={''} />
                           </Col>
                        </Row>
                  </div>
               </div>
            ) :
            (
               <div className={`${styles['section']} ${styles['s-filled']}`}>
                  <div className={styles['s-content']}>
                        <Row style={{ padding: 10 }}>
                           <Col span={24}>
                              <HomeSetting width={''} height={''} fill={''} />
                           </Col>
                        </Row>
                        <Row style={{ padding: 10 }}>
                           <Col span={24} style={visisbleAnimation}>
                              <HomeSetting width={''} height={''} fill={''} />
                           </Col>
                        </Row>
                        <Row style={{ padding: 10 }}>
                           <Col span={24} style={visisbleAnimation}>
                              <HomeSetting width={''} height={''} fill={''} />
                           </Col>
                        </Row>
                        <Row style={{ padding: 10 }}>
                           <Col span={24} style={visisbleAnimation}>
                              <HomeSetting width={''} height={''} fill={''} />
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
