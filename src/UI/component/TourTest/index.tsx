import { FC, useEffect, useState } from 'react';
import { Col, ModalProps, Row } from 'antd';
import BlurSection from '../../common/blur-section';
import { Detail } from './component/Detail';
import { Filter } from './component/Filter';
import { List } from './component/List';
import styles from './self.module.css';

interface Props extends ModalProps {
   action?: boolean;
}

export const Tour: FC<Props> = (props) => {
   const { action } = props;

   return (
      <>
         {!action ? (
            <Row>
                  <Col span={24} style={{ paddingLeft: 55, paddingRight: 30 }}>
                     <BlurSection width='100%' height='100%' padding='15px' radius={'45px'}>
                     </BlurSection>
                  </Col>
               </Row>
         ) : (
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
         )}
      </>
   );
};
