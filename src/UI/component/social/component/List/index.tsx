import { FC, useEffect, useState } from 'react';
import { Col, ModalProps, Row } from 'antd';
import styles from './self.module.css';
import BlurSection from '../../../../common/blur-section';
import { Group } from './component/Group';
import { Friend } from './component/Friend';

interface Props extends ModalProps {
   action?: string;
}

export const List: FC<Props> = (props) => {
   const { action } = props;

   return (
      <Row>
         <Col span={24} style={{paddingRight: 20}}>
            <Row style={{marginBottom: 40}}>
               <Col span={24}>
                  <Group />
               </Col>
            </Row>
            <Row>
               <Col span={24}>
                  <Friend />
               </Col>
            </Row>
         </Col>
      </Row>
   );
};
