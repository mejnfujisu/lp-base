import { FC, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import BlurSection from '../../common/blur-section';
import { Detail } from './component/Detail';
import { Filter } from './component/Filter';
import { List } from './component/List';
import styles from './self.module.css';

interface Props {
   active?: boolean;
   hidding?: boolean;
}

const Component: FC<Props> = (props) => {
   const { active, hidding } = props;
   const [isDisplay, setIsDisplay] = useState('');
   const [visisbleAnimation, setVisisbleAnimation] = useState<any>({ opacity: 0.1 });

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
                  <div className={styles['h-content']}></div>
               </div>
            ) :
            (
               <div className={`${styles['section']} ${styles['s-filled']}`} style={visisbleAnimation}>
                  <div className={styles['s-content']}>
                     <Row>
                        <Col span={24}>
                           <Row style={{ marginBottom: 15 }}>
                              <Col span={15} style={{ paddingLeft: 30 }}>
                                 <Filter />
                              </Col>
                           </Row>

                           <Row style={{ marginBottom: 15 }}>
                              <Col span={15} style={{ paddingLeft: 30 }}>
                                 <BlurSection>
                                    <Detail />
                                 </BlurSection>
                              </Col>
                              <Col span={9} style={{ paddingLeft: 55, paddingRight: 30 }}>
                                 <BlurSection width='100%' height='100%' padding='15px 15px 40px 0px'>
                                    <List />
                                 </BlurSection>
                              </Col>
                           </Row>
                        </Col>
                     </Row>
                  </div>
               </div>
            )
         }
      </>
   );
};

export default Component;
