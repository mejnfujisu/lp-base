import { FC, useEffect, useState } from 'react';
import { Col, ModalProps, Row } from 'antd';
import BlurSection from '../../common/blur-section';
import { Detail } from './component/Detail';
import { Filter } from './component/Filter';
import { List } from './component/List';
import styles from './self.module.css';

interface Props {
  active?: boolean;
  hidding?: boolean;
}

const Component: React.FC<Props> = (props) => {
  const { active, hidding} = props;
  const [isDisplay, setIsDisplay] = useState('');
  const [visisbleAnimation, setVisisbleAnimation] = useState<any>({opacity: 0.1});

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
    } else setVisisbleAnimation({opacity: 0.2});
  }, [hidding]);


   return (
      <>
      {!active ?
        (
          <div className={`${styles['section']} ${hidding ? styles['s-hidding'] : ''}`} style={{display: isDisplay}}>
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
      {/* {!active ?
        (
          <div id='s-id' className={`${styles['s-section']} ${hidding ? styles['s-hidding'] : ''}`}>
            <div className={styles['content']}></div>
          </div>
        ) :
        (
          <div className={`${styles['s-section']}`}>
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
        )
      } */}
         {/* {!action ? (
            <Row>
                  <Col span={24} style={{ paddingLeft: 55, paddingRight: 30 }}>
                     <BlurSection width='100%' height='100%' padding='15px' radius={'45px'}>
                     </BlurSection>
                  </Col>
               </Row>
         ) : ( */}

         {/* )} */}
      </>
   );
};

// export default Tour;

// import React, { useEffect, useState } from 'react';
// import styles from './self.module.css';

// interface Props {
//   active?: boolean;
//   hidding?: boolean;
// }

// const Component: React.FC<Props> = (props) => {
//   const { active, hidding} = props;
//   const [isDisplay, setIsDisplay] = useState('');
//   const [visisbleAnimation, setVisisbleAnimation] = useState<any>({opacity: 0.2});

//   useEffect(() => {
//     if (hidding) {
//       setTimeout(() => {
//         setIsDisplay('none');
//       }, 2000);
//     } else setIsDisplay('')

//     if (active) {
//       setTimeout(() => {
//         setVisisbleAnimation({
//           transition: 'opacity 2s',
//           opacity: 1,
//         });
//       }, 100);
//     } else setVisisbleAnimation({opacity: 0.2});
//   }, [hidding]);

  
  
//   return (
//     <>
//       {!active ?
//         (
//           <div className={`${styles['section']} ${hidding ? styles['s-hidding'] : ''}`} style={{display: isDisplay}}>
//             <div className={styles['h-content']}></div>
//           </div>
//         ) :
//         (
//           <div className={`${styles['section']} ${styles['s-filled']}`} style={visisbleAnimation}>
//             <div className={styles['s-content']}></div>
//           </div>
//         )
//       }
//     </>
//   );
// }

export default Component;

